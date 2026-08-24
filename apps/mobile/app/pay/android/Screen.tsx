'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const imgStcPay      = "/pay/stc-pay.svg";
const imgStcPayLight = "/pay/stc-pay-light.svg";
const imgSamsungPay  = "/pay/samsung-pay.svg";
const imgAmex        = "/pay/card-amex.svg";
const imgMastercard  = "/pay/card-mastercard.svg";
const imgVisa        = "/pay/card-visa.svg";
const imgMada        = "/pay/card-mada.svg";
const imgUnionPay    = "/pay/card-unionpay.svg";
const imgSar         = "/pay/sar.svg";
const imgStatusBar   = "/pay/bar-android.png";
const imgCheckoutEn  = "/pay/CO-en.png";
const imgCheckoutAr  = "/pay/CO-ar.png";

const sheetStyle = `
  @keyframes sheet-up {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }
`;

function SarSymbol({ light }: { light?: boolean }) {
  return (
    <div className="h-[18px] w-[16px] relative shrink-0 overflow-clip">
      <img
        alt=""
        className="absolute inset-0 size-full max-w-none block"
        src={imgSar}
        style={light ? { filter: 'invert(1)' } : undefined}
      />
    </div>
  );
}

function MoyasarStcSheet({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-20 bg-white rounded-t-[24px]"
      style={{ height: '193px', animation: 'sheet-up 0.35s cubic-bezier(0.32,0.72,0,1) both' }}
    >
      {/* Drag handle — 40px */}
      <div className="flex flex-col items-center justify-center h-[40px]">
        <div className="w-12 h-1 bg-[#9aa4b2] rounded-full" />
      </div>
      {/* Content — starts at y=60, gap of 20px from drag handle */}
      <div className="flex flex-col gap-[16px] items-start px-[24px] mt-[20px]">
        {/* Purple STC Pay button — h=44px */}
        <button
          onClick={onConfirm}
          className="w-full h-[44px] bg-[#5f1896] rounded-[8px] flex items-center justify-center"
        >
          <div className="h-[16px] w-[55px] relative overflow-clip shrink-0">
            <img alt="STC Pay" className="absolute inset-0 size-full max-w-none block" src="/pay/stc-pay-button.svg" />
          </div>
        </button>
        {/* Powered by Moyasar — pt-8px, centered */}
        <div className="flex items-center justify-center w-full pt-[8px]">
          <img alt="Powered by Moyasar" src="/pay/moyasar-white.svg" style={{ height: '11px', width: '139px' }} />
        </div>
      </div>
    </div>
  );
}

const spinKeyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;

