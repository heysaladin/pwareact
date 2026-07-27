import Link from 'next/link';

export default function CeerPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] flex flex-col items-center justify-between py-16 px-6">

      {/* Logo */}
      <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full">
        <span className="text-[64px] font-bold tracking-[0.2em] text-white font-ceer leading-none">
          CEER
        </span>

        {/* Car image */}
        <div className="w-full max-w-[480px]">
          <img
            src="/ceer-car-00.png"
            alt="Ceer Electric Vehicle"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/ceer/review-finance"
        className="w-full max-w-[480px] bg-white text-[#0C0C0C] text-[15px] font-semibold tracking-wide py-4 rounded-full text-center"
      >
        Continue
      </Link>

    </div>
  );
}
