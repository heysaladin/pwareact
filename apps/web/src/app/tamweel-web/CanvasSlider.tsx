'use client';

import { useRef, useEffect, useCallback } from 'react';

const TOTAL_WIDTH = 7000;
const BAR_STRIDE = 5; // 5px visual stride (bar + gap)

function barHeight(i: number) {
  if (i % 10 === 0) return 28; // major tick every 50px visual
  if (i % 5 === 0) return 18;  // mid tick every 25px visual
  return 10;                    // minor tick
}

interface Props {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}

export default function CanvasSlider({ value, min, max, step, onChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startVal: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const n = Math.ceil(TOTAL_WIDTH / BAR_STRIDE);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < n; i++) {
      const h = barHeight(i) * 2;
      const x = i * BAR_STRIDE * 2;
      const y = (72 - h) / 2;
      ctx.fillStyle = i % 10 === 0 ? '#94A3B8' : '#CBD5E1';
      ctx.fillRect(x, y, 2, h);
    }
  }, []);

  const getTranslateX = useCallback((val: number) => {
    const w = containerRef.current?.clientWidth ?? 300;
    const progress = (val - min) / (max - min);
    return -(progress * TOTAL_WIDTH - w / 2);
  }, [min, max]);

  const clamp = useCallback((val: number) => {
    const stepped = Math.round(val / step) * step;
    return Math.max(min, Math.min(max, stepped));
  }, [min, max, step]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    dragRef.current = { active: true, startX: e.clientX, startVal: value };
    document.body.style.cursor = 'grabbing';
    e.preventDefault();
  }, [value]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    dragRef.current = { active: true, startX: e.touches[0].clientX, startVal: value };
  }, [value]);

  useEffect(() => {
    const pxPerUnit = TOTAL_WIDTH / (max - min);

    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.active) return;
      const delta = -(e.clientX - dragRef.current.startX) / pxPerUnit;
      onChange(clamp(dragRef.current.startVal + delta));
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragRef.current.active) return;
      const delta = -(e.touches[0].clientX - dragRef.current.startX) / pxPerUnit;
      onChange(clamp(dragRef.current.startVal + delta));
    };
    const onEnd = () => {
      dragRef.current.active = false;
      document.body.style.cursor = '';
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [min, max, clamp, onChange]);

  return (
    <div
      ref={containerRef}
      className="flex-1 relative h-[36px] overflow-hidden cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <canvas
        ref={canvasRef}
        width={TOTAL_WIDTH * 2}
        height={72}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: TOTAL_WIDTH,
          height: 36,
          imageRendering: 'pixelated',
          transform: `translateX(${getTranslateX(value)}px)`,
        }}
      />
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[28px] bg-[#2563EB] rounded-[2px] pointer-events-none z-[2]"
        style={{ left: '50%' }}
      />
    </div>
  );
}
