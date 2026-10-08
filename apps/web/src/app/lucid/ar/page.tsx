import Link from 'next/link';

export default function CeerArPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] flex flex-col items-center justify-between py-16 px-6">
      <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full">
        <img src="/lucid-logo.png" alt="Lucid" className="w-[320px] h-auto object-contain mix-blend-screen" />
        <div className="w-full max-w-[480px]">
          <img src="/lucid-car.webp" alt="لوسيد إير" className="w-full h-auto object-contain" />
        </div>
      </div>
      <Link href="/lucid/ar/00-explore-financing" className="w-full max-w-[480px] bg-white text-[#0C0C0C] text-[15px] font-semibold tracking-wide py-4 rounded-full text-center">
        متابعة
      </Link>
    </div>
  );
}
