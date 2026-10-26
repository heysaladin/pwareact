export default function TopBar() {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Left: Tamawal logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-[9px] bg-[#0063f5] flex items-center justify-center">
          <span className="text-white text-[19px] font-bold leading-none">T</span>
        </div>
        <span className="text-[#0063f5] text-[20px] font-bold">Tamawal</span>
      </div>

      {/* Right: Help + Language */}
      <div className="flex items-center gap-4">
        {/* Need help? */}
        <button className="flex items-center gap-[6px] text-[#475467] text-[13px] font-medium">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="8" r="6.5" />
            <path d="M6 6.167a2 2 0 1 1 2.667 1.886C8.25 8.333 8 8.75 8 9.333" />
            <circle cx="8" cy="11.333" r="0.667" fill="currentColor" stroke="none" />
          </svg>
          Need help?
        </button>

        {/* Language pill */}
        <div className="bg-[#f2f4f7] rounded-full p-[3px] flex gap-[2px]">
          <button className="bg-white rounded-full px-[14px] py-[6px] text-[#101828] text-xs font-semibold shadow-sm">
            EN
          </button>
          <button className="text-[#475467] text-xs font-semibold px-[14px] py-[6px]">
            عربي
          </button>
        </div>
      </div>
    </div>
  )
}
