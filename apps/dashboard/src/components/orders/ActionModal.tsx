'use client';
import { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import SARSymbol from '@/components/ui/SARSymbol';
import { useLang } from '@/lib/language-context';

const imgSigning  = '/illustrations/illustration_icon_signing.svg';
const imgWarning  = '/illustrations/warning-red-illustration.svg';
const imgBankLogo = '/illustrations/logo.svg';

type Order = {
  productName: string;
  productNameAr: string;
  loanAmount: string;
  apr: string;
  managementFees: string;
  brokerageFees: string;
};

const REJECTION_REASONS_EN = [
  'Insufficient income',
  'Poor credit history',
  'Incomplete documentation',
  'Employment status',
  'Debt-to-income ratio',
  'Other',
];

const REJECTION_REASONS_AR = [
  'دخل غير كافٍ',
  'سجل ائتماني ضعيف',
  'مستندات غير مكتملة',
  'الوضع الوظيفي',
  'نسبة الدين إلى الدخل',
  'أخرى',
];

const i18n = {
  en: {
    rejectTitle: 'Are you sure you want to reject the loan request?',
    statusTitle: (action: string) => `Are you sure you want to change the status of order to ${action}?`,
    contractTitle: 'Date for contract signing',
    contractSubtitle: 'Please confirm the signing date and verify the loan data below before submitting.',
    disbursementTitle: 'Date for loan disbursing',
    disbursementSubtitle: 'Please confirm the disbursement and first installment dates, then verify the loan data.',
    rejectionReasonLabel: 'Rejection Reason',
    rejectionReasonPlaceholder: 'Select Rejection Reason',
    noteLabel: 'Note',
    notePlaceholder: 'Enter your notes....',
    clearAll: 'Clear all',
    sendNote: 'Send note to customer',
    cancel: 'Cancel',
    confirm: 'Confirm',
    submitContract: 'Submit for contract signing',
    signingDateLabel: 'Signing date',
    signingDatePlaceholder: 'Choose Signing date',
    disbursingDateLabel: 'Disbursing date',
    disbursingDatePlaceholder: 'Choose Disbursing date',
    firstInstallmentLabel: 'First installment date',
    firstInstallmentPlaceholder: 'Choose First installment date',
    loanAmount: 'Loan Amount',
    installment: 'Monthly Installment',
    period: 'Period',
    aprLabel: 'APR',
    managementFees: 'Management Fees',
    brokerageFees: 'Brokerage Fees',
    periodValue: '60 months',
  },
  ar: {
    rejectTitle: 'هل أنت متأكد من رفض طلب القرض؟',
    statusTitle: (action: string) => `هل أنت متأكد من تغيير حالة الطلب إلى ${action}؟`,
    contractTitle: 'تاريخ توقيع العقد',
    contractSubtitle: 'يرجى تأكيد تاريخ التوقيع والتحقق من بيانات القرض أدناه قبل التقديم.',
    disbursementTitle: 'تاريخ صرف القرض',
    disbursementSubtitle: 'يرجى تأكيد تاريخ الصرف وتاريخ أول قسط، ثم التحقق من بيانات القرض.',
    rejectionReasonLabel: 'سبب الرفض',
    rejectionReasonPlaceholder: 'اختر سبب الرفض',
    noteLabel: 'ملاحظة',
    notePlaceholder: 'أدخل ملاحظاتك...',
    clearAll: 'مسح الكل',
    sendNote: 'إرسال ملاحظة للعميل',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    submitContract: 'تقديم لتوقيع العقد',
    signingDateLabel: 'تاريخ التوقيع',
    signingDatePlaceholder: 'اختر تاريخ التوقيع',
    disbursingDateLabel: 'تاريخ الصرف',
    disbursingDatePlaceholder: 'اختر تاريخ الصرف',
    firstInstallmentLabel: 'تاريخ أول قسط',
    firstInstallmentPlaceholder: 'اختر تاريخ أول قسط',
    loanAmount: 'مبلغ القرض',
    installment: 'القسط الشهري',
    period: 'المدة',
    aprLabel: 'نسبة الفائدة السنوية',
    managementFees: 'رسوم الإدارة',
    brokerageFees: 'رسوم الوساطة',
    periodValue: '60 شهراً',
  },
} as const;

const ACTION_AR_MAP: Record<string, string> = {
  Disbursement:      'صرف',
  Closing:           'إغلاق',
  'Contract Signing':'توقيع العقد',
  Approve:           'موافقة',
  Underwriting:      'اكتتاب',
};

function DateInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[14px] font-medium text-[#344054] dark:text-slate-300">{label}</label>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          readOnly
          className="w-full h-[44px] px-[14px] pe-10 rounded-[8px] border border-[#d5d7da] text-[14px] text-[#667085] placeholder:text-[#667085] bg-white outline-none cursor-pointer dark:bg-slate-900 dark:border-slate-700 dark:text-slate-400 dark:placeholder:text-slate-500"
        />
        <Calendar className="absolute end-3 w-4 h-4 text-[#667085] pointer-events-none dark:text-slate-400" />
      </div>
    </div>
  );
}

