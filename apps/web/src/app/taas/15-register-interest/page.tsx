'use client'
import Link from 'next/link'
import PartnerPanel from '../_components/PartnerPanel'
import TopBar from '../_components/TopBar'

export default function RegisterInterestPage() {
  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanel />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBar />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Page title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">Register your interest</h1>
            <p className="text-[#475467] text-[15px] mt-2">This financial institution will join Tamawal's partners soon. Register your interest and we'll notify you once financing is available.</p>
          </div>

          {/* Two-column layout */}
          <div className="flex gap-6 items-start">
            {/* Left: form */}
            <div className="flex-1 flex flex-col gap-4">
              {/* National ID / Iqama number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  National ID / Iqama number <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your National ID or Iqama number"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5]"
                />
              </div>

              {/* City */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  City <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Select your city"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5]"
                />
              </div>

              {/* Sector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  Sector <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Select your sector"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5]"
                />
              </div>

              {/* Entity */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  Entity <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your entity / employer"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5]"
                />
              </div>

              {/* Job title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  Job title <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your job title"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5]"
                />
              </div>

              {/* Salary bank */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  Salary bank <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Select your salary bank"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5]"
                />
              </div>
            </div>

            {/* Right: bank card */}
            <div className="w-[340px] bg-[#f7faff] rounded-[14px] p-6 flex flex-col gap-4 shrink-0">
              {/* Shield icon */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#0063f5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3L5 8v9c0 7.95 5.54 15.19 13 17 7.46-1.81 13-9.05 13-17V8L18 3z" />
                </svg>
              </div>

              {/* Title */}
              <div>
                <p className="text-[#101828] text-[16px] font-bold leading-snug">Microfinance for Employee &amp; their Family Daily Needs</p>
                <p className="text-[#475467] text-[13px] mt-1">by Bank Albilad</p>
              </div>

              {/* Blue divider */}
              <div className="h-[2px] bg-[#0063f5] rounded-full w-12" />

              {/* Orange badge */}
              <div className="inline-flex self-start px-3 py-1 rounded-full bg-[#fff5e6] border border-[#f5a623]">
                <span className="text-[#f5a623] text-[12px] font-semibold">Joining Tamawal soon</span>
              </div>

              {/* Stats rows */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#475467]">APR from</span>
                  <span className="text-[#101828] font-semibold">5.66%</span>
                </div>
                <div className="h-px bg-[#e4e7ec]" />
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#475467]">Installment from</span>
                  <span className="text-[#101828] font-semibold">SAR 1,250/mo</span>
                </div>
                <div className="h-px bg-[#e4e7ec]" />
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#475467]">Financing up to</span>
                  <span className="text-[#101828] font-semibold">SAR 250,000</span>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[#98a2b3] text-[11px] leading-relaxed">
                Rates shown are indicative and subject to credit assessment. Final terms confirmed upon partner availability.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[#98a2b3] text-[12px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="10" height="8" rx="1" />
              <path d="M5 5V4a3 3 0 0 1 6 0v1" />
              <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
            </svg>
            Your data is encrypted and handled in accordance with SAMA's data protection guidelines.
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/taas/01-preliminary-offers"
              className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Cancel
            </Link>
            <Link
              href="/taas/15b-register-interest-success"
              className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Register your interest
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
