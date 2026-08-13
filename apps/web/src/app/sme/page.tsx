'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SlidingMenu from '@/components/SlidingMenu';

// ── Saudi Central Bank badge (Figma asset — needs Figma server) ───────────────
const imgSamaCert = "http://localhost:3845/assets/6da6a2652f1df045cb72b3d8a7e61ab0fd411356.png";

// ── Purpose options ───────────────────────────────────────────────────────────
const purposeOptions = [
  { key: 'smart',      label: 'مطابقة ذكية',   sub: 'تموّل يختار الأنسب لاحتياجك' },
  { key: 'liquidity',  label: 'سيولة تشغيلية', sub: 'مصاريف ومخزون' },
  { key: 'invoices',   label: 'فواتير وعقود',   sub: 'مستحقات B2B' },
  { key: 'expansion',  label: 'توسع ومعدات',    sub: 'أصول إنتاجية' },
  { key: 'sales',      label: 'مبيعات يومية',   sub: 'نقاط بيع ومطاعم' },
  { key: 'realestate', label: 'عقاري تجاري',    sub: 'صك وتقييم' },
  { key: 'small',      label: 'منشأة صغيرة',    sub: 'مسار مبسّط' },
  { key: 'flex',       label: 'حد مرن',         sub: 'استخدام عند الحاجة' },
];

const productOptions = [
  'رأس مال عامل — حتى 2,000,000 ريال',
  'تمويل المبيعات اليومية',
  'تمويل الفواتير',
  'تمويل التوسع',
];

const financingAmounts = [
  'أقل من 100,000 ريال',
  '100,000 - 500,000 ريال',
  '500,000 - 750,000 ريال',
  '750,000 ريال',
  '1,000,000 ريال',
  '2,000,000 ريال أو أكثر',
];

const companyStatuses = [
  'مؤسسة',
  'شركة ذات مسؤولية محدودة',
  'شركة مساهمة',
  'أخرى',
];

