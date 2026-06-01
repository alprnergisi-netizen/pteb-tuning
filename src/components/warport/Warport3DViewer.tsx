'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

interface ThreeCtx {
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  camera: THREE.PerspectiveCamera;
  defaultView: { target: THREE.Vector3; camera: THREE.Vector3 };
}

interface Props {
  /** 'dark' (default) uses site dark bg; 'light' uses white bg */
  variant?: 'dark' | 'light';
  height?: number | string;
}

export default function Warport3DViewer({ variant = 'dark', height = 560 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<ThreeCtx | null>(null);
  const rafRef = useRef<number>(0);
  const [status, setStatus] = useState('Loading model...');
  const [rotating, setRotating] = useState(true);
  const [visible, setVisible] = useState(false);

  // Only initialise Three.js once the container is scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const isLight = variant === 'light';

  const resetView = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.camera.position.copy(ctx.defaultView.camera);
    ctx.controls.target.copy(ctx.defaultView.target);
    ctx.controls.update();
  }, []);

  const toggleRotate = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.controls.autoRotate = !ctx.controls.autoRotate;
    setRotating(ctx.controls.autoRotate);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    RectAreaLightUniformsLib.init();

    const W = container.clientWidth;
    const H = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isLight ? 0xf4f1ea : 0x0d0d0d);

    const camera = new THREE.PerspectiveCamera(45, W / H, 0.01, 1000);
    camera.position.set(3, 2, 4);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.screenSpacePanning = true;
    controls.minDistance = 0.2;
    controls.maxDistance = 60;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.6;

    // Lighting — identical to the standalone viewer
    scene.add(new THREE.AmbientLight(0xffffff, 3.1));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8795a1, 1.6));

    const frontSoftbox = new THREE.RectAreaLight(0xffffff, 2.5, 5, 4);
    frontSoftbox.position.set(0, 2.2, 5.5);
    frontSoftbox.lookAt(0, 0, 0);
    scene.add(frontSoftbox);

    const cameraSoftbox = new THREE.RectAreaLight(0xffffff, 2.8, 4, 3);
    cameraSoftbox.position.set(-1.8, 1.25, -1.2);
    camera.add(cameraSoftbox);

    const cameraFill = new THREE.RectAreaLight(0xffffff, 2.2, 4, 3);
    cameraFill.position.set(1.8, 0.9, -1.4);
    camera.add(cameraFill);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.35);
    keyLight.position.set(3.5, 4.5, 5.5);
    scene.add(keyLight);

    const pointFill = new THREE.PointLight(0xffffff, 0.9, 20, 1.1);
    camera.add(pointFill);

    const rimLight = new THREE.DirectionalLight(0xd8ecff, 0.8);
    rimLight.position.set(-4, 2.5, -3);
    scene.add(rimLight);

    // Floor — warm neutral for light, dark for dark theme
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(3.2, 96),
      new THREE.MeshStandardMaterial({
        color: isLight ? 0xd9d1c4 : 0x1a1a1a,
        roughness: 0.82,
        metalness: 0.02,
      }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.02;
    scene.add(floor);

    const defaultView = {
      target: new THREE.Vector3(0, 0, 0),
      camera: new THREE.Vector3(3, 2, 4),
    };
    ctxRef.current = { renderer, controls, camera, defaultView };

    // Load red-logo model (meshopt-compressed — decoder required)
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(
      '/models/warport.glb',
      (gltf) => {
        const root = gltf.scene;
        scene.add(root);

        const box = new THREE.Box3().setFromObject(root);
        const center = box.getCenter(new THREE.Vector3());
        root.position.sub(center);

        const nb = new THREE.Box3().setFromObject(root);
        const ns = nb.getSize(new THREE.Vector3());
        const nc = nb.getCenter(new THREE.Vector3());
        const maxDim = Math.max(ns.x, ns.y, ns.z);

        const dist = maxDim / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
        const cd = dist * 1.45;
        const cp = new THREE.Vector3(cd, cd * 0.55, cd * 0.9);

        floor.scale.setScalar(Math.max(maxDim * 0.55, 1));
        floor.position.y = nb.min.y - maxDim * 0.015;

        defaultView.target.copy(nc);
        defaultView.camera.copy(cp);
        controls.target.copy(nc);
        camera.position.copy(cp);
        camera.near = Math.max(maxDim / 1000, 0.01);
        camera.far = Math.max(maxDim * 100, 100);
        camera.updateProjectionMatrix();
        controls.update();

        let tris = 0;
        root.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (!mesh.isMesh || !mesh.geometry) return;
          tris += mesh.geometry.index
            ? mesh.geometry.index.count / 3
            : (mesh.geometry.getAttribute('position')?.count ?? 0) / 3;
        });
        setStatus(`${Math.round(tris).toLocaleString()} triangles`);
      },
      (ev) => {
        const pct = ev.total ? Math.round((ev.loaded / ev.total) * 100) : null;
        setStatus(pct !== null ? `Loading ${pct}%` : 'Loading...');
      },
      () => setStatus('Failed to load'),
    );

    // Resize
    const ro = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    ro.observe(container);

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // Button styles per variant
  const btnBase = 'h-9 px-4 text-xs font-bold uppercase tracking-wider transition-colors backdrop-blur-sm';
  const btnStyle = isLight
    ? `${btnBase} border border-black/20 bg-white/80 text-[#374151] hover:bg-white hover:border-black/40`
    : `${btnBase} border border-[#2a2a2a] bg-black/70 text-[#9CA3AF] hover:text-white hover:border-[#444]`;

  const hintColor = isLight ? 'text-[#9CA3AF]' : 'text-[#4B5563]';
  const statusColor = isLight ? 'text-[#9CA3AF]' : 'text-[#4B5563]';

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden" style={typeof height === 'number' ? { height } : { height }}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ touchAction: 'none', cursor: 'grab' }}
      />

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 pointer-events-auto">
        <button onClick={resetView} className={btnStyle}>
          Reset
        </button>
        <button
          onClick={toggleRotate}
          aria-pressed={rotating}
          className={btnStyle}
          style={{ color: rotating ? '#FC222D' : undefined }}
        >
          {rotating ? 'Stop' : 'Rotate'}
        </button>
      </div>

      {/* Status — only show loading/error, not triangle count */}
      {status !== '' && !status.includes('triangles') && (
        <div className={`absolute bottom-4 left-4 text-[11px] pointer-events-none select-none ${statusColor}`}>
          {status}
        </div>
      )}

      {/* Drag hint */}
      <div className={`absolute top-4 left-1/2 -translate-x-1/2 text-[11px] pointer-events-none select-none tracking-wider uppercase ${hintColor}`}>
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}
