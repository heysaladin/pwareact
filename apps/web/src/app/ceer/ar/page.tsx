import Link from 'next/link';

const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };

export default function CeerArIndexPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-[16px]" style={{ backgroundColor: '#cfcfcf' }}>
      <div className="flex flex-col items-center gap-[32px] max-w-[480px] w-full text-center">
        <img alt="CEER" className="h-[20px] w-auto" src="/taas/ceer-logo.svg" />
        <p className="text-[32px] leading-[36px] uppercase text-[#1d2d33]" style={oxanium}>
          EXOBOT SUV
        </p>
        <p className="text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={almarai}>
          احصل على تمويل سيارتك الكهربائية CEER — تمويل فوري، شروط مرنة.
        </p>
        <Link
          href="/ceer/ar/00-explore-financing"
          className="border-2 border-[rgba(255,255,255,0.12)] flex items-center justify-center px-[32px] py-[14px] rounded-[8px] relative overflow-hidden w-full"
        >
          <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
          <p className="relative text-[14px] leading-[20px] text-white uppercase" style={oxanium}>
            ابدأ الآن
          </p>
        </Link>
      </div>
    </div>
  );
}
