import { headers } from 'next/headers';

const imgApplePay    = "http://localhost:3845/assets/7af2d423cd6a99828cfac01cf7b71aca74243fd7.svg";
const imgStcPay      = "http://localhost:3845/assets/c3e7678ec763b30b0620df0e5e392d85d540feb9.svg";
const imgAmex        = "http://localhost:3845/assets/ef31a6bbdebe2419092be657fc8e2e76ad861d9a.svg";
const imgMastercard  = "http://localhost:3845/assets/361286fc5c9b281d30995b65c523a334eb96a1aa.svg";
const imgVisa        = "http://localhost:3845/assets/78b5dadee8e42f752be9bcfc98dd139ac3bcf29b.svg";
const imgMada        = "http://localhost:3845/assets/dba994955adae3a504d5068b5f73d7b533d2cade.svg";
const imgSarTop      = "http://localhost:3845/assets/7480f49b9c396b960ab1d5c7d87981a736d58847.svg";
const imgSarBottom   = "http://localhost:3845/assets/3d9ce772c74eeb1f9c6e334897c3ff9e19989abc.svg";
const imgStatusTime  = "http://localhost:3845/assets/d9802173c52a1e99f0b08b5c4980b15b1da2cf4a.svg";
const imgBattery     = "http://localhost:3845/assets/9f4c5ec1a515760208346507c7774f8d4828ab52.svg";
const imgBatteryNub  = "http://localhost:3845/assets/12b81915f261f2ee71c2a998d0b15abd22bab1d5.svg";
const imgBatteryFill = "http://localhost:3845/assets/30b0b7670f77d5b9d1764ec82b060200f6b24acc.svg";
const imgWifi        = "http://localhost:3845/assets/4ce729f4a553df3008816d044113238095ab8ffb.svg";
const imgSignal      = "http://localhost:3845/assets/cc43c48fea24a10ea47762b8694e792b4ea48b42.svg";

function SarSymbol() {
  return (
    <div className="h-[18px] w-[16px] relative shrink-0 overflow-clip">
      <div className="absolute inset-[81.41%_0_0_58.82%]">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgSarTop} />
      </div>
      <div className="absolute inset-[0_0_7.54%_0]">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgSarBottom} />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="h-[38px] w-full overflow-clip relative shrink-0">
      <div className="absolute left-[33px] top-1/2 -translate-y-1/2 h-[11px] w-[28px]">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgStatusTime} />
      </div>
      <div className="absolute right-[17px] top-1/2 -translate-y-1/2 h-[11px] w-[22px]">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgBattery} />
      </div>
      <div className="absolute right-[15px] top-1/2 -translate-y-1/2 h-[4px] w-[1.3px]">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgBatteryNub} />
      </div>
      <div className="absolute right-[19px] top-1/2 -translate-y-1/2 h-[7px] w-[18px]">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgBatteryFill} />
      </div>
      <div className="absolute right-[44px] top-1/2 -translate-y-1/2 h-[11px] w-[15px]">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgWifi} />
      </div>
      <div className="absolute right-[64px] top-1/2 -translate-y-1/2 h-[11px] w-[17px]">
        <img alt="" className="absolute inset-0 size-full max-w-none block" src={imgSignal} />
      </div>
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

          {/* Apple Pay */}
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
              <SarSymbol />
              <p className="text-white text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">150</p>
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

export default async function PayIosPage() {
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
