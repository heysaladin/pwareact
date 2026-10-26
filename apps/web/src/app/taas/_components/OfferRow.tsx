import Image from 'next/image'

export interface OfferRowProps {
  selected?: boolean
  recommended?: boolean
  bankLogo: string
  bankName: string
  apr: string
  monthly: string
  tenure: string
  totalPayable: string
  features: string[]
  onSelect?: () => void
}

export default function OfferRow({
  selected,
  recommended,
  bankLogo,
  bankName,
  apr,
  monthly,
  tenure,
  totalPayable,
  features,
  onSelect,
}: OfferRowProps) {
  return (
    <div
      className={[
        'flex items-center gap-5 px-5 py-[22px] rounded-[14px] relative cursor-pointer',
        selected
          ? 'bg-[#f7faff] border-[1.5px] border-[#0063f5]'
          : 'bg-white border border-[#eaecf0]',
      ].join(' ')}
      onClick={onSelect}
    >
      {/* Recommended badge */}
      {recommended && (
        <div className="absolute -top-[11.5px] left-[18.5px] bg-[#0063f5] text-white text-[10px] font-bold px-[10px] py-[3px] rounded-full">
          RECOMMENDED
        </div>
      )}

      {/* Radio circle */}
      <div
        className={[
          'w-5 h-5 rounded-[10px] shrink-0 flex items-center justify-center',
          selected
            ? 'border-[6px] border-[#0063f5] bg-white'
            : 'border-[1.5px] border-[#d0d5dd] bg-white',
        ].join(' ')}
      />

      {/* Bank logo */}
      <div className="w-[120px] shrink-0 flex flex-col items-center gap-1">
        <Image
          src={bankLogo}
          alt={bankName}
          width={110}
          height={44}
          className="object-contain"
        />
        <span className="text-[#475467] text-[11px] text-center">{bankName}</span>
      </div>

      {/* Metrics */}
      <div className="flex-1 flex justify-between items-center">
        <div className="flex flex-col gap-0.5">
          <span className="text-[#475467] text-[11px]">APR</span>
          <span className="text-[#101828] text-[15px] font-semibold">{apr}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[#475467] text-[11px]">Monthly payment</span>
          <span className="text-[#0063f5] text-[18px] font-bold">{monthly}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[#475467] text-[11px]">Tenure</span>
          <span className="text-[#101828] text-[15px] font-semibold">{tenure}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[#475467] text-[11px]">Total payable</span>
          <span className="text-[#101828] text-[15px] font-semibold">{totalPayable}</span>
        </div>
      </div>

      {/* Features */}
      <div className="w-[190px] shrink-0 flex flex-col gap-[6px]">
        {features.slice(0, 3).map((feature, i) => (
          <div key={i} className="flex items-center gap-[6px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#12b76a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 7l3 3 6-6" />
            </svg>
            <span className="text-[#475467] text-[12px]">{feature}</span>
          </div>
        ))}
      </div>

      {/* View details */}
      <div className="shrink-0 flex items-center gap-1 text-[#0063f5] text-[13px] font-semibold">
        View details
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 3l4 4-4 4" />
        </svg>
      </div>
    </div>
  )
}
