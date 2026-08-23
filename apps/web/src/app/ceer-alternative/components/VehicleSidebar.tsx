interface VehicleSidebarProps {
  showVerifiedBadge?: boolean;
}

const specs = [
  { label: 'Variant', value: 'EXOBOT SEDAN FIRST EDITION' },
  { label: 'Exterior Color', value: 'HARRAT GREY METALLIC' },
  { label: 'Exterior Color Pack', value: 'BLACK FIRST EDITION' },
  { label: 'Interior', value: 'RED NAPPA LEATHER' },
  { label: 'Wheels & Tires', value: 'STANDARD - 23" FRONT, 24" REAR' },
];

export default function VehicleSidebar({ showVerifiedBadge = false }: VehicleSidebarProps) {
  return (
    <div className="w-[280px] bg-[#0F0F0F] border-r border-white/[0.06] flex flex-col px-6 py-6 gap-5 shrink-0">

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-white/40">Your Selected Vehicle</span>
        <span className="text-xs text-[#E87722] cursor-pointer">Edit Build ↗</span>
      </div>

      {/* Car image */}
      <div className="w-full h-[120px] rounded-xl overflow-hidden bg-[#1a1a1a]">
        <img className="w-full h-full object-cover" alt="CEER Exobot Sedan" src="/ceer-car-00.png" />
      </div>

      {/* Name */}
      <div>
        <p className="text-sm font-bold text-white tracking-wide">EXOBOT SEDAN FIRST EDITION</p>
        <p className="text-[11px] text-white/40 mt-0.5">Model Year 2027</p>
      </div>

      {/* Specs */}
      <div className="flex flex-col gap-2">
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-start gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20 shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span className="text-[10px] text-white/40">
              {spec.label}: <span className="text-white/60">{spec.value}</span>
            </span>
          </div>
        ))}
      </div>

      <span className="text-xs text-[#E87722] cursor-pointer">View Full Build Summary →</span>

      <div className="border-t border-white/[0.06]" />

      {/* Order Summary */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-white/50">Order Summary</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
        </svg>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/40">Base Vehicle Price (incl. VAT)</span>
          <span className="text-[10px] text-white/60">SAR 399,000</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/40">Options (Included)</span>
          <span className="text-[10px] text-white/60">SAR 0</span>
        </div>
      </div>

      <div className="border-t border-white/[0.06]" />

      {/* Total */}
      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-xs text-white/50">Total</span>
          <span className="text-[10px] text-white/30 ml-1">(Incl. VAT)</span>
        </div>
        <span className="text-xl font-bold text-white">SAR 399,000</span>
      </div>

      {/* Monthly estimate */}
      <div className="bg-[#1a1a1a] border border-[#E87722]/20 rounded-xl p-4">
        <div className="flex items-center gap-1.5 mb-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span className="text-[11px] text-white/50">Estimated from</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-base font-bold text-[#E87722]">SAR 5,499 / month*</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
          </svg>
        </div>
        <p className="text-[10px] text-white/30 mt-1">Indicative only. Final offers after eligibility check.</p>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center gap-1 text-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <p className="text-[10px] font-medium text-white/70">Secure &amp; Compliant</p>
          <p className="text-[9px] text-white/30">Your data is protected</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <p className="text-[10px] font-medium text-white/70">All Inside CEER</p>
          <p className="text-[9px] text-white/30">No redirections</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={showVerifiedBadge ? 'text-[#22C55E]' : 'text-white/40'}>
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <p className="text-[10px] font-medium text-white/70">Nafath Verified</p>
          <p className={`text-[9px] ${showVerifiedBadge ? 'text-[#22C55E]' : 'text-white/30'}`}>
            {showVerifiedBadge ? 'Identity confirmed' : 'Secure identity check'}
          </p>
        </div>
      </div>

    </div>
  );
}
