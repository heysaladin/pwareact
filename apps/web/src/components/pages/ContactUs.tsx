'use client';

import { useState } from 'react';
import WebNavbar from '../WebNavbar';
import WebFooter from '../WebFooter';

type Lang = 'ar' | 'en';

const imgMailbox = '/assets/images/Assets/illustration-mail-box.svg';
const imgEmailIcon = '/icon-email.svg';
const imgPhoneIcon = '/icon-phone.svg';
const imgLocationIcon = '/pinlocation.svg';

const t = {
  ar: {
    breadcrumbHome: 'الرئيسية',
    breadcrumbCurrent: 'ارسل رسالة',
    heroTitle: 'اتصل بنا لمساعدتك',
    heroDesc: 'تواصل معنا بسرية تامة دون الكشف عن بياناتك الشخصية. نحن هنا لمساعدتك.',
    hours: 'الأحد – الخميس، 9:00 ص – 5:00 م',
    formTitle: 'أرسل لنا رسالة',
    labelType: 'نوع الرسالة',
    labelName: 'الاسم',
    labelPhone: 'رقم الجوال',
    labelEmail: 'البريد الإلكتروني',
    labelSubject: 'موضوع الاقتراح',
    labelMessage: 'نص الرسالة',
    placeholderType: 'اختر نوع الرسالة',
    placeholderName: 'أدخل اسمك',
    placeholderEmail: 'أدخل بريدك الإلكتروني',
    placeholderSubject: 'أدخل موضوع الرسالة',
    placeholderMessage: 'أدخل نص رسالتك (حتى 1000 حرف)',
    clearBtn: 'مسح الكل',
    sendBtn: 'إرسال',
    messageTypes: ['اقتراح', 'شكوى', 'استفسار', 'الإبلاغ عن مخالفة'],
    contactTitle: 'معلومات التواصل',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف',
    addressLabel: 'العنوان',
    addressText: 'مركز الحويشل، العليا (403)، الرياض',
    hoursLabel: 'ساعات العمل',
    hoursText: '9:00 ص – 5:00 م، الأحد – الخميس',
  },
  en: {
    breadcrumbHome: 'Homepage',
    breadcrumbCurrent: 'Send a message',
    heroTitle: 'Contact us to help you',
    heroDesc: 'Reach us confidentially without revealing your personal data. We are here to help you.',
    hours: 'Sunday–Thursday, 9:00 AM – 5:00 PM',
    formTitle: 'Send us a message',
    labelType: 'Message type',
    labelName: 'Name',
    labelPhone: 'Mobile Number',
    labelEmail: 'Email',
    labelSubject: 'Suggestion Topic',
    labelMessage: 'Message',
    placeholderType: 'Select message type',
    placeholderName: 'Enter your name',
    placeholderEmail: 'Enter your email',
    placeholderSubject: 'Enter message topic',
    placeholderMessage: 'Enter your message (up to 1,000 characters)',
    clearBtn: 'Clear all',
    sendBtn: 'Send',
    messageTypes: ['Suggestion', 'Complaint', 'Inquiry', 'Report a Violation'],
    contactTitle: 'Contact Information',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    addressLabel: 'Address',
    addressText: 'Al Olaya (403) street, Al-Huwaisal Center, Riyadh',
    hoursLabel: 'Working Hours',
    hoursText: '9:00 AM – 5:00 PM, Sunday – Thursday',
  },
};

export default function ContactUs({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const c = t[lang];
  const [form, setForm] = useState({
    type: '',
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setForm({ type: '', name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <WebNavbar lang={lang} />

      {/* Breadcrumb */}
      <div className="border-b border-[#EAECF0] px-6 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center gap-2 text-[13px]">
          <a href="#" className="text-[#0063F5] hover:underline">{c.breadcrumbHome}</a>
          <span className="text-[#98a2b3]">/</span>
          <span className="text-[#344054]">{c.breadcrumbCurrent}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <img src={imgMailbox} alt="" className="w-[180px] md:w-[220px] mb-6" />
              <h1 className="text-[#101828] text-[30px] md:text-[40px] font-bold mb-4">{c.heroTitle}</h1>
              <p className="text-[#475467] text-[15px] md:text-[16px] leading-[1.75] mb-3">{c.heroDesc}</p>
              <p className="text-[#0063F5] text-[14px] font-medium">{c.hours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="pb-20 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-[#101828] text-[22px] font-bold mb-8">{c.formTitle}</h2>
            <div className="flex flex-col gap-5">

              {/* Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">
                  {c.labelType} <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.type}
                  onChange={(e) => handleChange('type', e.target.value)}
                  className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] bg-white focus:outline-none focus:border-[#0063F5]"
                >
                  <option value="">{c.placeholderType}</option>
                  {c.messageTypes.map((mt) => (
                    <option key={mt} value={mt}>{mt}</option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">
                  {c.labelName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder={c.placeholderName}
                  className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">
                  {c.labelPhone} <span className="text-red-500">*</span>
                </label>
                <div className="flex border border-[#D0D5DD] rounded-lg overflow-hidden focus-within:border-[#0063F5]">
                  <div className="flex items-center px-4 bg-[#F9FAFB] border-e border-[#D0D5DD]">
                    <span className="text-[14px] text-[#344054] font-medium">+966</span>
                  </div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="5X XXX XXXX"
                    className="flex-1 px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">
                  {c.labelEmail} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder={c.placeholderEmail}
                  className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5]"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">
                  {c.labelSubject} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder={c.placeholderSubject}
                  className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#344054] text-[14px] font-medium">{c.labelMessage}</label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder={c.placeholderMessage}
                  maxLength={1000}
                  rows={5}
                  className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5] resize-none"
                />
                <p className="text-[12px] text-[#98a2b3] text-end">{form.message.length}/1000</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={handleClear}
                  className="border border-[#D0D5DD] text-[#344054] text-[14px] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                >
                  {c.clearBtn}
                </button>
                <button className="bg-[#0063F5] text-white text-[14px] font-semibold px-8 py-2.5 rounded-lg hover:bg-[#0052d0] transition-colors cursor-pointer">
                  {c.sendBtn}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-[#101828] text-[22px] font-bold mb-8">{c.contactTitle}</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <img src={imgEmailIcon} alt="" className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#101828] text-[14px] font-semibold mb-1">{c.emailLabel}</p>
                  <a href="mailto:info@tamawal.sa" className="text-[#0063F5] text-[14px] hover:underline">info@tamawal.sa</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src={imgPhoneIcon} alt="" className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#101828] text-[14px] font-semibold mb-1">{c.phoneLabel}</p>
                  <p className="text-[#475467] text-[14px]">011 512 3870</p>
                  <p className="text-[#475467] text-[14px]">800 100 0276</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src={imgLocationIcon} alt="" className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#101828] text-[14px] font-semibold mb-1">{c.addressLabel}</p>
                  <p className="text-[#475467] text-[14px] leading-[1.6]">{c.addressText}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 shrink-0 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#101828] text-[14px] font-semibold mb-1">{c.hoursLabel}</p>
                  <p className="text-[#475467] text-[14px]">{c.hoursText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebFooter lang={lang} />
    </div>
  );
}
