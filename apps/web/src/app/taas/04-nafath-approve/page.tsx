'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import PartnerPanel from '../_components/PartnerPanel'
import TopBar from '../_components/TopBar'
import Stepper from '../_components/Stepper'

export default function NafathApprovePage() {
  const [secs, setSecs] = useState(162)

  useEffect(() => {
    const t = setInterval(() => setSecs(s => s > 0 ? s - 1 : 0), 1000)
    return () => clearInterval(t)
  }, [])

  const mins = String(Math.floor(secs / 60)).padStart(2, '0')
  const ss = String(secs % 60).padStart(2, '0')
  const resendSecs = Math.max(0, secs - 120)
  const resendMins = String(Math.floor(resendSecs / 60)).padStart(2, '0')
  const resendSs = String(resendSecs % 60).padStart(2, '0')

  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanel />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBar />
          <Stepper currentStep={2} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">Approve your identity in Nafath</h1>
            <p className="text-[#475467] text-[15px] mt-2">We sent a secure verification request to your Nafath app. Approve it using the number below.</p>
          </div>

          {/* Two columns */}
          <div className="flex gap-6">
            {/* Left panel */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Verified ID bar */}
              <div className="border border-[#eaecf0] rounded-xl px-5 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f9fafb] border border-[#eaecf0] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1.5" y="3" width="13" height="10" rx="1.5" />
                    <path d="M1.5 6.5h13M4.5 9.5h2M4.5 11h3.5" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#475467] text-[11px]">Verified National ID / Iqama</p>
                  <p className="text-[#101828] text-[13px] font-semibold">1 •••• •••• 34</p>
                </div>
                <span className="bg-[#ecfdf3] border border-[#a9efc5] text-[#067647] text-[11px] font-semibold px-3 py-1 rounded-full shrink-0">Verified</span>
              </div>

              {/* Verification number card */}
              <div className="border border-[#eaecf0] rounded-[14px] p-6 flex flex-col gap-4">
                <div className="flex items-start gap-8">
                  {/* Number */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[#475467] text-[12px]">Verification number</p>
                    <div className="border-2 border-[#0063f5] rounded-xl w-[88px] h-[80px] flex items-center justify-center bg-[#f7faff]">
                      <span className="text-[#0063f5] text-[48px] font-bold leading-none">67</span>
                    </div>
                  </div>
                  {/* Timer */}
                  <div className="flex flex-col gap-1 mt-6">
                    <p className="text-[#475467] text-[12px]">Time remaining</p>
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="9" r="7.5" />
                        <path d="M9 5.5v3.5l2.5 2.5" />
                      </svg>
                      <span className="text-[#101828] text-[28px] font-bold leading-none">{mins}:{ss}</span>
                    </div>
                  </div>
                </div>

                {/* Waiting */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#f79009] animate-pulse shrink-0" />
                  <span className="text-[#f79009] text-[13px] font-medium">Waiting for your approval...</span>
                </div>

                {/* How to approve */}
                <div className="flex flex-col gap-2">
                  <p className="text-[#101828] text-[13px] font-semibold">How to approve</p>
                  {[
                    'Open the Nafath app',
                    'Review the identity verification request',
                    'Select the number 67',
                    'Approve and return here',
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#eff5ff] flex items-center justify-center shrink-0">
                        <span className="text-[#0063f5] text-[11px] font-bold">{i + 1}</span>
                      </div>
                      <span className="text-[#475467] text-[13px]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel: Phone mockup */}
            <div className="w-[280px] shrink-0 flex items-start justify-center pt-4">
              <div style={{ width: 220, border: '12px solid #111', borderRadius: 36, background: '#fff', boxShadow: '0 20px 50px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
                <div style={{ width: 80, height: 16, background: '#111', borderRadius: '0 0 10px 10px', margin: '0 auto' }} />
                <div style={{ padding: '20px 16px 28px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 12 }}>
                    <div style={{ width: 24, height: 24, background: '#16a34a', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6l2.5 2.5L10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: '#666' }}>نفاذ</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#16a34a' }}>Nafath</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 8 }}>Verify your identity</div>
                  <div style={{ fontSize: 11, color: '#666', marginBottom: 14 }}>A verification request from Tamawal Financing</div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                    <div style={{ width: 64, height: 64, borderRadius: 16, background: '#ecfdf3', border: '2px solid #16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 700, color: '#16a34a' }}>67</div>
                  </div>
                  <button style={{ width: '100%', padding: '10px 0', borderRadius: 10, background: '#16a34a', color: '#fff', fontSize: 13, fontWeight: 700, border: 'none', marginBottom: 8 }}>Approve</button>
                  <button style={{ width: '100%', padding: '8px 0', borderRadius: 10, background: 'transparent', color: '#555', fontSize: 13, border: '1px solid #eee' }}>Reject</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 text-[#0063f5] text-[12px] font-medium">
            <button className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 2v4h4M11.5 6A5.5 5.5 0 0 0 1 4.75" />
              </svg>
              Resend request ({resendMins}:{resendSs})
            </button>
            <span className="text-[#d0d5dd]">·</span>
            <Link href="/taas/03-verify-id" className="hover:underline">Change National ID / Iqama</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/taas/03-verify-id" className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg">
              Cancel
            </Link>
            <Link href="/taas/05-mobile-verification" className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg">
              Continue →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
