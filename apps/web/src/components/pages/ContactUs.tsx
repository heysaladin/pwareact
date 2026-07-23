'use client';

import { useState, useRef, useEffect } from 'react';
import WebNavbar from '../WebNavbar';
import WebFooter from '../WebFooter';

type Lang = 'ar' | 'en';

const imgMailSmall = '/illustration-mail-small.svg';
const imgMailbox   = '/illustration-mailbox.svg';
const imgCalendar  = '/icon-calendar.svg';
const imgTimeCicle = '/icon-time-circle.svg';

const MAX_CHARS = 1000;

const subjectLabels: Record<string, Record<string, string>> = {
  en: {
    Inquiry:              'Inquiry Topic',
    Complaint:            'Complaint Topic',
    Suggestion:           'Suggestion Topic',
    Report:               'Report Topic',
    'Report a Violation': 'Violation Topic',
    'Report Financial Fraud': 'Fraud Topic',
  },
  ar: {
    'استفسار':               'موضوع الاستفسار',
    'شكوى':                  'موضوع الشكوى',
    'اقتراح':                'موضوع الاقتراح',
    'بلاغ':                  'موضوع البلاغ',
    'الإبلاغ عن مخالفة':    'موضوع المخالفة',
    'الإبلاغ عن احتيال مالي': 'موضوع الاحتيال',
  },
};

const messageLabels: Record<string, Record<string, string>> = {
  en: {
    Inquiry:              'Inquiry Message',
    Complaint:            'Complaint Message',
    Suggestion:           'Suggestion Message',
    Report:               'Report Message',
    'Report a Violation': 'Violation Message',
    'Report Financial Fraud': 'Fraud Message',
  },
  ar: {
    'استفسار':               'نص الاستفسار',
    'شكوى':                  'نص الشكوى',
    'اقتراح':                'نص الاقتراح',
    'بلاغ':                  'نص البلاغ',
    'الإبلاغ عن مخالفة':    'نص المخالفة',
    'الإبلاغ عن احتيال مالي': 'نص الاحتيال',
  },
};

const t = {
  en: {
    breadcrumbHome: 'Homepage',
    breadcrumbCurrent: 'Send a message',
    sideTitle1: 'Contact us',
    sideTitle2: 'to help you',
    sideDesc: 'You can communicate with us in complete confidentiality until your report reaches us without revealing your personal data',
    sideDay: 'From Sunday until Thursday',
    sideHours: 'From 9:00 am to 5:00 pm',
    subtitle: 'You can contact us through our customer care phone, contact form, or through our social media accounts.',
    labelType: 'Type',
    messageTypes: ['Inquiry', 'Complaint', 'Suggestion', 'Report', 'Report a Violation', 'Report Financial Fraud'],
    violationIdx: 4,
    fraudIdx: 5,
    labelName: 'Name',
    placeholderName: 'Enter the name',
    labelPhone: 'Mobile number',
    placeholderPhone: '5xxxxxxxxx',
    labelEmail: 'E-mail',
    placeholderEmail: 'Enter the E-mail',
    labelSubjectDefault: 'Subject',
    placeholderSubject: 'Enter the topic',
    labelMessageDefault: 'Message',
    placeholderMessage: 'Enter the message',
    labelViolationType: 'Violation Type',
    placeholderViolationType: 'Select violation type',
    labelChannel: 'Communication Channel',
    placeholderChannel: 'Select communication channel',
    violationTypes: [
      'Financial and Administrative Corruption',
      'Violation of Systems, Laws, and Regulations',
      'Violation of Company Policies and Procedures',
      'Inappropriate Behavior or Violation of Islamic Values, Customs, and Traditions',
      'Misuse of Company Assets',
      'Abuse of Power by Company Employees',
      'Passing Irregular Transactions',
      'Clear Conflict of Interests',
      'Knowledge of Cases Concealing Systemic Errors',
      'Money Laundering and Financing Terrorism',
    ],
    channels: ['Phone', 'Twitter', 'Email', 'Mobile App', 'Website', 'Other'],
    clearBtn: 'Clear all',
    sendBtn: 'Send',
    charsRemaining: (n: number) => `${n.toLocaleString()} characters are remaining`,
  },
  ar: {
    breadcrumbHome: 'الرئيسية',
    breadcrumbCurrent: 'ارسل رسالة',
    sideTitle1: 'تواصل معنا',
    sideTitle2: 'لمساعدتك',
    sideDesc: 'يمكنك التواصل معنا بسرية تامة حتى يصلنا بلاغك دون الكشف عن بياناتك الشخصية',
    sideDay: 'من الأحد حتى الخميس',
    sideHours: 'من 9:00 صباحاً حتى 5:00 مساءً',
    subtitle: 'يمكنك الاتصال بنا من خلال هاتف خدمة العملاء أو نموذج الاتصال أو من خلال حساباتنا على وسائل التواصل الاجتماعي',
    labelType: 'النوع',
    messageTypes: ['استفسار', 'شكوى', 'اقتراح', 'بلاغ', 'الإبلاغ عن مخالفة', 'الإبلاغ عن احتيال مالي'],
    violationIdx: 4,
    fraudIdx: 5,
    labelName: 'الاسم',
    placeholderName: 'أدخل الاسم',
    labelPhone: 'رقم الجوال',
    placeholderPhone: '5xxxxxxxxx',
    labelEmail: 'البريد الإلكتروني',
    placeholderEmail: 'أدخل البريد الإلكتروني',
    labelSubjectDefault: 'الموضوع',
    placeholderSubject: 'أدخل الموضوع',
    labelMessageDefault: 'الرسالة',
    placeholderMessage: 'أدخل نص الرسالة',
    labelViolationType: 'نوع المخالفة',
    placeholderViolationType: 'اختر نوع المخالفة',
    labelChannel: 'قناة التواصل',
    placeholderChannel: 'اختر قناة التواصل',
    violationTypes: [
      'الفساد المالي والإداري',
      'مخالفة الأنظمة والقوانين واللوائح',
      'مخالفة سياسات وإجراءات الشركة',
      'السلوك غير اللائق أو مخالفة القيم الإسلامية والأعراف والتقاليد',
      'إساءة استخدام أصول الشركة',
      'التعسف في استخدام السلطة من قبل موظفي الشركة',
      'تمرير معاملات غير نظامية',
      'تضارب المصالح الواضح',
      'العلم بحالات إخفاء الأخطاء المنهجية',
      'غسيل الأموال وتمويل الإرهاب',
    ],
    channels: ['الهاتف', 'تويتر', 'البريد الإلكتروني', 'تطبيق الجوال', 'الموقع الإلكتروني', 'أخرى'],
    clearBtn: 'مسح الكل',
    sendBtn: 'إرسال',
    charsRemaining: (n: number) => `${n.toLocaleString('ar-SA')} حرف متبقي`,
  },
};