function StcPayForm({ onClose, ar, customer }: { onClose: () => void; ar?: boolean; customer?: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (customer) {
      const t = setTimeout(() => setPhone('0515555555'), 600);
      return () => clearTimeout(t);
    }
  }, [customer]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  function handlePay() {
    if (loading) return;
    setLoading(true);
    timerRef.current = setTimeout(() => {
      const qs = ar ? '?lang=ar' : '';
      router.push(`/pay/success${qs}`);
    }, 1800);
  }

  return (
    <>
      <style>{spinKeyframes}</style>
      <div
        className="absolute bottom-0 left-0 right-0 z-20 bg-[#f1f5f9] rounded-t-[8px] flex flex-col gap-4 p-4"
        style={{ height: '204px', animation: 'sheet-up 0.35s cubic-bezier(0.32,0.72,0,1) both' }}
        dir={ar ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between w-full">
          <div className="w-[59px] h-[20px] relative shrink-0 overflow-clip">
            <img alt="STC Pay" className="absolute inset-0 size-full max-w-none block" src={imgStcPayLight} />
          </div>
          <button onClick={onClose} className="text-[rgba(26,26,26,0.9)] text-base leading-4 tracking-[-0.3125px]">
            {ar ? 'إلغاء' : 'Cancel'}
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col w-full">
            <p className="text-[rgba(26,26,26,0.9)] text-[12px] font-medium leading-4">{ar ? 'رقم الجوال' : 'Mobile number'}</p>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="05x xxx xxxx"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="mt-2 h-9 bg-white rounded-[8px] px-4 w-full text-[14px] text-center tracking-[-0.15px] text-[#121a26] placeholder:text-[#d1d5db] shadow-[0px_0px_0px_1px_#cdd4df,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] outline-none focus:shadow-[0px_0px_0px_2px_#5f1896]"
            />
          </div>
          <button
            onClick={handlePay}
            className="h-11 rounded-[8px] flex items-center justify-center gap-[4.8px] w-full"
            style={{ backgroundColor: loading ? '#000' : '#5f1896' }}
          >
            <p className="text-white text-base leading-4 tracking-[-0.3125px]">Pay</p>
            <div className="flex items-center gap-1">
              <SarSymbol light />
              <p className="text-white text-base leading-4 tracking-[-0.3125px]">150.00</p>
            </div>
            {loading && (
              <div
                className="w-[16px] h-[16px] rounded-full border-2 border-white border-t-transparent shrink-0"
                style={{ animation: 'spin 0.8s linear infinite' }}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

function PaymentSheet({ onClose, onStc, ar }: { onClose: () => void; onStc: () => void; ar: boolean }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-20 bg-white rounded-t-[24px]"
      style={{ animation: 'sheet-up 0.35s cubic-bezier(0.32,0.72,0,1) both' }}
      dir={ar ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col items-center pt-3 pb-6 px-3">
        <div className="w-12 h-1 bg-[#9aa4b2] rounded-full" />
      </div>
      <div className="flex flex-col gap-4 px-6 pb-2">
        <p className="text-[23.5px] font-semibold text-[#4b5565] text-center leading-[30px]">
          {ar ? 'ادفع بـ' : 'Pay with'}
        </p>

        {/* STC Pay */}
        <button
          onClick={onStc}
          className="flex items-center gap-2 bg-[#5f1896] border border-[#eef1f6] rounded-[8px] px-3 py-2 w-full"
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
            <p className="text-[#cdd4df] text-[12.5px] font-medium leading-[18px] tracking-[0.5px]">
              {ar ? 'ادفع عن طريق STC Pay' : 'Pay via STC Pay'}
            </p>
          </div>
          <div className="flex items-center gap-0.5 shrink-0">
            <SarSymbol light />
            <p className="text-white text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">150</p>
          </div>
        </button>

        {/* Samsung Pay */}
        <div className="flex items-center gap-2 bg-white border border-[#eef1f6] rounded-[8px] px-3 py-2">
          <div className="w-[72px] flex items-center shrink-0">
            <div className="relative size-[48px]">
              <img alt="Samsung Pay" className="absolute inset-0 size-full max-w-none block" src={imgSamsungPay} />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-black text-[15.5px] font-bold leading-[22px] tracking-[0.1px]">Samsung Pay</p>
            <p className="text-[#9aa4b2] text-[12.5px] font-medium leading-[18px] tracking-[0.5px]">
              {ar ? 'ادفع عن طريق Samsung Pay' : 'Pay via Samsung Pay'}
            </p>
          </div>
          <div className="flex items-center gap-0.5 shrink-0">
            <SarSymbol />
            <p className="text-black text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">150</p>
          </div>
        </div>

        {/* Credit / Debit card */}
        <div className="flex flex-col gap-1.5 bg-white border border-[#eef1f6] rounded-[8px] px-3 py-2">
          <p className="text-[#121a26] text-[15.5px] font-semibold leading-[22px] tracking-[0.25px]">
            {ar ? 'بطاقة ائتمان / مدى' : 'Credit / Debit card'}
          </p>
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
    </div>
  );
}

export function Screen({ mobile }: { mobile: boolean }) {
  const params = useSearchParams();
  const ar = params.get('lang') === 'ar';
  const preferred = params.get('preferred') === '1';
  const customer = params.get('customer') === '1';
  const [sheet, setSheet] = useState<'none' | 'payment' | 'stc-moyasar' | 'stc'>('none');

  return (
    <div
      className="relative flex flex-col bg-white overflow-hidden"
      style={{
        width: mobile ? '100%' : '375px',
        height: mobile ? '100svh' : '812px',
      }}
    >
      {/* Status bar */}
      <div className="h-[38px] w-full overflow-clip relative shrink-0 z-10">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgStatusBar} />
      </div>

      {/* Scrollable checkout image */}
      <div className="flex-1 overflow-y-auto" style={{ paddingBottom: '148px', scrollbarWidth: 'none' }}>
        <img
          alt="Checkout"
          src={ar ? imgCheckoutAr : imgCheckoutEn}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Sticky CTA */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white flex flex-col items-center gap-3 px-6 pt-3 pb-0" dir={ar ? 'rtl' : 'ltr'}>
        <p className="text-[13.5px] font-medium leading-[18px] tracking-[0.4px] text-[#364152] text-center">
          {ar
            ? <>بالدفع، أنت تقر بأن الدفع غير قابل للاسترداد. <span className="text-[#0063f5]">اقرأ المزيد</span></>
            : <>By paying, you acknowledge the payment is non-refundable. <span className="text-[#0063f5]">Read More</span></>
          }
        </p>
        <button
          onClick={() => setSheet('payment')}
          className="w-full min-h-[46px] rounded-[8px] flex items-center justify-center border-2 border-white/10"
          style={{ backgroundColor: '#ffdd33' }}
        >
          <span className="text-[#121a26] text-[13.5px] font-semibold leading-[18px] tracking-[0.5px]">
            {ar ? 'ادفع الآن' : 'Pay with'}
          </span>
        </button>
        <div className="w-full h-[34px] relative">
          <div className="absolute bottom-2 left-[32%] right-[32%] h-[5px] bg-black rounded-full" />
        </div>
      </div>

      {/* Overlays */}
      {sheet !== 'none' && (
        <>
          <style>{sheetStyle}</style>
          <div
            className="absolute inset-0 bg-[#0d131c] opacity-50 z-10"
            onClick={() => setSheet('none')}
          />
          {sheet === 'payment' && (
            <PaymentSheet
              onClose={() => setSheet('none')}
              onStc={() => preferred ? setSheet('stc') : setSheet('stc-moyasar')}
              ar={ar}
            />
          )}
          {sheet === 'stc-moyasar' && (
            <MoyasarStcSheet onConfirm={() => setSheet('stc')} />
          )}
          {sheet === 'stc' && (
            <StcPayForm onClose={() => setSheet('none')} ar={ar} customer={customer} />
          )}
        </>
      )}
    </div>
  );
}
