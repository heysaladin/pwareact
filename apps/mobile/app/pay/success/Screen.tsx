'use client';

import { useSearchParams } from 'next/navigation';

const imgStatusBar = "/pay/status-bar.svg";

const CIRCLE_R = 52;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R;

const content = {
  en: {
    title: 'Payment successful',
    subtitle: 'Your payment has been processed successfully.',
    dir: 'ltr' as const,
  },
  ar: {
    title: 'تم الدفع بنجاح',
    subtitle: 'يجب عليك إكمال التسجيل وتسجيل الدخول لتكون مؤهلاً لهذا العرض.',
    dir: 'rtl' as const,
  },
};

export function Screen({ mobile }: { mobile: boolean }) {
  const params = useSearchParams();
  const lang = params.get('lang') === 'ar' ? 'ar' : 'en';
  const { title, subtitle, dir } = content[lang];

  return (
    <div
      className="relative bg-white flex flex-col"
      style={{
        width: mobile ? '100%' : '375px',
        height: mobile ? '100svh' : '812px',
        overflow: 'hidden',
      }}
      dir={dir}
    >
      <style>{`
        @keyframes circle-draw {
          from { stroke-dashoffset: ${CIRCLE_CIRCUMFERENCE}; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes check-draw {
          from { stroke-dashoffset: 80; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes icon-pop {
          0%   { opacity: 0; transform: scale(0.6); }
          60%  { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        .anim-icon   { animation: icon-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both; }
        .anim-circle { stroke-dasharray: ${CIRCLE_CIRCUMFERENCE}; animation: circle-draw 0.6s ease-out 0.15s both; }
        .anim-check  { stroke-dasharray: 80; animation: check-draw 0.35s ease-out 0.65s both; }
        .anim-title  { animation: fade-up 0.4s ease-out 0.75s both; }
        .anim-sub    { animation: fade-up 0.4s ease-out 0.9s both; }
      `}</style>

      {/* Status bar */}
      {!mobile && (
        <div className="h-[38px] w-full overflow-clip relative shrink-0">
          <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgStatusBar} />
        </div>
      )}

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
        {/* Animated checkmark */}
        <div className="anim-icon">
          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              className="anim-circle"
              cx="64" cy="64" r={CIRCLE_R}
              stroke="#22c55e"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              transform="rotate(-90 64 64)"
            />
            <polyline
              className="anim-check"
              points="40,66 56,82 88,48"
              stroke="#22c55e"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <p className="anim-title text-[23.5px] font-semibold leading-[30px] text-[#121a26]">
            {title}
          </p>
          <p className="anim-sub text-[13.5px] font-medium leading-[18px] tracking-[0.4px] text-[#697586] max-w-[240px]">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Bottom home bar */}
      <div className="h-[34px] relative shrink-0">
        <div className="absolute bottom-2 left-[32%] right-[32%] h-[5px] bg-black rounded-full" />
      </div>
    </div>
  );
}
