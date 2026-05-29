'use client';

import dynamic from 'next/dynamic';

const Warport3DViewer = dynamic(() => import('./Warport3DViewer'), {
  ssr: false,
  loading: () => <div className="w-full animate-pulse" style={{ background: 'inherit' }} />,
});

interface Props {
  variant?: 'dark' | 'light';
  height?: number | string;
}

export function Warport3DViewerClient({ variant = 'dark', height = 560 }: Props) {
  const bg = variant === 'light' ? '#ffffff' : '#0d0d0d';
  const h = typeof height === 'string' ? height : height;
  return (
    <div style={{ height: h, background: bg }} className="w-full">
      <Warport3DViewer variant={variant} height={h as number} />
    </div>
  );
}
