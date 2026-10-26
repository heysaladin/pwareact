'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PartnerPanel from '../_components/PartnerPanel'
import TopBar from '../_components/TopBar'
import Stepper from '../_components/Stepper'

const BANKS = [
  {
    id: 'snb',
    logo: '/taas-snb.png',
    name: 'Saudi National Bank',
    recommended: true,
    apr: '4.89%',
    monthly: 'SAR 3,648',
    total: 'SAR 218,880',
    amount: 'SAR 183,000',
    tenure: '60 months',
    fee: 'SAR 0',
    earlySettlement: true,
    insurance: true,
    rating: 4.8,
  },
  {
    id: 'alinma',
    logo: '/taas-alinma.png',
    name: 'Alinma Bank',
    recommended: false,
    apr: '5.19%',
    monthly: 'SAR 3,755',
    total: 'SAR 225,300',
    amount: 'SAR 183,000',
    tenure: '60 months',
    fee: 'SAR 500',
    earlySettlement: true,
    insurance: false,
    rating: 4.5,
  },
  {
    id: 'riyad',
    logo: '/taas-riyad.png',
    name: 'Riyad Bank',
    recommended: false,
    apr: '5.49%',
    monthly: 'SAR 3,697',
    total: 'SAR 221,820',
    amount: 'SAR 183,000',
    tenure: '60 months',
    fee: 'SAR 0',
    earlySettlement: false,
    insurance: true,
    rating: 4.3,
  },
]

function CheckMark({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="flex items-center gap-1 text-[#12b76a] text-[13px] font-medium">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#12b76a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 7l3 3 6-6" />
      </svg>
      Yes
    </span>
  ) : (
    <span className="flex items-center gap-1 text-[#98a2b3] text-[13px] font-medium">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#98a2b3" strokeWidth="1.75" strokeLinecap="round">
        <path d="M2 2l8 8M10 2l-8 8" />
      </svg>
      No
    </span>
  )
}

export default function CompareOffersPage() {
  const [selected, setSelected] = useState('snb')

  const ROWS: { label: string; key: keyof typeof BANKS[0]; type?: 'bool' | 'rating' | 'blue' }[] = [
    { label: 'APR (fixed)', key: 'apr' },
    { label: 'Monthly payment', key: 'monthly', type: 'blue' },
    { label: 'Total payable', key: 'total' },
    { label: 'Amount to finance', key: 'amount' },
    { label: 'Tenure', key: 'tenure' },
    { label: 'Processing fee', key: 'fee' },
    { label: 'Early settlement', key: 'earlySettlement', type: 'bool' },
    { label: 'Free comprehensive insurance', key: 'insurance', type: 'bool' },
    { label: 'Customer rating', key: 'rating', type: 'rating' },
  ]

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
          {/* Title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">Compare &amp; choose your best offer</h1>
            <p className="text-[#475467] text-[15px] mt-2">Compare offers from our partner banks side by side and pick the one that fits you best.</p>
          </div>

          {/* Table */}
          <div className="border border-[#eaecf0] rounded-[14px] overflow-hidden">
            <table className="w-full" style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}>
              <colgroup>
                <col style={{ width: 210 }} />
                {BANKS.map(b => <col key={b.id} />)}
              </colgroup>

              {/* Bank header */}
              <thead>
                <tr className="border-b border-[#eaecf0]">
                  <th className="px-5 py-4 text-left">
                    <div className="flex flex-col gap-1">
                      <span className="text-[13px] font-semibold text-[#101828]">Key details</span>
                      <button
                        className="text-[12px] text-[#0063f5] font-medium text-left"
                        onClick={() => setSelected('')}
                      >
                        Clear selection
                      </button>
                    </div>
                  </th>
                  {BANKS.map(b => {
                    const isSel = selected === b.id
                    return (
                      <th
                        key={b.id}
                        className="px-4 py-4 text-center"
                        style={{
                          borderLeft: `1px solid #eaecf0`,
                          borderTop: isSel ? '2px solid #0063f5' : 'none',
                          borderRight: isSel ? '2px solid #0063f5' : 'none',
                          background: isSel ? '#f7faff' : 'white',
                        }}
                      >
                        <div className="flex flex-col items-center gap-2">
                          {b.recommended
                            ? <span className="bg-[#0063f5] text-white text-[10px] font-bold px-3 py-0.5 rounded-full">Recommended</span>
                            : <span className="block h-5" />
                          }
                          <Image src={b.logo} alt={b.name} width={88} height={36} className="object-contain" />
                          <span className="text-[#475467] text-[11px]">{b.name}</span>
                          <button
                            onClick={() => setSelected(b.id)}
                            className={['px-5 py-1.5 rounded-lg text-[12px] font-semibold border transition-colors', isSel ? 'bg-[#eff5ff] border-[#0063f5] text-[#0063f5]' : 'bg-white border-[#d0d5dd] text-[#344054]'].join(' ')}
                          >
                            {isSel ? (
                              <span className="flex items-center gap-1">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M1.5 5.5l2.5 2.5 5-5.5" />
                                </svg>
                                Selected
                              </span>
                            ) : 'Select'}
                          </button>
                        </div>
                      </th>
                    )
                  })}
                </tr>
              </thead>

              <tbody>
                {ROWS.map((row, ri) => (
                  <tr key={row.label} className="border-b border-[#eaecf0] last:border-b-0">
                    <td className="px-5 py-3 text-[12px] text-[#475467]">{row.label}</td>
                    {BANKS.map(b => {
                      const isSel = selected === b.id
                      const val = b[row.key]
                      return (
                        <td
                          key={b.id}
                          className="px-4 py-3 text-center"
                          style={{
                            borderLeft: '1px solid #eaecf0',
                            borderRight: isSel ? '2px solid #0063f5' : 'none',
                            borderLeft2: isSel ? '2px solid #0063f5' : '1px solid #eaecf0',
                            background: isSel ? '#f7faff' : 'white',
                          }}
                        >
                          {row.type === 'bool' ? (
                            <div className="flex justify-center"><CheckMark yes={val as boolean} /></div>
                          ) : row.type === 'rating' ? (
                            <span className="flex items-center justify-center gap-1 text-[13px] text-[#101828] font-semibold">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="#f79009" stroke="none">
                                <path d="M6 1l1.4 2.8 3.1.45-2.25 2.19.53 3.09L6 8.1l-2.78 1.43.53-3.09L1.5 4.25l3.1-.45L6 1z" />
                              </svg>
                              {val as number}
                            </span>
                          ) : (
                            <span className={['text-[13px] font-semibold', row.type === 'blue' ? 'text-[#0063f5]' : 'text-[#101828]'].join(' ')}>
                              {val as string}
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <Link href="/taas/09-eligibility-offers" className="text-[#475467] text-[14px] font-medium">
            Back to offers
          </Link>
          <div className="flex items-center gap-3">
            <button className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg">
              Save comparison
            </button>
            <Link href="/taas/11-offer-details" className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg">
              Create order →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
