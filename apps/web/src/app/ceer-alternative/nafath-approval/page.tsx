import CeerNavbar from '../components/CeerNavbar';
import ProgressStepper from '../components/ProgressStepper';

const howToApproveSteps = [
  'Open the Nafath application',
  'Review the identity verification request',
  'Select the matching number (67)',
  'Approve to request using your biometrics',
  'Return to CEER automatically',
];

export default function NafathApprovalPage() {
  const steps = [
    { num: '1', label: 'Select Vehicle', subLabel: 'Completed', status: 'completed' as const },
    { num: '2', label: 'Verify Identity', subLabel: 'In Progress', status: 'active' as const },
    { num: '3', label: 'Financial Details', subLabel: 'Pending', status: 'pending' as const },
    { num: '4', label: 'SIMAH Consent', subLabel: 'Pending', status: 'pending' as const },
    { num: '5', label: 'Compare Offers', subLabel: 'Pending', status: 'pending' as const },
  ];

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <CeerNavbar variant={3} />

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-[240px] min-h-screen bg-[#111] border-r border-white/[0.08] px-5 py-6 flex flex-col gap-4 shrink-0">
          <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">← Back to configuration</a>

          <div className="w-full h-[120px] rounded-xl bg-[#1a1a1a] overflow-hidden">
            <img src="/ceer-car-00.png" className="w-full h-full object-cover" alt="CEER Exobot Sedan" />
          </div>

          <div>
            <p className="text-sm font-bold text-white tracking-wide">EXOBOT SEDAN</p>
            <p className="text-xs text-white/40">First Edition • 2027</p>
            <button className="mt-2 border border-white/15 rounded-full px-3 py-1 text-[10px] text-white/50 hover:text-white/80 transition-colors flex items-center gap-1">
              View Details
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2.5 8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="border-t border-white/[0.08]" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-white/40 uppercase tracking-wider">Your Configuration</span>
              <button className="flex items-center gap-1 text-[10px] text-white/40 hover:text-white transition-colors">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                </svg>
                Edit
              </button>
            </div>
            {[
              { label: 'Exterior', value: 'Harrat Grey Metallic', color: '#3a3a3a' },
              { label: 'Interior', value: 'Red Nappa Leather', color: '#4a1a1a' },
              { label: 'Wheels', value: '23" Front, 24" Rear', color: '#2a2a2a' },
              { label: 'Options', value: 'First Edition Pack', color: '#1e2a1e' },
            ].map((spec) => (
              <div key={spec.label} className="flex items-start gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-md shrink-0" style={{ backgroundColor: spec.color }} />
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">{spec.label}</p>
                  <p className="text-xs text-white/70">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.08]" />

          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Total Price (Incl. VAT)</p>
            <p className="text-xl font-bold text-white">SAR 399,000</p>
            <p className="text-[10px] text-white/40 mt-1">Indicative from</p>
            <p className="text-sm text-white/60">SAR 5,871 / month</p>
          </div>

          <div className="border-t border-white/[0.08]" />

          <div className="flex flex-col gap-2">
            {['Premium electric performance', '8-year battery warranty', 'Connected always'].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-xs text-white/60">{feature}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.08]" />

          <div className="flex items-start gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0 mt-0.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div>
              <p className="text-xs font-medium text-white/70">Secure &amp; compliant</p>
              <p className="text-[10px] text-white/35">Your data is protected with bank-level security</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 px-10 py-8">

            {/* Progress stepper */}
            <div className="mb-8">
              <ProgressStepper steps={steps} />
            </div>

            {/* Header row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-white font-ceer">Approve your identity in Nafath</h1>
                <p className="text-sm text-white/50 mt-2">A secure verification request has been sent to your Nafath application.</p>
              </div>
              <div className="flex items-center gap-3 bg-[#0d1f0d] border border-[#22C55E]/20 rounded-xl px-4 py-3 shrink-0 ml-6">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10" stroke="#22C55E" strokeWidth="2"/>
                </svg>
                <div>
                  <p className="text-xs font-medium text-white">Government trusted verification</p>
                  <p className="text-[10px] text-white/40">Powered by نفاذ Nafath</p>
                </div>
              </div>
            </div>

            {/* Two-column layout */}
            <div className="flex gap-6">

              {/* Left: verification card */}
              <div className="flex-1 bg-[#111] rounded-2xl p-8">

                {/* Verification number + timer */}
                <div className="flex items-start gap-8 mb-6">
                  <div>
                    <p className="text-xs text-white/40 mb-2">Verification number</p>
                    <div className="w-24 h-20 bg-[#1a1a1a] border border-white/10 rounded-xl flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">67</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 pt-3">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#1a1a1a" strokeWidth="4"/>
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#E87722" strokeWidth="4"
                          strokeDasharray="138.2" strokeDashoffset="46.1" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xs font-bold text-white leading-none">02:45</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-white/40 mt-1">Time remaining</p>
                  </div>
                </div>

                {/* Waiting status */}
                <div className="flex items-center gap-3 bg-[#0d1a0d] border border-[#22C55E]/20 rounded-full px-5 py-3 mb-7 w-full">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                  <span className="text-sm text-white">Waiting for your approval...</span>
                </div>

                {/* How to approve */}
                <p className="text-sm font-medium text-white mb-3">How to approve</p>
                <div className="flex flex-col gap-2">
                  {howToApproveSteps.map((text, i) => (
                    <div key={i} className="flex items-center gap-3 border border-white/[0.08] rounded-xl px-4 py-3">
                      <span className="text-xs text-white/30 w-4 shrink-0">{i + 1}</span>
                      <div className="w-5 h-5 rounded bg-[#1a1a1a] shrink-0" />
                      <span className="text-xs text-white/70">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Info box */}
                <div className="flex items-start gap-2 bg-[#1a1a1a] border border-white/[0.06] rounded-xl p-4 mt-6">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                  </svg>
                  <p className="text-xs text-white/50">The page will refresh automatically once the verification is approved.</p>
                </div>

                {/* Action links */}
                <div className="flex items-center gap-6 mt-5">
                  {[
                    { symbol: '↺', label: 'Resend Request' },
                    { symbol: '✕', label: 'Cancel Verification' },
                    { symbol: '✎', label: 'Change National ID / Iqama' },
                  ].map((action) => (
                    <button key={action.label} className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors">
                      <span>{action.symbol}</span>
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: phone mockup + trust badges */}
              <div className="w-[300px] flex gap-4">
                <div className="flex-1">
                  <img src="/ceer-nafath-mockup.png" className="w-full h-auto object-contain" alt="Nafath application" />
                </div>
                <div className="flex flex-col gap-6 justify-center py-4 w-[120px]">
                  {[
                    {
                      icon: (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                      ),
                      text: "Your identity is verified through Saudi's official digital channel",
                    },
                    {
                      icon: (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>
                        </svg>
                      ),
                      text: 'Fully integrated within the CEER journey',
                    },
                    {
                      icon: (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                      ),
                      text: 'Your information remains secure and encrypted',
                    },
                  ].map((badge, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 mt-0.5">
                        {badge.icon}
                      </div>
                      <p className="text-[11px] text-white/50 leading-snug">{badge.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-white/[0.08] px-10 py-4 grid grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                ),
                title: 'Bank-level security',
                desc: 'Your data is protected and encrypted',
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <path d="M12 3v18M3 6l9-3 9 3M6 18l6 3 6-3"/>
                  </svg>
                ),
                title: 'Fully SAMA compliant',
                desc: 'Aligned with KSA regulations',
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'One seamless journey',
                desc: 'From exploration to financing',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-medium text-white">{item.title}</p>
                  <p className="text-[10px] text-white/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
