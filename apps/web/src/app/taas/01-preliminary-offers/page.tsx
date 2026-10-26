'use client'
import { useState } from 'react'
import Link from 'next/link'
import PartnerPanel from '../_components/PartnerPanel'
import TopBar from '../_components/TopBar'
import Stepper from '../_components/Stepper'
import OfferRow from '../_components/OfferRow'

const OFFERS = [
  {
    id: 'snb',
    selected: true,
    recommended: true,
    bankLogo: '/taas-snb.png',
    bankName: 'Saudi National Bank',
    apr: '4.89%',
    monthly: 'SAR 3,648',
    tenure: '60 months',
    totalPayable: 'SAR 218,880',
    features: ['No processing fee', 'Early settlement available', 'Free comprehensive insurance'],
  },
  {
    id: 'alinma',
    selected: false,
    recommended: false,
    bankLogo: '/taas-alinma.png',
    bankName: 'Alinma Bank',
    apr: '5.19%',
    monthly: 'SAR 3,755',
    tenure: '60 months',
    totalPayable: 'SAR 225,300',
    features: ['Flexible payment options', 'No processing fee', 'Early settlement available'],
  },
  {
    id: 'riyad',
    selected: false,
    recommended: false,
    bankLogo: '/taas-riyad.png',
    bankName: 'Riyad Bank',
    apr: '5.49%',
    monthly: 'SAR 3,697',
    tenure: '60 months',
    totalPayable: 'SAR 221,820',
    features: ['Fast approval', 'Free comprehensive insurance', 'Digital account management'],
  },
]

export default function PreliminaryOffersPage() {
  const [selected, setSelected] = useState('snb')

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
          {/* Page title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">View preliminary offers</h1>
            <p className="text-[#475467] text-[15px] mt-2">Based on the details you provided, here are indicative financing options. Select one to continue.</p>
          </div>

          {/* Your details bar */}
          <div className="bg-[#f9fafb] border border-[#eaecf0] rounded-xl px-5 py-[14px] flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#98a2b3] text-[11px]">Monthly salary</span>
                <span className="text-[#101828] text-[13px] font-semibold">SAR 25,000</span>
              </div>
              <div className="w-px h-8 bg-[#eaecf0]" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[#98a2b3] text-[11px]">Commitments</span>
                <span className="text-[#101828] text-[13px] font-semibold">SAR 3,500</span>
              </div>
              <div className="w-px h-8 bg-[#eaecf0]" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[#98a2b3] text-[11px]">Down payment</span>
                <span className="text-[#101828] text-[13px] font-semibold">20% · SAR 45,750</span>
              </div>
              <div className="w-px h-8 bg-[#eaecf0]" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[#98a2b3] text-[11px]">Term</span>
                <span className="text-[#101828] text-[13px] font-semibold">60 months</span>
              </div>
            </div>
            <Link href="/taas/00-explore-financing" className="flex items-center gap-1.5 text-[#0063f5] text-[13px] font-medium">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.917 1.167a1.167 1.167 0 0 1 1.65 1.649L4.733 9.65l-2.566.583.583-2.567 6.834-6.833-.667-.667z" />
              </svg>
              Edit details
            </Link>
          </div>

          {/* Offers heading */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#101828] text-[15px] font-semibold">3 preliminary offers</span>
              <span className="text-[#98a2b3] text-[13px]">· Sorted by lowest monthly payment</span>
            </div>
            <button className="flex items-center gap-1.5 text-[#475467] text-[13px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1.167 3.5h11.666M3.5 7h7M5.833 10.5h2.334" />
              </svg>
              Sort & filter
            </button>
          </div>

          {/* Offer rows */}
          <div className="flex flex-col gap-3">
            {OFFERS.map(offer => (
              <OfferRow
                key={offer.id}
                selected={selected === offer.id}
                recommended={offer.recommended}
                bankLogo={offer.bankLogo}
                bankName={offer.bankName}
                apr={offer.apr}
                monthly={offer.monthly}
                tenure={offer.tenure}
                totalPayable={offer.totalPayable}
                features={offer.features}
                onSelect={() => setSelected(offer.id)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[#98a2b3] text-[12px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="7" r="6" />
              <path d="M7 4.667v2.916M7 9.333h.007" />
            </svg>
            Preliminary offers are indicative only. Final offers are confirmed after identity verification.
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/taas/00-explore-financing"
              className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Back
            </Link>
            <Link
              href="/taas/03-verify-id"
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
