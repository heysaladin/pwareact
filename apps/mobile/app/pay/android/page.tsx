import { headers } from 'next/headers';

const imgStcPay     = "/pay/stc-pay.svg";
const imgSamsungPay = "/pay/samsung-pay.svg";
const imgAmex       = "/pay/card-amex.svg";
const imgMastercard = "/pay/card-mastercard.svg";
const imgVisa       = "/pay/card-visa.svg";
const imgMada       = "/pay/card-mada.svg";
const imgUnionPay   = "/pay/card-unionpay.svg";
const imgSar        = "/pay/sar.svg";
const imgStatusBar  = "/pay/status-bar.svg";

function SarSymbol({ dark }: { dark?: boolean }) {
  return (
    <div className="h-[18px] w-[16px] relative shrink-0 overflow-clip">
      <img
        alt=""
        className="absolute inset-0 size-full max-w-none block"
        src={imgSar}
        style={dark ? undefined : { filter: 'invert(1)' }}
      />
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

function Screen({ mobile }: { mobile: boolean }) {
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

          {/* STC Pay */}
          <div className="flex items-center gap-2 bg-[#5f1896] border border-[#eef1f6] rounded-[8px] px-3 py-2">
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
              <SarSymbol dark />
              <p className="text-white text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">150</p>
            </div>
          </div>

          {/* Samsung Pay */}
          <div className="flex items-center gap-2 bg-white border border-[#eef1f6] rounded-[8px] px-3 py-2">
            <div className="w-[72px] flex items-center shrink-0">
              <div className="relative size-[48px]">
                <img alt="Samsung Pay" className="absolute inset-0 size-full max-w-none block" src={imgSamsungPay} />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-black text-[15.5px] font-bold leading-[22px] tracking-[0.1px]">Samsung Pay</p>
              <p className="text-[#9aa4b2] text-[12.5px] font-medium leading-[18px] tracking-[0.5px]">Pay via Samsung Pay</p>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              <SarSymbol />
              <p className="text-black text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">150</p>
            </div>
          </div>

          {/* Credit / Debit card */}
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
      </div>
    </div>
  );
}

export default async function PayAndroidPage() {
  const ua = (await headers()).get('user-agent') ?? '';
  const mobile = /android|iphone|ipad|ipod/i.test(ua);

  if (mobile) {
    return <Screen mobile />;
  }

  return (
    <div className="min-h-screen bg-[#eef1f6] flex items-start justify-center">
      <Screen mobile={false} />
    </div>
  );
}
