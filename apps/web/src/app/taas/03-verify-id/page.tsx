'use client'
import { useState } from 'react'
import Link from 'next/link'
import PartnerPanel from '../_components/PartnerPanel'
import TopBar from '../_components/TopBar'
import Stepper from '../_components/Stepper'

export default function VerifyIdPage() {
  const [nid, setNid] = useState('')

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
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-6">
          {/* Page title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">Enter your verified ID</h1>
            <p className="text-[#475467] text-[15px] mt-2">To continue, please enter your National ID or Iqama number to verify your identity.</p>
          </div>

          {/* Two columns */}
          <div className="flex gap-6">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-5">
              {/* National ID input */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-[#344054]">
                  National ID / Iqama number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="1234 567 890"
                  value={nid}
                  onChange={e => setNid(e.target.value)}
                  className="px-4 py-[13px] rounded-lg border border-[#d0d5dd] text-[15px] text-[#101828] outline-none focus:border-[#0063f5] transition-colors"
                />
                <p className="text-[#98a2b3] text-[12px]">Must match the ID registered with Absher.</p>
              </div>

              {/* How verification works */}
              <div className="border border-[#eaecf0] rounded-[14px] p-6 flex flex-col gap-[18px]">
                <p className="text-[14px] font-semibold text-[#101828]">How verification works</p>
                {[
                  {
                    num: '1',
                    title: 'Enter your National ID',
                    desc: 'Provide your Saudi National ID or Iqama number to begin the verification process.',
                  },
                  {
                    num: '2',
                    title: 'Nafath authentication',
                    desc: 'You will receive a Nafath push notification to approve the request on your registered mobile.',
                  },
                  {
                    num: '3',
                    title: 'Identity confirmed',
                    desc: 'Once approved, your identity is verified and we can proceed with your application.',
                  },
                ].map(step => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-2xl bg-[#eff5ff] flex items-center justify-center shrink-0">
                      <span className="text-[#0063f5] text-[13px] font-bold">{step.num}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#101828]">{step.title}</p>
                      <p className="text-[12px] text-[#475467] mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="w-[340px] shrink-0">
              <div className="bg-[#f7faff] rounded-[14px] p-6 flex flex-col gap-4">
                {/* Shield icon */}
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 2L2 6v5c0 5.25 3.92 9.74 9 10.93C16.08 20.74 20 16.25 20 11V6l-9-4z" />
                    <path d="M7 11l3 3 5-5" />
                  </svg>
                </div>

                <div>
                  <p className="text-[16px] font-bold text-[#101828]">Secure verification</p>
                  <p className="text-[13px] text-[#475467] mt-1 leading-relaxed">
                    Your information is encrypted and securely shared only with authorized government services (Nafath) to confirm your identity.
                  </p>
                </div>

                <div className="h-px bg-[#d1e3ff]" />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#e7f6ef] text-[#0b7a4b] text-[12px] font-semibold rounded-full px-[10px] py-[4px]">نفاذ Nafath</span>
                  </div>
                  <p className="text-[12px] text-[#475467]">Verification powered by Nafath — the national digital identity platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[#98a2b3] text-[12px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="6" width="9" height="7" rx="1" />
              <path d="M4.5 6V4a2.5 2.5 0 0 1 5 0v2" />
            </svg>
            You can stop at any time — nothing is submitted until you confirm your order.
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/taas/01-preliminary-offers"
              className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Cancel
            </Link>
            <Link
              href="/taas/06-consents-contracts"
              className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Continue →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
