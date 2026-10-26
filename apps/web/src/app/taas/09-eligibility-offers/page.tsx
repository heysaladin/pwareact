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
    recommended: false,
    bankLogo: '/taas-riyad.png',
    bankName: 'Riyad Bank',
    apr: '5.49%',
    monthly: 'SAR 3,697',
    tenure: '60 months',
    totalPayable: 'SAR 221,820',
    features: ['Fast approval', 'Free comprehensive insurance', 'Digital account management'],
  },
  {
    id: 'alrajhi',
    recommended: false,
    bankLogo: '/taas-alrajhi.png',
    bankName: 'Al Rajhi Bank',
    apr: '5.29%',
    monthly: 'SAR 3,820',
    tenure: '60 months',
    totalPayable: 'SAR 229,200',
    features: ['No processing fee', 'Early settlement available', 'Dedicated customer support'],
  },
]

export default function EligibilityOffersPage() {
  const [selected, setSelected] = useState('snb')
  const [compare, setCompare] = useState<Set<string>>(new Set(['snb', 'alinma']))

  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanel />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBar />
          <Stepper currentStep={5} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Page title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">Your eligibility offers</h1>
            <p className="text-[#475467] text-[15px] mt-2">Here are the financing offers generated for you based on your validated information and each provider's criteria.</p>
          </div>

          {/* Validation banner */}
          <div className="bg-[#ecfdf3] rounded-xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-xl bg-[#12b76a] flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7l3.5 3.5 6.5-7" />
                </svg>
              </div>
              <p className="text-[#067647] font-medium text-[13px]">Your data was validated with SIMAH, GOSI, Nafath and ELM.</p>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#067647" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="7" cy="7" r="6" />
                <path d="M7 3.5v3.5l2.333 2.333" />
              </svg>
              <span className="text-[#067647] text-[12px] font-semibold">Offers valid until 28 Oct 2026</span>
            </div>
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
          <button
            className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.167 3.5h11.666M3.5 7h7M5.833 10.5h2.334" />
            </svg>
            Compare selected ({compare.size})
          </button>
          <div className="flex items-center gap-3">
            <Link
              href="/taas/06-consents-contracts"
              className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Back
            </Link>
            <Link
              href="/taas/13-submit-success"
              className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Create order →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
