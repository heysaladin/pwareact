import Link from 'next/link';
import CeerNavbar from '../components/CeerNavbar';
import CeerBreadcrumb from '../components/CeerBreadcrumb';
import VehicleSidebar from '../components/VehicleSidebar';
import CeerInnerStepper from '../components/CeerInnerStepper';

export default function FinanceStartPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <CeerNavbar variant={1} />
      <CeerBreadcrumb activeStep={5} />

      <div className="flex flex-1">
        <VehicleSidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-y-auto px-10 py-8">

          <CeerInnerStepper activeStep={1} />

          {/* Auth options */}
          <div className="flex gap-3 mt-6">
            {[
              {
                selected: true,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50 shrink-0">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                ),
                title: 'Continue as Guest',
                sub: 'Quick start. Create account later.',
              },
              {
                selected: false,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50 shrink-0">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                ),
                title: 'Log In',
                sub: 'Already have a CEER account?',
              },
              {
                selected: false,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50 shrink-0">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                ),
                title: 'Create Account',
                sub: 'Register for faster future access',
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`flex-1 rounded-xl p-4 flex items-center gap-3 cursor-pointer ${
                  card.selected
                    ? 'bg-[#111] border border-[#E87722]/40'
                    : 'bg-[#111] border border-white/[0.06]'
                }`}
              >
                {card.icon}
                <div>
                  <p className="text-sm font-semibold text-white">{card.title}</p>
                  <p className="text-xs text-white/40">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40 mt-2">Already have a CEER account? Log in</p>

          {/* Form */}
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">

            {/* Section 1 header */}
            <div className="col-span-1 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/60">1</div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-white/50">Your Contact Details</span>
            </div>

            {/* Section 2 header */}
            <div className="col-span-1 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/60">2</div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-white/50">Quick Eligibility Details</span>
            </div>

            {/* Section 1 fields */}
            <div className="flex flex-col gap-4">
              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block">First Name <span className="text-white/40">*</span></label>
                  <input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none" placeholder="First Name" />
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block">Last Name <span className="text-white/40">*</span></label>
                  <input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none" placeholder="Last Name" />
                </div>
              </div>

              {/* Email + Mobile */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block">Email Address <span className="text-white/40">*</span></label>
                  <input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block">Mobile Number <span className="text-white/40">*</span></label>
                  <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden">
                    <div className="px-3 py-3 flex items-center gap-1 border-r border-white/10">
                      <span className="text-xs text-white/50">SA 🇸🇦</span>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                    <input className="flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none" placeholder="5X XXX XXXX" />
                  </div>
                </div>
              </div>

              {/* OTP row */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">OTP <span className="text-white/40">*</span></label>
                <div className="flex gap-2">
                  <input className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none" placeholder="Enter OTP" />
                  <button className="bg-transparent border border-white/15 rounded-lg px-4 py-3 text-xs font-bold text-white whitespace-nowrap">SEND OTP</button>
                </div>
                <p className="text-[10px] text-white/30 mt-1">We will send a one-time password (OTP) to verify your mobile number</p>
              </div>
            </div>

            {/* Section 2 fields */}
            <div className="flex flex-col gap-4">
              {/* Employment Type */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Employment Type <span className="text-white/40">*</span></label>
                <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none appearance-none">
                  <option>Salaried</option>
                  <option>Self-Employed</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Monthly Salary */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Monthly Salary <span className="text-white/40">*</span></label>
                <input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none" defaultValue="SAR 25,000" />
              </div>

              {/* Existing loans */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Do you have existing loans?</label>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg border border-white/20 text-xs font-medium text-white/70 bg-[#1a1a1a]">Yes</button>
                  <button className="px-4 py-2 rounded-lg border border-white/20 text-xs font-medium text-white bg-white/10">No</button>
                </div>
              </div>

              {/* Monthly Commitments */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Monthly Commitments (SAR)</label>
                <input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none" defaultValue="0" />
              </div>

              {/* Preferred Financing Product */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Preferred Financing Product <span className="text-white/40">*</span></label>
                <div className="flex gap-2 flex-wrap">
                  <button className="bg-[#E87722]/10 border border-[#E87722] text-[#E87722] text-xs rounded-lg px-3 py-2 flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#22C55E]">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Finance Lease
                  </button>
                  {['Balloon Plan', '50/50 Plan', 'Trade-in Support'].map((p) => (
                    <button key={p} className="bg-[#1a1a1a] border border-white/10 text-white/50 text-xs rounded-lg px-3 py-2">{p}</button>
                  ))}
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Down Payment/Trade-in</label>
                <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none appearance-none">
                  <option>Down Payment</option>
                  <option>Trade-in</option>
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Amount (SAR) <span className="text-white/40">*</span></label>
                <input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none" defaultValue="80,000" />
              </div>

              {/* Green info box */}
              <div className="bg-[#0f2a1a] border border-[#22C55E]/20 rounded-xl p-4 flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#22C55E] shrink-0 mt-0.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <div>
                  <p className="text-xs text-white/60">Next, we will verify your identity using Nafath to ensure your application is secure and compliant.</p>
                  <p className="text-[10px] text-[#22C55E]/70 mt-1">100% secure · Regulated · Compliant</p>
                </div>
              </div>
            </div>

            {/* Section 3 - Consents */}
            <div className="col-span-2 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/60">3</div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-white/50">Consents</span>
              </div>
              {[
                'I agree to the Terms and Conditions *',
                'I consent to CEER Motors and its partners verifying my identity and credit data for financing assessment purposes. *',
                'I would like to receive marketing communications from CEER and its partners.',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded bg-[#E87722] border-0 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-xs text-white/60">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6">
            <span className="text-xs text-white/40 hover:text-white cursor-pointer">← Back to Build</span>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40 cursor-pointer">Save &amp; Continue Later</span>
              <Link href="/ceer/step-2" className="bg-[#E87722] text-white font-bold text-sm px-8 py-3.5 rounded-xl">CHECK MY ELIGIBILITY →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
