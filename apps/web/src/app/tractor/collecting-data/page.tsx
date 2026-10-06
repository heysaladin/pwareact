'use client';

import CartSidebar from '../components/CartSidebar';
import StepperBar from '../components/StepperBar';

const PRODUCT = {
  name: 'خزان رش مبيدات بسعة 2000 لتر',
  qty: 1,
  capacity: '2000 لتر',
  usage: 'مبيدات زراعية',
  brand: 'مزارع',
  totalPrice: 23862,
  downPayment: 4772,
  financingAmount: 19090,
  img: '/tractor-product-1.png',
  imgBg: '#F0F4F0',
};

const STEPPER = [
  { label: 'استكشاف العروض', status: 'done' },
  { label: 'التحقق من الهوية', status: 'done' },
  { label: 'العقود والإفصاحات', status: 'done' },
  { label: 'التحقق من البيانات', status: 'active' },
  { label: 'العروض المؤهلة', status: 'pending' },
  { label: 'تفاصيل العرض', status: 'pending' },
  { label: 'مقارنة العروض', status: 'pending' },
  { label: 'إرسال الطلب', status: 'pending' },
];

const DATA_SOURCES = [
  {
    logo: '/logo-nafath.png', bg: '#E8F5E9',
    name: 'نفاذ Nafath',
    title: 'التحقق من الهوية الوطنية',
    desc: 'التحقق من بياناتك عبر منصة نفاذ.',
    status: 'done',
  },
  {
    logo: '/logo-gosi.png', bg: '#EFF6FF',
    name: 'GOSI',
    title: 'التحقق من بيانات العمل والدخل',
    desc: 'التحقق من بياناتك في التأمينات الاجتماعية.',
    status: 'loading',
  },
  {
    logo: '/logo-simah.png', bg: '#F5F3FF',
    name: 'سمة SIMAH',
    title: 'التحقق من السجل الائتماني والالتزامات',
    desc: 'التحقق من سجلك الائتماني والالتزامات المالية.',
    status: 'pending',
  },
  {
    logo: '/logo-masdr.png', bg: '#FFFBEB',
    name: 'مصدر MASDR',
    title: 'التحقق من بيانات الدخل والبيانات الحكومية',
    desc: 'مراجعة بياناتك من الجهات الحكومية.',
    status: 'pending',
  },
  {
    logo: '/logo-zatca.png', bg: '#FEF3C7',
    name: 'هيئة الزكاة والضريبة والجمارك',
    title: 'التحقق من البيانات الضريبية',
    desc: 'التحقق من سجلاتك في هيئة الزكاة والضريبة والجمارك.',
    status: 'pending',
  },
];

function fmt(n: number) { return n.toLocaleString('en-SA'); }


