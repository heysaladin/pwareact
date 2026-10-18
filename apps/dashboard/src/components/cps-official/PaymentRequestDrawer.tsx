'use client';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const QUICK_AMOUNTS = [100, 200, 300, 500];

const TEMPLATES = {
  en: [
    { key: 'reminder',  label: 'Payment reminder',   desc: 'Friendly request with a pay link'              },
    { key: 'balance',   label: 'Outstanding balance', desc: 'Formal tone, mentions due amount'              },
    { key: 'short-sms', label: 'Short SMS',           desc: 'Fits a single SMS segment'                    },
  ],
  ar: [
    { key: 'reminder',  label: 'تذكير بالدفع',         desc: 'طلب ودي يتضمن رابطاً للدفع'                  },
    { key: 'balance',   label: 'الرصيد المستحق',        desc: 'أسلوب رسمي، مع الإشارة إلى المبلغ المستحق'  },
    { key: 'short-sms', label: 'رسالة نصية قصيرة',      desc: 'يتسع لقطعة رسالة نصية (SMS) واحدة'          },
  ],
};

function buildMessage(templateKey: string, firstName: string, amount: string, isAr: boolean): string {
  const a = amount || '0';
  if (isAr) {
    switch (templateKey) {
      case 'reminder':
        return `مرحباً ${firstName}، لديك طلب دفع بقيمة ${a} ريال من "تمول" (Tamawal). يمكنك السداد بشكل آمن من هنا: tmwl.sa/p/••••`;
      case 'balance':
        return `عزيزي ${firstName}، يوجد مبلغ مستحق على حسابك قدره ${a} ريال. يرجى إتمام عملية الدفع عبر الرابط: tmwl.sa/p/••••`;
      case 'short-sms':
        return `تمؤل: طلب دفع بقيمة ${a} ريال سعودي. للسداد: tmwl.sa/p/••••`;
      default: return '';
    }
  }
  switch (templateKey) {
    case 'reminder':
      return `Hi ${firstName}, you have a payment request of SAR ${a} from Tamawal. Pay securely here: tmwl.sa/p/••••`;
    case 'balance':
      return `Dear ${firstName}, an amount of SAR ${a} is due on your account. Please complete the payment via: tmwl.sa/p/••••`;
    case 'short-sms':
      return `Tamawal: ${a} SAR payment request. Pay: tmwl.sa/p/••••`;
    default: return '';
  }
}

type Props = {
  onClose: () => void;
  customerName: string;
  customerId: string;
  isAr?: boolean;
};

