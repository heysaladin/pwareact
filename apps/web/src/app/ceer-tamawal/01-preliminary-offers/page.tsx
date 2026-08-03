'use client';
import { useState } from 'react';
import Link from 'next/link';

const offers = [
  {
    id: 'aljazira',
    bankAr: 'بنك الجزيرة',
    bankEn: 'BANK ALJAZIRA',
    monthly: 'SAR 8,513',
    apr: '5.29%',
    badge: 'Lowest monthly payment',
    feats: ['No processing fee', 'Early settlement available', 'Fast digital journey'],
  },
  {
    id: 'alinma',
    bankAr: 'مصرف الإنماء',
    bankEn: 'alinma bank',
    monthly: 'SAR 8,742',
    apr: '5.59%',
    badge: '',
    feats: ['No processing fee', 'Flexible payment options', 'Early settlement available'],
  },
  {
    id: 'snb',
    bankAr: 'SNB الأهلي',
    bankEn: '',
    monthly: 'SAR 8,915',
    apr: '5.89%',
    badge: '',
    feats: ['No processing fee', 'Early settlement available', 'Relationship benefits'],
  },
];

export default function PreliminaryOffersPage() {
  const [selected, setSelected] = useState('aljazira');

  return (
    <div className="min-h-screen bg-[#0b1420] flex flex-col text-[#e6edf5]" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a3a4f]">
        <Link href="/ceer-tamawal" className="flex items-center gap-2 text-[#a4a7ae] text-sm font-medium">
          ‹ Back
        </Link>
        <svg width="70" height="10" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <g clipPath="url(#clip0_3493_306)">
            <path d="M48.4003 14H25.6232L28.4698 11.1994H45.5529L48.4003 14Z" fill="currentColor"/>
            <path d="M99.6471 5.5997L96.7994 8.4003H26.8022L21.1079 14H2.84656L0 11.1994V6.98782L2.84656 9.78729V11.1994H19.9293L25.6232 5.5997H99.6471Z" fill="currentColor"/>
            <path d="M22.7759 0L19.9293 2.79948H2.84656V6.99756L0 4.19809V2.79948L2.84656 0H22.7759Z" fill="currentColor"/>
            <path d="M48.4003 0L45.5529 2.79948H25.6232V0H48.4003Z" fill="currentColor"/>
            <path d="M74.0235 0L71.1761 2.79948H54.0941V5.5997H51.2468V0H74.0235Z" fill="currentColor"/>
            <path d="M79.7173 8.4003H76.87V14H79.7173V8.4003Z" fill="currentColor"/>
            <path d="M74.0235 14H51.2468V8.4003H54.0941V11.1994H71.1761L74.0235 14Z" fill="currentColor"/>
            <path d="M99.6471 2.79948V5.5997H96.7994V2.79948H79.7177V5.5997H76.87V0H96.7994L99.6471 2.79948Z" fill="currentColor"/>
            <path d="M99.6471 14H95.6208L89.9269 8.4003H93.9539L99.6471 14Z" fill="currentColor"/>
          </g>
          <defs><clipPath id="clip0_3493_306"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4">

        {/* Title */}
        <div>
          <h1 className="text-xl font-bold text-[#dbe7f5]">View preliminary offers</h1>
          <p className="text-sm text-[#93a4b8] mt-1">Review indicative offers based on the details you entered.</p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: '🏷️', label: 'Down payment', value: 'SAR 79,800' },
            { icon: '📅', label: 'Term', value: '36 Months' },
            { icon: '📄', label: 'To finance', value: 'SAR 319,200' },
          ].map(item => (
            <div key={item.label} className="bg-[#121e2e] border border-[#2a3a4f] rounded-xl p-3">
              <div className="text-base">{item.icon}</div>
              <div className="text-[10px] text-[#93a4b8] mt-1">{item.label}</div>
              <div className="text-xs font-bold mt-0.5">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Info banner */}
        <div className="bg-[#121e2e] border border-[#2a3a4f] rounded-xl p-3 flex gap-3 items-start">
          <span className="text-[#4f95ff] text-xs font-bold border border-[#4f95ff] rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">i</span>
          <p className="text-xs text-[#93a4b8]">These preliminary offers are based on your salary, existing commitments, down payment, and financing term. Final offers are confirmed after identity verification.</p>
        </div>

        {/* Offers */}
        <div className="flex flex-col gap-3">
          {offers.map(offer => (
            <div
              key={offer.id}
              onClick={() => setSelected(offer.id)}
              className={`bg-[#121e2e] rounded-xl p-4 border cursor-pointer ${selected === offer.id ? 'border-[#4f95ff]' : 'border-[#2a3a4f]'}`}
            >
              {offer.badge && (
                <div className="inline-block bg-[#16283f] text-[#4f95ff] text-[10px] font-bold px-2 py-0.5 rounded-full mb-3">
                  {offer.badge}
                </div>
              )}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-bold text-base">{offer.bankAr}</div>
                  {offer.bankEn && <div className="text-[10px] text-[#93a4b8] tracking-wide mt-0.5">{offer.bankEn}</div>}
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selected === offer.id ? 'border-[#4f95ff]' : 'border-[#2a3a4f]'}`}>
                  {selected === offer.id && <div className="w-2.5 h-2.5 rounded-full bg-[#4f95ff]" />}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 border-t border-[#2a3a4f] pt-3">
                <div>
                  <div className="text-[10px] text-[#93a4b8]">Monthly payment from</div>
                  <div className="text-[#4f95ff] font-bold text-base mt-0.5">{offer.monthly}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#93a4b8]">APR from</div>
                  <div className="text-[#4f95ff] font-bold text-base mt-0.5">{offer.apr}</div>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-1">
                {offer.feats.map(f => (
                  <div key={f} className="text-xs text-[#93a4b8] flex items-center gap-1.5">
                    <span className="text-[#4f95ff]">✓</span> {f}
                  </div>
                ))}
              </div>
              <div className="mt-2 text-right text-[10px] text-[#4f95ff] font-bold">Preliminary offer</div>
            </div>
          ))}
        </div>

      </div>

      {/* CTA */}
      <div className="px-5 py-4 border-t border-[#2a3a4f]">
        <Link
          href="/ceer-tamawal/02-what-happens-next"
          className="w-full bg-[#4f95ff] text-white text-[15px] font-semibold py-4 rounded-full text-center flex items-center justify-center"
        >
          Tamawal →
        </Link>
      </div>

    </div>
  );
}
