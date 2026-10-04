'use client';

import { useSearchParams } from 'next/navigation';

// ── EN assets ──────────────────────────────────────────────────────────────
const imgGroup6429          = "/result/group6429.svg";
const imgFill100ActiveYes   = "/result/fill-active.svg";
const imgLogo1              = "/result/logo.png";
const imgStarIconFill12No   = "/result/star.svg";
const imgChevronRight       = "/result/chevron-right.svg";
const imgImage1             = "/result/image1.png";
const imgFirstAbuDhabiBankLogo1 = "/result/bank-logo.png";
const imgImage2             = "/result/image2.png";
const imgInfoCircle         = "/result/info-circle.svg";
const imgHeartRounded       = "/result/heart.svg";
const imgSeparator          = "/result/separator.svg";
const imgArrowRight         = "/result/arrow-right.svg";
const imgArrowRight1        = "/result/arrow-right1.svg";
const imgArrowRight2        = "/result/arrow-right2.svg";
const imgRectangle          = "/result/rect.svg";
const imgCombinedShape      = "/result/combined-shape.svg";
const imgRectangle1         = "/result/rect1.svg";
const imgWifi               = "/result/wifi.svg";
const imgMobileSignal       = "/result/mobile-signal.svg";
const img941                = "/result/941.svg";
const imgBackIcon           = "/result/back-icon.svg";
const imgHome05             = "/result/home05.svg";
const imgIconEligible       = "/result/icon-eligible.svg";
const imgRectangle2379      = "/result/rect2379.svg";
const imgUnion              = "/result/union.svg";
const imgMaskGroup          = "/result/mask-group.svg";
const imgRectangle2380      = "/result/rect2380.svg";
const imgVector1020         = "/result/vector1020.svg";
const imgGroup5484          = "/result/group5484.svg";
const imgGroup5486          = "/result/group5486.svg";
const imgGroup5488          = "/result/group5488.svg";
const imgGroup5485          = "/result/group5485.svg";
const imgGroup5693          = "/result/group5693.svg";
const imgGroup5694          = "/result/group5694.svg";
const imgGroup5495          = "/result/group5495.svg";
const imgGroup5494          = "/result/group5494.svg";
const imgGroup5497          = "/result/group5497.svg";
const imgChevronRight1      = "/result/chevron-right1.svg";
const imgFrame6360          = "/result/frame6360.svg";

// ── AR-only assets ─────────────────────────────────────────────────────────
const imgChevronLeft        = "/result/chevron-left.svg";
const imgArrowLeft          = "/result/arrow-left.svg";
const imgArrowLeft1         = "/result/arrow-left1.svg";
const imgArrowLeft2         = "/result/arrow-left2.svg";
const imgChevronRightIcon   = "/result/chevron-right-ar.svg";

// ── SAR symbol (inline SVG — replaces private-use U+E902) ──────────────────
function SarIcon({ size = 13, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ direction: 'ltr', display: 'inline-block', flexShrink: 0 }}>
      <path d="M4.5 3 L4.5 10.5 Q4.5 13 8 13 Q11.5 13 11.5 10.5 L11.5 9.5" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <line x1="3" y1="6.5" x2="13" y2="6.5" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="3" y1="9" x2="13" y2="9" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function ExecutionTimeIcon({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"}>
      <div className="absolute inset-[12.5%_0.43%_-0.67%_1.62%]">
        <div className="absolute inset-[-3.55%_0_0_-3.19%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup6429} />
        </div>
      </div>
    </div>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFill100ActiveYes} />
    </div>
  );
}

function LogoBank({ className }: { className?: string }) {
  return (
    <div className={className || "h-[100px] overflow-clip relative w-[250px]"}>
      <div className="absolute inset-[12%_2.98%_13%_2.62%]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
    </div>
  );
}

function StarIconFill12No({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStarIconFill12No} />
    </div>
  );
}

function IPhoneMockupStatusBar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] overflow-clip relative w-[375px]"}>
      <div className="-translate-y-1/2 absolute contents right-[14.67px] top-[calc(50%+4px)]">
        <div className="-translate-y-1/2 absolute contents right-[14.67px] top-[calc(50%+4px)]">
          <div className="-translate-y-1/2 absolute h-[11.333px] right-[17px] top-[calc(50%+4px)] w-[22px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle} />
          </div>
          <div className="-translate-y-1/2 absolute h-[4px] right-[14.67px] top-[calc(50%+4px)] w-[1.328px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCombinedShape} />
          </div>
          <div className="-translate-y-1/2 absolute h-[7.333px] right-[19px] top-[calc(50%+4px)] w-[18px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle1} />
          </div>
        </div>
        <div className="-translate-y-1/2 absolute h-[10.966px] right-[44.03px] top-[calc(50%+3.81px)] w-[15.272px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
        </div>
        <div className="-translate-y-1/2 absolute h-[10.667px] right-[64.33px] top-[calc(50%+4px)] w-[17px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMobileSignal} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute contents left-[33.45px] top-[calc(50%+3.71px)]">
        <div className="-translate-y-1/2 absolute h-[11.089px] left-[33.45px] top-[calc(50%+3.71px)] w-[28.426px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img941} />
        </div>
      </div>
    </div>
  );
}

