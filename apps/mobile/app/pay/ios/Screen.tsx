'use client';

import { useState } from 'react';

const imgApplePay   = "/pay/apple-pay.svg";
const imgStcPay     = "/pay/stc-pay.svg";
const imgStcPayLight = "/pay/stc-pay-light.svg";
const imgAmex       = "/pay/card-amex.svg";
const imgMastercard = "/pay/card-mastercard.svg";
const imgVisa       = "/pay/card-visa.svg";
const imgMada       = "/pay/card-mada.svg";
const imgUnionPay   = "/pay/card-unionpay.svg";
const imgSar        = "/pay/sar.svg";
const imgStatusBar  = "/pay/status-bar.svg";

function SarSymbol() {
  return (
    <div className="h-[18px] w-[16px] relative shrink-0 overflow-clip">
      <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgSar} />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="h-[38px] w-full overflow-clip relative shrink-0">
      <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgStatusBar} />
    </div>
  );
}

function StcPayForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#f1f5f9] rounded-t-[8px] flex flex-col gap-4 p-4" style={{ height: '204px' }}>
      <div className="flex items-center justify-between w-full">
        <div className="w-[59px] h-[20px] relative shrink-0 overflow-clip">
          <img alt="STC Pay" className="absolute inset-0 size-full max-w-none block" src={imgStcPayLight} />
        </div>
        <button onClick={onClose} className="text-[rgba(26,26,26,0.9)] text-base leading-4 tracking-[-0.3125px]">
          Cancel
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col w-full">
          <p className="text-[rgba(26,26,26,0.9)] text-[12px] font-medium leading-4">Mobile number</p>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="05x xxx xxxx"
            maxLength={10}
            onKeyDown={(e) => {
              if (!/[\d]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
            }}
            className="mt-2 h-9 bg-white rounded-[8px] px-4 w-full text-[14px] text-center tracking-[-0.15px] text-[#121a26] placeholder:text-[#d1d5db] shadow-[0px_0px_0px_1px_#cdd4df,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] outline-none focus:shadow-[0px_0px_0px_2px_#5f1896]"
          />
        </div>
        <div className="h-11 bg-[#5f1896] rounded-[8px] flex items-center justify-center gap-[4.8px]">
          <p className="text-white text-base leading-4 tracking-[-0.3125px]">Pay</p>
          <div className="flex items-center gap-1">
            <SarSymbol />
            <p className="text-white text-base leading-4 tracking-[-0.3125px]">150.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Screen({ mobile }: { mobile: boolean }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-between"
      style={{
        background: '#808b99',
        width: mobile ? '100%' : '375px',
        height: mobile ? '100svh' : '812px',
      }}
    >
      <div className="absolute inset-0 bg-[#0d131c] opacity-50 z-0" />

      <div className="relative z-10">
        {!mobile && <StatusBar />}
      </div>

      <div className="flex-1 relative z-10" />

      <div className="relative z-10 bg-white rounded-t-[24px] w-full">
        <div className="flex flex-col items-center pt-3 pb-6 px-3">
          <div className="w-12 h-1 bg-[#9aa4b2] rounded-full" />
        </div>

        <div className="flex flex-col gap-4 px-6 pb-2">
          <p className="text-[23.5px] font-semibold text-[#4b5565] text-center leading-[30px]">Pay with</p>

          <div className="flex items-center gap-2 bg-black rounded-[8px] px-3 py-2">
            <div className="w-[72px] flex items-center justify-start shrink-0 py-[14px]">
              <div className="h-[20px] w-[48px] relative shrink-0">
                <img alt="Apple Pay" className="absolute inset-0 size-full max-w-none block" src={imgApplePay} />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-white text-[15.5px] font-bold leading-[22px] tracking-[0.1px]">Apple Pay</p>
              <p className="text-[#cdd4df] text-[12.5px] font-medium leading-[18px] tracking-[0.5px]">Pay via Apple Pay</p>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              <SarSymbol />
              <p className="text-white text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">150</p>
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-[#5f1896] border border-[#eef1f6] rounded-[8px] px-3 py-2 w-full text-left"
          >
            <div className="w-[72px] h-[48px] relative shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[21px] w-[72px] relative">
                  <img alt="STC Pay" className="absolute inset-0 size-full max-w-none block" src={imgStcPay} />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-white text-[15.5px] font-bold leading-[22px] tracking-[0.1px]">STC Pay</p>
              <p className="text-[#cdd4df] text-[12.5px] font-medium leading-[18px] tracking-[0.5px]">Pay via STC Pay</p>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              <SarSymbol />
              <p className="text-white text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">150</p>
            </div>
          </button>

          <div className="flex flex-col gap-1.5 bg-white border border-[#eef1f6] rounded-[8px] px-3 py-2">
            <p className="text-[#121a26] text-[15.5px] font-semibold leading-[22px] tracking-[0.25px]">Credit / Debit card</p>
            <div className="flex gap-1 items-center">
              <div className="w-[34px] h-[24px] relative rounded-[4px] overflow-hidden border border-[#f5f5f5] bg-[#1f72cd] shrink-0">
                <img alt="Amex" className="absolute inset-0 size-full max-w-none block" src={imgAmex} />
              </div>
              <div className="w-[34px] h-[24px] relative rounded-[4px] overflow-hidden border border-[#f5f5f5] bg-white shrink-0 flex items-center justify-center px-1.5 py-1">
                <img alt="Mastercard" className="block h-[13.4px] w-[22px]" src={imgMastercard} />
              </div>
              <div className="w-[34px] h-[24px] relative rounded-[4px] overflow-hidden border border-[#f5f5f5] bg-white shrink-0">
                <img alt="Visa" className="absolute inset-0 size-full max-w-none block" src={imgVisa} />
              </div>
              <div className="w-[34px] h-[23.4px] rounded-[4px] border border-[#f5f5f5] bg-white shrink-0 flex items-center justify-center px-1.5 py-1">
                <img alt="Mada" className="block h-[9px] w-[24px]" src={imgMada} />
              </div>
              <div className="w-[34px] h-[24px] rounded-[4px] border border-[#f5f5f5] bg-white shrink-0 flex items-center justify-center px-1.5 py-1">
                <img alt="UnionPay" className="block h-[14px] w-[21px]" src={imgUnionPay} />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[34px] relative">
          <div className="absolute bottom-2 left-[32%] right-[32%] h-[5px] bg-black rounded-full" />
        </div>

        {showForm && (
          <>
            <div className="absolute inset-0 bg-[#0d131c] opacity-50 z-10" onClick={() => setShowForm(false)} />
            <StcPayForm onClose={() => setShowForm(false)} />
          </>
        )}
      </div>
    </div>
  );
}
