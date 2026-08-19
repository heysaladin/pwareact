'use client';
import { ACTIVITY_LOG } from './cps-data';
import type { Profile } from './cps-data';

// ─── Shared helpers ───────────────────────────────────────────────────────────

type BadgeVariant = 'green' | 'red' | 'yellow' | 'gray' | 'blue';

const BADGE_CLASSES: Record<BadgeVariant, string> = {
  green:  'bg-[#ecfdf3] border border-[#12b76a] text-[#12b76a]',
  red:    'bg-[#fef3f2] border border-[#fda29b] text-[#b42318]',
  yellow: 'bg-[#fffaeb] border border-[#fec84b] text-[#b54708]',
  gray:   'bg-[#f9fafb] border border-[#e4e7ec] text-[#697586]',
  blue:   'bg-[#eaf2ff] border border-[#aacbfc] text-[#0053cc]',
} as const;

function Badge({ variant, children }: { variant: BadgeVariant; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${BADGE_CLASSES[variant]}`}>
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-[#15212f] mb-4">{children}</h3>
  );
}

function FieldRow({ label, value, alt }: { label: React.ReactNode; value: React.ReactNode; alt?: boolean }) {
  return (
    <div className={`flex items-center justify-between px-3 py-2.5 rounded ${alt ? 'bg-[#f9fbfc]' : ''}`}>
      <span className="text-xs text-[#697586]">{label}</span>
      <span className="text-sm font-medium text-[#1e2228] text-end">{value}</span>
    </div>
  );
}

// ─── SummaryContent (0-0) ─────────────────────────────────────────────────────

export function SummaryContent({ isAr }: { isAr: boolean }) {
  return (
    <>
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#202a39]">
            {isAr ? 'جاهزية الملف المالي' : 'Financial profile readiness'}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 p-3 rounded-lg border border-[#e3e8f1]">
            <span className="text-xs text-[#697586]">MASDR</span>
            <span className="text-sm font-medium text-[#b54708]">{isAr ? 'سجلات التوظيف منتهية الصلاحية' : 'Employment records expired'}</span>
            <Badge variant="yellow">{isAr ? 'منتهي' : 'Expired'}</Badge>
          </div>
          <div className="flex flex-col gap-2 p-3 rounded-lg border border-[#e3e8f1]">
            <span className="text-xs text-[#697586]">SIMAH</span>
            <span className="text-sm font-medium text-[#15212f]">{isAr ? 'تقارير الائتمان: ٣' : 'Credit reports found: 3'}</span>
            <Badge variant="green">{isAr ? 'متاح' : 'Available'}</Badge>
          </div>
          <div className="flex flex-col gap-2 p-3 rounded-lg border border-[#e3e8f1]">
            <span className="text-xs text-[#697586]">Nafath</span>
            <span className="text-sm font-medium text-[#b42318]">{isAr ? 'فشل التحقق' : 'Verification failed'}</span>
            <Badge variant="red">{isAr ? 'فشل' : 'Failed'}</Badge>
          </div>
          <div className="flex flex-col gap-2 p-3 rounded-lg border border-[#e3e8f1]">
            <span className="text-xs text-[#697586]">Tamawal</span>
            <span className="text-sm font-medium text-[#15212f]">{isAr ? 'تقرير الفحص متاح' : 'Screening report available'}</span>
            <Badge variant="green">{isAr ? 'مكتمل' : 'Completed'}</Badge>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-[#15212f]">{isAr ? 'النشاط الأخير' : 'Recent activity'}</h3>
          <button className="text-sm font-medium text-[#0053cc] hover:underline">{isAr ? 'عرض كل السجلات' : 'View all logs'}</button>
        </div>
        <div className="flex flex-col mt-2">
          {ACTIVITY_LOG.map((item, i) => (
            <div key={i} className={`flex items-center justify-between py-3 ${i > 0 ? 'border-t border-[#edf0f5]' : ''}`}>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-black">{isAr ? item.eventAr : item.event}</span>
                <span className="text-xs text-[#697586]">{isAr ? item.detailAr : item.detail}</span>
              </div>
              <span className="text-xs text-[#697586] whitespace-nowrap ms-4">{isAr ? item.timeAr : item.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

// ─── CommentsContent (0-2) ────────────────────────────────────────────────────

const COMMENTS_DATA = [
  { initials: 'NA', name: 'Noura Alqahtani', nameAr: 'نورة القحطاني', timeEn: 'Yesterday 14:26',   timeAr: 'أمس 14:26',          textEn: 'Identity checks complete. Waiting for next customer action.',     textAr: 'اكتملت عمليات التحقق من الهوية. في انتظار الإجراء التالي من العميل.' },
  { initials: 'AA', name: 'Ahmed Al-Dosari', nameAr: 'أحمد الدوسري',  timeEn: 'Aug 12, 10:15',     timeAr: 'أغسطس 12، 10:15',   textEn: 'SIMAH retry has been scheduled. Should resolve within 24h.',      textAr: 'تمت جدولة إعادة محاولة SIMAH. من المتوقع حله خلال 24 ساعة.'       },
  { initials: 'NA', name: 'Noura Alqahtani', nameAr: 'نورة القحطاني', timeEn: 'Aug 12, 11:30',     timeAr: 'أغسطس 12، 11:30',   textEn: 'Customer contacted via phone. Confirmed awareness of the delay.', textAr: 'تم التواصل مع العميل عبر الهاتف. أكد علمه بالتأخير.'               },
] as const;

export function CommentsContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'التعليقات الداخلية' : 'Internal Comments'}</SectionTitle>
      <div className="flex flex-col gap-4 mb-5">
        {COMMENTS_DATA.map((c, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#dfeeff] flex items-center justify-center text-xs font-bold text-[#0d5fcd] shrink-0 mt-0.5">
              {c.initials}
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[#15212f]">{isAr ? c.nameAr : c.name}</span>
                <span className="text-xs text-[#697586]">{isAr ? c.timeAr : c.timeEn}</span>
              </div>
              <p className="text-sm text-[#414651]">{isAr ? c.textAr : c.textEn}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#e3e8f1] pt-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[#dfeeff] flex items-center justify-center text-xs font-bold text-[#0d5fcd] shrink-0" />
          <div className="flex-1 min-w-0">
            <textarea
              rows={3}
              placeholder={isAr ? 'أضف تعليقاً...' : 'Add a comment...'}
              className="w-full rounded-lg border border-[#d5d7da] px-3 py-2 text-sm text-[#1e2228] placeholder:text-[#9aa3b0] resize-none focus:outline-none focus:border-[#0063f5]"
            />
            <div className="flex justify-end mt-2">
              <button className="px-4 py-2 rounded-lg bg-[#0063f5] text-white text-sm font-medium hover:bg-[#0052cc] transition-colors">
                {isAr ? 'إرسال' : 'Post comment'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// ─── ScreeningContent (1-0) ───────────────────────────────────────────────────

const SCREENING_CHECKS = [
  { keyEn: 'AML Check',      keyAr: 'فحص غسيل الأموال',  resultEn: 'Passed',    resultAr: 'ناجح',          variant: 'green'  as BadgeVariant, source: 'World-Check',  dateEn: 'Aug 1, 2026',  dateAr: 'أغسطس 1، 2026'  },
  { keyEn: 'PEP Check',      keyAr: 'شخص مكشوف سياسياً', resultEn: 'Not listed', resultAr: 'غير مدرج',      variant: 'gray'   as BadgeVariant, source: 'OFAC',          dateEn: 'Aug 1, 2026',  dateAr: 'أغسطس 1، 2026'  },
  { keyEn: 'Sanctions',      keyAr: 'العقوبات',           resultEn: 'Clear',     resultAr: 'لا توجد',       variant: 'green'  as BadgeVariant, source: 'UN Sanctions',  dateEn: 'Aug 1, 2026',  dateAr: 'أغسطس 1، 2026'  },
  { keyEn: 'Adverse Media',  keyAr: 'الإعلام السلبي',    resultEn: 'No hits',   resultAr: 'لا نتائج',      variant: 'green'  as BadgeVariant, source: 'LexisNexis',   dateEn: 'Aug 1, 2026',  dateAr: 'أغسطس 1، 2026'  },
] as const;

export function ScreeningContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SectionTitle>{isAr ? 'الفحص الانتقائي' : 'AML/KYC Screening'}</SectionTitle>
        <div className="flex flex-col divide-y divide-[#e3e8f1]">
          {SCREENING_CHECKS.map((c, i) => (
            <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-[#1e2228]">{isAr ? c.keyAr : c.keyEn}</span>
                <span className="text-xs text-[#697586]">{isAr ? 'المصدر' : 'Source'}: {c.source} · {isAr ? c.dateAr : c.dateEn}</span>
              </div>
              <Badge variant={c.variant}>{isAr ? c.resultAr : c.resultEn}</Badge>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <SectionTitle>{isAr ? 'ملخص الفحص' : 'Screening Summary'}</SectionTitle>
        <FieldRow label={isAr ? 'الحالة الإجمالية' : 'Overall status'}    value={<Badge variant="green">{isAr ? 'ناجح' : 'Passed'}</Badge>}          />
        <FieldRow label={isAr ? 'المراجعة التالية' : 'Next review'}        value={isAr ? 'سبتمبر 1، 2026' : 'Sep 1, 2026'}                             alt />
        <FieldRow label={isAr ? 'مستوى المخاطر' : 'Risk level'}            value={<Badge variant="green">{isAr ? 'منخفض' : 'Low'}</Badge>}             />
      </Card>
    </div>
  );
}

// ─── RiskContent (1-1) ────────────────────────────────────────────────────────

const RISK_FACTORS = [
  { textEn: 'On-time payment history',    textAr: 'سجل سداد في الوقت المحدد', positive: true   },
  { textEn: 'Low debt-to-income ratio',   textAr: 'نسبة دين إلى دخل منخفضة',  positive: true   },
  { textEn: 'Stable employment',          textAr: 'عمل مستقر',                 positive: true   },
  { textEn: 'New credit inquiry',         textAr: 'استعلام ائتماني جديد',       positive: false  },
] as const;

export function RiskContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="flex items-center gap-6 mb-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-5xl font-bold text-[#15212f]">23</span>
            <span className="text-xs text-[#697586]">/ 100</span>
          </div>
          <div className="flex flex-col gap-1">
            <Badge variant="green">{isAr ? 'مخاطرة منخفضة' : 'Low Risk'}</Badge>
            <span className="text-sm text-[#697586]">{isAr ? 'درجة المخاطرة' : 'Risk Score'}</span>
          </div>
        </div>
        <div className="w-full h-2 bg-[#e3e8f1] rounded-full mb-6">
          <div className="h-2 bg-[#12b76a] rounded-full" style={{ width: '23%' }} />
        </div>
        <SectionTitle>{isAr ? 'عوامل المخاطرة' : 'Risk Factors'}</SectionTitle>
        <div className="flex flex-col gap-2">
          {RISK_FACTORS.map((f, i) => (
            <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
              <span className={`text-base ${f.positive ? 'text-[#12b76a]' : 'text-[#b54708]'}`}>{f.positive ? '↑' : '→'}</span>
              <span className="text-sm text-[#1e2228]">{isAr ? f.textAr : f.textEn}</span>
              <span className="ms-auto">
                <Badge variant={f.positive ? 'green' : 'yellow'}>{isAr ? (f.positive ? 'إيجابي' : 'محايد') : (f.positive ? 'Positive' : 'Neutral')}</Badge>
              </span>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <FieldRow label={isAr ? 'آخر تقييم' : 'Last assessed'}         value={isAr ? 'أغسطس 5، 2026' : 'Aug 5, 2026'}                                />
        <FieldRow label={isAr ? 'فئة المخاطر' : 'Risk category'}        value={<Badge variant="green">{isAr ? 'منخفض' : 'Low'}</Badge>}   alt      />
      </Card>
    </div>
  );
}

// ─── KycContent (2-0) ────────────────────────────────────────────────────────

export function KycContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'التحقق من الهوية' : 'KYC Verification'}</SectionTitle>
      <FieldRow label={isAr ? 'تحقق نفاذ' : 'Nafath verification'}       value={<><Badge variant="green">{isAr ? 'موثق' : 'Verified'}</Badge><span className="ms-2 text-xs text-[#697586]">{isAr ? 'أغسطس 11، 2026' : 'Aug 11, 2026'}</span></>}    />
      <FieldRow label={isAr ? 'الهوية الوطنية' : 'National ID'}            value={<span className="flex items-center gap-2">9573566234 <Badge variant="green">{isAr ? 'موثق' : 'Verified'}</Badge></span>}                                              alt />
      <FieldRow label={isAr ? 'فحص الهوية بالصورة الشخصية' : 'Selfie liveness check'} value={<><Badge variant="green">{isAr ? 'ناجح' : 'Passed'}</Badge><span className="ms-2 text-xs text-[#697586]">{isAr ? 'أغسطس 11، 2026' : 'Aug 11, 2026'}</span></>}   />
      <FieldRow label={isAr ? 'العنوان' : 'Address'}                       value={<span className="flex items-center gap-2">{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'} <Badge variant="green">{isAr ? 'موثق' : 'Verified'}</Badge></span>}  alt />
      <FieldRow label={isAr ? 'تطابق الوجه' : 'Face match score'}          value="98.4%"                                                                                                                                                                  />
      <FieldRow label={isAr ? 'مستوى التحقق' : 'KYC tier'}                value={<Badge variant="blue">{isAr ? 'محسّن' : 'Enhanced'}</Badge>}                                                                                                            alt />
    </Card>
  );
}

// ─── MasdrContent (2-1) ──────────────────────────────────────────────────────

const MASDR_VALIDATION = [
  { textEn: 'Employment status confirmed',   textAr: 'تأكيد حالة التوظيف',     passed: true  },
  { textEn: 'Salary verified via GOSI',      textAr: 'التحقق من الراتب عبر GOSI', passed: true  },
  { textEn: 'Employer name matched',         textAr: 'تطابق اسم جهة العمل',    passed: true  },
  { textEn: 'HR letter date valid',          textAr: 'تاريخ خطاب الموارد البشرية صالح', passed: true  },
  { textEn: 'Salary transfer bank verified', textAr: 'التحقق من بنك تحويل الراتب', passed: false },
  { textEn: 'Continuous employment >12m',    textAr: 'عمل مستمر أكثر من 12 شهراً', passed: false },
] as const;

export function MasdrContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SectionTitle>{isAr ? 'بيانات التوظيف · MASDR' : 'Employment Data · MASDR'}</SectionTitle>
        <FieldRow label={isAr ? 'حالة التوظيف' : 'Employment status'}     value={isAr ? 'موظف' : 'Employed'}                                           />
        <FieldRow label={isAr ? 'جهة العمل' : 'Employer'}                  value={isAr ? 'وزارة المالية' : 'Ministry of Finance'}                       alt />
        <FieldRow label={isAr ? 'القطاع' : 'Sector'}                       value={isAr ? 'حكومي' : 'Government'}                                        />
        <FieldRow label={isAr ? 'الراتب الشهري' : 'Monthly salary'}        value="SAR 15,000"                                                           alt />
        <FieldRow label={isAr ? 'تاريخ بدء العمل' : 'Employment start'}    value={isAr ? 'يناير 2020 (أكثر من 6 سنوات)' : 'Jan 2020 (6+ years)'}       />
        <FieldRow label={isAr ? 'خطاب الموارد البشرية' : 'HR Letter'}      value={<span className="flex items-center gap-2">{isAr ? 'متاح' : 'Available'} <Badge variant="green">{isAr ? 'صادر أغسطس 1، 2026' : 'Issued Aug 1, 2026'}</Badge></span>} alt />
        <FieldRow label={isAr ? 'مشترك في GOSI' : 'GOSI enrolled'}         value={<Badge variant="green">{isAr ? 'نعم' : 'Yes'}</Badge>}                />
        <FieldRow label={isAr ? 'بنك تحويل الراتب' : 'Salary transfer bank'} value={isAr ? 'بنك الراجحي' : 'Al Rajhi Bank'}                             alt />
      </Card>
      <Card>
        <SectionTitle>{isAr ? 'نتائج التحقق' : 'Validation Results'}</SectionTitle>
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="green">4 / 6</Badge>
          <span className="text-sm text-[#697586]">{isAr ? 'اجتاز' : 'passed'}</span>
        </div>
        <div className="flex flex-col gap-2">
          {MASDR_VALIDATION.map((v, i) => (
            <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
              <span className={`text-sm font-bold ${v.passed ? 'text-[#12b76a]' : 'text-[#b42318]'}`}>{v.passed ? '✓' : '✗'}</span>
              <span className="text-sm text-[#1e2228]">{isAr ? v.textAr : v.textEn}</span>
              <span className="ms-auto">
                <Badge variant={v.passed ? 'green' : 'red'}>{isAr ? (v.passed ? 'ناجح' : 'فشل') : (v.passed ? 'Pass' : 'Fail')}</Badge>
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── SimahContent (2-2) ──────────────────────────────────────────────────────

const SIMAH_FACILITIES = [
  { typeEn: 'Home Finance',  typeAr: 'تمويل عقاري',    provider: 'Al Rajhi', amountEn: 'SAR 320,000',         amountAr: 'SAR 320,000',       statusEn: 'Active',  statusAr: 'نشط',  variant: 'green' as BadgeVariant, monthlyEn: 'Monthly: SAR 1,800', monthlyAr: 'شهري: 1,800 ر.س' },
  { typeEn: 'Auto Finance',  typeAr: 'تمويل سيارة',    provider: 'NCB',      amountEn: 'SAR 85,000',          amountAr: 'SAR 85,000',        statusEn: 'Closed',  statusAr: 'مغلق', variant: 'gray'  as BadgeVariant, monthlyEn: '',                   monthlyAr: ''                 },
  { typeEn: 'Credit Card',   typeAr: 'بطاقة ائتمانية', provider: 'SABB',     amountEn: 'Limit: SAR 20,000',   amountAr: 'الحد: 20,000 ر.س', statusEn: 'Active',  statusAr: 'نشط',  variant: 'green' as BadgeVariant, monthlyEn: 'Monthly: SAR 600',   monthlyAr: 'شهري: 600 ر.س'   },
] as const;

export function SimahContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="flex items-center gap-6 mb-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-5xl font-bold text-[#15212f]">712</span>
            <span className="text-xs text-[#697586]">{isAr ? 'درجة الائتمان' : 'Credit Score'}</span>
          </div>
          <div className="flex flex-col gap-1">
            <Badge variant="green">{isAr ? 'جيد' : 'Good'}</Badge>
            <span className="text-xs text-[#697586]">SIMAH</span>
          </div>
        </div>
        <FieldRow label={isAr ? 'تاريخ التقرير' : 'Report date'}                 value={isAr ? 'أغسطس 12، 2026' : 'Aug 12, 2026'}      />
        <FieldRow label={isAr ? 'إجمالي التسهيلات الائتمانية' : 'Total credit facilities'} value="3"                                    alt />
        <FieldRow label={isAr ? 'التسهيلات النشطة' : 'Active facilities'}         value="2"                                              />
        <FieldRow label={isAr ? 'الالتزامات الشهرية' : 'Monthly obligations'}     value="SAR 2,400"                                      alt />
        <FieldRow label={isAr ? 'أداء السداد' : 'Payment performance'}            value="94% (on-time)"                                  />
        <FieldRow label={isAr ? 'تأخر 90+ يوم' : 'Delinquencies (90+ days)'}    value="0"                                              alt />
      </Card>
      <Card>
        <SectionTitle>{isAr ? 'التسهيلات الائتمانية' : 'Credit Facilities'}</SectionTitle>
        <div className="flex flex-col divide-y divide-[#e3e8f1]">
          {SIMAH_FACILITIES.map((f, i) => {
            const amount = isAr ? f.amountAr : f.amountEn;
            const monthly = isAr ? f.monthlyAr : f.monthlyEn;
            return (
              <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-[#1e2228]">{isAr ? f.typeAr : f.typeEn} · {f.provider}</span>
                  <span className="text-xs text-[#697586]">{amount}{monthly ? ` · ${monthly}` : ''}</span>
                </div>
                <Badge variant={f.variant}>{isAr ? f.statusAr : f.statusEn}</Badge>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// ─── PreliminaryContent (3-0) ────────────────────────────────────────────────

export function PreliminaryContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <SectionTitle>{isAr ? 'الموافقة المبدئية' : 'Pre-Approval'}</SectionTitle>
        <Badge variant="green">{isAr ? 'موافق عليه' : 'Approved'}</Badge>
      </div>
      <FieldRow label={isAr ? 'الحد الأقصى لمبلغ التمويل' : 'Maximum financing amount'}     value="SAR 450,000"                                                               />
      <FieldRow label={isAr ? 'الحد الأقصى لمدة التمويل' : 'Maximum financing period'}       value={isAr ? '60 شهراً' : '60 months'}                                          alt />
      <FieldRow label={isAr ? 'معدل الربح الاسترشادي' : 'Indicative profit rate'}           value={isAr ? 'من 3.75% سنوياً' : 'from 3.75% per annum'}                         />
      <FieldRow label={isAr ? 'صالحة حتى' : 'Pre-approval valid until'}                     value={isAr ? 'سبتمبر 12، 2026' : 'Sep 12, 2026'}                                 alt />
      <FieldRow label={isAr ? 'أساس الأهلية' : 'Eligibility basis'}                         value={isAr ? 'SIMAH + MASDR + دخل موثق' : 'SIMAH + MASDR + Income verified'}     />
      <FieldRow label={isAr ? 'رقم الموافقة المبدئية' : 'Pre-approval reference'}           value="PA-2026-0831"                                                               alt />
    </Card>
  );
}

// ─── ApplicationsContent (3-1) ───────────────────────────────────────────────

const APPLICATIONS_DATA = [
  { ref: 'A-102341', typeEn: 'Home Finance',  typeAr: 'تمويل عقاري',  amount: 'SAR 350,000', dateEn: 'Aug 10, 2026', dateAr: 'أغسطس 10، 2026', statusEn: 'Under Review', statusAr: 'قيد المراجعة', variant: 'blue'  as BadgeVariant },
  { ref: 'A-098765', typeEn: 'Auto Finance',  typeAr: 'تمويل سيارة',  amount: 'SAR 85,000',  dateEn: 'Jul 15, 2026', dateAr: 'يوليو 15، 2026',  statusEn: 'Approved',     statusAr: 'موافق عليه',   variant: 'green' as BadgeVariant },
] as const;

export function ApplicationsContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'طلبات التمويل' : 'Financing Applications'}</SectionTitle>
      <div className="flex flex-col divide-y divide-[#e3e8f1]">
        <div className="flex items-center justify-between py-2.5 px-1">
          <span className="text-xs font-semibold text-[#697586] w-24">{isAr ? 'المرجع' : 'Reference'}</span>
          <span className="text-xs font-semibold text-[#697586] flex-1">{isAr ? 'النوع' : 'Type'}</span>
          <span className="text-xs font-semibold text-[#697586] w-28">{isAr ? 'المبلغ' : 'Amount'}</span>
          <span className="text-xs font-semibold text-[#697586] w-32">{isAr ? 'تاريخ التقديم' : 'Submitted'}</span>
          <span className="text-xs font-semibold text-[#697586] w-28 text-end">{isAr ? 'الحالة' : 'Status'}</span>
        </div>
        {APPLICATIONS_DATA.map((a, i) => (
          <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
            <span className="text-sm font-medium text-[#0053cc] w-24">{a.ref}</span>
            <span className="text-sm text-[#1e2228] flex-1">{isAr ? a.typeAr : a.typeEn}</span>
            <span className="text-sm text-[#1e2228] w-28">{a.amount}</span>
            <span className="text-sm text-[#697586] w-32">{isAr ? a.dateAr : a.dateEn}</span>
            <span className="w-28 text-end"><Badge variant={a.variant}>{isAr ? a.statusAr : a.statusEn}</Badge></span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── DecisionsContent (3-2) ──────────────────────────────────────────────────

const DECISIONS_DATA = [
  { ref: 'A-102341', statusEn: 'Pending review',  statusAr: 'قيد المراجعة',  variant: 'yellow' as BadgeVariant, detailEn: 'Decision expected: Aug 20, 2026',    detailAr: 'القرار المتوقع: أغسطس 20، 2026' },
  { ref: 'A-098765', statusEn: 'Approved',         statusAr: 'موافق عليه',    variant: 'green'  as BadgeVariant, detailEn: 'Aug 1, 2026 · SAR 85,000 · 4.2% p.a.', detailAr: 'أغسطس 1، 2026 · 85,000 ر.س · 4.2% سنوياً' },
] as const;

export function DecisionsContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'القرارات' : 'Decisions'}</SectionTitle>
      <div className="flex flex-col divide-y divide-[#e3e8f1]">
        {DECISIONS_DATA.map((d, i) => (
          <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-[#0053cc]">{d.ref}</span>
              <span className="text-xs text-[#697586]">{isAr ? d.detailAr : d.detailEn}</span>
            </div>
            <Badge variant={d.variant}>{isAr ? d.statusAr : d.statusEn}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── OrdersContent (3-3) ─────────────────────────────────────────────────────

const ORDERS_DATA = [
  { ref: 'O-8740', typeEn: 'Auto Finance',     typeAr: 'تمويل سيارة',    amount: 'SAR 85,000',  statusEn: 'Closed', statusAr: 'مغلق', variant: 'gray'  as BadgeVariant, dateEn: 'Jul 11, 2026', dateAr: 'يوليو 11، 2026',  termEn: '48 months', termAr: '48 شهراً' },
  { ref: 'O-7891', typeEn: 'Consumer Finance', typeAr: 'تمويل استهلاكي', amount: 'SAR 12,000',  statusEn: 'Active', statusAr: 'نشط',  variant: 'green' as BadgeVariant, dateEn: 'Mar 3, 2026',  dateAr: 'مارس 3، 2026',    termEn: '24 months', termAr: '24 شهراً' },
] as const;

export function OrdersContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'الطلبات / الأوامر' : 'Orders'}</SectionTitle>
      <div className="flex flex-col divide-y divide-[#e3e8f1]">
        <div className="flex items-center justify-between py-2.5 px-1">
          <span className="text-xs font-semibold text-[#697586] w-20">{isAr ? 'الرقم' : 'Ref'}</span>
          <span className="text-xs font-semibold text-[#697586] flex-1">{isAr ? 'النوع' : 'Type'}</span>
          <span className="text-xs font-semibold text-[#697586] w-28">{isAr ? 'المبلغ' : 'Amount'}</span>
          <span className="text-xs font-semibold text-[#697586] w-28">{isAr ? 'التاريخ' : 'Date'}</span>
          <span className="text-xs font-semibold text-[#697586] w-20">{isAr ? 'المدة' : 'Term'}</span>
          <span className="text-xs font-semibold text-[#697586] w-20 text-end">{isAr ? 'الحالة' : 'Status'}</span>
        </div>
        {ORDERS_DATA.map((o, i) => (
          <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
            <span className="text-sm font-medium text-[#0053cc] w-20">{o.ref}</span>
            <span className="text-sm text-[#1e2228] flex-1">{isAr ? o.typeAr : o.typeEn}</span>
            <span className="text-sm text-[#1e2228] w-28">{o.amount}</span>
            <span className="text-sm text-[#697586] w-28">{isAr ? o.dateAr : o.dateEn}</span>
            <span className="text-sm text-[#697586] w-20">{isAr ? o.termAr : o.termEn}</span>
            <span className="w-20 text-end"><Badge variant={o.variant}>{isAr ? o.statusAr : o.statusEn}</Badge></span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── InvoicesContent (4-0) ───────────────────────────────────────────────────

const INVOICES_DATA = [
  { ref: 'INV-2026-08', amount: 'SAR 1,800', dateEn: 'Due Aug 25, 2026',  dateAr: 'مستحق أغسطس 25، 2026', statusEn: 'Pending', statusAr: 'معلق',   variant: 'yellow' as BadgeVariant },
  { ref: 'INV-2026-07', amount: 'SAR 1,800', dateEn: 'Paid Jul 25, 2026', dateAr: 'مدفوع يوليو 25، 2026',  statusEn: 'Paid',    statusAr: 'مدفوع',  variant: 'green'  as BadgeVariant },
  { ref: 'INV-2026-06', amount: 'SAR 1,800', dateEn: 'Paid Jun 25, 2026', dateAr: 'مدفوع يونيو 25، 2026',  statusEn: 'Paid',    statusAr: 'مدفوع',  variant: 'green'  as BadgeVariant },
] as const;

export function InvoicesContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'الفواتير' : 'Invoices'}</SectionTitle>
      <div className="flex flex-col divide-y divide-[#e3e8f1]">
        <div className="flex items-center justify-between py-2.5 px-1">
          <span className="text-xs font-semibold text-[#697586] flex-1">{isAr ? 'الفاتورة' : 'Invoice'}</span>
          <span className="text-xs font-semibold text-[#697586] w-28">{isAr ? 'المبلغ' : 'Amount'}</span>
          <span className="text-xs font-semibold text-[#697586] flex-1">{isAr ? 'التاريخ' : 'Date'}</span>
          <span className="text-xs font-semibold text-[#697586] w-24 text-end">{isAr ? 'الحالة' : 'Status'}</span>
        </div>
        {INVOICES_DATA.map((inv, i) => (
          <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
            <span className="text-sm font-medium text-[#0053cc] flex-1">{inv.ref}</span>
            <span className="text-sm text-[#1e2228] w-28">{inv.amount}</span>
            <span className="text-sm text-[#697586] flex-1">{isAr ? inv.dateAr : inv.dateEn}</span>
            <span className="w-24 text-end"><Badge variant={inv.variant}>{isAr ? inv.statusAr : inv.statusEn}</Badge></span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── BillingContent (4-1) ────────────────────────────────────────────────────

const PAYMENT_HISTORY = [
  { monthEn: 'August 2026',    monthAr: 'أغسطس 2026',   statusEn: 'Paid on time', statusAr: 'مدفوع في الوقت' },
  { monthEn: 'July 2026',      monthAr: 'يوليو 2026',   statusEn: 'Paid on time', statusAr: 'مدفوع في الوقت' },
  { monthEn: 'June 2026',      monthAr: 'يونيو 2026',   statusEn: 'Paid on time', statusAr: 'مدفوع في الوقت' },
] as const;

export function BillingContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SectionTitle>{isAr ? 'ملخص الفواتير' : 'Billing Summary'}</SectionTitle>
        <FieldRow label={isAr ? 'القسط الشهري' : 'Monthly installment'}          value="SAR 1,800"                                                               />
        <FieldRow label={isAr ? 'الأقساط المتبقية' : 'Remaining installments'}   value={isAr ? '48 من 60' : '48 of 60'}                                          alt />
        <FieldRow label={isAr ? 'المبلغ المتبقي' : 'Total outstanding'}          value="SAR 86,400"                                                              />
        <FieldRow label={isAr ? 'تاريخ الدفعة القادمة' : 'Next payment date'}   value={isAr ? 'أغسطس 25، 2026' : 'Aug 25, 2026'}                                alt />
        <FieldRow label={isAr ? 'طريقة الدفع' : 'Payment method'}                value={isAr ? 'تحويل راتب · بنك الراجحي' : 'Salary transfer · Al Rajhi Bank'} />
        <FieldRow label={isAr ? 'الخصم التلقائي' : 'Auto-debit'}                 value={<Badge variant="green">{isAr ? 'نشط' : 'Active'}</Badge>}                alt />
      </Card>
      <Card>
        <SectionTitle>{isAr ? 'سجل الدفعات' : 'Payment History'}</SectionTitle>
        <div className="flex flex-col gap-2">
          {PAYMENT_HISTORY.map((p, i) => (
            <div key={i} className={`flex items-center justify-between px-3 py-2.5 rounded ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
              <span className="text-sm text-[#1e2228]">{isAr ? p.monthAr : p.monthEn}</span>
              <Badge variant="green">{isAr ? p.statusAr : p.statusEn}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── PointsContent (5-0) ─────────────────────────────────────────────────────

const POINTS_EARNING = [
  { ptsLabel: '+500 pts', eventEn: 'Order O-8740 completed',  eventAr: 'اكتمل الطلب O-8740',    dateEn: 'Jul 11, 2026',  dateAr: 'يوليو 11، 2026'  },
  { ptsLabel: '+250 pts', eventEn: '30-day login streak',     eventAr: 'سلسلة دخول 30 يوماً',   dateEn: 'Aug 1, 2026',   dateAr: 'أغسطس 1، 2026'   },
  { ptsLabel: '+100 pts', eventEn: 'Profile completed',       eventAr: 'اكتمال الملف الشخصي',   dateEn: 'Jun 3, 2026',   dateAr: 'يونيو 3، 2026'   },
] as const;

export function PointsContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-[#15212f]">4,250</span>
            <span className="text-xs text-[#697586] mt-1">{isAr ? 'النقاط المتاحة' : 'Available Points'}</span>
          </div>
          <div className="flex flex-col gap-1 ms-4">
            <Badge variant="yellow">{isAr ? 'ذهبي' : 'Gold'}</Badge>
            <span className="text-xs text-[#697586]">{isAr ? 'المستوى' : 'Tier'}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#fffaeb] border border-[#fec84b]">
          <span className="text-xs text-[#b54708]">
            {isAr ? '⚠ 1,200 نقطة تنتهي صلاحيتها في سبتمبر 30، 2026' : '⚠ 1,200 pts expiring Sep 30, 2026'}
          </span>
        </div>
      </Card>
      <Card>
        <SectionTitle>{isAr ? 'سجل اكتساب النقاط' : 'Earning History'}</SectionTitle>
        <div className="flex flex-col divide-y divide-[#e3e8f1]">
          {POINTS_EARNING.map((p, i) => (
            <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-[#12b76a]">{p.ptsLabel}</span>
                <span className="text-xs text-[#697586]">{isAr ? p.eventAr : p.eventEn}</span>
              </div>
              <span className="text-xs text-[#697586]">{isAr ? p.dateAr : p.dateEn}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── RewardsContent (5-1) ────────────────────────────────────────────────────

const AVAILABLE_REWARDS = [
  { nameEn: 'Cashback 2%',                 nameAr: 'استرداد نقدي 2%',            detailEn: 'On next financing order',  detailAr: 'على طلب التمويل التالي', statusEn: 'Eligible', statusAr: 'مؤهل', variant: 'green' as BadgeVariant },
  { nameEn: 'Processing fee waiver',       nameAr: 'إعفاء من رسوم المعالجة',    detailEn: 'One-time',                 detailAr: 'مرة واحدة',               statusEn: 'Eligible', statusAr: 'مؤهل', variant: 'green' as BadgeVariant },
  { nameEn: 'Priority customer support',   nameAr: 'دعم عملاء متميز',            detailEn: 'Active · Until Dec 2026', detailAr: 'نشط · حتى ديسمبر 2026',  statusEn: 'Active',   statusAr: 'نشط',  variant: 'blue'  as BadgeVariant },
] as const;

const REDEEMED_REWARDS = [
  { nameEn: 'SAR 150 cashback', nameAr: 'استرداد نقدي 150 ر.س', detailEn: 'Redeemed Jul 2026 · Applied to O-8740', detailAr: 'مستبدل يوليو 2026 · مطبق على O-8740' },
] as const;

export function RewardsContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SectionTitle>{isAr ? 'المكافآت المتاحة' : 'Available Rewards'}</SectionTitle>
        <div className="flex flex-col divide-y divide-[#e3e8f1]">
          {AVAILABLE_REWARDS.map((r, i) => (
            <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-[#1e2228]">{isAr ? r.nameAr : r.nameEn}</span>
                <span className="text-xs text-[#697586]">{isAr ? r.detailAr : r.detailEn}</span>
              </div>
              <Badge variant={r.variant}>{isAr ? r.statusAr : r.statusEn}</Badge>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <SectionTitle>{isAr ? 'المكافآت المستبدلة' : 'Redeemed Rewards'}</SectionTitle>
        <div className="flex flex-col divide-y divide-[#e3e8f1]">
          {REDEEMED_REWARDS.map((r, i) => (
            <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-[#1e2228]">{isAr ? r.nameAr : r.nameEn}</span>
                <span className="text-xs text-[#697586]">{isAr ? r.detailAr : r.detailEn}</span>
              </div>
              <Badge variant="gray">{isAr ? 'مستبدل' : 'Redeemed'}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── DevicesContent (6-0) ────────────────────────────────────────────────────

const DEVICES_DATA = [
  { nameEn: 'iPhone 15 Pro',     osEn: 'iOS 17.4',    locationEn: 'Riyadh',  locationAr: 'الرياض', statusEn: 'Trusted', statusAr: 'موثوق', lastEn: 'Today 09:42',    lastAr: 'اليوم 09:42' },
  { nameEn: 'Samsung S24 Ultra', osEn: 'Android 14',  locationEn: 'Jeddah',  locationAr: 'جدة',    statusEn: 'Trusted', statusAr: 'موثوق', lastEn: 'Aug 9, 2026',    lastAr: 'أغسطس 9، 2026' },
] as const;

export function DevicesContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'الأجهزة المسجلة' : 'Registered Devices'}</SectionTitle>
      <div className="flex flex-col divide-y divide-[#e3e8f1]">
        {DEVICES_DATA.map((d, i) => (
          <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-sm font-medium text-[#1e2228]">{d.nameEn} · {d.osEn}</span>
              <span className="text-xs text-[#697586]">{isAr ? d.locationAr : d.locationEn} · {isAr ? 'آخر نشاط: ' : 'Last active: '}{isAr ? d.lastAr : d.lastEn}</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="green">{isAr ? d.statusAr : d.statusEn}</Badge>
              <button className="px-3 py-1.5 rounded-lg border border-[#fda29b] text-[#b42318] text-xs font-medium hover:bg-[#fef3f2] transition-colors whitespace-nowrap">
                {isAr ? 'إلغاء الوصول' : 'Revoke access'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── IpContent (6-1) ─────────────────────────────────────────────────────────

const IP_LOG_DATA = [
  { ip: '185.220.101.47', locationEn: 'Riyadh, SA', locationAr: 'الرياض، السعودية', dateEn: 'Aug 12 09:42', dateAr: 'أغسطس 12 09:42', deviceEn: 'Trusted device', deviceAr: 'جهاز موثوق', actionEn: 'Login',        actionAr: 'دخول'       },
  { ip: '185.220.101.47', locationEn: 'Riyadh, SA', locationAr: 'الرياض، السعودية', dateEn: 'Aug 10 14:15', dateAr: 'أغسطس 10 14:15', deviceEn: 'Trusted device', deviceAr: 'جهاز موثوق', actionEn: 'Profile view', actionAr: 'عرض الملف' },
  { ip: '37.131.204.88',  locationEn: 'Jeddah, SA', locationAr: 'جدة، السعودية',    dateEn: 'Aug 9 11:00',  dateAr: 'أغسطس 9 11:00',  deviceEn: 'First seen',    deviceAr: 'مشاهدة لأول مرة', actionEn: 'Login',    actionAr: 'دخول'       },
] as const;

export function IpContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'سجل عناوين IP' : 'IP Access Log'}</SectionTitle>
      <div className="flex flex-col divide-y divide-[#e3e8f1]">
        <div className="flex items-center justify-between py-2.5 px-1">
          <span className="text-xs font-semibold text-[#697586] w-36">IP</span>
          <span className="text-xs font-semibold text-[#697586] flex-1">{isAr ? 'الموقع' : 'Location'}</span>
          <span className="text-xs font-semibold text-[#697586] w-32">{isAr ? 'التاريخ' : 'Date'}</span>
          <span className="text-xs font-semibold text-[#697586] w-32">{isAr ? 'الجهاز' : 'Device'}</span>
          <span className="text-xs font-semibold text-[#697586] w-24 text-end">{isAr ? 'الإجراء' : 'Action'}</span>
        </div>
        {IP_LOG_DATA.map((row, i) => (
          <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
            <span className="text-sm font-mono text-[#1e2228] w-36">{row.ip}</span>
            <span className="text-sm text-[#697586] flex-1">{isAr ? row.locationAr : row.locationEn}</span>
            <span className="text-sm text-[#697586] w-32">{isAr ? row.dateAr : row.dateEn}</span>
            <span className="text-sm text-[#697586] w-32">
              <Badge variant={row.deviceEn === 'First seen' ? 'yellow' : 'green'}>
                {isAr ? row.deviceAr : row.deviceEn}
              </Badge>
            </span>
            <span className="text-sm text-[#1e2228] w-24 text-end">{isAr ? row.actionAr : row.actionEn}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── LogsContent (6-2) ───────────────────────────────────────────────────────

const USER_LOGS_DATA = [
  { eventEn: 'Profile data reviewed',       eventAr: 'مراجعة بيانات الملف',         sourceEn: 'Admin portal',    sourceAr: 'بوابة الإدارة',    actorEn: 'Customer Success', actorAr: 'نجاح العميل',        dateEn: 'Aug 12, 10:00', dateAr: 'أغسطس 12، 10:00' },
  { eventEn: 'Mobile app login',             eventAr: 'دخول تطبيق الجوال',           sourceEn: 'iPhone 15 Pro',   sourceAr: 'iPhone 15 Pro',    actorEn: 'Riyadh',           actorAr: 'الرياض',             dateEn: 'Aug 12, 09:42', dateAr: 'أغسطس 12، 09:42' },
  { eventEn: 'SIMAH report requested',       eventAr: 'طلب تقرير SIMAH',             sourceEn: 'System',          sourceAr: 'النظام',            actorEn: 'Auto-trigger',     actorAr: 'تشغيل تلقائي',       dateEn: 'Aug 12, 09:50', dateAr: 'أغسطس 12، 09:50' },
  { eventEn: 'Password changed',             eventAr: 'تغيير كلمة المرور',           sourceEn: 'Mobile app',      sourceAr: 'تطبيق الجوال',     actorEn: '',                 actorAr: '',                   dateEn: 'Aug 5, 14:22',  dateAr: 'أغسطس 5، 14:22'  },
  { eventEn: 'Profile created',              eventAr: 'إنشاء الملف الشخصي',          sourceEn: 'Onboarding',      sourceAr: 'الإعداد',           actorEn: '',                 actorAr: '',                   dateEn: 'Jul 11, 10:20', dateAr: 'يوليو 11، 10:20' },
] as const;

export function LogsContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'سجلات المستخدم' : 'User Action Log'}</SectionTitle>
      <div className="flex flex-col divide-y divide-[#e3e8f1]">
        {USER_LOGS_DATA.map((log, i) => (
          <div key={i} className={`flex items-center justify-between py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-sm font-medium text-[#1e2228]">{isAr ? log.eventAr : log.eventEn}</span>
              <span className="text-xs text-[#697586]">
                {isAr ? log.sourceAr : log.sourceEn}
                {(isAr ? log.actorAr : log.actorEn) ? ` · ${isAr ? log.actorAr : log.actorEn}` : ''}
              </span>
            </div>
            <span className="text-xs text-[#697586] whitespace-nowrap ms-4">{isAr ? log.dateAr : log.dateEn}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── NotificationsContent (7-0) ──────────────────────────────────────────────

const NOTIFICATIONS_DATA = [
  {
    typeEn: 'System', typeAr: 'نظام', variant: 'gray' as BadgeVariant,
    textEn: 'SIMAH report could not be retrieved. Automatic retry scheduled.',
    textAr: 'تعذر استرداد تقرير SIMAH. تمت جدولة إعادة المحاولة تلقائياً.',
    dateEn: 'Aug 12, 09:52', dateAr: 'أغسطس 12، 09:52', read: false,
  },
  {
    typeEn: 'Offer', typeAr: 'عرض', variant: 'blue' as BadgeVariant,
    textEn: 'A new financing offer matches your profile.',
    textAr: 'عرض تمويل جديد يطابق ملفك الشخصي.',
    dateEn: 'Aug 10, 12:00', dateAr: 'أغسطس 10، 12:00', read: true,
  },
  {
    typeEn: 'Billing', typeAr: 'فاتورة', variant: 'yellow' as BadgeVariant,
    textEn: 'Your monthly statement for August is ready.',
    textAr: 'كشف حسابك الشهري لأغسطس جاهز.',
    dateEn: 'Aug 1, 08:00', dateAr: 'أغسطس 1، 08:00', read: true,
  },
] as const;

export function NotificationsContent({ isAr }: { isAr: boolean; profile: Profile }) {
  return (
    <Card>
      <SectionTitle>{isAr ? 'الإشعارات' : 'Notifications'}</SectionTitle>
      <div className="flex flex-col divide-y divide-[#e3e8f1]">
        {NOTIFICATIONS_DATA.map((n, i) => (
          <div key={i} className={`flex items-start gap-3 py-3 px-1 ${i % 2 === 1 ? 'bg-[#f9fbfc]' : ''}`}>
            {!n.read && (
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0063f5] shrink-0" />
            )}
            {n.read && <span className="mt-1.5 w-2 h-2 shrink-0" />}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Badge variant={n.variant}>{isAr ? n.typeAr : n.typeEn}</Badge>
                {!n.read && (
                  <Badge variant="blue">{isAr ? 'غير مقروء' : 'Unread'}</Badge>
                )}
              </div>
              <p className="text-sm text-[#1e2228]">{isAr ? n.textAr : n.textEn}</p>
              <span className="text-xs text-[#697586]">{isAr ? n.dateAr : n.dateEn}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── TabPageContent (router) ──────────────────────────────────────────────────

type TabPageContentProps = {
  mainTabKey: string;
  subTabKey: string;
  isAr: boolean;
  profile: Profile;
};

export function TabPageContent({ mainTabKey, subTabKey, isAr, profile }: TabPageContentProps) {
  const key = `${mainTabKey}/${subTabKey}`;

  switch (key) {
    case 'overview/summary':        return <SummaryContent isAr={isAr} />;
    case 'overview/comments':       return <CommentsContent isAr={isAr} profile={profile} />;
    case 'verification/screening':  return <ScreeningContent isAr={isAr} profile={profile} />;
    case 'verification/risk':       return <RiskContent isAr={isAr} profile={profile} />;
    case 'reports/kyc':             return <KycContent isAr={isAr} profile={profile} />;
    case 'reports/masdr':           return <MasdrContent isAr={isAr} profile={profile} />;
    case 'reports/simah':           return <SimahContent isAr={isAr} profile={profile} />;
    case 'financing/preliminary':   return <PreliminaryContent isAr={isAr} profile={profile} />;
    case 'financing/applications':  return <ApplicationsContent isAr={isAr} profile={profile} />;
    case 'financing/decisions':     return <DecisionsContent isAr={isAr} profile={profile} />;
    case 'financing/orders':        return <OrdersContent isAr={isAr} profile={profile} />;
    case 'billing/invoices':        return <InvoicesContent isAr={isAr} profile={profile} />;
    case 'billing/billing':         return <BillingContent isAr={isAr} profile={profile} />;
    case 'loyalty/points':          return <PointsContent isAr={isAr} profile={profile} />;
    case 'loyalty/rewards':         return <RewardsContent isAr={isAr} profile={profile} />;
    case 'security/devices':        return <DevicesContent isAr={isAr} profile={profile} />;
    case 'security/ip':             return <IpContent isAr={isAr} profile={profile} />;
    case 'security/logs':           return <LogsContent isAr={isAr} profile={profile} />;
    case 'communications/notifications': return <NotificationsContent isAr={isAr} profile={profile} />;
    default:                        return <SummaryContent isAr={isAr} />;
  }
}