// ── Decoration / car illustration ──────────────────────────────────────────
function CategoryDecoration() {
  return (
    <div className="absolute bg-[var(--brand\/600,#0063f5)] h-[112px] left-0 overflow-clip rounded-bl-[48px] rounded-br-[48px] top-0 w-[375px]">
      <div className="absolute left-[-6px] overflow-clip size-[107px] top-[17px]">
        <div className="absolute left-0 overflow-clip size-[107px] top-0">
          <div className="absolute contents left-[0.12px] top-[1.3px]">
            <div className="absolute flex h-[87.485px] items-center justify-center left-[3.03px] top-[19.59px] w-[101.066px]">
              <div className="flex-none rotate-[59.97deg] skew-x-[-0.06deg]">
                <div className="h-[87.428px] relative w-[50.607px]">
                  <div className="absolute inset-[2.77%_0_2.7%_0]">
                    <img alt="" className="block max-w-none size-full" src={imgRectangle2379} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[71.453px] left-[5.35px] top-[12.26px] w-[96.341px]">
              <div className="absolute inset-[-1.15%_-0.85%]">
                <img alt="" className="block max-w-none size-full" src={imgUnion} />
              </div>
            </div>
            <div className="absolute h-[61.319px] left-[5.35px] top-[22.63px] w-[48.15px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaskGroup} />
            </div>
            <div className="absolute flex h-[89.166px] items-center justify-center left-[2.06px] top-[6.17px] w-[103.008px]">
              <div className="flex-none rotate-[59.97deg] skew-x-[-0.06deg]">
                <div className="h-[89.108px] relative w-[51.579px]">
                  <div className="absolute inset-[2.25%_-0.75%_2.19%_-0.8%]">
                    <img alt="" className="block max-w-none size-full" src={imgRectangle2380} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[33.952px] left-[2.06px] top-[33.75px] w-[70.167px]">
              <div className="absolute inset-[0_0_0_4.6%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1020} />
              </div>
            </div>
            <div className="absolute flex h-[13.949px] items-center justify-center left-[88.89px] top-[38.68px] w-[15.937px]">
              <div className="flex-none rotate-[-20.75deg]">
                <div className="h-[9.877px] relative w-[13.3px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5484} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[15.128px] items-center justify-center left-[52.75px] top-[1.3px] w-[16.433px]">
              <div className="flex-none rotate-[29.35deg]">
                <div className="h-[9.877px] relative w-[13.299px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5486} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[14.44px] items-center justify-center left-[23.04px] top-[45.68px] w-[16.171px]">
              <div className="flex-none rotate-[24.04deg]">
                <div className="h-[9.878px] relative w-[13.301px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5488} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[14.72px] items-center justify-center left-[0.12px] top-[24.25px] w-[16.288px]">
              <div className="flex-none rotate-[-26.1deg]">
                <div className="h-[9.877px] relative w-[13.299px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5485} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[9.06px] top-[11.93px]">
              <div className="absolute h-[32.009px] left-[9.06px] top-[11.93px] w-[45.46px]">
                <div className="absolute inset-[-0.26%_0_-0.74%_0]">
                  <img alt="" className="block max-w-none size-full" src={imgGroup5693} />
                </div>
              </div>
              <div className="absolute h-[58.077px] left-[42.09px] top-[15.18px] w-[57.232px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5694} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[340px] overflow-clip size-[72.284px] top-[121px]">
        <div className="absolute h-[68.165px] left-[1.39px] top-[4.17px] w-[69.587px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5495} />
        </div>
      </div>
      <div className="absolute left-[-29px] overflow-clip size-[86.284px] top-[162px]">
        <div className="absolute h-[81.368px] left-[1.66px] top-[4.98px] w-[83.23px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5494} />
        </div>
      </div>
      <div className="absolute left-[278px] overflow-clip size-[93px] top-[32.28px]">
        <div className="absolute h-[88.254px] left-[1.79px] top-[4.81px] w-[89.532px]">
          <div className="absolute inset-[-0.15%_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgGroup5497} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── EN ProductCard (compare) ────────────────────────────────────────────────
function ProductCardEN({ cardName, type = "Car Loan" }: {
  cardName: "Compare + Less than" | "Compare + Equal" | "Compare + More Than";
  type?: "Car Loan" | "Real Estate Loan";
}) {
  const isEqual   = cardName === "Compare + Equal"    && type === "Real Estate Loan";
  const isMoreThan = cardName === "Compare + More Than" && type === "Real Estate Loan";
  const isLess    = cardName === "Compare + Less than" && type === "Car Loan";
  const isRealEstate = isEqual || isMoreThan;

  if (isRealEstate) {
    return (
      <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0 w-[343px]">
        {/* Left side */}
        <div className="bg-[var(--base\/white,white)] content-stretch drop-shadow-[0px_4px_2px_rgba(8,70,131,0.02)] flex flex-col items-start relative rounded-[var(--spacing\/12,12px)] shrink-0 w-[158.5px]">
          <div className="content-stretch flex flex-col gap-[var(--spacing\/2,2px)] items-center justify-center pb-[var(--spacing\/6,6px)] pt-[var(--spacing\/8,8px)] px-[var(--spacing\/8,8px)] relative shrink-0 w-full">
            <LogoBank className="h-[36px] overflow-clip relative shrink-0 w-[90px]" />
            <p className="[word-break:break-word] font-medium leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12.5px] text-[#121a26] text-center text-ellipsis tracking-[0.5px] w-[min-content]">Real Estate Financing for Home Buyers</p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pb-[8px] pt-[6px] px-[8px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center justify-center p-[0px] relative shrink-0 text-center w-full">
              <p className={`font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] ${isMoreThan ? "w-full" : "min-w-full w-[min-content]"}`}>Loan amount</p>
              <p className={`font-bold leading-[22px] relative shrink-0 text-[15.5px] tracking-[0.1px] ${isMoreThan ? "text-[#d91c1c] w-full" : "min-w-full text-[#0063f5] w-[min-content]"}`}><SarIcon size={13} color="currentColor" />99,999,999.99</p>
            </div>
            <div className={`[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center justify-center p-[0px] relative shrink-0 w-full ${isMoreThan ? "" : "h-[57px]"}`}>
              <p className="font-medium leading-[18px] min-w-full relative shrink-0 text-[#697586] text-[12.5px] text-center tracking-[0.5px] w-[min-content]">Installment</p>
              <p className={`font-bold leading-[22px] min-w-full relative shrink-0 text-[15.5px] text-center tracking-[0.1px] w-[min-content] ${isMoreThan ? "text-[#d91c1c]" : "text-[#0063f5]"}`}><SarIcon size={13} color="currentColor" />99,999.99</p>
              <p className={`font-medium leading-[18px] relative shrink-0 text-[12.5px] tracking-[0.5px] whitespace-nowrap ${isMoreThan ? "text-[#d91c1c]" : "text-[#0063f5]"}`}>For 999 mos</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] whitespace-nowrap">APR</p>
                <p className={`[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap ${isMoreThan ? "text-[#d91c1c]" : "text-[#0063f5]"}`}>99.99%</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] whitespace-nowrap">Saved</p>
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[2px] items-center justify-end min-w-px relative">
                  <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[#0063f5] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap"><SarIcon size={13} color="currentColor" />10000</p>
                  <div className="bg-[#079455] content-stretch flex items-center justify-center px-[2px] py-[0px] relative rounded-[4px] shrink-0">
                    <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-white text-[12.5px] tracking-[0.5px] whitespace-nowrap">-86%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[12px] pt-[4px] px-[8px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                  <StarIcon className="relative shrink-0 size-[18px]" />
                  <p className="[word-break:break-word] font-medium leading-[22px] relative shrink-0 text-[#364152] text-[15.5px] text-center tracking-[0.1px] whitespace-nowrap">5.0</p>
                </div>
              </div>
              <ExecutionTimeIcon className="relative shrink-0 size-[26px]" />
            </div>
          </div>
        </div>
        {/* Arrow */}
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="content-stretch flex gap-[8px] items-start pb-[0px] pt-[24px] px-[0px] relative">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={isMoreThan ? imgArrowRight1 : imgArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="bg-[var(--base\/white,white)] content-stretch drop-shadow-[0px_4px_2px_rgba(8,70,131,0.02)] flex flex-col items-start relative rounded-[var(--spacing\/12,12px)] shrink-0 w-[158.5px]">
          <div className="content-stretch flex flex-col gap-[2px] items-center justify-center pb-[6px] pt-[8px] px-[8px] relative shrink-0 w-full">
            <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
              {isEqual && (
                <div className="absolute inset-[1%_2.58%_14%_2.22%]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                </div>
              )}
              {isMoreThan && (
                <div className="absolute inset-[7%_20.58%_7%_20.62%]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFirstAbuDhabiBankLogo1} />
                </div>
              )}
            </div>
            <p className="[word-break:break-word] font-medium leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12.5px] text-[#121a26] text-center text-ellipsis tracking-[0.5px] w-[min-content]">Real Estate Financing for Home Buyers</p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pb-[8px] pt-[6px] px-[8px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center justify-center p-[0px] relative shrink-0 text-center w-full">
              <p className={`font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] ${isMoreThan ? "w-full" : "min-w-full w-[min-content]"}`}>Loan amount</p>
              <p className={`font-bold leading-[22px] relative shrink-0 text-[15.5px] tracking-[0.1px] ${isMoreThan ? "text-[#079455] w-full" : "min-w-full text-[#0063f5] w-[min-content]"}`}><SarIcon size={13} color="currentColor" />99,999,999.99</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] h-[57px] items-center justify-center p-[0px] relative shrink-0 w-full">
              <p className="font-medium leading-[18px] min-w-full relative shrink-0 text-[#697586] text-[12.5px] text-center tracking-[0.5px] w-[min-content]">Installment</p>
              <p className={`font-bold leading-[22px] min-w-full relative shrink-0 text-[15.5px] text-center tracking-[0.1px] w-[min-content] ${isMoreThan ? "text-[#079455]" : "text-[#0063f5]"}`}><SarIcon size={13} color="currentColor" />99,999.99</p>
              <p className={`font-medium leading-[18px] relative shrink-0 text-[12.5px] tracking-[0.5px] whitespace-nowrap ${isMoreThan ? "text-[#079455]" : "text-[#0063f5]"}`}>For 999 mos</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] whitespace-nowrap">APR</p>
                <p className={`[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap ${isMoreThan ? "text-[#079455]" : "text-[#0063f5]"}`}>99.99%</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] whitespace-nowrap">Saved</p>
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[2px] items-center justify-end min-w-px relative">
                  <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[#0063f5] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap"><SarIcon size={13} color="currentColor" />10000</p>
                  <div className="bg-[#079455] content-stretch flex items-center justify-center px-[2px] py-[0px] relative rounded-[4px] shrink-0">
                    <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-white text-[12.5px] tracking-[0.5px] whitespace-nowrap">-86%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[12px] pt-[4px] px-[8px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                  <StarIcon className="relative shrink-0 size-[18px]" />
                  <p className="[word-break:break-word] font-medium leading-[22px] relative shrink-0 text-[#364152] text-[15.5px] text-center tracking-[0.1px] whitespace-nowrap">5.0</p>
                </div>
              </div>
              <ExecutionTimeIcon className="relative shrink-0 size-[26px]" />
            </div>
            <div className="bg-white border border-[#0063f5] border-solid content-stretch flex gap-[2px] items-center justify-center max-h-[36px] min-h-[36px] min-w-[90px] overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0">
                <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[#0063f5] text-[13.5px] tracking-[0.5px] whitespace-nowrap">Select</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Compare + Less than Car Loan
  if (isLess) {
    return (
      <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0 w-[343px]">
        <div className="bg-[var(--base\/white,white)] content-stretch drop-shadow-[0px_4px_2px_rgba(8,70,131,0.02)] flex flex-col items-start relative rounded-[var(--spacing\/12,12px)] shrink-0 w-[158.5px]">
          <div className="content-stretch flex flex-col gap-[2px] items-center justify-center pb-[6px] pt-[8px] px-[8px] relative shrink-0 w-full">
            <LogoBank className="h-[36px] overflow-clip relative shrink-0 w-[90px]" />
            <p className="[word-break:break-word] font-medium leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12.5px] text-[#121a26] text-center text-ellipsis tracking-[0.5px] w-[min-content]">{`Car/EV Financing for Family & Employee`}</p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pb-[8px] pt-[6px] px-[8px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center justify-center p-[0px] relative shrink-0 text-center w-full">
              <p className="font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] w-full">Loan amount</p>
              <p className="font-bold leading-[22px] relative shrink-0 text-[#079455] text-[15.5px] tracking-[0.1px] w-full"><SarIcon size={13} color="currentColor" />99,999,999.99</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center justify-center p-[0px] relative shrink-0 w-full">
              <p className="font-medium leading-[18px] min-w-full relative shrink-0 text-[#697586] text-[12.5px] text-center tracking-[0.5px] w-[min-content]">Installment</p>
              <p className="font-bold leading-[22px] min-w-full relative shrink-0 text-[#079455] text-[15.5px] text-center tracking-[0.1px] w-[min-content]"><SarIcon size={13} color="currentColor" />99,999.99</p>
              <p className="font-medium leading-[18px] relative shrink-0 text-[#079455] text-[12.5px] tracking-[0.5px] whitespace-nowrap">For 999 mos</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] whitespace-nowrap">APR</p>
                <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[#079455] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap">99.99%</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] whitespace-nowrap">Saved</p>
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[2px] items-center justify-end min-w-px relative">
                  <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[#0063f5] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap"><SarIcon size={13} color="currentColor" />10000</p>
                  <div className="bg-[#079455] content-stretch flex items-center justify-center px-[2px] py-[0px] relative rounded-[4px] shrink-0">
                    <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-white text-[12.5px] tracking-[0.5px] whitespace-nowrap">-86%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[12px] pt-[4px] px-[8px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                  <StarIcon className="relative shrink-0 size-[18px]" />
                  <p className="[word-break:break-word] font-medium leading-[22px] relative shrink-0 text-[#364152] text-[15.5px] text-center tracking-[0.1px] whitespace-nowrap">5.0</p>
                </div>
              </div>
              <ExecutionTimeIcon className="relative shrink-0 size-[26px]" />
            </div>
          </div>
        </div>
        {/* Arrow */}
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="content-stretch flex gap-[8px] items-start pb-[0px] pt-[24px] px-[0px] relative">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="bg-[var(--base\/white,white)] content-stretch drop-shadow-[0px_4px_2px_rgba(8,70,131,0.02)] flex flex-col items-start relative rounded-[var(--spacing\/12,12px)] shrink-0 w-[158.5px]">
          <div className="content-stretch flex flex-col gap-[2px] items-center justify-center pb-[6px] pt-[8px] px-[8px] relative shrink-0 w-full">
            <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
              <div className="absolute inset-[7%_0.18%_27.08%_-0.18%]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
              </div>
            </div>
            <p className="[word-break:break-word] font-medium leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12.5px] text-[#121a26] text-center text-ellipsis tracking-[0.5px] w-[min-content]">{`Car/EV Financing for Family & Employee`}</p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pb-[8px] pt-[6px] px-[8px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center justify-center p-[0px] relative shrink-0 text-center w-full">
              <p className="font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] w-full">Loan amount</p>
              <p className="font-bold leading-[22px] relative shrink-0 text-[#d91c1c] text-[15.5px] tracking-[0.1px] w-full"><SarIcon size={13} color="currentColor" />99,999,999.99</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center justify-center p-[0px] relative shrink-0 w-full">
              <p className="font-medium leading-[18px] min-w-full relative shrink-0 text-[#697586] text-[12.5px] text-center tracking-[0.5px] w-[min-content]">Installment</p>
              <p className="font-bold leading-[22px] min-w-full relative shrink-0 text-[#d91c1c] text-[15.5px] text-center tracking-[0.1px] w-[min-content]"><SarIcon size={13} color="currentColor" />99,999.99</p>
              <p className="font-medium leading-[18px] relative shrink-0 text-[#d91c1c] text-[12.5px] tracking-[0.5px] whitespace-nowrap">For 999 mos</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] whitespace-nowrap">APR</p>
                <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[#d91c1c] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap">99.99%</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0.5px] whitespace-nowrap">Saved</p>
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[2px] items-center justify-end min-w-px relative">
                  <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[#0063f5] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap"><SarIcon size={13} color="currentColor" />10000</p>
                  <div className="bg-[#079455] content-stretch flex items-center justify-center px-[2px] py-[0px] relative rounded-[4px] shrink-0">
                    <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-white text-[12.5px] tracking-[0.5px] whitespace-nowrap">-86%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[12px] pt-[4px] px-[8px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                  <StarIcon className="relative shrink-0 size-[18px]" />
                  <p className="[word-break:break-word] font-medium leading-[22px] relative shrink-0 text-[#364152] text-[15.5px] text-center tracking-[0.1px] whitespace-nowrap">5.0</p>
                </div>
              </div>
              <ExecutionTimeIcon className="relative shrink-0 size-[26px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── AR ProductCard (compare, similar structure mirrored) ────────────────────
function ProductCardAR({ cardName, type = "Car Loan" }: {
  cardName: "Compare + Less than" | "Compare + Equal" | "Compare + More Than";
  type?: "Car Loan" | "Real Estate Loan";
}) {
  const isEqual    = cardName === "Compare + Equal"    && type === "Real Estate Loan";
  const isMoreThan = cardName === "Compare + More Than" && type === "Real Estate Loan";
  const isLess     = cardName === "Compare + Less than" && type === "Car Loan";
  const isRealEstate = isEqual || isMoreThan;

  const arrowSrc = isLess ? imgArrowLeft2 : isMoreThan ? imgArrowLeft1 : imgArrowLeft;

  const leftLoanText  = isRealEstate ? "مبلغ التمويل" : "مبلغ التمويل";
  const leftInstallText = isRealEstate ? "القسط" : "القسط";

  if (isRealEstate || isLess) {
    return (
      <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0 w-[343px]" dir="rtl">
        {/* Right side (appears first in RTL) */}
        <div className="bg-[var(--base\/white,white)] content-stretch drop-shadow-[0px_4px_2px_rgba(8,70,131,0.02)] flex flex-col items-start relative rounded-[var(--spacing\/12,12px)] shrink-0 w-[158.5px]">
          <div className="content-stretch flex flex-col gap-[2px] items-center justify-center pb-[6px] pt-[8px] px-[8px] relative shrink-0 w-full">
            {isLess ? (
              <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
                <div className="absolute inset-[7%_20.58%_7%_20.62%]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFirstAbuDhabiBankLogo1} />
                </div>
              </div>
            ) : isEqual ? (
              <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
                <div className="absolute inset-[7%_0.18%_27.08%_-0.18%]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                </div>
              </div>
            ) : (
              <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
                <div className="absolute inset-[1%_2.58%_14%_2.22%]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                </div>
              </div>
            )}
            <p className="[word-break:break-word] font-medium leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[12.5px] text-[#121a26] text-center text-ellipsis tracking-[0px] w-[min-content]" dir="auto">
              {isLess ? "السيارات الكهربائية للعائلات الكبيرة والموظفين" : "تمويل عقاري شامل لشراء وتملك المنازل السكنية"}
            </p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pb-[8px] pt-[6px] px-[8px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center p-[0px] relative shrink-0 text-center w-full">
              <p className={`font-medium leading-[20px] max-h-[18px] overflow-hidden relative shrink-0 text-[12.5px] text-[#697586] text-ellipsis tracking-[0px] ${isMoreThan ? "w-full" : "min-w-full w-[min-content]"}`} dir="auto">{leftLoanText}</p>
              <p className={`font-bold leading-[26px] relative shrink-0 text-[15.5px] tracking-[0px] ${isMoreThan ? "text-[#d91c1c] w-full" : isLess ? "text-[#d91c1c] w-full" : "min-w-full text-[#0063f5] w-[min-content]"}`}><SarIcon size={13} color="currentColor" />99,999,999.99</p>
            </div>
            <div className={`[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center p-[0px] relative shrink-0 w-full ${!isMoreThan && !isLess ? "h-[61px]" : ""}`}>
              <p className="font-medium leading-[20px] max-h-[18px] min-w-full overflow-hidden relative shrink-0 text-[12.5px] text-[#697586] text-center text-ellipsis tracking-[0px] w-[min-content]" dir="auto">{leftInstallText}</p>
              <p className={`font-bold leading-[26px] min-w-full relative shrink-0 text-[15.5px] text-center tracking-[0px] w-[min-content] ${isMoreThan || isLess ? "text-[#d91c1c]" : "text-[#0063f5]"}`}><SarIcon size={13} color="currentColor" />176,27</p>
              <p className={`font-medium leading-[20px] max-h-[18px] overflow-hidden relative shrink-0 text-[12.5px] text-ellipsis tracking-[0px] whitespace-nowrap ${isMoreThan || isLess ? "text-[#d91c1c]" : "text-[#0063f5]"}`} dir="auto">لـ 60 شهر</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between max-h-[18px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                  <p className={`[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap ${isMoreThan || isLess ? "text-[#d91c1c]" : "text-[#0063f5]"}`}>0.5%</p>
                </div>
                <p className="[word-break:break-word] font-medium leading-[20px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0px] whitespace-nowrap" dir="auto">(APR)معدل</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
                <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
                  <div className="-scale-y-100 flex-none w-full">
                    <div className="content-center flex flex-wrap gap-[2px] items-center relative w-full">
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="-scale-y-100 flex-none">
                          <div className="bg-[#079455] content-stretch flex items-center justify-center px-[2px] py-[0px] relative rounded-[4px]">
                            <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-white text-[12.5px] tracking-[0.5px] whitespace-nowrap">%-86</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="-scale-y-100 flex-none">
                          <p className="[word-break:break-word] font-semibold leading-[18px] relative text-[#0063f5] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap"><SarIcon size={13} color="currentColor" />10000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-medium leading-[20px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0px] whitespace-nowrap" dir="auto">وفّرت</p>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[8px] pt-[4px] px-[8px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <ExecutionTimeIcon className="relative shrink-0 size-[26px]" />
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                  <StarIcon className="relative shrink-0 size-[18px]" />
                  <p className="[word-break:break-word] font-medium leading-[22px] relative shrink-0 text-[#364152] text-[15.5px] text-center tracking-[0.1px] whitespace-nowrap">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Arrow */}
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="content-stretch flex gap-[8px] items-start pb-[0px] pt-[24px] px-[0px] relative">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={arrowSrc} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Left side (appears second in RTL) */}
        <div className="bg-[var(--base\/white,white)] content-stretch drop-shadow-[0px_4px_2px_rgba(8,70,131,0.02)] flex flex-col items-start relative rounded-[var(--spacing\/12,12px)] shrink-0 w-[158.5px]">
          <div className="content-stretch flex flex-col gap-[2px] items-center justify-center pb-[6px] pt-[8px] px-[8px] relative shrink-0 w-full">
            <LogoBank className="h-[36px] overflow-clip relative shrink-0 w-[90px]" />
            <p className="[word-break:break-word] font-medium leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[12.5px] text-[#121a26] text-center text-ellipsis tracking-[0px] w-[min-content]" dir="auto">
              {isLess ? "تمويل السيارات/السيارات الكهربائية للعائلة" : "تمويل عقاري شامل لشراء وتملك المنازل السكنية"}
            </p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center pb-[8px] pt-[6px] px-[8px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] items-center p-[0px] relative shrink-0 text-center w-full">
              <p className="font-medium leading-[20px] max-h-[18px] overflow-hidden relative shrink-0 text-[12.5px] text-[#697586] text-ellipsis tracking-[0px] min-w-full w-[min-content]" dir="auto">مبلغ التمويل</p>
              <p className="font-bold leading-[26px] relative shrink-0 text-[#0063f5] text-[15.5px] tracking-[0px] min-w-full w-[min-content]"><SarIcon size={13} color="currentColor" />99,999,999.99</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[0px] h-[61px] items-center p-[0px] relative shrink-0 w-full">
              <p className="font-medium leading-[20px] max-h-[18px] min-w-full overflow-hidden relative shrink-0 text-[12.5px] text-[#697586] text-center text-ellipsis tracking-[0px] w-[min-content]" dir="auto">القسط</p>
              <p className="font-bold leading-[26px] min-w-full relative shrink-0 text-[#0063f5] text-[15.5px] text-center tracking-[0px] w-[min-content]"><SarIcon size={13} color="currentColor" />176,27</p>
              <p className="font-medium leading-[20px] max-h-[18px] overflow-hidden relative shrink-0 text-[#0063f5] text-[12.5px] text-ellipsis tracking-[0px] whitespace-nowrap" dir="auto">لـ 60 شهر</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between max-h-[18px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                  <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-[#0063f5] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap">0.5%</p>
                </div>
                <p className="[word-break:break-word] font-medium leading-[20px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0px] whitespace-nowrap" dir="auto">(APR)معدل</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
                <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
                  <div className="-scale-y-100 flex-none w-full">
                    <div className="content-center flex flex-wrap gap-[2px] items-center relative w-full">
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="-scale-y-100 flex-none">
                          <div className="bg-[#079455] content-stretch flex items-center justify-center px-[2px] py-[0px] relative rounded-[4px]">
                            <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-white text-[12.5px] tracking-[0.5px] whitespace-nowrap">%-86</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="-scale-y-100 flex-none">
                          <p className="[word-break:break-word] font-semibold leading-[18px] relative text-[#0063f5] text-[13.5px] text-right tracking-[0.5px] whitespace-nowrap"><SarIcon size={13} color="currentColor" />10000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-medium leading-[20px] relative shrink-0 text-[#697586] text-[12.5px] tracking-[0px] whitespace-nowrap" dir="auto">وفّرت</p>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSeparator} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[8px] pt-[4px] px-[8px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <ExecutionTimeIcon className="relative shrink-0 size-[26px]" />
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                  <p className="[word-break:break-word] font-medium leading-[22px] relative shrink-0 text-[#364152] text-[15.5px] text-center tracking-[0.1px] whitespace-nowrap" dir="auto">5.0</p>
                  <StarIcon className="relative shrink-0 size-[18px]" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#0063f5] border-solid content-stretch flex gap-[2px] items-center justify-center max-h-[36px] min-h-[36px] min-w-[90px] overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0">
                <p className="[word-break:break-word] font-semibold leading-[22px] relative shrink-0 text-[#0063f5] text-[13.5px] tracking-[0px] whitespace-nowrap">اختر</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── Main screen ─────────────────────────────────────────────────────────────
export function Screen({ mobile }: { mobile: boolean }) {
  const params = useSearchParams();
  const ar = params.get('lang') === 'ar';

  const containerStyle = {
    width:  '100%',
    height: mobile ? '100svh': '812px',
  };

  if (ar) {
    return (
      <div className="content-stretch flex flex-col isolate items-center overflow-clip relative bg-white" style={containerStyle} dir="rtl">
        {/* Bottom home bar */}
        <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[375px] z-[3]">
          <div className="absolute bg-black bottom-[8px] h-[5px] left-[32.27%] right-[32%] rounded-[999px]" />
        </div>
        {/* Header */}
        <div className="bg-[#0063f5] content-stretch flex flex-col gap-[0px] items-start mb-[-1px] min-h-[84px] p-[0px] relative shrink-0 w-full z-[2]">
          <IPhoneMockupStatusBar className="h-[38px] overflow-clip relative shrink-0 w-full" />
          <div className="content-stretch flex items-start justify-between pb-[12px] pt-[8px] px-[16px] relative shrink-0 w-full">
            <div className="h-[24px] relative shrink-0 w-[32px]">
              <div className="absolute left-0 size-[24px] top-0">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome05} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-semibold h-[26px] leading-[26px] min-w-px relative text-white text-[15.5px] text-center tracking-[0px]" dir="auto">العروض المؤهلة</p>
            <div className="content-stretch flex gap-[0px] items-center justify-end min-w-[32px] p-[0px] relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRightIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="content-stretch flex flex-col h-[700px] items-start relative shrink-0 w-full z-[1]" style={{ overflowY: 'auto', scrollbarWidth: 'none' }}>
          {/* Hero banner */}
          <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-[375px]">
            <div className="bg-[#0063f5] content-stretch flex gap-[0px] items-center px-[24px] py-[8px] relative shrink-0 w-full">
              <div className="relative shrink-0 size-[80px]">
                <div className="absolute right-0 size-[80px] top-0">
                  <div className="absolute inset-[0_-1.39%_0_-6.17%]">
                    <img alt="" className="block max-w-none size-full" src={imgIconEligible} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative text-white text-right">
                <p className="font-bold leading-[27px] relative shrink-0 text-[17.5px] tracking-[0px] w-full" dir="auto">تهانينا</p>
                <p className="font-medium leading-[20px] relative shrink-0 text-[12.5px] tracking-[0px] w-full" dir="auto">أنت مؤهل للمنتج الذي تم إختياره وللمزيد من العروض!</p>
              </div>
            </div>
          </div>
          {/* Card section */}
          <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[16px] items-center justify-center mb-[-1px] px-[24px] py-[8px] relative shrink-0 w-full">
            <CategoryDecoration />
            {/* Main product card AR */}
            <div className="bg-white border border-[#eef1f6] border-solid content-stretch flex flex-col items-start overflow-clip py-[0px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 w-[327px]">
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip py-[8px] relative rounded-[16px] shrink-0 w-[327px]">
                <div className="border-[#e3e8ef] border-b border-solid content-stretch flex gap-[12px] items-center pb-[6px] px-[12px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px pr-[6px] relative">
                    <div className="relative shrink-0 size-[24px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[27px] min-w-px overflow-hidden relative text-[17.5px] text-[#121a26] text-ellipsis text-right tracking-[0px]" dir="auto">تمويل السيارات/السيارات الكهربائية للعائلات الكبيرة والموظفين</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between px-[12px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start justify-center pr-[4px] relative shrink-0">
                    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                      <div className="[word-break:break-word] flex flex-col font-semibold justify-end leading-[0] relative shrink-0 text-[#4b5565] text-[13.5px] text-right tracking-[0px] whitespace-nowrap">
                        <p className="leading-[22px]" dir="auto">معدل سنوي(APR)</p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[2px] relative shrink-0">
                        <div className="relative shrink-0 size-[14px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfoCircle} />
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-bold leading-[26px] relative shrink-0 text-[#121a26] text-[17.5px] text-right tracking-[0.1px] whitespace-nowrap" dir="auto">%99.99</p>
                  </div>
                  <div className="bg-white content-stretch flex flex-col items-start py-[2px] relative shrink-0 w-[125px]">
                    <LogoBank className="aspect-[250/100] overflow-clip relative shrink-0 w-full" />
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start max-h-[68px] pb-[6px] px-[12px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[145.5px] min-w-px opacity-90 relative">
                    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-end leading-[0] relative shrink-0 text-[#4b5565] text-[12.5px] tracking-[0px] whitespace-nowrap">
                        <p className="leading-[20px]" dir="auto">مدة التمويل</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-end relative shrink-0">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[145.5px]">
                        <p className="[word-break:break-word] font-bold leading-[26px] relative shrink-0 text-[#121a26] text-[17.5px] text-right tracking-[0.1px] whitespace-nowrap" dir="auto">999 شهر</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[145.5px] min-w-px opacity-90 relative">
                    <p className="[word-break:break-word] font-semibold leading-[22px] relative shrink-0 text-[#4b5565] text-[13.5px] text-right tracking-[0px] w-full" dir="auto">مبلغ التمويل</p>
                    <div className="content-stretch flex items-end relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative">
                        <p className="[word-break:break-word] font-bold leading-[26px] relative shrink-0 text-[#121a26] text-[17.5px] text-right tracking-[0.1px] whitespace-nowrap"><SarIcon size={13} color="currentColor" />99,999,999.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-center pb-[2px] pt-[8px] px-[12px] relative shrink-0 w-full">
                  <div className="bg-[#0063f5] border-2 border-[rgba(255,255,255,0.12)] border-solid content-stretch flex flex-[1_0_0] gap-[2px] items-center justify-center max-h-[36px] min-h-[36px] min-w-[90px] overflow-clip px-[12px] py-[8px] relative rounded-[8px]">
                    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0">
                      <p className="[word-break:break-word] font-semibold leading-[22px] relative shrink-0 text-white text-[13.5px] tracking-[0px] whitespace-nowrap">تموَّل</p>
                    </div>
                  </div>
                  <button className="content-stretch cursor-pointer flex items-start relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0">
                      <div className="relative shrink-0 size-[24px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeartRounded} />
                      </div>
                    </div>
                  </button>
                  <ExecutionTimeIcon className="relative shrink-0 size-[32px]" />
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                      <p className="[word-break:break-word] font-medium leading-[22px] relative shrink-0 text-[#697586] text-[15.5px] text-center tracking-[0.1px] whitespace-nowrap" dir="auto">0.0</p>
                      <StarIconFill12No className="relative shrink-0 size-[18px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Compare section */}
          <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[24px] items-center pb-[40px] pt-[24px] px-[16px] relative shrink-0 w-full">
            <p className="[word-break:break-word] font-semibold leading-[30px] min-w-full relative shrink-0 text-[#202a39] text-[23.5px] text-center w-[min-content]" dir="auto">مقارنة الخيارات</p>
            <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
              <ProductCardAR cardName="Compare + Less than" type="Car Loan" />
              <ProductCardAR cardName="Compare + Equal" type="Real Estate Loan" />
              <ProductCardAR cardName="Compare + More Than" type="Real Estate Loan" />
            </div>
          </div>
          {/* Divider */}
          <div className="absolute h-0 left-0 top-[440px] w-[375px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgFrame6360} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // EN version
  return (
    <div className="bg-white content-stretch flex flex-col h-[812px] isolate items-center overflow-clip relative" style={containerStyle}>
      {/* Bottom home bar */}
      <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[375px] z-[3]">
        <div className="absolute bg-black bottom-[8px] h-[5px] left-[32.27%] right-[32%] rounded-[999px]" />
      </div>
      {/* Header */}
      <div className="bg-[#0063f5] content-stretch flex flex-col gap-[0px] items-start mb-[-1px] min-h-[82px] p-[0px] relative shrink-0 w-full z-[2]">
        <IPhoneMockupStatusBar className="h-[38px] overflow-clip relative shrink-0 w-full" />
        <div className="content-stretch flex items-end justify-between pb-[12px] pt-[8px] px-[16px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[0px] items-center min-w-[32px] p-[0px] relative shrink-0">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackIcon} />
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-semibold h-[22px] leading-[22px] min-w-px relative text-white text-[15.5px] text-center tracking-[0.25px]">Eligible Offers</p>
          <div className="h-[24px] relative shrink-0 w-[32px]">
            <div className="absolute left-0 size-[24px] top-0">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome05} />
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="content-stretch flex flex-col h-[700px] items-start relative shrink-0 w-full z-[1]" style={{ overflowY: 'auto', scrollbarWidth: 'none' }}>
        {/* Hero banner */}
        <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-[375px]">
          <div className="bg-[#0063f5] content-stretch flex gap-[0px] items-center px-[24px] py-[8px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative text-white">
              <p className="font-bold h-[26px] leading-[26px] relative shrink-0 text-[17.5px] tracking-[0.1px] w-[247px]">Congratulations</p>
              <p className="font-medium leading-[18px] min-w-full relative shrink-0 text-[12.5px] tracking-[0.5px] w-[min-content]">You&apos;re eligible for the selected product and more!</p>
            </div>
            <div className="relative shrink-0 size-[80px]">
              <div className="absolute right-0 size-[80px] top-0">
                <div className="absolute inset-[0_-1.39%_0_-6.17%]">
                  <img alt="" className="block max-w-none size-full" src={imgIconEligible} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card section */}
        <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[16px] items-center justify-center mb-[-1px] px-[24px] py-[8px] relative shrink-0 w-full">
          <CategoryDecoration />
          {/* Main product card */}
          <div className="bg-white border border-[#eef1f6] border-solid content-stretch flex flex-col items-start overflow-clip py-[0px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 w-[327px]">
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip py-[8px] relative rounded-[16px] shrink-0 w-[327px]">
              <div className="border-[#e3e8ef] border-b border-solid content-stretch flex gap-[12px] items-center min-h-[60px] pb-[4px] px-[12px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center pl-[6px] relative shrink-0">
                  <p className="[word-break:break-word] font-bold leading-[26px] overflow-hidden relative shrink-0 text-[17.5px] text-[#121a26] text-ellipsis tracking-[0.1px] w-[273px]">{`Car/EV Financing for Big Family & Employee`}</p>
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight1} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between px-[12px] relative shrink-0 w-full">
                <div className="bg-white content-stretch flex flex-col items-start py-[2px] relative shrink-0 w-[125px]">
                  <LogoBank className="aspect-[250/100] overflow-clip relative shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col items-end justify-center pr-[4px] relative shrink-0 w-[100px]">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[2px] relative shrink-0">
                      <div className="relative shrink-0 size-[14px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfoCircle} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-medium justify-end leading-[0] relative shrink-0 text-[#4b5565] text-[13.5px] text-right tracking-[0.4px] whitespace-nowrap">
                      <p className="leading-[18px]" dir="auto">APR</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-bold leading-[26px] relative shrink-0 text-[#121a26] text-[17.5px] text-right tracking-[0.1px] whitespace-nowrap" dir="auto">99.99%</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-start justify-between max-h-[68px] pb-[6px] px-[12px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[145.5px] min-w-px opacity-90 relative">
                  <p className="[word-break:break-word] font-medium leading-[18px] relative shrink-0 text-[#4b5565] text-[13.5px] tracking-[0.4px] w-full">Loan amount</p>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
                      <p className="[word-break:break-word] font-bold leading-[26px] relative shrink-0 text-[#121a26] text-[17.5px] text-right tracking-[0.1px] whitespace-nowrap"><SarIcon size={13} color="currentColor" />99,999,999.99</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center max-w-[145.5px] min-w-px opacity-90 relative">
                  <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-end leading-[0] relative shrink-0 text-[#4b5565] text-[13.5px] text-right tracking-[0.4px] whitespace-nowrap">
                      <p className="leading-[18px]">Loan period</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-end relative shrink-0">
                    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[145.5px]">
                      <p className="[word-break:break-word] font-bold leading-[26px] relative shrink-0 text-[#121a26] text-[17.5px] text-right tracking-[0.1px] whitespace-nowrap" dir="auto">999 month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-center pb-[2px] pt-[8px] px-[12px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                    <StarIconFill12No className="relative shrink-0 size-[18px]" />
                    <p className="[word-break:break-word] font-medium leading-[22px] relative shrink-0 text-[#697586] text-[15.5px] text-center tracking-[0.1px] whitespace-nowrap" dir="auto">0.0</p>
                  </div>
                </div>
                <ExecutionTimeIcon className="relative shrink-0 size-[32px]" />
                <button className="content-stretch cursor-pointer flex items-start relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0">
                    <div className="relative shrink-0 size-[24px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeartRounded} />
                    </div>
                  </div>
                </button>
                <div className="bg-[#0063f5] border-2 border-[rgba(255,255,255,0.12)] border-solid content-stretch flex flex-[1_0_0] gap-[2px] items-center justify-center max-h-[36px] min-h-[36px] min-w-[90px] overflow-clip px-[12px] py-[8px] relative rounded-[8px]">
                  <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0">
                    <p className="[word-break:break-word] font-semibold leading-[18px] relative shrink-0 text-white text-[13.5px] tracking-[0.5px] whitespace-nowrap">Tamawal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Compare section */}
        <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[24px] items-center pb-[40px] pt-[24px] px-[16px] relative shrink-0 w-full">
          <p className="[word-break:break-word] font-semibold leading-[30px] min-w-full relative shrink-0 text-[#202a39] text-[23.5px] text-center w-[min-content]">Compare Options</p>
          <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
            <ProductCardEN cardName="Compare + Less than" type="Car Loan" />
            <ProductCardEN cardName="Compare + Equal" type="Real Estate Loan" />
            <ProductCardEN cardName="Compare + More Than" type="Real Estate Loan" />
          </div>
        </div>
        {/* Divider */}
        <div className="absolute h-0 left-0 top-[440px] w-[375px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgFrame6360} />
          </div>
        </div>
      </div>
    </div>
  );
}