export default function PaymentRequestDrawer({ onClose, customerName, customerId, isAr = false }: Props) {
  const firstName = customerName.split(' ')[0] ?? customerName;

  const [amount,   setAmount]   = useState('200');
  const [template, setTemplate] = useState('reminder');
  const [channels, setChannels] = useState<string[]>(['email']);
  const [title,    setTitle]    = useState(isAr ? 'تذكير بالدفع' : 'Payment reminder');
  const [message,  setMessage]  = useState(() => buildMessage('reminder', firstName, '200', isAr));

  const MAX_CHARS = 255;
  const remaining = MAX_CHARS - message.length;

  const toggleChannel = (ch: string) =>
    setChannels(prev => prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch]);

  const templates = isAr ? TEMPLATES.ar : TEMPLATES.en;
  const channels3 = isAr
    ? (['App', 'Email', 'SMS'] as const)
    : (['SMS', 'Email', 'App'] as const);

  const t = {
    title:         isAr ? 'إنشاء طلب دفع'      : 'Create a payment request',
    to:            isAr ? 'إلى'                 : 'To',
    amount:        isAr ? 'كمية'                : 'Amount',
    min:           isAr ? 'Min'                 : 'Min',
    max:           isAr ? 'Max'                 : 'Max',
    template:      isAr ? 'نموذج'               : 'Template',
    channels:      isAr ? 'قنوات'               : 'Channels',
    titleField:    isAr ? 'عنوان'               : 'Title',
    titlePh:       isAr ? 'أدخل الموضوع'        : 'Payment reminder',
    message:       isAr ? 'رسالة'               : 'Message',
    remaining:     isAr ? `نبقى ${remaining} حرفاً` : `${remaining} characters Remaining`,
    clearAll:      isAr ? 'مسح الكل'            : 'Clear all',
    preview:       isAr ? 'معاينة'              : 'Preview',
    cancel:        isAr ? 'يلغي'                : 'Cancel',
    review:        isAr ? 'طلب مراجعة'          : 'Review request',
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />

      {/* Panel */}
      <div className={`absolute ${isAr ? 'left-0' : 'right-0'} inset-y-0 w-[500px] bg-white flex flex-col isolate shadow-xl`}>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-[16px] p-[24px] pb-[88px]">

          {/* Close */}
          <div className="flex items-center justify-end sticky top-0 z-[3]">
            <button
              onClick={onClose}
              className="relative border border-[#d5d7da] p-[8px] rounded-[8px] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
            >
              <X size={20} className="text-[#414651]" />
              <div className="absolute inset-0 rounded-[inherit] pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
            </button>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-[4px]">
            <p className="text-[25px] font-medium text-[#181d27] leading-[32px]">{t.title}</p>
            <div className="flex gap-[4px] items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <circle cx="10" cy="7" r="3.5" stroke="#717680" strokeWidth="1.5" />
                <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="text-[14px] text-[#717680] leading-[20px] tracking-[0.014px]">
                {t.to} {customerName} · {customerId}
              </p>
            </div>
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] font-medium text-[#16201b]">
              {t.amount} <span className="text-[#d91c1c]">*</span>
            </p>
            <div className="border border-[#c4cac5] rounded-[8px] h-[50px] flex items-center overflow-hidden">
              <div className="bg-[#f7f8f6] border-e border-[#dde1dc] h-[48px] flex items-center px-[14px] shrink-0">
                <SarIcon className="w-[18px] h-[18px] text-[#5b6660]" />
              </div>
              <input
                type="number"
                value={amount}
                onChange={e => { setAmount(e.target.value); setMessage(buildMessage(template, firstName, e.target.value, isAr)); }}
                className="flex-1 h-[48px] px-[14px] text-[18px] font-mono text-[#16201b] outline-none bg-white min-w-0"
              />
            </div>
            <div className="flex gap-[8px] flex-wrap">
              {QUICK_AMOUNTS.map(a => (
                <button
                  key={a}
                  onClick={() => { setAmount(String(a)); setMessage(buildMessage(template, firstName, String(a), isAr)); }}
                  className={`h-[36px] px-[14px] rounded-full border text-[13px] font-medium flex items-center gap-[3px] transition-colors ${
                    amount === String(a)
                      ? 'bg-[#ebf3ff] border-[#0063f5] text-[#0063f5]'
                      : 'bg-white border-[#dde1dc] text-[#16201b]'
                  }`}
                >
                  <SarIcon className="w-[13px] h-[13px]" />
                  {a}
                </button>
              ))}
            </div>
            <p className="text-[12px] text-[#5b6660] flex items-center gap-[2px]">
              {t.min} <SarIcon className="w-[11px] h-[11px] inline" /> 1 · {t.max} <SarIcon className="w-[11px] h-[11px] inline" /> [LIMIT]
            </p>
          </div>

          {/* Template */}
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] font-medium text-[#16201b]">{t.template}</p>
            <div className="flex flex-col gap-[8px]">
              {templates.map(tmpl => (
                <button
                  key={tmpl.key}
                  onClick={() => { setTemplate(tmpl.key); setTitle(tmpl.label); setMessage(buildMessage(tmpl.key, firstName, amount, isAr)); }}
                  className={`flex gap-[10px] items-start px-[14px] py-[12px] rounded-[10px] border w-full text-start transition-colors ${
                    template === tmpl.key
                      ? 'bg-[#ebf3ff] border-[#0063f5]'
                      : 'bg-white border-[#dde1dc]'
                  }`}
                >
                  <div className={`mt-[2px] shrink-0 size-[16px] rounded-full border flex items-center justify-center bg-white ${
                    template === tmpl.key ? 'border-[#0063f5]' : 'border-[#767676]'
                  }`}>
                    {template === tmpl.key && <div className="size-[8px] rounded-full bg-[#0063f5]" />}
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[14px] font-medium text-[#16201b]">{tmpl.label}</p>
                    <p className="text-[13px] text-[#5b6660]">{tmpl.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#e9eaeb] w-full shrink-0" />

          {/* Channels */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[14px] font-medium text-[#071329]">
              {t.channels} <span className="text-[#d91c1c]">*</span>
            </p>
            <div className="flex gap-[8px]">
              {channels3.map(ch => {
                const key    = ch.toLowerCase();
                const active = channels.includes(key);
                return (
                  <button
                    key={ch}
                    onClick={() => toggleChannel(key)}
                    className={`flex flex-col gap-[12px] items-center pt-[24px] pb-[20px] px-[24px] rounded-[16px] flex-1 border transition-all ${
                      active
                        ? 'bg-white border-[#ecedf0] shadow-[0px_4px_4px_rgba(74,110,153,0.06)]'
                        : 'bg-white border-transparent'
                    }`}
                  >
                    <div className={`size-[16px] rounded-[4px] border flex items-center justify-center transition-colors ${
                      active ? 'bg-[#f9fbfc] border-[#0063f5]' : 'bg-white border-[#d0d5dd]'
                    }`}>
                      {active && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <img
                      alt={ch}
                      className="size-[72px] shrink-0"
                      src={
                        ch === 'SMS'
                          ? (active ? '/journey-icons/channel-sms-active.svg'   : '/journey-icons/channel-sms-inactive.svg')
                          : ch === 'Email'
                          ? (active ? '/journey-icons/channel-email-active.svg' : '/journey-icons/channel-email-inactive.svg')
                          :  (active ? '/journey-icons/channel-app-active.svg'  : '/journey-icons/channel-app-inactive.svg')
                      }
                    />
                    <p className="text-[16px] font-medium text-[#475467]">{ch}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-[6px]">
            <label className="text-[14px] font-medium text-[#071329]">{t.titleField}</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={t.titlePh}
              className="border border-[#d5d7da] rounded-[8px] px-[12px] py-[8px] text-[16px] text-[#181d27] shadow-[0px_1px_1px_rgba(10,13,18,0.05)] outline-none bg-white w-full"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[6px]">
            <label className="text-[14px] font-medium text-[#071329]">{t.message}</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={4}
              className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[12px] text-[16px] text-[#181d27] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none bg-white w-full resize-none"
            />
            <div className="flex items-center justify-between gap-[6px]">
              <p className="text-[14px] text-[#535862] leading-[22px] flex-1">{t.remaining}</p>
              <button
                onClick={() => setMessage('')}
                className="flex items-center gap-[4px] border border-[#d92d20] rounded-[6px] px-[8px] py-[8px] text-[12px] text-[#d92d20] font-medium shrink-0"
              >
                <X size={12} />
                {t.clearAll}
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px] font-medium text-[#202a39]">{t.preview}</p>
            <div className="bg-[#ebf3ff] rounded-[10px] px-[16px] py-[14px]">
              <p className="text-[14px] text-[#202a39] leading-[21px]">{message}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e9eaeb] px-[32px] py-[16px] flex gap-[16px] items-center justify-end z-[4]">
          <button
            onClick={onClose}
            className="relative border border-[#d5d7da] rounded-[8px] px-[12px] py-[8px] min-w-[120px] text-[14px] font-medium text-[#414651] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white"
          >
            {t.cancel}
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          </button>
          <button className="relative border-2 border-white/20 rounded-[8px] px-[12px] py-[8px] min-w-[120px] text-[14px] font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#0063f5]">
            {t.review}
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function SarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className={className}>
      <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
      <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
    </svg>
  );
}
