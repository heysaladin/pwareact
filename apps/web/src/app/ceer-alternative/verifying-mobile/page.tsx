'use client';

import CeerNavbar from '../components/CeerNavbar';
import CeerBreadcrumb from '../components/CeerBreadcrumb';
import VehicleSidebar from '../components/VehicleSidebar';
import CeerInnerStepper from '../components/CeerInnerStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export default function VerifyingMobilePage() {
  const { brandName } = useGlobalSettings();
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <CeerNavbar variant={2} />
      <CeerBreadcrumb activeStep={5} />

      <div className="flex flex-1">
        <VehicleSidebar showVerifiedBadge />

        {/* Main content */}
        <div className="flex-1 px-10 py-8 overflow-y-auto">

          <CeerInnerStepper activeStep={3} />

          {/* Step badge + heading */}
          <div className="mt-6">
            <div className="border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/40 inline-block">
              Step 1 of 4 – SIMAH consent
            </div>
            <h1 className="text-3xl font-bold text-white mt-4 font-ceer">Authorize CEER to check your credit profile</h1>
            <p className="text-sm text-white/50 mt-2">
              CEER and its financing partner need your consent to retrieve your SIMAH credit information and continue your financing journey.
            </p>
          </div>

          {/* SIMAH card */}
          <div className="bg-[#111] rounded-2xl p-8 mt-6 flex gap-8">
            {/* Left col */}
            <div className="w-[260px] shrink-0">
              <p className="text-2xl font-bold text-white">SIMAH</p>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20 mt-2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p className="text-xs text-white/50 mt-4">By providing your consent, you allow CEER and its authorized financing partner to:</p>
              <div className="flex flex-col gap-3 mt-4">
                {[
                  'Retrieve my SIMAH credit report for financing assessment',
                  'Use my verified identity and mobile number for regulated credit evaluation',
                  'Share necessary application status updates with financing partners',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#22C55E] shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-xs text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right col */}
            <div className="flex-1 flex flex-col gap-4">
              {/* About panel */}
              <div className="bg-[#0C0C0C] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                  </svg>
                  <span className="text-sm font-medium text-white">About this screen</span>
                </div>
                <p className="text-xs text-white/40 mt-2">
                  This consent allows CEER and our financing partner to assess your eligibility for financing based on your credit history.
                </p>
                <p className="text-xs text-white/40 mt-1">You remain within the CEER journey.</p>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4 p-4 bg-[#0C0C0C] rounded-xl">
                  <div className="w-5 h-5 rounded border border-white/20 bg-transparent flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/70">
                    <span className="text-[#E87722]">*</span> I consent to CEER and its authorized financing partner obtaining my SIMAH credit report for the purpose of assessing my financing eligibility.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#0C0C0C] rounded-xl">
                  <div className="w-5 h-5 rounded border border-white/20 bg-transparent flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/70">
                    <span className="text-[#E87722]">*</span> I authorize the use of my identity and verified mobile information for this financing journey.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#0C0C0C] rounded-xl">
                  <div className="w-5 h-5 rounded border border-white/20 bg-transparent flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/70">
                    <span className="text-[#E87722]">*</span> I agree to the{' '}
                    <span className="text-[#E87722] cursor-pointer">Terms &amp; Conditions</span> and{' '}
                    <span className="text-[#E87722] cursor-pointer">Privacy Notice</span>.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#0C0C0C] rounded-xl">
                  <div className="w-5 h-5 rounded border border-white/20 bg-transparent flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/70">
                    I would like to receive marketing updates from CEER.{' '}
                    <span className="ml-2 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-white/30">Optional</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges row */}
          <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/[0.06]">
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                ),
                title: 'SAMA compliant',
                desc: 'Aligned with regulations of the Saudi Central Bank (SAMA).',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                ),
                title: 'Secure and encrypted',
                desc: 'Your data is protected with advanced encryption.',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: 'No redirection outside CEER',
                desc: 'You stay within the CEER platform throughout the journey.',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                ),
                title: 'Your consent is recorded digitally',
                desc: 'All consents are stored securely for audit.',
              },
            ].map((badge) => (
              <div key={badge.title} className="flex items-start gap-3">
                {badge.icon}
                <div>
                  <p className="text-xs font-medium text-white/70">{badge.title}</p>
                  <p className="text-[10px] text-white/35 mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-white/40 flex items-center gap-1 cursor-pointer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back
            </span>
            <div className="flex flex-col items-end gap-1">
              <button className="bg-[#1a1a1a] border border-white/10 text-white/30 font-bold px-8 py-3.5 rounded-xl text-sm cursor-not-allowed">
                Agree &amp; Continue →
              </button>
              <div className="flex items-center gap-1 text-[10px] text-white/30">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                </svg>
                Select all required consents to continue
              </div>
              <span className="text-[11px] text-white/40">› Next: Review {brandName} financing terms</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/15">SCREEN — SIMAH CONSENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
