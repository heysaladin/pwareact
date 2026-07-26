'use client';

import { useState } from 'react';
import Link from 'next/link';
import CeerNavbar from '../components/CeerNavbar';
import CeerBreadcrumb from '../components/CeerBreadcrumb';
import CeerInnerStepper from '../components/CeerInnerStepper';

export default function VerifyOverviewPage() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const circle = (step: 1 | 2 | 3) => {
    const done = activeStep > step;
    const active = activeStep === step;
    return (
      <button
        onClick={() => setActiveStep(step)}
        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
          done ? 'bg-[#22C55E]' :
          active ? 'border-2 border-[#E87722]' :
          'border border-white/15'
        }`}
      >
        {done ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        ) : (
          <span className={`text-base font-bold ${active ? 'text-[#E87722]' : 'text-white/30'}`}>{step}</span>
        )}
      </button>
    );
  };

  const badge = (label: string) => (
    <span className="border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/40">
      {label}
    </span>
  );

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <CeerNavbar variant={2} />
      <CeerBreadcrumb activeStep={5} />

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-[220px] bg-[#0F0F0F] border-r border-white/[0.06] px-5 py-6 flex flex-col gap-4 shrink-0">
          <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">← Back to vehicle</a>

          <div className="w-full h-[110px] rounded-xl bg-[#1a1a1a] overflow-hidden">
            <img src="/ceer-car-00.png" className="w-full h-full object-cover" alt="CEER Exobot Sedan" />
          </div>

          <div>
            <p className="text-sm font-bold text-white tracking-wide">EXOBOT SEDAN</p>
            <p className="text-xs text-white/40">First Edition • 2027</p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { label: 'EXTERIOR', value: 'Harrat Grey Metallic' },
              { label: 'INTERIOR', value: 'Red Nappa Leather' },
              { label: 'WHEELS', value: '23" Front, 24" Rear' },
              { label: 'OPTIONS', value: 'Drift Mode, First Edition Floor Mats, Companion Package' },
            ].map((spec) => (
              <div key={spec.label} className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">{spec.label}</span>
                </div>
                <span className="text-xs text-white/70 pl-4">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.06]" />

          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Total Price (Incl. VAT)</p>
            <p className="text-xl font-bold text-white">SAR 399,000</p>
            <p className="text-[10px] text-white/40 mt-1">Indicative from</p>
            <p className="text-sm text-white/60">SAR 5,871 / month</p>
          </div>

          <div className="border-t border-white/[0.06]" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span className="text-xs font-medium text-white/70">Secure &amp; Compliant</span>
            </div>
            <p className="text-[10px] text-white/35 pl-5">Your data is protected and processed in line with Saudi regulations.</p>
          </div>

          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#22C55E]">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span className="text-[10px] text-[#22C55E]">Verification powered by نفاذ Nafath</span>
          </div>

          <p className="text-[10px] text-white/25">You remain securely inside the CEER journey.</p>
        </div>

        {/* Main content */}
        <div className="flex-1 px-10 py-8 flex flex-col">

          <CeerInnerStepper activeStep={2} />

          {/* Accordion steps with vertical track */}
          <div className="flex flex-col flex-1">

            {/* Step 1 */}
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div>{circle(1)}</div>
                <div className="w-px flex-1 bg-white/[0.08] mt-2" />
              </div>
              <div className="flex-1 pb-6">
                {activeStep === 1 ? (
                  <div className="bg-[#111] rounded-2xl p-7">
                    <div className="flex items-start gap-8">
                      <div className="flex-1">
                        {badge('Step 1 of 3 — Enter your details')}
                        <h2 className="text-2xl font-bold text-white font-ceer mt-4">Enter your details</h2>
                        <p className="text-sm text-white/50 mt-1.5 max-w-xs">We'll use Nafath to securely verify your identity.</p>

                        <div className="mt-5">
                          <label className="text-xs text-white/50 mb-1.5 block">National ID / Iqama Number</label>
                          <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-3 gap-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                              <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
                            </svg>
                            <span className="flex-1 text-sm text-white">1 234 567 890</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#22C55E]">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </div>
                          <p className="text-[10px] text-white/30 mt-1">Enter your 10-digit National ID or Iqama number.</p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <div className="flex items-center gap-1.5 text-[10px] text-white/30">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            By continuing, you agree to our Privacy Policy and Identity Verification Terms.
                          </div>
                          <button
                            onClick={() => setActiveStep(2)}
                            className="bg-[#E87722] text-white font-bold px-5 py-2.5 rounded-xl text-sm shrink-0 ml-4"
                          >
                            Continue to Verify →
                          </button>
                        </div>
                      </div>

                      <div className="w-[220px] shrink-0">
                        <label className="text-xs text-white/50 mb-1.5 block">Verified Mobile Number</label>
                        <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-3 gap-2">
                          <span className="text-xs text-white/50">🇸🇦 +966</span>
                          <span className="flex-1 text-sm text-white">54 *** ****</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#22C55E]">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <p className="text-[10px] text-white/30 mt-1">We'll use this number for verification updates.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setActiveStep(1)} className="flex items-center mt-1 text-left">
                    {badge('Step 1 of 3 — Enter your details')}
                  </button>
                )}
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div>{circle(2)}</div>
                <div className="w-px flex-1 bg-white/[0.08] mt-2" />
              </div>
              <div className="flex-1 pb-6">
                {activeStep === 2 ? (
                  <div className="rounded-2xl overflow-hidden relative" style={{background: '#080d18'}}>
                    <img src="/bg-lines.png" className="absolute inset-0 w-full h-full object-cover object-center opacity-50 pointer-events-none" style={{objectPosition: 'center 65%'}} alt="" />
                    <div className="relative z-10 p-7 pb-0">
                      {/* Heading row */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-white font-ceer">Approve your identity in Nafath</h2>
                          <p className="text-sm text-white/50 mt-2">A secure verification request has been sent to your Nafath application.</p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#0d1a0d] border border-[#22C55E]/30 rounded-xl px-3 py-2 shrink-0 ml-8">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#22C55E] shrink-0">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          </svg>
                          <div>
                            <p className="text-[10px] font-medium text-white">Government trusted verification</p>
                            <p className="text-[9px] text-[#22C55E]">Powered by نفاذ Nafath</p>
                          </div>
                        </div>
                      </div>

                      {/* Main row */}
                      <div className="flex gap-6 items-start">
                        {/* Left: dark info card */}
                        <div className="w-[380px] shrink-0 bg-black/40 border border-white/[0.07] rounded-2xl p-5 backdrop-blur-sm">
                          {/* Number + timer */}
                          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Verification number</p>
                          <div className="flex items-center gap-5 mb-4">
                            <div className="w-[100px] h-[72px] bg-[#111]/80 border border-white/10 rounded-xl flex items-center justify-center">
                              <span className="text-5xl font-bold text-white">67</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-14 h-14 rounded-full flex items-center justify-center relative">
                                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
                                  <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3"/>
                                  <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3"
                                    strokeDasharray="150.8" strokeDashoffset="113.1" strokeLinecap="round"/>
                                </svg>
                                <div className="relative z-10 text-center">
                                  <p className="text-sm font-bold text-white leading-none">02:45</p>
                                </div>
                              </div>
                              <p className="text-[9px] text-white/30">Time remaining</p>
                            </div>
                          </div>

                          {/* Waiting */}
                          <div className="flex items-center gap-2.5 bg-[#0d1a0d]/80 border border-[#22C55E]/20 rounded-full px-4 py-2.5 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                            <span className="text-sm text-white">Waiting for your approval...</span>
                          </div>

                          {/* How to */}
                          <p className="text-xs font-semibold text-white/60 mb-2">How to approve</p>
                          <div className="flex flex-col gap-1.5 mb-3">
                            {[
                              { label: 'Open the Nafath application', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg> },
                              { label: 'Review the identity verification request', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
                              { label: 'Select the matching number (67)', highlight: true, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
                              { label: 'Approve the request', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> },
                              { label: 'Return to CEER automatically', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-2.5 bg-white/[0.04] rounded-lg px-3 py-2">
                                <span className="text-[10px] text-white/25 w-3 shrink-0 font-bold">{i + 1}</span>
                                <span className={`shrink-0 ${item.highlight ? 'text-[#22C55E]' : 'text-white/30'}`}>{item.icon}</span>
                                <span className={`text-xs ${item.highlight ? 'text-[#22C55E]' : 'text-white/60'}`}>{item.label}</span>
                              </div>
                            ))}
                          </div>

                          {/* Info note */}
                          <div className="flex items-start gap-2 bg-white/[0.04] rounded-lg px-3 py-2 mb-3">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30 shrink-0 mt-0.5">
                              <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                            </svg>
                            <p className="text-[10px] text-white/35">The page will refresh automatically once the verification is approved.</p>
                          </div>

                          {/* Action links */}
                          <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
                            {[
                              { icon: '↺', label: 'Resend Request' },
                              { icon: '✕', label: 'Cancel Verification' },
                              { icon: '✎', label: 'Change National ID / Iqama' },
                            ].map((a) => (
                              <button key={a.label} className="flex items-center gap-1 text-[10px] text-white/30 hover:text-white/60 transition-colors">
                                <span>{a.icon}</span> {a.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Center: phone mockup */}
                        <div className="flex-1 flex items-end justify-center" style={{minHeight: '520px'}}>
                          <img src="/phone-mockup.png" className="h-[580px] object-contain drop-shadow-2xl" alt="Nafath app on phone" />
                        </div>

                        {/* Right: trust badges */}
                        <div className="w-[150px] shrink-0 flex flex-col gap-6 justify-center pt-4">
                          {[
                            { path: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, text: "Your identity is verified through Saudi's official digital channel" },
                            { path: <><path d="M5 17H3a2 2 0 0 1-2-2V9l3-5h12l3 5v6a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></>, text: 'Fully integrated within the CEER journey' },
                            { path: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>, text: 'Your information remains secure and encrypted' },
                          ].map((b, i) => (
                            <div key={i} className="flex flex-col gap-2">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">{b.path}</svg>
                              <p className="text-[10px] text-white/40 leading-relaxed">{b.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="grid grid-cols-3 gap-4 mt-6 py-4 border-t border-white/[0.06]">
                        {[
                          { path: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>, title: 'Bank-level security', desc: 'Your data is encrypted and protected' },
                          { path: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></>, title: 'Fully SAMA compliant', desc: 'Aligned with KSA regulations' },
                          { path: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>, title: 'One seamless journey', desc: 'From exploration to financing' },
                        ].map((item) => (
                          <div key={item.title} className="flex items-start gap-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30 shrink-0 mt-0.5">{item.path}</svg>
                            <div>
                              <p className="text-xs font-medium text-white/60">{item.title}</p>
                              <p className="text-[10px] text-white/30 mt-0.5">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Continue button */}
                      <div className="flex justify-end pb-6 pt-2">
                        <button onClick={() => setActiveStep(3)} className="bg-[#E87722] text-white font-bold px-6 py-3 rounded-xl text-sm">
                          Continue to Step 3 →
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setActiveStep(2)} className="flex items-center mt-1 text-left">
                    {badge('Step 2 of 3 — Approve in Nafath')}
                  </button>
                )}
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div>{circle(3)}</div>
              </div>
              <div className="flex-1 pb-6">
                {activeStep === 3 ? (
                  <div className="bg-[#111] rounded-2xl p-7">
                    <div className="flex items-start gap-8">
                      <div className="flex-1">
                        {badge('Step 3 of 3 — Verifying mobile ownership')}
                        <h2 className="text-2xl font-bold text-white font-ceer mt-4">Verifying your mobile ownership</h2>
                        <p className="text-sm text-white/50 mt-1.5">We are securely verifying ownership of your mobile number.</p>

                        <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[10px] text-white/30">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            Verification is processing automatically.
                          </div>
                          <Link href="/ceer/step-3" className="bg-[#E87722] text-white font-bold px-5 py-2.5 rounded-xl text-sm shrink-0 ml-4">
                            Continue to Financial Assessment →
                          </Link>
                        </div>
                      </div>

                      <div className="shrink-0 flex gap-6 items-start pt-1">
                        <div className="flex flex-col items-center gap-2">
                          <div className="relative w-16 h-16">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                              <circle cx="28" cy="28" r="22" fill="none" stroke="#1a1a1a" strokeWidth="4"/>
                              <circle cx="28" cy="28" r="22" fill="none" stroke="#22C55E" strokeWidth="4"
                                strokeDasharray="138.2" strokeDashoffset="69.1" strokeLinecap="round"/>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                              </svg>
                            </div>
                          </div>
                          <p className="text-xs text-white/50 text-center">Verifying mobile ownership...</p>
                          <p className="text-[10px] text-white/30 text-center">This may take a few moments.</p>
                        </div>

                        <div className="border-l border-white/[0.08] pl-6">
                          <p className="text-sm font-medium text-white mb-3">What happens next?</p>
                          {['Identity will be verified with Nafath', 'Mobile ownership will be confirmed', "You'll continue to financial assessment"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 py-1.5">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                              <span className="text-xs text-white/60">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setActiveStep(3)} className="flex items-center mt-1 text-left">
                    {badge('Step 3 of 3 — Verifying mobile ownership')}
                  </button>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/[0.06] mt-auto" />
            <div className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 shrink-0">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <div>
                  <p className="text-xs font-medium text-white/70">Your data is safe with CEER</p>
                  <p className="text-[10px] text-white/30">We never share your information without your consent.</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-xs text-white/50">Need help?</p>
                  <p className="text-[10px] text-white/30">Our support team is available 24/7.</p>
                </div>
                <button className="flex items-center gap-2 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white/60 hover:text-white hover:border-white/30 transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
