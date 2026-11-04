import Link from 'next/link';

export default function TaasTopBar({ lang = 'EN' }: { lang?: 'EN' | 'AR' }) {
  const isAR = lang === 'AR';

  return (
    <div className="flex items-center justify-between w-full shrink-0">
      {/* Tamawal logo */}
      <div className="flex items-center shrink-0">
        <div className="inline-grid leading-[0] place-items-start" style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
          <div className="col-start-1 row-start-1" style={{ height: '31.938px', width: '31.939px' }}>
            <img alt="" className="block w-full h-full" src="/taas/tamawal-logo-mark.svg" />
          </div>
          <div className="col-start-1 row-start-1" style={{ marginLeft: '36.35px', height: '32px', width: '74.218px' }}>
            <img alt="" className="block w-full h-full" src="/taas/tamawal-logo-text.svg" />
          </div>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex gap-[16px] items-center shrink-0">
        <div className="flex gap-[6px] items-center shrink-0">
          <img alt="" className="size-[16px]" src="/taas/icon-help.svg" />
          <p
            className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap"
            style={isAR
              ? { fontFamily: "'Almarai', sans-serif" }
              : { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' }
            }
          >
            {isAR ? 'تحتاج مساعدة؟' : 'Need help?'}
          </p>
        </div>
        <div className="bg-[#f4f5f3] flex gap-[2px] items-center p-[3px] rounded-[999px] shrink-0">
          <Link
            href={lang === 'EN' ? '#' : '/ceer'}
            className={`flex items-center px-[14px] py-[6px] rounded-[999px] shrink-0 ${lang === 'EN' ? 'bg-white shadow-[0px_1px_1.5px_rgba(15,23,41,0.1)]' : ''}`}
          >
            <p className="text-[12px] leading-[16px] text-[#1d2d33] text-center whitespace-nowrap" style={{ fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' }}>
              EN
            </p>
          </Link>
          <Link
            href={lang === 'AR' ? '#' : '/ceer/ar'}
            className={`flex items-center px-[14px] py-[6px] rounded-[999px] shrink-0 ${lang === 'AR' ? 'bg-white shadow-[0px_1px_1.5px_rgba(15,23,41,0.1)]' : ''}`}
          >
            <p className="text-[12px] leading-[16px] text-[#1d2d33] text-center whitespace-nowrap" style={{ fontFamily: "'Almarai', sans-serif" }} dir="auto">
              عربي
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
