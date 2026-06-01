'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  imageSrc: string;
  qrCodeSrc: string;
  name: string;
  role: string;
  skills: string[];
}
const Lanyard = ({ imageSrc, name, qrCodeSrc, skills, role }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [swinging, setSwinging] = useState(true);
  const [grabbed, setGrabbed] = useState(false);
  const animFrameRef = useRef<number | null>(null);
  const swingAngle = useRef(0);
  const swingDir = useRef(1);

  useEffect(() => {
    if (!swinging) return;
    const tick = () => {
      swingAngle.current += 0.012 * swingDir.current;
      if (Math.abs(swingAngle.current) > 0.18) swingDir.current *= -1;
      if (cardRef.current) {
        cardRef.current.style.transform = `rotate(${swingAngle.current}rad)`;
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current !== null)
        cancelAnimationFrame(animFrameRef.current);
    };
  }, [swinging]);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * 12, y: -dx * 12 });
  };

  const handleMouseEnter = () => {
    setSwinging(false);
    if (animFrameRef.current !== null)
      cancelAnimationFrame(animFrameRef.current);
    if (cardRef.current) cardRef.current.style.transform = 'rotate(0rad)';
    setGrabbed(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGrabbed(false);
    setSwinging(true);
  };

  return (
    <div className="relative flex flex-col items-center select-none isolate">
      <svg
        width="200"
        height="90"
        viewBox="0 0 200 90"
        className="relative z-10 -mb-1"
        style={{ filter: 'drop-shadow(0 2px 6px rgba(125,68,168,0.3))' }}
      >
        <path
          d="M100 0 C 70 30, 40 50, 35 88"
          stroke="#7d44a8"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M100 0 C 130 30, 160 50, 165 88"
          stroke="#7d44a8"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="90" y="76" width="20" height="14" rx="3" fill="#b085d4" />
        <rect x="94" y="80" width="12" height="6" rx="2" fill="#7d44a8" />
      </svg>

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative z-20 cursor-grab active:cursor-grabbing"
        style={{
          transition: grabbed ? 'transform 0.05s' : 'transform 0.6s ease',
          transformStyle: 'preserve-3d',
          perspective: '600px',
        }}
      >
        <div
          style={{
            transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.12s ease',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className={cn(
              'relative w-full max-w-95 rounded-2xl overflow-hidden shadow-a-base',
              'bg-[linear-gradient(135deg,#1a002a_0%,#060010_60%,#2a0045_100%)]'
            )}
          >
            <div className="h-10 w-full flex items-center justify-between px-4 bg-[linear-gradient(to_right,#7d44a8,#b565e5,#7d44a8)]">
              <span className="text-white font-semibold text-[11px] tracking-[0.18em] uppercase">
                TonniPaul.com
              </span>
              <span className="text-white/65 text-[9px] font-mono tracking-[0.15em] uppercase mt-1">
                Digital Identity Card
              </span>
            </div>

            <div className="flex flex-col items-center pt-6 pb-4 px-5 z-1">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 relative">
                <Image
                  src={imageSrc}
                  alt={name}
                  className="w-full h-full object-cover"
                  fill
                  sizes="100%"
                />

                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
              </div>

              <p
                className={cn(
                  'text-white text-a-12 font-bold text-lg tracking-tight leading-tight text-center'
                )}
              >
                {name}
              </p>
              <p className="text-primary-700  text-a-10 font-semibold mt-0.5">
                {role}
              </p>

              <div className="w-full h-px my-4 opacity-55 bg-[linear-gradient(to_right,#7d44a8,#b565e5,#7d44a8)]" />

              <div className="flex flex-wrap gap-1.5 justify-center">
                {skills.map((t) => (
                  <span
                    key={t}
                    className="text-primary-700 text-a-10 font-mono px-2 py-0.5 rounded-full bg-white/10 border border-[rgba(192,132,252,0.4)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 mb-1 relative">
                <div className="w-14 h-14 relative rounded-lg p-1 bg-[rgba(255,255,255,0.05)] border border-primary/10">
                  <Image
                    src={qrCodeSrc}
                    alt="QR Code"
                    className="w-full h-full object-cover"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>

              <p className="text-primary text-a-10 font-semibold mt-1 tracking-widest">
                SCAN TO CONNECT
              </p>
            </div>

            <div
              className="h-3 w-full opacity-70 bg-[linear-gradient(90deg,#7d44a8,#e040fb,#be1293,#7d44a8,#e040fb)] bg-size-[300%_100%] animate-shimmer"
              style={{ animation: 'shimmer 3s linear infinite' }}
            />

            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
          </div>
        </div>
      </div>

      <div className="w-48 h-4 rounded-full mt-3 bg-[radial-gradient(ellipse,rgba(125,68,168,0.35)_0%,transparent_70%)]" />
    </div>
  );
};

export default Lanyard;
