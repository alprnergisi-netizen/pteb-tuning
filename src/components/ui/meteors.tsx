import React from 'react';

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className = '',
}: MeteorsProps) => {
  const meteors = Array.from({ length: number });

  return (
    <>
      <style>{`
        @keyframes meteor {
          0% {
            transform: translate(0, 0) rotate(${angle}deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(-${Math.tan((angle * Math.PI) / 180)} * 100vh), 100vh) rotate(${angle}deg);
            opacity: 0;
          }
        }
      `}</style>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={`absolute left-1/2 top-1/2 h-0.5 w-0.5 rounded-full bg-white shadow-lg shadow-white ${className}`}
          style={{
            animation: `meteor ${minDuration + Math.random() * (maxDuration - minDuration)}s linear ${minDelay + Math.random() * (maxDelay - minDelay)}s infinite`,
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.5,
          }}
        />
      ))}
    </>
  );
};
