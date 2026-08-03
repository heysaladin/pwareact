import Link from 'next/link';

export default function CeerPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] flex flex-col items-center justify-between py-16 px-6">

      {/* Logo */}
      <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full">
        <svg width="100" height="14" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-[240px] text-white"><g clipPath="url(#clip0_3493_306)"><path d="M48.4003 14H25.6232L28.4698 11.1994H45.5529L48.4003 14Z" fill="currentColor"/><path d="M99.6471 5.5997L96.7994 8.4003H26.8022L21.1079 14H2.84656L0 11.1994V6.98782L2.84656 9.78729V11.1994H19.9293L25.6232 5.5997H99.6471Z" fill="currentColor"/><path d="M22.7759 0L19.9293 2.79948H2.84656V6.99756L0 4.19809V2.79948L2.84656 0H22.7759Z" fill="currentColor"/><path d="M48.4003 0L45.5529 2.79948H25.6232V0H48.4003Z" fill="currentColor"/><path d="M74.0235 0L71.1761 2.79948H54.0941V5.5997H51.2468V0H74.0235Z" fill="currentColor"/><path d="M79.7173 8.4003H76.87V14H79.7173V8.4003Z" fill="currentColor"/><path d="M74.0235 14H51.2468V8.4003H54.0941V11.1994H71.1761L74.0235 14Z" fill="currentColor"/><path d="M99.6471 2.79948V5.5997H96.7994V2.79948H79.7177V5.5997H76.87V0H96.7994L99.6471 2.79948Z" fill="currentColor"/><path d="M99.6471 14H95.6208L89.9269 8.4003H93.9539L99.6471 14Z" fill="currentColor"/></g><defs><clipPath id="clip0_3493_306"><rect width="99.6471" height="14" fill="white"/></clipPath></defs></svg>

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
        href="/ceer-tamawal/00-explore-financing"
        className="w-full max-w-[480px] bg-white text-[#0C0C0C] text-[15px] font-semibold tracking-wide py-4 rounded-full text-center"
      >
        Continue
      </Link>

    </div>
  );
}