function Dropdown({
  label, placeholder, value, options, onChange, isRtl,
}: {
  label: string; placeholder: string; value: string;
  options: string[]; onChange: (v: string) => void; isRtl: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#344054] text-[14px] font-medium">
        {label} <span className="text-[#d92d20]">*</span>
      </label>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="w-full flex items-center justify-between border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] bg-white focus:outline-none focus:border-[#0063F5] cursor-pointer"
        >
          <span className={value ? 'text-[#101828]' : 'text-[#98a2b3]'}>{value || placeholder}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}>
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>
        {open && (
          <div className={`absolute top-full mt-1 z-10 w-full bg-white border border-[#efefef] rounded-[6px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.08)] p-2 flex flex-col max-h-[240px] overflow-y-auto ${isRtl ? 'right-0' : 'left-0'}`}>
            {options.map(opt => (
              <button key={opt} type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`px-4 py-2 w-full text-[14px] text-[#667085] hover:bg-[#F9FAFB] rounded ${isRtl ? 'text-right' : 'text-left'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContactUs({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const c = t[lang];
  const [form, setForm] = useState({
    type: '', name: '', phone: '', email: '',
    subject: '', message: '', violationType: '', channel: '',
  });

  const change = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const clear = () =>
    setForm({ type: '', name: '', phone: '', email: '', subject: '', message: '', violationType: '', channel: '' });

  const isViolation = form.type === c.messageTypes[c.violationIdx];
  const isFraud     = form.type === c.messageTypes[c.fraudIdx];
  const charsLeft   = MAX_CHARS - form.message.length;
  const subjectLabel  = (form.type && subjectLabels[lang][form.type]) || c.labelSubjectDefault;
  const messageLabel  = (form.type && messageLabels[lang][form.type]) || c.labelMessageDefault;

  const inputCls = 'border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5] w-full';

  return (
    <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <WebNavbar lang={lang} />

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-[75px] py-6">
        <div className="flex items-center gap-2 text-[14px]">
          <a href={isRtl ? '/landing' : '/landing/en'} className="text-[#344054] hover:text-[#0063F5]">{c.breadcrumbHome}</a>
          <span className="text-[#98a2b3]">/</span>
          <span className="text-[#344054] font-medium">{c.breadcrumbCurrent}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1440px] mx-auto px-[75px] pb-20">
        <div className="flex gap-[80px] items-start px-[32px]">

          {/* Sidebar — dark card */}
          <div className="shrink-0 w-[330px] relative pt-[140px]">
            <div className="relative bg-[#303030] rounded-[32px] flex flex-col gap-[16px] items-start pb-[64px] pt-[150px] px-[40px]">
              {/* Illustration — overlaps top of card */}
              <img src={imgMailSmall} alt="" className="absolute pointer-events-none"
                style={{ width: 67, height: 54, left: 40, top: -77 }} />
              <img src={imgMailbox} alt="" className="absolute pointer-events-none"
                style={{ width: 213, height: 198, left: 77, top: -117 }} />

              {/* Title */}
              <div className="flex flex-col w-full">
                <p className="text-[#ffdd33] text-[40px] font-semibold leading-[1.25]">{c.sideTitle1}</p>
                <p className="text-white text-[40px] font-semibold leading-[1.25]">{c.sideTitle2}</p>
              </div>

              {/* Description */}
              <div className="py-[10px]">
                <p className="text-[#aaa] text-[16px] leading-[1.72] tracking-[0.15px]">{c.sideDesc}</p>
              </div>

              {/* Hours */}
              <div className="flex flex-col gap-[16px] py-[10px] w-full">
                <div className="flex gap-[10px] items-center">
                  <img src={imgCalendar} alt="" className="w-5 h-5 shrink-0" />
                  <p className="text-white text-[14px] leading-[1.72] tracking-[0.15px]">{c.sideDay}</p>
                </div>
                <div className="flex gap-[10px] items-center">
                  <img src={imgTimeCicle} alt="" className="w-5 h-5 shrink-0" />
                  <p className="text-white text-[14px] leading-[1.72] tracking-[0.15px]">{c.sideHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form area */}
          <div className="flex-1 min-w-0">
            {/* Subtitle */}
            <p className="text-[#344054] text-[16px] leading-[1.75] mb-6">{c.subtitle}</p>

            <hr className="border-[#EAECF0] mb-6" />

            {/* Type */}
            <div className="flex flex-col gap-3 mb-6">
              <p className="text-[#344054] text-[14px] font-medium">
                {c.labelType} <span className="text-[#d92d20]">*</span>
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {c.messageTypes.map(mt => {
                  const sel = form.type === mt;
                  return (
                    <label key={mt} className="flex items-center gap-2 cursor-pointer">
                      <div
                        className={`relative shrink-0 w-5 h-5 rounded-full border-2 transition-colors ${sel ? 'border-[#0063F5] bg-[#0063F5]' : 'border-[#D5D7DA] bg-white'}`}
                        onClick={() => change('type', mt)}
                      >
                        {sel && <div className="absolute inset-[3px] rounded-full bg-white" />}
                        <input type="radio" name="messageType" value={mt} checked={sel}
                          onChange={() => change('type', mt)} className="sr-only" />
                      </div>
                      <span className="text-[16px] text-[#344054] whitespace-nowrap">{mt}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <hr className="border-[#EAECF0] mb-6" />

            <div className="flex flex-col gap-5">

              {/* Violation Type */}
              {isViolation && (
                <Dropdown label={c.labelViolationType} placeholder={c.placeholderViolationType}
                  value={form.violationType} options={c.violationTypes}
                  onChange={v => change('violationType', v)} isRtl={isRtl} />
              )}

              {/* Channel */}
              {isFraud && (
                <Dropdown label={c.labelChannel} placeholder={c.placeholderChannel}
                  value={form.channel} options={c.channels}
                  onChange={v => change('channel', v)} isRtl={isRtl} />
              )}

              {/* Name + Phone — 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#344054] text-[14px] font-medium">
                    {c.labelName} <span className="text-[#d92d20]">*</span>
                  </label>
                  <input type="text" value={form.name} onChange={e => change('name', e.target.value)}
                    placeholder={c.placeholderName} className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#344054] text-[14px] font-medium">
                    {c.labelPhone} <span className="text-[#d92d20]">*</span>
                  </label>
                  <div className="flex border border-[#D0D5DD] rounded-lg overflow-hidden focus-within:border-[#0063F5]">
                    <div className="flex items-center px-3 bg-[#F9FAFB] border-e border-[#D0D5DD] shrink-0">
                      <span className="text-[14px] text-[#344054] font-medium">+966</span>
                    </div>
                    <input type="tel" value={form.phone} onChange={e => change('phone', e.target.value)}
                      placeholder={c.placeholderPhone}
                      className="flex-1 px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none bg-white" />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">
                  {c.labelEmail} <span className="text-[#d92d20]">*</span>
                </label>
                <input type="email" value={form.email} onChange={e => change('email', e.target.value)}
                  placeholder={c.placeholderEmail} className={inputCls} />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">
                  {subjectLabel} <span className="text-[#d92d20]">*</span>
                </label>
                <input type="text" value={form.subject} onChange={e => change('subject', e.target.value)}
                  placeholder={c.placeholderSubject} className={inputCls} />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">
                  {messageLabel} <span className="text-[#d92d20]">*</span>
                </label>
                <textarea value={form.message}
                  onChange={e => change('message', e.target.value.slice(0, MAX_CHARS))}
                  placeholder={c.placeholderMessage}
                  rows={5}
                  className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5] resize-none w-full" />
                <div className="flex items-center justify-between">
                  <p className="text-[12px] text-[#98a2b3]">{c.charsRemaining(charsLeft)}</p>
                  <button onClick={clear} type="button"
                    className="text-[12px] text-[#344054] hover:text-[#0063F5] cursor-pointer flex items-center gap-1">
                    <span>×</span> {c.clearBtn}
                  </button>
                </div>
              </div>

              {/* Send button */}
              <div>
                <button type="button"
                  className="bg-[#0063F5] hover:bg-[#0052d0] text-white text-[16px] font-semibold px-[32px] py-[16px] rounded-[48px] flex items-center gap-[10px] transition-colors cursor-pointer">
                  {c.sendBtn}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.166 10h11.667M10 15.833 15.833 10 10 4.167" stroke="currentColor" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WebFooter lang={lang} />
    </div>
  );
}