type I18nShape = { loanAmount: string; installment: string; period: string; aprLabel: string; managementFees: string; brokerageFees: string; periodValue: string };

function LoanDataGrid({ order, t }: { order: Order; t: I18nShape }) {
  const amount = order.loanAmount.replace(/﷼\s?/, '');
  const mgmt   = order.managementFees.replace(/﷼\s?/, '');
  const brok   = order.brokerageFees.replace(/﷼\s?/, '');

  const fields = [
    { label: t.loanAmount,     value: <span className="flex items-center gap-1"><SARSymbol className="w-3 h-3" />{amount}</span> },
    { label: t.installment,    value: <span className="flex items-center gap-1"><SARSymbol className="w-3 h-3" />—</span> },
    { label: t.period,         value: t.periodValue },
    { label: t.aprLabel,       value: order.apr },
    { label: t.managementFees, value: <span className="flex items-center gap-1"><SARSymbol className="w-3 h-3" />{mgmt}</span> },
    { label: t.brokerageFees,  value: <span className="flex items-center gap-1"><SARSymbol className="w-3 h-3" />{brok}</span> },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-4 pt-4 border-t border-[#eef1f6] dark:border-slate-800">
      {fields.map((f) => (
        <div key={f.label} className="flex flex-col gap-0.5">
          <span className="text-[12px] text-[#697586] dark:text-slate-400">{f.label}</span>
          <span className="text-[14px] font-semibold text-[#181d27] dark:text-slate-100">{f.value}</span>
        </div>
      ))}
    </div>
  );
}

function ProductRow({ order, isAr }: { order: Order; isAr: boolean }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-[#eef1f6] dark:border-slate-800">
      <img src={imgBankLogo} alt="Bank Albilad" className="h-8 w-auto object-contain shrink-0" />
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[14px] font-semibold text-[#181d27] truncate dark:text-slate-100">
          {isAr ? order.productNameAr : order.productName}
        </span>
        <span className="text-[12px] text-[#697586] dark:text-slate-400">
          {isAr ? 'بنك البلاد • قرض شخصي' : 'Bank Albilad • Personal Loan'}
        </span>
      </div>
    </div>
  );
}

export default function ActionModal({
  action,
  order,
  onClose,
}: {
  action: string;
  order: Order;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const t = i18n[lang];

  const [note, setNote] = useState('');
  const [sendNote, setSendNote] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  const isReject          = action === 'Reject';
  const isContractSigning = action === 'Contract Signing';
  const isDisbursement    = action === 'Disbursement';
  const isDateModal       = isContractSigning || isDisbursement;
  const _isStatusModal    = !isReject && !isDateModal;

  const displayAction = isAr ? (ACTION_AR_MAP[action] ?? action) : action;
  const modalWidth    = isDateModal ? 'w-[688px]' : 'w-[520px]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-[6px] bg-black/50" onClick={onClose} />

      <div className={cn(
        'relative z-10 bg-white rounded-[8px] flex flex-col animate-fade-in-scale dark:bg-slate-950 max-h-[90vh] overflow-y-auto',
        modalWidth,
      )}>

        {/* ── Date modals (Contract Signing / Disbursement) ── */}
        {isDateModal && (
          <div className="flex flex-col gap-5 p-8">
            {/* Illustration */}
            <div className="flex justify-center">
              <img
                src={imgSigning}
                alt=""
                className="h-[96px] w-auto object-contain"
              />
            </div>

            {/* Title + subtitle */}
            <div className="flex flex-col gap-1">
              <h2 className="text-[26px] font-semibold text-[#15212f] leading-[1.4] dark:text-slate-100">
                {isDisbursement ? t.disbursementTitle : t.contractTitle}
              </h2>
              <p className="text-[14px] text-[#6d7989] leading-[1.5] dark:text-slate-400">
                {isDisbursement ? t.disbursementSubtitle : t.contractSubtitle}
              </p>
            </div>

            {/* Date input(s) */}
            {isDisbursement ? (
              <div className="flex flex-col gap-4">
                <DateInput label={t.disbursingDateLabel} placeholder={t.disbursingDatePlaceholder} />
                <DateInput label={t.firstInstallmentLabel} placeholder={t.firstInstallmentPlaceholder} />
              </div>
            ) : (
              <DateInput label={t.signingDateLabel} placeholder={t.signingDatePlaceholder} />
            )}

            {/* Product row + loan data */}
            <ProductRow order={order} isAr={isAr} />
            <LoanDataGrid order={order} t={t} />

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-[18px] py-2.5 rounded-[8px] border border-[#d5d7da] text-[14px] font-medium text-[#414651] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {t.cancel}
              </button>
              <button
                onClick={onClose}
                className="px-[18px] py-2.5 rounded-[8px] bg-[#0063f5] text-[14px] font-medium text-white hover:bg-[#004fc6] transition-colors"
              >
                {t.submitContract}
              </button>
            </div>
          </div>
        )}

        {/* ── Confirmation modals (Reject / status change) ── */}
        {!isDateModal && (
          <div className="flex flex-col gap-5 px-6 py-8">
            {/* Illustration */}
            <div className="flex justify-center">
              <img
                src={imgWarning}
                alt=""
                className="h-[129px] w-auto object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-[22px] font-semibold text-[#15212f] leading-[1.4] text-center dark:text-slate-100">
              {isReject ? t.rejectTitle : t.statusTitle(displayAction)}
            </h2>

            {/* Rejection Reason (Reject only) */}
            {isReject && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#344054] dark:text-slate-300">
                  {t.rejectionReasonLabel}
                </label>
                <div className="relative">
                  <select
                    value={rejectionReason}
                    onChange={e => setRejectionReason(e.target.value)}
                    className="w-full h-[44px] px-[14px] pe-10 rounded-[8px] border border-[#d5d7da] text-[14px] text-[#344054] bg-white appearance-none outline-none focus:border-[#0063f5] transition-colors cursor-pointer dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
                  >
                    <option value="" disabled>{t.rejectionReasonPlaceholder}</option>
                    {(isAr ? REJECTION_REASONS_AR : REJECTION_REASONS_EN).map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute end-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085] pointer-events-none dark:text-slate-400" />
                </div>
              </div>
            )}

            {/* Note textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-[#344054] dark:text-slate-300">
                {t.noteLabel}
              </label>
              <div className="relative">
                <textarea
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  placeholder={t.notePlaceholder}
                  rows={5}
                  className="w-full px-[14px] py-3 rounded-[8px] border border-[#d5d7da] text-[14px] text-[#344054] placeholder:text-[#667085] bg-white resize-none outline-none focus:border-[#0063f5] transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 dark:placeholder:text-slate-500"
                  style={{ height: '146px' }}
                />
                {note.length > 0 && (
                  <button
                    onClick={() => setNote('')}
                    className="absolute bottom-3 end-3 text-[12px] font-medium text-[#d92d20] border border-[#d92d20] rounded-[6px] px-2 py-0.5 hover:bg-[#fff1f3] transition-colors"
                  >
                    {t.clearAll}
                  </button>
                )}
              </div>
            </div>

            {/* Send note to customer checkbox */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={sendNote}
                onChange={e => setSendNote(e.target.checked)}
                className="w-5 h-5 rounded border border-[#d5d7da] accent-[#0063f5] cursor-pointer"
              />
              <span className="text-[14px] text-[#344054] dark:text-slate-300">{t.sendNote}</span>
            </label>

            {/* Footer */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9eaeb] dark:border-slate-800">
              <button
                onClick={onClose}
                className="flex-1 px-[18px] py-2.5 rounded-[8px] border border-[#d5d7da] text-[14px] font-medium text-[#414651] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {t.cancel}
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-[18px] py-2.5 rounded-[8px] bg-[#0063f5] text-[14px] font-medium text-white hover:bg-[#004fc6] transition-colors"
              >
                {t.confirm}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
