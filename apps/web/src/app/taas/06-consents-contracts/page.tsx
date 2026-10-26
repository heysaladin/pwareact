'use client'
import { useState } from 'react'
import Link from 'next/link'
import PartnerPanel from '../_components/PartnerPanel'
import TopBar from '../_components/TopBar'
import Stepper from '../_components/Stepper'

const CONSENTS = [
  {
    id: 'tamawal',
    title: 'Tamawal consent',
    desc: 'I allow Tamawal to collect, process and store my personal data to assess my eligibility.',
  },
  {
    id: 'simah',
    title: 'SIMAH consent',
    desc: 'I allow Tamawal to request my credit report from SIMAH.',
  },
  {
    id: 'nafath',
    title: 'Nafath consent',
    desc: 'I allow identity verification and retrieval of my data from government services.',
  },
  {
    id: 'gosi',
    title: 'GOSI consent',
    desc: 'I allow retrieval of my employment and income details from GOSI.',
  },
]

const AGREEMENTS = [
  {
    id: 'terms',
    title: 'Tamawal Terms & Conditions',
    desc: 'I have read and agree to the Tamawal Terms & Conditions.',
  },
  {
    id: 'sama',
    title: 'SAMA financing disclosures',
    desc: 'I have read and agree to the Saudi Central Bank financing disclosures.',
  },
]

function CheckboxIcon({ checked }: { checked: boolean }) {
  return (
    <div
      className={[
        'w-5 h-5 rounded-[6px] flex items-center justify-center shrink-0',
        checked ? 'bg-[#0063f5]' : 'bg-white border border-[#d0d5dd]',
      ].join(' ')}
    >
      {checked && (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1.5 5.5l3 3 5-6" />
        </svg>
      )}
    </div>
  )
}

export default function ConsentsContractsPage() {
  const allIds = [...CONSENTS, ...AGREEMENTS].map(i => i.id)
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(allIds.map(id => [id, true]))
  )
  const toggle = (id: string) => setChecked(p => ({ ...p, [id]: !p[id] }))
  const acceptedCount = allIds.filter(id => checked[id]).length

  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanel />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBar />
          <Stepper currentStep={3} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Page title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">Consents &amp; disclosures</h1>
            <p className="text-[#475467] text-[15px] mt-2">Please review and accept the required consents and agreements to continue your application.</p>
          </div>

          {/* Two columns */}
          <div className="flex gap-6">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Required consents */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="uppercase text-[#98a2b3] text-[12px] font-semibold tracking-wider">Required consents</span>
                  <span className="text-[#12b76a] text-[12px] font-semibold">{acceptedCount} of {allIds.length} accepted</span>
                </div>
                <div className="border border-[#eaecf0] rounded-[14px] px-5 flex flex-col">
                  {CONSENTS.map((item, i) => (
                    <div
                      key={item.id}
                      className={[
                        'flex items-center gap-4 py-4 cursor-pointer',
                        i < CONSENTS.length - 1 ? 'border-b border-[#eaecf0]' : '',
                      ].join(' ')}
                      onClick={() => toggle(item.id)}
                    >
                      <CheckboxIcon checked={!!checked[item.id]} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-[#101828]">{item.title}</p>
                        <p className="text-[12px] text-[#475467] mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-[#0063f5] text-[12px] font-semibold shrink-0"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 7v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3M7 1h4v4M5 7l6-6" />
                        </svg>
                        View details
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agreements */}
              <div>
                <div className="mb-2">
                  <span className="uppercase text-[#98a2b3] text-[12px] font-semibold tracking-wider">Agreements &amp; Disclosures</span>
                </div>
                <div className="border border-[#eaecf0] rounded-[14px] px-5 flex flex-col">
                  {AGREEMENTS.map((item, i) => (
                    <div
                      key={item.id}
                      className={[
                        'flex items-center gap-4 py-4 cursor-pointer',
                        i < AGREEMENTS.length - 1 ? 'border-b border-[#eaecf0]' : '',
                      ].join(' ')}
                      onClick={() => toggle(item.id)}
                    >
                      <CheckboxIcon checked={!!checked[item.id]} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-[#101828]">{item.title}</p>
                        <p className="text-[12px] text-[#475467] mt-0.5">{item.desc}</p>
                      </div>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-[#0063f5] text-[12px] font-semibold shrink-0"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 1H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5L7 1z" />
                          <path d="M7 1v4h4" />
                        </svg>
                        View document
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="w-[300px] shrink-0">
              <div className="bg-[#f7faff] rounded-[14px] p-6 flex flex-col gap-4">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 2L2 6v5c0 5.25 3.92 9.74 9 10.93C16.08 20.74 20 16.25 20 11V6l-9-4z" />
                    <path d="M7 11l3 3 5-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#101828]">Why we need your consent</p>
                  <p className="text-[12px] text-[#475467] mt-1 leading-relaxed">
                    These consents allow Tamawal to securely retrieve and verify your information from government and financial entities to assess your eligibility.
                  </p>
                </div>

                <div className="h-px bg-[#d1e3ff]" />

                <div className="flex flex-col gap-3">
                  <p className="text-[12px] font-semibold text-[#344054]">Data sources</p>
                  <div className="flex flex-wrap gap-2">
                    {['SIMAH', 'GOSI', 'Nafath', 'ELM'].map(source => (
                      <span
                        key={source}
                        className="bg-white border border-[#d1e3ff] text-[#0063f5] text-[12px] font-semibold rounded-full px-[10px] py-1"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[#98a2b3] text-[12px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="7" r="6" />
              <path d="M7 4.667v2.916M7 9.333h.007" />
            </svg>
            You can withdraw your consent at any time from your Tamawal account.
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/taas/03-verify-id"
              className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Back
            </Link>
            <Link
              href="/taas/09-eligibility-offers"
              className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              Accept &amp; continue →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
