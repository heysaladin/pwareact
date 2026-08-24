'use client';

import Link from 'next/link';
import { useState } from 'react';

const imgAppleLogo = "/pay/apple-logo.svg";
const imgAndroidLogo = "/pay/android-logo.png";
const imgStatusBar = "/pay/status-bar.svg";

function Toggle({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center gap-2 w-[327px]">
      <button
        onClick={onToggle}
        className="relative shrink-0 w-[44px] h-[24px] rounded-full transition-colors duration-200"
        style={{ backgroundColor: active ? '#121a26' : '#eef1f6' }}
      >
        <span
          className="absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_-1px_rgba(10,13,18,0.1)] transition-transform duration-200"
          style={{ left: active ? '22px' : '2px' }}
        />
      </button>
      <p className="text-[13.5px] font-medium leading-[18px] tracking-[0.4px] text-[#364152]">{label}</p>
    </div>
  );
}

export function Screen({ mobile }: { mobile: boolean }) {
  const [preferredFlow, setPreferredFlow] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [arabic, setArabic] = useState(false);

  const params = new URLSearchParams();
  if (arabic) params.set('lang', 'ar');
  if (preferredFlow) params.set('preferred', '1');
  if (customer) params.set('customer', '1');
  const qs = params.toString() ? `?${params.toString()}` : '';
  const iosHref = `/pay/ios${qs}`;
  const androidHref = `/pay/android${qs}`;

  return (
    <div
      className="relative bg-white flex flex-col"
      style={{
        width: mobile ? '100%' : '375px',
        height: mobile ? '100svh' : '812px',
        overflow: 'hidden',
      }}
    >
      {/* Status bar */}
      {!mobile && (
        <div className="h-[38px] w-full overflow-clip relative shrink-0">
          <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgStatusBar} />
        </div>
      )}

      {/* Platform cards */}
      <div className="flex flex-col gap-5 px-8 pt-[50px] flex-1">
        <Link
          href={iosHref}
          className="bg-white border border-[#e3e8ef] rounded-[24px] flex flex-col items-center pt-10 pb-6 w-full active:opacity-80 transition-opacity"
        >
          <div className="w-[86px] h-[86px] relative overflow-clip shrink-0">
            <img alt="iOS" className="absolute inset-0 size-full max-w-none block" src={imgAppleLogo} />
          </div>
          <p className="mt-8 text-[23.5px] font-semibold text-[#121a26] leading-[30px] text-center w-full">iOS</p>
        </Link>

        <Link
          href={androidHref}
          className="bg-white border border-[#e3e8ef] rounded-[24px] flex flex-col items-center pt-10 pb-6 w-full active:opacity-80 transition-opacity"
        >
          <div className="w-[86px] h-[86px] relative shrink-0">
            <img alt="Android" className="absolute inset-0 size-full max-w-none block object-contain" src={imgAndroidLogo} />
          </div>
          <p className="mt-8 text-[23.5px] font-semibold text-[#121a26] leading-[30px] text-center w-full">Android</p>
        </Link>
      </div>

      {/* Toggles */}
      <div className="flex flex-col items-center gap-6 pb-2">
        <Toggle label="Preferred flow" active={preferredFlow} onToggle={() => setPreferredFlow(v => !v)} />
        <Toggle label="Customer" active={customer} onToggle={() => setCustomer(v => !v)} />
        <Toggle label="Arabic" active={arabic} onToggle={() => setArabic(v => !v)} />
      </div>

      {/* Bottom home bar */}
      <div className="h-[34px] relative shrink-0">
        <div className="absolute bottom-2 left-[32%] right-[32%] h-[5px] bg-black rounded-full" />
      </div>
    </div>
  );
}
