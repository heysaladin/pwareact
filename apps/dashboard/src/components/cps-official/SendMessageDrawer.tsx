'use client';
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type NotifType = 'payment-request' | 'direct-message';

const QUICK_AMOUNTS = [100, 200, 300, 500];

const TEMPLATES = {
  en: [
    { key: 'reminder',  label: 'Payment reminder',   desc: 'Friendly request with a pay link'             },
    { key: 'balance',   label: 'Outstanding balance', desc: 'Formal tone, mentions due amount'             },
    { key: 'short-sms', label: 'Short SMS',           desc: 'Fits a single SMS segment'                   },
  ],
  ar: [
    { key: 'reminder',  label: 'تذكير بالدفع',        desc: 'طلب ودّي يتضمن رابطاً للدفع'                 },
    { key: 'balance',   label: 'الرصيد المستحق',       desc: 'أسلوب رسمي، مع الإشارة إلى المبلغ المستحق'  },
    { key: 'short-sms', label: 'رسالة نصية قصيرة',     desc: 'يتسع لقطعة رسالة نصية (SMS) واحدة'          },
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

export default function SendMessageDrawer({ onClose, customerName, customerId, isAr = false }: Props) {
  const firstName = customerName.split(' ')[0] ?? customerName;
  const templates = isAr ? TEMPLATES.ar : TEMPLATES.en;

  const [notifType, setNotifType]       = useState<NotifType>('direct-message');
  const [showDropdown, setShowDropdown] = useState(false);
  const [channels, setChannels]         = useState<string[]>(['email']);

  // Payment-request state
  const [amount,   setAmount]   = useState('200');
  const [template, setTemplate] = useState('reminder');
  const [prTitle,  setPrTitle]  = useState(isAr ? 'تذكير بالدفع' : 'Payment reminder');
  const [prMsg,    setPrMsg]    = useState(() => buildMessage('reminder', firstName, '200', isAr));

  // Direct-message state
  const [dmTitle, setDmTitle] = useState('');
  const [dmMsg,   setDmMsg]   = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showDropdown]);

  const toggleChannel = (ch: string) =>
    setChannels(prev => prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch]);

  // In RTL, DOM order [sms, email, app] renders as App|Email|SMS visually (matches Figma AR)
  const CHANNELS = [
    { key: 'sms',   label: 'SMS'   },
    { key: 'email', label: 'Email' },
    { key: 'app',   label: 'App'   },
  ];

  const MAX_CHARS = 255;
  const prRemaining = MAX_CHARS - prMsg.length;
  const dmRemaining = MAX_CHARS - dmMsg.length;

  const t = {
    title:           isAr ? 'إنشاء رسالة'              : 'Create a Message',
    to:              isAr ? 'إلى'                       : 'To',
    notifType:       isAr ? 'نوع الإشعار'               : 'Notification type',
    paymentRequest:  isAr ? 'طلب دفع'                   : 'Payment request',
    directMessage:   isAr ? 'رسالة مباشرة'              : 'Direct message',
    channels:        isAr ? 'قنوات'                     : 'Channels',
    amount:          isAr ? 'كمية'                      : 'Amount',
    min:             isAr ? 'Min'                       : 'Min',
    max:             isAr ? 'Max'                       : 'Max',
    templateLabel:   isAr ? 'نموذج'                     : 'Template',
    titleField:      isAr ? 'عنوان'                     : 'Title',
    prTitlePh:       isAr ? 'أدخل الموضوع'              : 'Payment reminder',
    dmTitlePh:       isAr ? 'اكتب عنوان الرسالة'        : 'Write the message title',
    message:         isAr ? 'رسالة'                     : 'Message',
    dmMsgPh:         isAr ? 'اكتب تفاصيل الرسالة'       : 'Write the message details',
    clearAll:        isAr ? 'مسح الكل'                  : 'Clear all',
    preview:         isAr ? 'معاينة'                    : 'Preview',
    cancel:          isAr ? 'يلغي'                      : 'Cancel',
    review:          isAr ? 'طلب مراجعة'                : 'Review request',
    remaining: (n: number) => isAr ? `تبقى ${n} حرفاً` : `${n} characters Remaining`,
  };

  const notifTypeLabel = notifType === 'payment-request' ? t.paymentRequest : t.directMessage;

  const channelIcon = (ch: string, active: boolean) =>
    ch === 'sms'
      ? (active ? '/journey-icons/channel-sms-active.svg'   : '/journey-icons/channel-sms-inactive.svg')
      : ch === 'email'
      ? (active ? '/journey-icons/channel-email-active.svg' : '/journey-icons/channel-email-inactive.svg')
      :  (active ? '/journey-icons/channel-app-active.svg'  : '/journey-icons/channel-app-inactive.svg');

  return createPortal(
    <div className="fixed inset-0 z-50 flex" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />

      {/* Panel: left-0 for AR, right-0 for EN */}
      <div className={`absolute ${isAr ? 'left-0' : 'right-0'} inset-y-0 w-[500px] bg-white flex flex-col isolate shadow-xl`}>

        <div className="flex-1 overflow-y-auto flex flex-col gap-[16px] p-[24px] pb-[88px]">

          {/* Close — justify-end is left in RTL, right in LTR */}
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
          <div className="flex flex-col gap-[4px] sticky top-0 z-[2] bg-white">
            <p className="text-[25px] font-medium text-[#181d27] leading-[32px]">{t.title}</p>
            <div className="flex gap-[4px] items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <circle cx="10" cy="7" r="3.5" stroke="#717680" strokeWidth="1.5" />
                <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {/* AR: "ID · إلى Name" — RTL reverses the visual order */}
              {isAr
                ? <p className="text-[14px] font-medium text-[#717680] leading-[20px] tracking-[0.014px]">{customerId} · {t.to} {customerName}</p>
                : <p className="text-[14px] font-medium text-[#717680] leading-[20px] tracking-[0.014px]">{t.to} {customerName} · {customerId}</p>
              }
            </div>
          </div>

          {/* Notification type dropdown */}
          <div className="flex flex-col gap-[6px] z-[1]" ref={dropdownRef}>
            <p className="text-[14px] font-medium text-[#071329]">
              {t.notifType} <span className="text-[#d92d20]">*</span>
            </p>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(v => !v)}
                className="w-full bg-white border border-[#d5d7da] rounded-[8px] px-[12px] py-[8px] flex items-center gap-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-[16px] text-[#181d27]"
              >
                {/* Chevron first in DOM — in RTL it goes to the right, in LTR it's on the left but we override below */}
                <img
                  alt=""
                  src="/journey-icons/chevron-down.svg"
                  className={`size-[20px] shrink-0 ${isAr ? '' : 'order-last'}`}
                  style={{ transform: showDropdown ? 'rotate(180deg)' : undefined, transition: 'transform 0.15s' }}
                />
                <span className="flex-1 text-start">{notifTypeLabel}</span>
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-[4px] bg-white border border-[#d5d7da] rounded-[8px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] overflow-hidden">
                  {(['direct-message', 'payment-request'] as NotifType[]).map(tp => (
                    <button
                      key={tp}
                      onClick={() => { setNotifType(tp); setShowDropdown(false); }}
                      className={`w-full text-start px-[12px] py-[10px] text-[16px] hover:bg-[#f9fafb] transition-colors ${notifType === tp ? 'text-[#0063f5] font-medium' : 'text-[#181d27]'}`}
                    >
                      {tp === 'payment-request' ? t.paymentRequest : t.directMessage}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Channels — RTL naturally renders [sms,email,app] as App|Email|SMS */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[14px] font-medium text-[#071329]">
              {t.channels} <span className="text-[#d91c1c]">*</span>
            </p>
            <div className="flex gap-[8px]">
              {CHANNELS.map(ch => {
                const active = channels.includes(ch.key);
                return (
                  <button
                    key={ch.key}
                    onClick={() => toggleChannel(ch.key)}
                    className={`flex flex-col gap-[12px] items-center pt-[24px] pb-[20px] px-[24px] rounded-[16px] flex-1 border transition-all ${
                      active
                        ? 'bg-white border-[#ecedf0] shadow-[0px_4px_4px_rgba(74,110,153,0.06)]'
                        : 'bg-[rgba(255,255,255,0.48)] border-transparent'
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
                      alt={ch.label}
                      className={`size-[72px] shrink-0 ${!active ? 'mix-blend-luminosity' : ''}`}
                      src={channelIcon(ch.key, active)}
                    />
                    <p className="text-[16px] font-medium text-[#475467]">{ch.label}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── PAYMENT REQUEST content ── */}
          {notifType === 'payment-request' && (
            <>
              {/* Amount — SAR icon: border-e = right border in LTR, left border in RTL */}
              <div className="flex flex-col gap-[6px]">
                <p className="text-[14px] font-medium text-[#16201b]">
                  {t.amount} <span className="text-[#d91c1c]">*</span>
                </p>
                <div className="border border-[#c4cac5] rounded-[8px] h-[50px] flex items-center overflow-hidden">
                  <input
                    type="number"
                    value={amount}
                    onChange={e => {
                      setAmount(e.target.value);
                      setPrMsg(buildMessage(template, firstName, e.target.value, isAr));
                    }}
                    className="flex-1 h-[48px] px-[14px] text-[18px] font-mono text-[#16201b] outline-none bg-white min-w-0"
                  />
                  {/* SAR icon: in RTL goes to the right (start), in LTR goes to the right (end) via order-last */}
                  <div className="bg-[#f7f8f6] border-s border-[#dde1dc] h-[48px] flex items-center px-[14px] shrink-0">
                    <SarIcon className="w-[18px] h-[18px] text-[#5b6660]" />
                  </div>
                </div>
                {/* Quick amounts — RTL renders [100,200,300,500] as 500|300|200|100 visually */}
                <div className="flex gap-[8px] flex-wrap">
                  {QUICK_AMOUNTS.map(a => (
                    <button
                      key={a}
                      onClick={() => { setAmount(String(a)); setPrMsg(buildMessage(template, firstName, String(a), isAr)); }}
                      className={`h-[36px] px-[14px] rounded-full border text-[13px] font-medium flex items-center gap-[3px] transition-colors ${
                        amount === String(a)
                          ? 'bg-[#ebf3ff] border-[#0063f5] text-[#0063f5]'
                          : 'bg-white border-[#dde1dc] text-[#16201b]'
                      }`}
                    >
                      <SarIcon className="w-[13px] h-[13px]" />{a}
                    </button>
                  ))}
                </div>
                <p className="text-[12px] text-[#5b6660] flex items-center gap-[2px]">
                  {t.min} <SarIcon className="w-[11px] h-[11px] inline" /> 1 · {t.max} <SarIcon className="w-[11px] h-[11px] inline" /> [LIMIT]
                </p>
              </div>

              {/* Template — radio first in DOM; RTL places it on the right automatically */}
              <div className="flex flex-col gap-[6px]">
                <p className="text-[14px] font-medium text-[#16201b]">{t.templateLabel}</p>
                <div className="flex flex-col gap-[8px]">
                  {templates.map(tmpl => (
                    <button
                      key={tmpl.key}
                      onClick={() => {
                        setTemplate(tmpl.key);
                        setPrTitle(tmpl.label);
                        setPrMsg(buildMessage(tmpl.key, firstName, amount, isAr));
                      }}
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
                      <div className="flex flex-col gap-[2px] flex-1 text-start">
                        <p className="text-[14px] font-medium text-[#16201b]">{tmpl.label}</p>
                        <p className="text-[13px] text-[#5b6660]">{tmpl.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#e9eaeb] w-full shrink-0" />

              {/* Title */}
              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-medium text-[#071329]">{t.titleField}</label>
                <input
                  value={prTitle}
                  onChange={e => setPrTitle(e.target.value)}
                  placeholder={t.prTitlePh}
                  className="border border-[#d5d7da] rounded-[8px] px-[12px] py-[8px] text-[16px] text-[#181d27] placeholder:text-[#717680] shadow-[0px_1px_1px_rgba(10,13,18,0.05)] outline-none bg-white w-full"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-medium text-[#071329]">{t.message}</label>
                <textarea
                  value={prMsg}
                  onChange={e => setPrMsg(e.target.value)}
                  rows={4}
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[12px] text-[16px] text-[#181d27] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none bg-white w-full resize-none"
                />
                {/* Counter — RTL reverses: clear button goes left, count goes right */}
                <div className="flex items-center justify-between gap-[6px]">
                  <p className="text-[14px] text-[#535862] leading-[22px] flex-1">{t.remaining(prRemaining)}</p>
                  <button
                    onClick={() => setPrMsg('')}
                    className="flex items-center gap-[4px] border border-[#d92d20] rounded-[6px] px-[8px] py-[8px] text-[12px] text-[#d92d20] font-medium shrink-0"
                  >
                    <X size={12} />{t.clearAll}
                  </button>
                </div>
              </div>

              {/* Preview */}
              <div className="flex flex-col gap-[8px]">
                <p className="text-[14px] font-medium text-[#202a39]">{t.preview}</p>
                <div className="bg-[#ebf3ff] rounded-[10px] px-[16px] py-[14px]">
                  <p className="text-[14px] text-[#202a39] leading-[21px]">{prMsg}</p>
                </div>
              </div>
            </>
          )}

          {/* ── DIRECT MESSAGE content ── */}
          {notifType === 'direct-message' && (
            <>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-medium text-[#071329]">
                  {t.titleField} <span className="text-[#d92d20]">*</span>
                </label>
                <input
                  value={dmTitle}
                  onChange={e => setDmTitle(e.target.value)}
                  placeholder={t.dmTitlePh}
                  className="border border-[#d5d7da] rounded-[8px] px-[12px] py-[8px] text-[16px] text-[#181d27] placeholder:text-[#717680] shadow-[0px_1px_1px_rgba(10,13,18,0.05)] outline-none bg-white w-full"
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-medium text-[#071329]">
                  {t.message} <span className="text-[#d92d20]">*</span>
                </label>
                <textarea
                  value={dmMsg}
                  onChange={e => setDmMsg(e.target.value)}
                  rows={4}
                  placeholder={t.dmMsgPh}
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[12px] text-[16px] text-[#181d27] placeholder:text-[#717680] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none bg-white w-full resize-none"
                />
                <div className="flex items-center justify-between gap-[6px]">
                  <p className="text-[14px] text-[#535862] leading-[22px] flex-1">{t.remaining(dmRemaining)}</p>
                  <button
                    onClick={() => setDmMsg('')}
                    className="flex items-center gap-[4px] border border-[#d92d20] rounded-[6px] px-[8px] py-[8px] text-[12px] text-[#d92d20] font-medium shrink-0"
                  >
                    <X size={12} />{t.clearAll}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer — RTL reverses button order: Review(left) | Cancel(right) */}
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
