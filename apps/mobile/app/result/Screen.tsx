'use client';

import { useSearchParams } from 'next/navigation';

const content = {
  en: {
    title: 'You're pre-approved!',
    subtitle: 'Your financing application has been reviewed and you qualify for the offer.',
    cta: 'View Offer',
    dir: 'ltr' as const,
  },
  ar: {
    title: 'تمت الموافقة المبدئية!',
    subtitle: 'تمت مراجعة طلب التمويل الخاص بك وأنت مؤهل للعرض.',
    cta: 'عرض العرض',
    dir: 'rtl' as const,
  },
};

export function Screen({ mobile }: { mobile: boolean }) {
  const params = useSearchParams();
  const lang = params.get('lang') === 'ar' ? 'ar' : 'en';
  const { title, subtitle, cta, dir } = content[lang];

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
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop-in {
          0%   { opacity: 0; transform: scale(0.7); }
          65%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .anim-illus { animation: pop-in 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s both; }
        .anim-title { animation: fade-up 0.4s ease-out 0.55s both; }
        .anim-sub   { animation: fade-up 0.4s ease-out 0.7s both; }
        .anim-cta   { animation: fade-up 0.4s ease-out 0.85s both; }
      `}</style>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
        <div className="anim-illus">
          <img
            src="/result/Illustration.svg"
            alt=""
            width={160}
            height={148}
            style={{ display: 'block' }}
          />
        </div>

        <div className="flex flex-col gap-3 items-center text-center w-full">
          <p className="anim-title text-[23.5px] font-semibold leading-[30px] text-[#121a26]">
            {title}
          </p>
          <p className="anim-sub text-[13.5px] font-medium leading-[18px] tracking-[0.4px] text-[#697586] max-w-[240px]">
            {subtitle}
          </p>
        </div>

        <button
          className="anim-cta w-full h-[52px] rounded-2xl text-[15px] font-semibold text-white flex items-center justify-center"
          style={{ background: '#0063F5' }}
        >
          {cta}
        </button>
      </div>

      {/* Bottom home bar */}
      <div className="h-[34px] relative shrink-0">
        <div className="absolute bottom-2 left-[32%] right-[32%] h-[5px] bg-black rounded-full" />
      </div>
    </div>
  );
}
