'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PartnerPanel from '../_components/PartnerPanel'
import TopBar from '../_components/TopBar'
import Stepper from '../_components/Stepper'

export default function WhatHappensNextPage() {
  const [partnerSigned, setPartnerSigned] = useState<'yes' | 'no'>('yes')
  const [tamawalCustomer, setTamawalCustomer] = useState<'yes' | 'no'>('yes')

  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanel />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBar />
          <Stepper currentStep={1} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">What happens next?</h1>
            <p className="text-[#475467] text-[15px] mt-2">Here's how we get you started after you choose a preliminary offer.</p>
          </div>

          {/* Selected offer banner */}
          <div className="border border-[#eaecf0] rounded-xl px-5 py-4 flex items-center gap-4">
            <Image src="/taas-snb.png" alt="Saudi National Bank" width={80} height={32} className="object-contain shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[#475467] text-[11px]">Your selected offer</p>
              <p className="text-[#101828] text-[14px] font-semibold">Saudi National Bank</p>
              <p className="text-[#0063f5] text-[12px]">SAR 3,648 / month · 60 months · APR 4.89%</p>
            </div>
            <span className="bg-[#eff5ff] border border-[#d1e3ff] text-[#0063f5] text-[11px] font-semibold px-3 py-1 rounded-full shrink-0">Selected</span>
          </div>

          {/* Two question panels */}
          <div className="grid grid-cols-2 gap-4">
            {/* Partner login */}
            <div className="border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="5.5" r="2.5" />
                  <path d="M2.5 13.5c0-3.036 2.462-5 5.5-5s5.5 1.964 5.5 5" />
                </svg>
                <span className="text-[13px] font-semibold text-[#101828]">Are you signed in with &#123;Partner&#125;?</span>
              </div>
              <button
                onClick={() => setPartnerSigned('yes')}
                className={['w-full text-left rounded-xl border px-4 py-3 transition-colors', partnerSigned === 'yes' ? 'border-[#0063f5] bg-[#f7faff]' : 'border-[#eaecf0] bg-white'].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <div className={['w-5 h-5 rounded-full flex items-center justify-center shrink-0', partnerSigned === 'yes' ? 'border-[6px] border-[#0063f5] bg-white' : 'border-[1.5px] border-[#d0d5dd] bg-white'].join(' ')} />
                  <div>
                    <p className="text-[13px] font-semibold text-[#101828]">Yes, I'm signed in</p>
                    <p className="text-[12px] text-[#475467]">Continue straight to identity verification.</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setPartnerSigned('no')}
                className={['w-full text-left rounded-xl border px-4 py-3 transition-colors', partnerSigned === 'no' ? 'border-[#0063f5] bg-[#f7faff]' : 'border-[#eaecf0] bg-white'].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <div className={['w-5 h-5 rounded-full flex items-center justify-center shrink-0', partnerSigned === 'no' ? 'border-[6px] border-[#0063f5] bg-white' : 'border-[1.5px] border-[#d0d5dd] bg-white'].join(' ')} />
                  <div>
                    <p className="text-[13px] font-semibold text-[#101828]">No, not yet</p>
                    <p className="text-[12px] text-[#475467]">Sign in or create a &#123;Partner&#125; account first.</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Tamawal customer */}
            <div className="border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 6v4c0 4.3 2.8 7.1 5 7.9 2.2-.8 5-3.6 5-7.9V6L13 2z" />
                  <path d="M5.5 8l2 2 3-3" />
                </svg>
                <span className="text-[13px] font-semibold text-[#101828]">Are you already a Tamawal customer?</span>
              </div>
              <button
                onClick={() => setTamawalCustomer('yes')}
                className={['w-full text-left rounded-xl border px-4 py-3 transition-colors', tamawalCustomer === 'yes' ? 'border-[#0063f5] bg-[#f7faff]' : 'border-[#eaecf0] bg-white'].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <div className={['w-5 h-5 rounded-full flex items-center justify-center shrink-0', tamawalCustomer === 'yes' ? 'border-[6px] border-[#0063f5] bg-white' : 'border-[1.5px] border-[#d0d5dd] bg-white'].join(' ')} />
                  <div>
                    <p className="text-[13px] font-semibold text-[#101828]">Yes, I have an account</p>
                    <p className="text-[12px] text-[#475467]">Enter your 4-digit Tamawal PIN.</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setTamawalCustomer('no')}
                className={['w-full text-left rounded-xl border px-4 py-3 transition-colors', tamawalCustomer === 'no' ? 'border-[#0063f5] bg-[#f7faff]' : 'border-[#eaecf0] bg-white'].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <div className={['w-5 h-5 rounded-full flex items-center justify-center shrink-0', tamawalCustomer === 'no' ? 'border-[6px] border-[#0063f5] bg-white' : 'border-[1.5px] border-[#d0d5dd] bg-white'].join(' ')} />
                  <div>
                    <p className="text-[13px] font-semibold text-[#101828]">No, I'm new</p>
                    <p className="text-[12px] text-[#475467]">Create your Tamawal account in under 2 minutes.</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Flow tracker */}
          <div className="border border-[#eaecf0] rounded-xl px-5 py-4 flex items-start gap-0">
            {[
              { num: null, icon: 'check', label: 'You selected an offer', desc: 'Pick the offer that fits you best.' },
              { num: 2, icon: null, label: 'We check your &#123;Partner&#125; login', desc: 'Signed in → continue. Not signed in → sign in or sign up.' },
              { num: 3, icon: null, label: 'We check your Tamawal status', desc: 'Existing customer → PIN. New customer → quick sign-up.' },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 flex-1 min-w-0 relative">
                {i > 0 && <div className="absolute left-[-20px] top-[10px] w-10 h-[1.5px] bg-[#eaecf0]" />}
                <div className="shrink-0">
                  {step.icon === 'check' ? (
                    <div className="w-6 h-6 rounded-full bg-[#12b76a] flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6l2.5 3 5.5-5.5" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-[#d0d5dd] flex items-center justify-center">
                      <span className="text-[11px] font-semibold text-[#475467]">{step.num}</span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#101828]" dangerouslySetInnerHTML={{ __html: step.label }} />
                  <p className="text-[12px] text-[#475467] mt-0.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[#98a2b3] text-[12px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 1L1.5 3.5v4c0 3.09 1.96 5.56 5.5 6.5 3.54-.94 5.5-3.41 5.5-6.5v-4L7 1z" />
            </svg>
            Tamawal is licensed and regulated by the Saudi Central Bank (SAMA).
          </div>
          <div className="flex items-center gap-3">
            <Link href="/taas/01-preliminary-offers" className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg">
              Back to offers
            </Link>
            <Link href="/taas/03-verify-id" className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg">
              Continue →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
