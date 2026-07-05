'use client';

// ── Asset constants ───────────────────────────────────────────────────────────
const imgLogo        = "/logo-tamawal-web.svg";
const imgNavArrow    = "http://localhost:3845/assets/4c4ae62485902829fc9e816c9e3b6272289709e3.svg";
const imgPhoneImg    = "/mockup.png";
const imgAppStore    = "http://localhost:3845/assets/d546918b9349f2d2f6f0c33b97fe51ad05199e4c.svg";
const imgGooglePlay  = "http://localhost:3845/assets/74a1f08e8001561fb28ceb1da93da2a164455551.svg";

// ── Footer ───────────────────────────────────────────────────────────────────
const imgFooterBadge  = "/badge-small.svg";
const imgArrowNext    = "http://localhost:3845/assets/81d50a7431408fc46e51730d5aa34428f1b83b28.svg";
const imgEmailIcon    = "http://localhost:3845/assets/7f2ee257638afd72a51f249195d3f921e359d8f3.svg";
const imgPhoneIcon    = "http://localhost:3845/assets/bb37c2c33523f4a34c420e251c2f11c79a1149a5.svg";
const imgLocationIcon = "/pinlocation.svg";
const imgLinkedIn     = "http://localhost:3845/assets/cb3a7fab272340302ba86f6a820b28b780a29371.svg";
const imgTwitterX     = "http://localhost:3845/assets/ad2931524412784cfe16d2c27d020156912b9fcb.svg";

// ── Mock loan data ────────────────────────────────────────────────────────────
const loans = [
  { bank: 'Alinma Bank',   logo: '/logos/alinma.png',  type: 'Personal Loan',          rate: 2.1, amount: 120000, months: 60,  rating: 4.5 },
  { bank: 'Al Rajhi Bank', logo: '/logos/rasheed.png', type: 'Car Financing',           rate: 2.5, amount: 85000,  months: 48,  rating: 4.2 },
  { bank: 'ANB',           logo: '/logos/anb.png',     type: 'Real Estate Financing',   rate: 1.8, amount: 500000, months: 120, rating: 4.7 },
  { bank: 'Nayifat',       logo: '/logos/nayifat.png', type: 'Personal Loan',           rate: 3.2, amount: 50000,  months: 36,  rating: 3.9 },
  { bank: 'Taajeer',       logo: '/logos/taajeer.png', type: 'Car Financing',           rate: 2.8, amount: 95000,  months: 60,  rating: 4.0 },
  { bank: 'Badaya',        logo: '/logos/badaya.png',  type: 'Business Loan',           rate: 3.5, amount: 300000, months: 84,  rating: 4.1 },
  { bank: 'Alyusr',        logo: '/logos/alyusr.png',  type: 'Home Renovation',         rate: 2.2, amount: 150000, months: 72,  rating: 4.3 },
  { bank: 'Kuwara',        logo: '/logos/kuwara.png',  type: 'Personal Loan',           rate: 2.9, amount: 75000,  months: 48,  rating: 4.0 },
];

// ── Star rating helper ────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half   = !filled && rating >= star - 0.5;
        return (
          <svg key={star} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${star}`} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="50%" stopColor="#FDD849" />
                    <stop offset="50%" stopColor="#E4E7EC" />
                  </linearGradient>
                </defs>
                <path d="M8 1.33L9.83 5.05L14 5.68L11 8.6L11.66 12.76L8 10.83L4.34 12.76L5 8.6L2 5.68L6.17 5.05L8 1.33Z"
                  fill={`url(#half-${star})`} />
              </>
            ) : (
              <path d="M8 1.33L9.83 5.05L14 5.68L11 8.6L11.66 12.76L8 10.83L4.34 12.76L5 8.6L2 5.68L6.17 5.05L8 1.33Z"
                fill={filled ? "#FDD849" : "#E4E7EC"} />
            )}
          </svg>
        );
      })}
      <span className="text-[14px] font-medium text-[#101828] ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