// ── Chevron inline SVG (matches app/ar style) ─────────────────────────────────
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 20 20" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Form sub-components ───────────────────────────────────────────────────────
function FormField({ label, hint, placeholder, value, onChange }: {
  label: string; hint?: string; placeholder?: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex-1 flex flex-col gap-2 items-end min-w-0">
      <div className="flex gap-1 items-center w-full justify-start">
        <span className="text-[#475467] text-[13px]">{label}</span>
        <span className="text-[#d91c1c] text-[13px]">*</span>
      </div>
      <div className="w-full border border-[#EEF1F6] rounded-[8px] px-4 py-3 flex items-center bg-white">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full text-[#101828] text-[18px] font-bold text-right bg-transparent outline-none placeholder:text-[#9AA4B2] placeholder:font-normal"
          dir="rtl"
        />
      </div>
      {hint && <p className="text-[10px] text-[#9AA4B2] text-right w-full">{hint}</p>}
    </div>
  );
}

function SelectField({ label, hint, value, options, open, onToggle, onSelect }: {
  label: string; hint?: string; value: string; options: string[];
  open: boolean; onToggle: () => void; onSelect: (v: string) => void;
}) {
  return (
    <div className="flex-1 flex flex-col gap-2 items-end min-w-0 relative">
      <div className="flex gap-1 items-center w-full justify-start">
        <span className="text-[#475467] text-[13px]">{label}</span>
        <span className="text-[#d91c1c] text-[13px]">*</span>
      </div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full border border-[#EEF1F6] rounded-[8px] px-4 py-3 flex items-center justify-between bg-white cursor-pointer focus:outline-none focus:border-[#0063F5] text-right"
      >
        <span className="text-[#101828] text-[18px] font-bold">{value}</span>
        <ChevronIcon open={open} />
      </button>
      {hint && <p className="text-[10px] text-[#9AA4B2] text-right w-full">{hint}</p>}
      {open && (
        <div className="absolute top-[calc(100%-1rem)] right-0 w-full bg-white border border-[#EEF1F6] rounded-[8px] shadow-lg z-50 overflow-y-auto max-h-[200px]">
          {options.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              className={`w-full text-right px-4 py-3 text-[16px] hover:bg-[#F5F9FF] transition-colors ${value === opt ? 'text-[#0063F5] font-bold' : 'text-[#101828]'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="lg:w-[190px] flex flex-col gap-[12px]">
      <p className="text-white text-[16px] font-bold leading-[1.72]">{title}</p>
      <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
        {items.map(item => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AppPageSme() {
  const [menuOpen, setMenuOpen]               = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [hasLoans, setHasLoans]               = useState<'YES' | 'NO' | null>('NO');
  const [showCompany, setShowCompany]         = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(productOptions[0]);
  const [productOpen, setProductOpen]         = useState(false);
  const [nationalId, setNationalId]           = useState('');
  const [mobile, setMobile]                   = useState('');
  const [crNumber, setCrNumber]               = useState('');
  const [companyName, setCompanyName]         = useState('');
  const [financingAmount, setFinancingAmount] = useState('750,000 ريال');
  const [companyStatus, setCompanyStatus]     = useState('مؤسسة');
  const [amountOpen, setAmountOpen]           = useState(false);
  const [statusOpen, setStatusOpen]           = useState(false);
  const [showOtp, setShowOtp]                 = useState(false);
  const [otpDigits, setOtpDigits]             = useState(['', '', '', '']);
  const [countdown, setCountdown]             = useState(24);

  useEffect(() => {
    if (!showOtp || countdown <= 0) return;
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [showOtp, countdown]);

  const countdownStr = `${String(Math.floor(countdown / 60)).padStart(2, '0')}:${String(countdown % 60).padStart(2, '0')}`;

  return (
    <div className="bg-[#f9f8fd]" dir="rtl">
      {menuOpen && <SlidingMenu onClose={() => setMenuOpen(false)} />}

      <Navbar onMenuOpen={() => setMenuOpen(true)} dark langHref="/app" langLabel="EN" lang="ar" />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#F9F8FD] overflow-hidden">
        <img
          src="/bg-shape.svg"
          alt=""
          className="absolute top-0 left-0 w-full h-full min-h-[500px] lg:min-h-[250px] pointer-events-none"
          style={{ objectFit: 'fill', maxHeight: '70%' }}
        />

        <div className="relative max-w-[1440px] mx-auto">
          {/* In RTL flex-row: first child → right, second child → left */}
          <div className={`flex flex-col lg:flex-row lg:items-start lg:gap-[62px] lg:px-[100px] pb-[250px] lg:pb-0 ${showOtp ? 'lg:pb-[200px]' : 'lg:pb-[32px]'}`}>

            {/* ── RIGHT (first in DOM): Headline + Man image ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-[31px] px-6 lg:px-0 pt-8 lg:pt-[185px] pb-8 lg:pb-[60px]">

              <div className="flex flex-col gap-[16px] lg:w-[577px] lg:mr-auto text-center lg:text-right">
                <h1 className="text-white text-[40px] lg:text-[48px] font-bold leading-[1.25]">
                  تمويل شركتك،<br className="lg:hidden" />بخطوة وثقة
                </h1>
                <p className="text-[#98A2B3] text-[16px] leading-[1.7]">
                  نساعد شركتك على الحصول على التمويل المناسب بسرعة وشفافية، تحت إشراف البنك المركزي السعودي.
                </p>
              </div>

              {/* Man + blue bg — desktop only */}
              <div className="hidden lg:block relative h-[567px] w-full">
                <div className="absolute top-[62px] left-0 w-full h-[363px] bg-[#0063F5] rounded-[32px]" />

                {/* SAMA spinning badge */}
                <div className="absolute top-[38px] left-[24px] w-[157px] h-[157px]">
                  <img
                    src="/badge.svg"
                    alt=""
                    className="w-full h-full"
                    style={{ animation: 'badge-spin 18s linear infinite' }}
                  />
                  <img src="/badge-center.svg" alt="مرخص من ساما" className="absolute inset-0 w-full h-full" />
                </div>

                {/* Man image */}
                <img
                  src="/sme-manhr.png"
                  alt=""
                  className="absolute left-0 w-full h-full object-contain object-bottom"
                  style={{ top: '-142px' }}
                />
              </div>
            </div>

            {/* ── LEFT (second in DOM): FORM ── */}
            <div className="lg:w-[601px] lg:flex-shrink-0 px-6 lg:px-0 lg:pt-[150px] pb-8 lg:pb-[60px]">
              <div className="w-full rounded-[32px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] bg-white">

                {/* Section 1: Goal */}
                <div className="bg-[#F1F7FF] border-b border-[#EAECF0] px-6 py-5 rounded-t-[32px]">
                  <p className="text-[#021945] text-[20px] font-bold text-center">وش الهدف من التمويل؟</p>
                </div>

                <div className="px-6 py-6 flex flex-col gap-6">
                  {/* Purpose 4×2 grid */}
                  <div className="flex flex-col gap-4">
                    {[0, 1, 2, 3].map(row => (
                      <div key={row} className="flex gap-4">
                        {purposeOptions.slice(row * 2, row * 2 + 2).map(opt => {
                          const sel = selectedPurpose === opt.key;
                          return (
                            <button
                              key={opt.key}
                              type="button"
                              onClick={() => { if (sel) { setSelectedPurpose(''); setShowCompany(false); setShowOtp(false); setCountdown(24); } else { setSelectedPurpose(opt.key); } }}
                              className={`flex-1 flex flex-col gap-[2px] items-end justify-center px-3 py-2 rounded-[8px] border text-right transition-all min-w-0 ${
                                sel
                                  ? 'bg-[#FFDD33] border-[#E6C12F] shadow-[0px_10px_12px_rgba(255,220,82,0.35)]'
                                  : 'bg-white border-[rgba(2,6,31,0.08)]'
                              }`}
                            >
                              <span className="text-[16px] font-bold text-[#121a26] leading-6 w-full">{opt.label}</span>
                              <span className="text-[10px] text-[#697586] leading-[18px] w-full">{opt.sub}</span>
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Know the product */}
                  <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-1 items-center w-full justify-center">
                      <span className="text-[#475467] text-[13px]">أعرف المنتج اللي أبيه بالضبط</span>
                      <span className="text-[#d91c1c] text-[13px]">*</span>
                    </div>
                    <div className="flex gap-3 py-1">
                      <button
                        type="button"
                        onClick={() => setHasLoans('YES')}
                        className={`px-12 py-3 rounded-[48px] text-[18px] font-semibold border transition-colors ${
                          hasLoans === 'YES'
                            ? 'bg-[#0063F5] border-[#004FC6] text-white'
                            : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'
                        }`}
                      >نعم</button>
                      <button
                        type="button"
                        onClick={() => setHasLoans('NO')}
                        className={`px-12 py-3 rounded-[48px] text-[18px] font-semibold border transition-colors ${
                          hasLoans === 'NO'
                            ? 'bg-[#0063F5] border-[#004FC6] text-white'
                            : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'
                        }`}
                      >لا</button>
                    </div>
                  </div>

                  {/* Product dropdown — only when نعم */}
                  {hasLoans === 'YES' && <div className="flex flex-col gap-2 items-end w-full relative">
                    <div className="flex gap-1 items-center w-full justify-start">
                      <span className="text-[#475467] text-[13px]">منتج محدد (اختياري)</span>
                      <span className="text-[#d91c1c] text-[13px]">*</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setProductOpen(o => !o)}
                      className="w-full border border-[#EEF1F6] rounded-[8px] px-4 py-3 flex items-center justify-between bg-white cursor-pointer focus:outline-none focus:border-[#0063F5] text-right"
                    >
                      <span className="text-[#101828] text-[18px] font-bold transition-opacity duration-400">{selectedProduct}</span>
                      <ChevronIcon open={productOpen} />
                    </button>
                    <p className="text-[10px] text-[#9AA4B2] text-right w-full">يمكن تغييره لاحقاً — المطابقة الذكية تبقى متاحة</p>
                    {productOpen && (
                      <div className="absolute top-[calc(100%-1rem)] right-0 w-full bg-white border border-[#EEF1F6] rounded-[8px] shadow-lg z-50 overflow-y-auto max-h-[240px]">
                        {productOptions.map(opt => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { setSelectedProduct(opt); setProductOpen(false); }}
                            className={`w-full text-right px-4 py-3 text-[16px] hover:bg-[#F5F9FF] transition-colors ${selectedProduct === opt ? 'text-[#0063F5] font-bold' : 'text-[#101828]'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>}

                  {/* Continue — reveals company section */}
                  {!showCompany && selectedPurpose && (
                    <div className="flex justify-center pt-2 pb-4">
                      <button
                        type="button"
                        onClick={() => setShowCompany(true)}
                        className="bg-[#FFDD33] rounded-[56px] px-6 py-4 flex items-center justify-center gap-2 w-[240px] cursor-pointer"
                      >
                        <span className="text-[16px] font-semibold text-[#171717]">استمر في إكمال البيانات</span>
                        <img src="/arrow-narrow-left.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Section 2: Company data — shown after continue */}
                {showCompany && <>
                  <div className="bg-white border-t border-[#EAECF0] px-6 py-5">
                    <p className="text-[#021945] text-[20px] font-bold text-center">بيانات شركتك</p>
                  </div>

                  <div className="px-6 py-6 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <FormField label="رقم الهوية أو الإقامة" hint="يبدأ بـ 1 للمواطن أو 2 للمقيم" placeholder="10 أرقام" value={nationalId} onChange={setNationalId} />
                      <FormField label="رقم الجوال" hint="10 أرقام — يبدأ بـ 05" placeholder="05XXXXXXXX" value={mobile} onChange={setMobile} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <FormField label="رقم السجل التجاري" hint="رقم السجل التجاري الموحد" placeholder="10 أرقام" value={crNumber} onChange={setCrNumber} />
                      <FormField label="اسم الشركة" placeholder="مثال: شركة المدار التجارية" value={companyName} onChange={setCompanyName} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <SelectField
                        label="مبلغ التمويل المتوقع"
                        hint="تقديري — يتم تأكيده بعد المطابقة"
                        value={financingAmount}
                        options={financingAmounts}
                        open={amountOpen}
                        onToggle={() => setAmountOpen(o => !o)}
                        onSelect={(v) => { setFinancingAmount(v); setAmountOpen(false); }}
                      />
                      <SelectField
                        label="حالة الشركة"
                        hint="يساعدنا على تخصيص مسار المتطلبات"
                        value={companyStatus}
                        options={companyStatuses}
                        open={statusOpen}
                        onToggle={() => setStatusOpen(o => !o)}
                        onSelect={(v) => { setCompanyStatus(v); setStatusOpen(false); }}
                      />
                    </div>
                  </div>

                </>}

                  {/* Info box — always visible */}
                  <div className="px-6 pb-2">
                    <div dir="rtl" className="bg-[#F5F9FF] border border-[#AACBFC] rounded-[8px] p-2 flex gap-[6px] items-start w-full">
                      <div className="w-[14px] h-[14px] shrink-0 mt-0.5">
                        <img src="/icon-info.svg" alt="" className="w-full h-full" />
                      </div>
                      <div className="flex-1 flex flex-col gap-1 text-right">
                        <p className="text-[#0053CC] text-[12px] leading-[18px] font-semibold">رسوم التقديم: 299 ريال</p>
                        <p className="text-[#0053CC] text-[12px] leading-[18px]">تُدفع في أول خطوة بعد التحقق — رسوم تقديم للمؤسسات ويشمل فتح الملف وبدء مسار الدراسة الأولية.</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit / OTP — always visible */}
                  <div className="bg-white px-6 pb-[40px] pt-4 rounded-b-[32px] flex justify-center items-start relative">
                    {!showOtp ? (
                      <button
                        disabled={!showCompany}
                        onClick={() => showCompany && setShowOtp(true)}
                        className={`rounded-[56px] px-6 py-4 flex items-center justify-center gap-2 w-[240px] transition-colors ${
                          showCompany
                            ? 'bg-[#FFDD33] cursor-pointer'
                            : 'bg-[#E5E7EB] cursor-not-allowed opacity-50'
                        }`}
                      >
                        <span className="text-[16px] font-semibold text-[#171717]">إرسال رمز التحقق</span>
                        <img src="/arrow-narrow-left.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                      </button>
                    ) : (
                      <div className="relative h-[163px] w-full">
                        <div className="absolute -translate-x-1/2 left-1/2 top-0 bg-[#0063F5] rounded-[24px] overflow-clip pb-[48px] pt-[16px] px-[22px] w-full max-w-[517px] flex flex-col gap-[25px] items-center">
                          <div className="flex flex-col gap-[18px] items-center w-full rounded-[12px]">
                            <div className="flex flex-col gap-2 items-center w-full">
                              <p className="text-white text-[13px]">رقم الجوال</p>
                              <div className="flex items-center gap-2 justify-center">
                                <img alt="" className="w-5 h-5 flex-shrink-0" src="/icon-phone-white.svg" />
                                <span className="text-white text-[24px] font-bold">+966 {mobile || '05XXXXXXXX'}</span>
                                <div className="bg-white rounded-full p-[2px] flex-shrink-0">
                                  <img alt="" className="w-3 h-3 block" src="/icon-check.svg" />
                                </div>
                              </div>
                            </div>
                            <p className="text-[#92baf6] text-[12px] text-center leading-[1.5] w-full">يرجى إدخال رمز التحقق المرسل إلى رقم جوالك!</p>
                            <div className="flex gap-2" dir="ltr">
                              {otpDigits.map((digit, i) => (
                                <input
                                  key={i}
                                  id={`otp-${i}`}
                                  inputMode="numeric"
                                  maxLength={1}
                                  value={digit}
                                  onChange={e => {
                                    const val = e.target.value.replace(/\D/, '');
                                    const next = [...otpDigits];
                                    next[i] = val;
                                    setOtpDigits(next);
                                    if (val && i < 3) (document.getElementById(`otp-${i + 1}`) as HTMLInputElement)?.focus();
                                  }}
                                  onKeyDown={e => {
                                    if (e.key === 'Backspace' && !digit && i > 0) (document.getElementById(`otp-${i - 1}`) as HTMLInputElement)?.focus();
                                  }}
                                  className="bg-[#0041a3] border border-[#00317a] rounded-[8px] w-[53px] h-[78px] text-white text-[46.5px] leading-[54px] text-center outline-none font-bold p-3"
                                  type="text"
                                />
                              ))}
                            </div>
                            <p className="text-[12px] text-center tracking-[0.4px]">
                              <span className="text-[#92baf6]">إعادة إرسال الرمز؟ </span>
                              <span className="text-[#FFDD33]">{countdownStr}</span>
                            </p>
                          </div>
                          <a href="/results" className="bg-[#FFDD33] rounded-[56px] px-[64px] py-[16px] flex items-center gap-[10px]">
                            <span className="text-[#171717] text-[16px] font-semibold">تمويل</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                              <path d="M4.16602 10.0001H15.8327M9.99935 15.8334L15.8327 10.0001L9.99935 4.16675" stroke="#414651" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#202a39]">
        <div className="max-w-[1440px] mx-auto px-[24px] lg:px-[75px] pt-[60px] lg:pt-[90px] flex flex-col gap-[48px]">
          <div className="flex flex-col lg:flex-row lg:items-start w-full gap-[40px] lg:gap-[64px]">

            {/* Left: logo + SAMA badge */}
            <div className="flex flex-col items-start gap-[40px] lg:gap-0 lg:justify-between lg:self-stretch lg:flex-1">
              <div className="flex items-center">
                <img src="/logo-tamawal-web.svg" alt="Tamawal" className="h-[32px] w-auto" />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="relative size-[100px]">
                  <img src="/badge.svg" alt="" className="absolute inset-0 size-full" style={{ animation: 'badge-spin 18s linear infinite' }} />
                  <img src="/badge-center.svg" alt="مرخص من ساما" className="absolute inset-0 size-full" />
                </div>
                <p className="text-[rgba(255,255,255,0.86)] text-[18px] font-semibold leading-[1.5] max-w-[254px]">
                  تمويل® تحت إشراف ورقابة البنك المركزي السعودي بموجب ترخيص رقم 98/N M/202504
                </p>
              </div>
            </div>

            {/* Right: link columns */}
            <div className="flex flex-col gap-[32px] shrink-0">
              <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[30px]">
                <FooterCol title="معلومات عنا"   items={['من نحن', 'منتجاتنا', 'قيمنا']} />
                <FooterCol title="قانوني"         items={['الشروط والأحكام', 'حماية البيانات والخصوصية', 'مبادئ حماية العميل']} />
                <FooterCol title="اتخذ إجراءً"   items={['كن شريكاً', 'كن عميلاً']} />
                <FooterCol title="رعاية العملاء" items={['اقتراح', 'شكوى', 'الإبلاغ عن مخالفة', 'الإبلاغ عن احتيال مالي']} />
              </div>

              <div className="border-t border-white/10" />

              <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[30px]">
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">وسائل التواصل الاجتماعي</p>
                  <div className="flex gap-[8px] items-center">
                    <img src="/icon-linkedin.svg" alt="LinkedIn" className="w-[45px] h-[45px]" />
                    <img src="/icon-twitter.svg"  alt="X"        className="w-[45px] h-[45px]" />
                  </div>
                  <button className="flex items-center gap-[2px] py-[12px]">
                    <span className="text-[rgba(255,255,255,0.86)] text-[16px] font-semibold leading-[1.72]">الأسئلة الشائعة</span>
                    <img src="/arrow-next-dark.svg" alt="" className="w-[24px] h-[24px]" />
                  </button>
                </div>

                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-white text-[16px] font-semibold">ساعات العمل</p>
                    <p className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px]">09:00 – 17:00</p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-white text-[16px] font-semibold">أيام العمل</p>
                    <p className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px]">الأحد – الخميس</p>
                  </div>
                </div>

                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">العنوان</p>
                  <div className="flex gap-[8px] items-start">
                    <img src="/pinlocation.svg" alt="" className="w-[13px] mt-[2px] flex-shrink-0" />
                    <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px] leading-[1.45]">شارع العليا (403)، الرياض، المملكة العربية السعودية</span>
                  </div>
                </div>

                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">تواصل معنا</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <img src="/icon-email.svg" alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">info@tamawal.sa</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <img src="/icon-phone.svg" alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">011 512 3870</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <img src="/icon-phone.svg" alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">800 100 0276</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-[24px] pb-[24px]">
            <div className="border-t border-white/10" />
            <div className="flex flex-col gap-[12px] items-center lg:hidden">
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] text-center leading-[1.7]">حمّل تطبيقنا!</p>
              <div className="flex gap-[12px]">
                <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] overflow-hidden">
                  <img src="/appstore.svg" alt="App Store" className="w-full h-full object-contain" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] overflow-hidden">
                  <img src="/playstore.svg" alt="Google Play" className="w-full h-full object-contain" />
                </a>
              </div>
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] text-center leading-[1.7]">© جميع الحقوق محفوظة لتمويل 2026</p>
            </div>
            <div className="hidden lg:flex items-center justify-between w-full">
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] leading-[1.7]">© جميع الحقوق محفوظة لتمويل 2026</p>
              <div className="flex items-center gap-[16px]">
                <p className="text-[rgba(255,255,255,0.64)] text-[16px] leading-[1.7]">حمّل تطبيقنا!</p>
                <div className="flex gap-[12px]">
                  <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                    <img src="/appstore.svg" alt="App Store" className="w-full h-full object-contain" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                    <img src="/playstore.svg" alt="Google Play" className="w-full h-full object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