export default function CollectingDataPage() {
  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spinner { animation: spin 1s linear infinite; }
      `}</style>

      {/* ── Navbar ───────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-[#E5E7EB] h-16 flex items-center px-8 relative z-50 flex-shrink-0">
        <div className="grid grid-cols-3 items-center w-full">
          <div className="flex items-center">
            <img src="/mouzare-logo.png" alt="فـزارع Mouzare" className="h-9 w-auto" />
          </div>
          <nav className="flex items-center justify-center gap-8">
            <a href="#" className="text-[#374151] text-sm hover:text-[#1B3A24] transition-colors">الرئيسية</a>
            <a href="#" className="text-[#374151] text-sm hover:text-[#1B3A24] transition-colors">المتجر</a>
            <a href="#" className="text-[#374151] text-sm font-medium text-[#1B3A24] hover:text-[#1B3A24] transition-colors">طلباتي</a>
          </nav>
          <div className="flex items-center gap-6 justify-end">
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24] transition-colors">
              <div className="relative">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <span className="absolute -top-1.5 -left-1.5 bg-[#2C5E1A] text-white text-[9px] rounded-full w-[17px] h-[17px] flex items-center justify-center font-bold">1</span>
              </div>
              <span className="text-sm">سلة التسوق</span>
            </button>
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="text-sm">حسابي</span>
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden min-h-0">
        <CartSidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col overflow-y-auto h-full bg-[#FAFAF8]">
          <div className="px-10 py-7 flex flex-col min-h-full">
            <StepperBar steps={STEPPER} />

            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <a href="/tractor/personal-data" className="flex items-center gap-1.5 text-[12px] text-[#374151] hover:text-[#1B3A24] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  رجوع
                </a>
                <button className="flex items-center gap-1.5 text-[12px] text-[#374151] border border-[#D1D5DB] rounded-lg px-3 py-1.5 hover:bg-[#F9FAFB] transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  مساعدة
                </button>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://tamweelsaas.vercel.app/logo.svg" alt="Tamawal" className="h-8 w-auto" />
              </div>
            </div>

            {/* Heading */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h1 className="text-[20px] font-bold text-[#111827]">جمع التقارير والتحقق من البيانات</h1>
            </div>
            <p className="text-[12px] text-[#6B7280] mb-4 mr-12">يقوم تمويل بالاتصال مع الجهات الحكومية ومزودي البيانات المعتمدين لجمع التقارير المطلوبة لتقييم طلب التمويل.</p>

            {/* Info bar */}
            <div className="flex items-center gap-2.5 p-3 rounded-lg mb-5 border" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="text-[11px] text-[#1E40AF]">يرجى عدم إغلاق هذه الصفحة أثناء عملية التحقق. قد تستغرق هذه العملية بضع دقائق.</p>
            </div>

            {/* Two columns */}
            <div className="flex gap-6 flex-1">

              {/* Left column: What happens next */}
              <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <h2 className="text-[13px] font-bold text-[#111827]">ماذا يحدث بعد ذلك؟</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { n: 1, title: 'نقوم بجمع بياناتك من الجهات المعتمدة', desc: 'نتواصل مع الجهات الحكومية ومزودي البيانات لجمع التقارير المطلوبة.' },
                    { n: 2, title: 'تحقق من أهليتك للتمويل', desc: 'نقوم بتحليل البيانات والتقارير للتأكد من استيفاء شروط التمويل.' },
                    { n: 3, title: 'ستعرض لك النتيجة النهائية أو العروض المناسبة', desc: 'بعد اكتمال التحقق، ستعرض لك النتيجة النهائية أو العروض المتاحة إن وجدت.' },
                  ].map(item => (
                    <div key={item.n} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0 mt-0.5" style={{ background: '#1B3A24' }}>{item.n}</div>
                      <div>
                        <p className="text-[12px] font-semibold text-[#111827] mb-0.5">{item.title}</p>
                        <p className="text-[11px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column: Data sources */}
              <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] p-5">
                <h2 className="text-[13px] font-bold text-[#111827] mb-4">مصادر البيانات</h2>
                <div className="space-y-3">
                  {DATA_SOURCES.map(src => (
                    <div key={src.name} className="flex items-start gap-3 p-3 rounded-xl border border-[#E5E7EB]">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: src.bg }}><img src={src.logo} alt={src.name} className="w-full h-full object-contain p-1.5" /></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-[#111827]">{src.name}</p>
                        <p className="text-[10px] font-medium text-[#374151] mt-0.5">{src.title}</p>
                        <p className="text-[10px] text-[#6B7280] mt-0.5">{src.desc}</p>
                      </div>
                      <div className="flex-shrink-0 flex items-center gap-1.5">
                        {src.status === 'done' && (
                          <>
                            <div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                              <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <span className="text-[10px] font-medium text-[#16A34A]">مكتمل</span>
                          </>
                        )}
                        {src.status === 'loading' && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" className="spinner">
                              <path d="M21 12a9 9 0 11-6.219-8.56"/>
                            </svg>
                            <span className="text-[10px] font-medium text-[#F59E0B]">جاري التحقق</span>
                          </>
                        )}
                        {src.status === 'pending' && (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span className="text-[10px] text-[#9CA3AF]">في الانتظار</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB] mt-4 pb-4">
              <a href="/tractor/personal-data" className="px-6 py-3 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
                عودة
              </a>
              <div className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                <span className="text-[11px] text-[#6B7280]">تظل معلوماتك آمنة ومشفرة طوال العملية.</span>
              </div>
              <a href="/tractor/eligible-offers" className="flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity" style={{ background: '#1B3A24' }}>
                متابعة
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