// ── Loan Card ─────────────────────────────────────────────────────────────────
function LoanCard({ loan }: { loan: typeof loans[number] }) {
  return (
    <div className="border border-[#EAECF0] rounded-[16px] bg-white mb-4 px-6 py-5">

      {/* Row 1 — Bank + Rate */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={loan.logo}
            alt={loan.bank}
            className="w-12 h-12 rounded-lg object-contain border border-[#EAECF0] p-1"
          />
          <div className="flex flex-col">
            <span className="text-[16px] font-bold text-[#101828]">{loan.bank}</span>
            <span className="text-[14px] text-[#667085]">{loan.type}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[32px] font-bold text-[#0063F5]">{loan.rate}%</span>
          <span className="text-[12px] text-[#9AA4B2]">Annual rate</span>
        </div>
      </div>

      <div className="border-t border-[#EAECF0] my-4" />

      {/* Row 2 — Amount + Months */}
      <div className="flex items-start gap-12">
        <div className="flex flex-col">
          <span className="text-[12px] text-[#9AA4B2]">Loan Amount</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[14px] text-[#9AA4B2]">SAR</span>
            <span className="text-[24px] font-bold text-[#101828]">{loan.amount.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] text-[#9AA4B2]">Tenure</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[24px] font-bold text-[#101828]">{loan.months}</span>
            <span className="text-[16px] text-[#9AA4B2]">months</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#EAECF0] my-4" />

      {/* Row 3 — Rating + Select button */}
      <div className="flex items-center justify-between">
        <StarRating rating={loan.rating} />
        <button className="bg-[#0063F5] text-white rounded-[8px] px-6 py-2 text-[14px] font-semibold">
          Select
        </button>
      </div>

      <div className="border-t border-[#EAECF0] my-4" />

      {/* Row 4 — Compare + Save */}
      <div className="flex items-center gap-6">
        <button className="text-[#475467] text-[14px] flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="5" width="10" height="12" rx="2" stroke="#475467" strokeWidth="1.5" />
            <rect x="6" y="1" width="10" height="12" rx="2" stroke="#475467" strokeWidth="1.5" fill="white" />
          </svg>
          Compare
        </button>
        <button className="text-[#475467] text-[14px] flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 15.5C9 15.5 1.5 11 1.5 5.5C1.5 3.29 3.29 1.5 5.5 1.5C6.89 1.5 8.12 2.2 9 3.27C9.88 2.2 11.11 1.5 12.5 1.5C14.71 1.5 16.5 3.29 16.5 5.5C16.5 11 9 15.5 9 15.5Z"
              stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Save
        </button>
      </div>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ResultsPage() {
  return (
    <div className="min-w-[1440px] bg-[#f9f8fd]">

      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-[#021945]">
        <div className="max-w-[1440px] mx-auto px-[75px]">
          <div className="flex items-center justify-between h-[45px] py-[25px]">
            {/* Logo + nav */}
            <div className="flex items-center gap-[56px]">
              <div className="flex items-center">
                <img src={imgLogo} alt="Tamawal" className="h-[33px] w-auto" />
              </div>
              <nav className="flex items-center gap-[40px]">
                <a href="#" className="text-white text-[16px] font-medium">App</a>
                <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Tamawal</a>
                <div className="flex items-center gap-1">
                  <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Services</a>
                  <div className="w-[12px] h-[12px] ml-1 rotate-180">
                    <img src={imgNavArrow} alt="" className="w-full h-full" />
                  </div>
                </div>
                <a href="#" className="text-[#98A2B3] text-[16px] font-medium">About us</a>
                <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Contact us</a>
              </nav>
            </div>
            {/* Right */}
            <div className="flex items-center gap-8">
              <div className="w-[104px] h-[45px]" />
              <div className="border border-[#344054] rounded-full w-[44px] h-[44px] flex items-center justify-center">
                <span className="text-[#98A2B3] text-[13px] font-medium">عربي</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-[75px]">

          {/* Header row */}
          <div className="pt-10 pb-6 flex items-start justify-between gap-6">
            <div className="flex flex-col gap-2 flex-1">
              <h1 className="text-[32px] font-bold text-[#101828]">Search results</h1>
              <p className="text-[14px] text-[#667085] max-w-[680px]">
                This will result in a less accurate product, but not necessarily eligible for you. You need to be logged in for get much more accurate results!
              </p>
            </div>
            {/* Sort button */}
            <button className="border border-[#EAECF0] rounded-[8px] px-4 py-2 flex items-center gap-2 bg-white flex-shrink-0">
              <span className="text-[14px] text-[#344054] font-medium">Sort</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4H14" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 8H12" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 12H10" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Loan cards */}
          <div className="pb-6">
            {loans.map((loan, i) => (
              <LoanCard key={i} loan={loan} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-[#f9f8fd] rounded-[32px] my-12 p-12 flex items-center justify-between gap-12">
            {/* Phone mockup */}
            <div className="flex-shrink-0">
              <img src={imgPhoneImg} alt="Tamawal App" className="h-[300px] w-auto object-contain" />
            </div>
            {/* Right content */}
            <div className="flex flex-col gap-5 flex-1">
              <h2 className="text-[28px] font-bold text-[#101828]">Tamawal App Download</h2>
              <p className="text-[16px] text-[#667085]">
                Saudi's best comparisons for on the go — now even easier to compare, switch and save.
              </p>
              {/* Stars rating */}
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-bold text-[#101828]">4.75</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.33L9.83 5.05L14 5.68L11 8.6L11.66 12.76L8 10.83L4.34 12.76L5 8.6L2 5.68L6.17 5.05L8 1.33Z"
                        fill={star <= 4 ? "#FDD849" : "#E4E7EC"} />
                    </svg>
                  ))}
                </div>
              </div>
              {/* App store buttons */}
              <div className="flex gap-3">
                <div className="border border-[#16448F] rounded-[6px] w-[128px] h-[40px] overflow-hidden">
                  <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                </div>
                <div className="border border-[#16448F] rounded-[6px] w-[128px] h-[40px] overflow-hidden">
                  <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#0063F5]">
        <div className="max-w-[1440px] mx-auto px-[75px] pt-[90px] flex flex-col gap-[48px]">
        <div className="flex items-start justify-between w-full">

          {/* Left: logo + SAMA */}
          <div className="flex flex-col justify-between self-stretch w-[280px]">
            <div className="flex items-center">
              <img src={imgLogo} alt="Tamawal" className="h-[33px] w-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <img src={imgFooterBadge} alt="SAMA" className="w-[81px] h-[81px]" />
              <p className="text-white/80 text-[18px] font-semibold leading-[1.72]">
                Tamawal is under the supervision and authority of Saudi Central Bank (SAMA)
              </p>
            </div>
          </div>

          {/* Right: link columns */}
          <div className="flex flex-col gap-8 flex-1 ml-[60px]">
            {/* Top row */}
            <div className="flex gap-[30px]">
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">About us</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Who we are</span>
                  <span>Our products</span>
                  <span>Our values</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Legal</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Terms and Conditions</span>
                  <span>Data Protection and Privacy</span>
                  <span>Customer Protection Principles</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Take actions</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Be a partner</span>
                  <span>Be a customer</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Customer Care</p>
                <p className="text-white/64 text-[14px] leading-[1.45]">You can give suggestions or a complaint for better Tamawal!</p>
                <div className="flex flex-col">
                  <button className="flex items-center gap-1 py-3 text-white/86 text-[16px]">
                    Send a message <img src={imgArrowNext} alt="" className="w-6 h-6" />
                  </button>
                  <button className="flex items-center gap-1 py-3 text-white/86 text-[16px]">
                    FAQs <img src={imgArrowNext} alt="" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Bottom row */}
            <div className="flex gap-[30px]">
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Contact us</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={imgEmailIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">info@tamawal.sa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={imgPhoneIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">011 512 3870</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={imgPhoneIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">800 100 0276</span>
                  </div>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Address</p>
                <div className="flex gap-2 items-start">
                  <img src={imgLocationIcon} alt="" className="w-[13px] mt-1 flex-shrink-0" />
                  <span className="text-white/64 text-[14px] leading-[1.45]">Al Olaya (403) street, Riyadh, Saudi Arabia</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-4">
                <div>
                  <p className="text-white text-[16px] font-semibold">Working hours</p>
                  <p className="text-white/64 text-[14px]">09:00 – 17:00</p>
                </div>
                <div>
                  <p className="text-white text-[16px] font-semibold">Working days</p>
                  <p className="text-white/64 text-[14px]">Sunday - Thursday</p>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-semibold leading-[1.72]">Social media</p>
                <div className="flex gap-2 items-center">
                  <img src={imgLinkedIn} alt="LinkedIn" className="w-[45px] h-[45px]" />
                  <div className="border border-white/24 rounded-full w-[45px] h-[45px] flex items-center justify-center overflow-hidden">
                    <img src={imgTwitterX} alt="X" className="w-5 h-[15px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 pb-6">
          <div className="border-t border-white/10" />
          <p className="text-white/32 text-[16px] text-center leading-[1.7]">
            Tamawal Digital Brokerage Company operates under the supervision and regulation of the Saudi Arabian Monetary Authority (SAMA)
          </p>
        </div>
        </div>{/* /max-w-[1440px] */}
      </footer>

    </div>
  );
}
