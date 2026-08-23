import Link from 'next/link';
import CeerNavbar from '../components/CeerNavbar';
import CeerBreadcrumb from '../components/CeerBreadcrumb';
import VehicleSidebar from '../components/VehicleSidebar';
import CeerInnerStepper from '../components/CeerInnerStepper';

export default function VerifyIdentityPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <CeerNavbar variant={2} />
      <CeerBreadcrumb activeStep={5} />

      <div className="flex flex-1">
        <VehicleSidebar />

        {/* Main content */}
        <div className="flex-1 px-10 py-8">

          <CeerInnerStepper activeStep={2} />

          {/* Main card */}
          <div className="bg-[#111] rounded-2xl p-10 mt-6 flex flex-col">
            <div className="flex items-start justify-between gap-8">
              {/* Left column */}
              <div className="flex-1">
                <div className="border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/40 self-start inline-block">
                  Step 1 of 3 — Enter your details
                </div>
                <h1 className="text-4xl font-bold text-white mt-5 font-ceer">Verify your identity</h1>
                <p className="text-sm text-white/50 mt-3 max-w-md">
                  We'll securely verify your identity using Nafath before we check your financing eligibility.
                </p>

                {/* NID input */}
                <div className="mt-8">
                  <label className="text-xs text-white/50 mb-1.5 block">National ID / Iqama Number</label>
                  <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-3 gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                      <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
                    </svg>
                    <input
                      className="flex-1 bg-transparent text-sm text-white outline-none"
                      defaultValue="1 234 567 890"
                    />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#22C55E]">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="text-[10px] text-white/30 mt-1">Enter your 10-digit National ID or Iqama number.</p>
                </div>

                {/* Nafath info box */}
                <div className="bg-[#0d1f0d] border-l-2 border-[#22C55E] rounded-r-xl p-4 mt-5 flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#E87722] shrink-0 mt-0.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <p className="text-xs text-white/60">
                    Next, we'll generate a Nafath verification request. You'll be redirected to Nafath to approve it securely.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="w-[280px]">
                <div className="bg-[#1a1a1a] rounded-xl p-5 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                    </svg>
                    <span className="text-sm font-medium text-white">About this screen</span>
                  </div>
                  <p className="text-xs text-white/40 mt-2">
                    We use Nafath, the official national identity platform, to verify your identity securely.
                  </p>
                  <p className="text-xs text-white/40 mt-2">
                    You'll remain within the CEER journey at all times.
                  </p>
                </div>

                {/* Mobile input */}
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block">Verified Mobile Number</label>
                  <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-3 gap-2">
                    <span className="text-xs text-white/50">🇸🇦 +966</span>
                    <input className="flex-1 bg-transparent text-sm text-white outline-none" defaultValue="54 *** ****" />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#22C55E]">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="text-[10px] text-white/30 mt-1">We'll use this number for verification updates.</p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-[10px] text-white/30">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                By continuing, you agree to our Privacy Policy and Identity Verification Terms.
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/40 cursor-pointer">← Back to Finance Start</span>
                <button className="bg-[#E87722] text-white font-bold px-6 py-3 rounded-xl text-sm">Continue to Nafath →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
