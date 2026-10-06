const SAR = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block">
    <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
    <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
  </svg>
);

const PRODUCTS = [
  { img: '/tractor-product-1.png', bg: '#F0F4F0', name: 'خزان رش مبيدات بسعة 2000 لتر', sub: 'براند عربي - محرك طلب التراكتور', price: '25,000' },
  { img: '/tractor-product-2.png', bg: '#F5F0EE', name: 'جرار زراعي 100 حصان', sub: '4×4 - متعدد الاستخدامات', price: '120,000' },
  { img: '/tractor-product-3.png', bg: '#EFF4EF', name: 'محراث أقراص زراعي', sub: 'عرض 2.5 متر - للمحاصيل المختلفة', price: '18,500' },
];

const BADGES = [
  {
    text: 'خدمة عملاء مميزة',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z"/></svg>,
  },
  {
    text: 'توصيل لجميع مناطق المملكة',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    text: 'دعم قطاع الزراعة في السعودية',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22V12"/><path d="M12 12C12 12 7 10 7 5a5 5 0 0110 0c0 5-5 7-5 7z"/></svg>,
  },
];

export default function CartSidebar() {
  return (
    <div className="relative z-20 flex-shrink-0 bg-white border-l border-[#E5E7EB] flex flex-col overflow-y-auto h-full" style={{ width: '300px' }}>
      <div className="px-6 pt-7 pb-7 flex flex-col min-h-full">

        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <h2 className="text-[14px] font-bold text-[#111827]">ملخص الطلب</h2>
        </div>

        {/* Products */}
        <div className="space-y-4 mb-5">
          {PRODUCTS.map(p => (
            <div key={p.img} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg border border-[#E5E7EB] overflow-hidden flex-shrink-0" style={{ backgroundColor: p.bg }}>
                <img src={p.img} alt={p.name} className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-[#111827] leading-snug line-clamp-2">{p.name}</p>
                <p className="text-[10px] text-[#6B7280] mt-0.5">{p.sub}</p>
                <p className="text-[10px] font-medium text-[#374151] mt-0.5">1 × {p.price} <SAR /></p>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="border-t border-[#E5E7EB] pt-3 mb-5 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-[#374151]">163,500 <SAR /></span>
            <span className="text-[11px] text-[#6B7280]">إجمالي السلة</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-[#374151]">32,700 <SAR /></span>
            <span className="text-[11px] text-[#6B7280]">الدفعة المقدمة (20%)</span>
          </div>
          <div className="flex items-center justify-between pt-2.5 border-t border-[#E5E7EB]">
            <span className="text-[13px] font-bold text-[#111827]">130,800 <SAR /></span>
            <div className="flex items-center gap-1.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span className="text-[11px] font-medium text-[#374151]">المبلغ المطلوب تمويله</span>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="space-y-2.5 mb-5">
          {BADGES.map(b => (
            <div key={b.text} className="flex items-center gap-2 text-[#374151]">
              <div className="w-5 h-5 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#1B3A24] flex-shrink-0">{b.icon}</div>
              <span className="text-[10px]">{b.text}</span>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div className="relative rounded-xl overflow-hidden mt-auto" style={{ height: '120px' }}>
          <img src="/tractor-hero-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '30% center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.1), rgba(0,0,0,0.55))' }} />
          <div className="relative z-10 p-4 h-full flex flex-col justify-end">
            <p className="text-white text-[15px] font-bold leading-snug drop-shadow">مستقبل الزراعة<br />يبدأ من هنا</p>
          </div>
        </div>

      </div>
    </div>
  );
}
