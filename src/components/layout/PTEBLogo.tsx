export function PTEBLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 180"
      className={className}
      aria-hidden="true"
     
    >
      {/* "TUNED BY" text */}
      <text
        x="200"
        y="45"
        fontSize="24"
        fontWeight="400"
        textAnchor="middle"
        fill="#9CA3AF"
        letterSpacing="3"
      >
        TUNED BY
      </text>

      {/* "PTEB" large stylized text with gradient */}
      <defs>
        <linearGradient id="ptebGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FC222D" />
          <stop offset="50%" stopColor="#FF4444" />
          <stop offset="100%" stopColor="#FC222D" />
        </linearGradient>
        <filter id="ptebShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* PTEB text */}
      <text
        x="200"
        y="135"
        fontSize="96"
        fontWeight="900"
        textAnchor="middle"
        fill="url(#ptebGrad)"
        letterSpacing="-2"
        filter="url(#ptebShadow)"
        style={{ textShadow: "0 0 20px rgba(252, 34, 45, 0.4)" }}
      >
        PTEB
      </text>

      {/* Bottom underline accent */}
      <line
        x1="80"
        y1="155"
        x2="320"
        y2="155"
        stroke="rgba(252, 34, 45, 0.5)"
        strokeWidth="2"
      />
    </svg>
  );
}
