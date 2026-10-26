export default function PartnerPanelAr() {
  return (
    <div dir="rtl" className="flex flex-col gap-[18px] h-full p-6 shrink-0 w-[340px] bg-white border border-[#eaecf0] rounded-2xl">
      {/* Row 1: Partner logo + back link */}
      <div className="flex items-center justify-between">
        <div className="w-[132px] h-10 rounded-lg border border-dashed border-[#d0d5dd] flex items-center justify-center text-[#98a2b3] text-[10px] font-semibold tracking-widest">
          PARTNER LOGO
        </div>
        <a href="#" className="flex items-center gap-1 text-[#344054] text-[13px] font-medium">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5.25 10.5L8.75 7l-3.5-3.5" />
          </svg>
          العودة إلى الشريك
        </a>
      </div>

      {/* Row 2: Product image slot */}
      <div className="w-full h-[156px] bg-[#f2f4f7] rounded-xl flex flex-col items-center justify-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#98a2b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="text-[#98a2b3] text-xs">صورة المنتج · 16:9</span>
      </div>

      {/* Row 3: Product title */}
      <div className="flex flex-col gap-1">
        <p className="text-[#475467] text-xs">الفئة · 2026</p>
        <p className="font-['Newsreader',Georgia,serif] text-[30px] text-[#101828] leading-tight">اسم المنتج</p>
      </div>

      {/* Row 4: 4 attribute rows */}
      <div className="flex flex-col gap-3">
        {/* Tag / Model */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#f2f4f7] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 2h4.586a1 1 0 0 1 .707.293l6.414 6.414a2 2 0 0 1 0 2.828l-2.586 2.586a2 2 0 0 1-2.828 0L1.879 7.707A1 1 0 0 1 1.586 7V2.5A.5.5 0 0 1 2 2Z" />
              <circle cx="4.5" cy="5.5" r="1" fill="#475467" stroke="none" />
            </svg>
          </div>
          <div>
            <p className="text-[#101828] text-[13px] font-semibold">الطراز / الإصدار</p>
            <p className="text-[#475467] text-xs">الطراز</p>
          </div>
        </div>
        {/* Box / Specification */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#f2f4f7] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.5 4.5l6.5-3 6.5 3v7l-6.5 3-6.5-3v-7z" />
              <path d="M8 1.5v14M1.5 4.5l6.5 3 6.5-3" />
            </svg>
          </div>
          <div>
            <p className="text-[#101828] text-[13px] font-semibold">المواصفة الرئيسية</p>
            <p className="text-[#475467] text-xs">المواصفة</p>
          </div>
        </div>
        {/* Calendar / Option */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#f2f4f7] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" />
              <path d="M5 1v3M11 1v3M1.5 6.5h13" />
            </svg>
          </div>
          <div>
            <p className="text-[#101828] text-[13px] font-semibold">الخيار / اللون</p>
            <p className="text-[#475467] text-xs">الخيار</p>
          </div>
        </div>
        {/* Truck / Delivery */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#f2f4f7] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 3h9v8H1zM10 5.5h2.5l2 2.5v2.5h-4.5V5.5z" />
              <circle cx="3.5" cy="11.5" r="1.5" />
              <circle cx="11.5" cy="11.5" r="1.5" />
            </svg>
          </div>
          <div>
            <p className="text-[#101828] text-[13px] font-semibold">موعد التسليم</p>
            <p className="text-[#475467] text-xs">التسليم</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#eaecf0]" />

      {/* Financing summary */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-[13px]">
          <span className="text-[#475467]">السعر (شامل ض.ق.م)</span>
          <span className="text-[#101828]">SAR 228,750</span>
        </div>
        <div className="flex items-center justify-between text-[13px]">
          <span className="text-[#475467]">الدفعة المقدمة (20%)</span>
          <span className="text-[#101828]">SAR 45,750</span>
        </div>
        <div className="flex items-center justify-between text-[13px]">
          <span className="text-[#344054] font-bold">مبلغ التمويل</span>
          <span className="text-[#344054] font-bold">SAR 183,000</span>
        </div>
        <div className="flex items-center justify-between text-[13px]">
          <span className="text-[#475467]">مدة التمويل</span>
          <span className="text-[#101828]">60 شهراً</span>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Secure note */}
      <div className="bg-[#f2f4f7] rounded-xl p-[14px] flex gap-3 items-start">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[1px]">
          <path d="M10 2L3.5 5v5c0 4.418 2.799 7.938 6.5 9 3.701-1.062 6.5-4.582 6.5-9V5L10 2z" />
          <path d="M7 10l2 2 4-4" />
        </svg>
        <div>
          <p className="text-[13px] font-semibold text-[#101828]">بياناتك آمنة</p>
          <p className="text-xs text-[#475467] mt-0.5">نستخدم تشفيراً بمستوى بنكي لحماية معلوماتك.</p>
        </div>
      </div>

      {/* Powered by row */}
      <div className="flex items-center gap-[6px]">
        <span className="text-[#98a2b3] text-[11px]">مدعوم من</span>
        <div className="w-4 h-4 rounded bg-[#0063f5] flex items-center justify-center">
          <span className="text-white text-[9px] font-bold leading-none">T</span>
        </div>
        <span className="text-[#0063f5] text-xs font-bold">Tamawal</span>
        <span className="text-[#98a2b3] text-[11px]">· مرخص من ساما</span>
      </div>
    </div>
  )
}
