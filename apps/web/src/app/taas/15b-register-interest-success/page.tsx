'use client'
import Link from 'next/link'
import PartnerPanel from '../_components/PartnerPanel'
import TopBar from '../_components/TopBar'

export default function RegisterInterestSuccessPage() {
  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanel />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBar />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col items-center justify-center gap-6">
          {/* Checkmark illustration */}
          <div className="w-[180px] h-[180px] flex items-center justify-center text-[80px]">
            ✅
          </div>

          {/* Title */}
          <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] text-center w-[620px] leading-tight">
            Your interest has been successfully registered!
          </h1>

          {/* Body text */}
          <p className="text-[#475467] text-[15px] text-center w-[520px] leading-relaxed">
            Your interest has been registered in the Tamawal system. Thank you for registering your interest! We will keep you updated.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-center shrink-0">
          <Link
            href="/taas/01-preliminary-offers"
            className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg"
          >
            Back to the product list
          </Link>
        </div>
      </div>
    </div>
  )
}
