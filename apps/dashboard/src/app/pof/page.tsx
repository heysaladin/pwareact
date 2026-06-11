'use client';

import { useState, useRef, useCallback, KeyboardEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import TamawalLogo from '@/components/ui/TamawalLogo';

type Step = 'login' | 'otp';
type Lang = 'en' | 'ar';

// ── OTP inputs ──────────────────────────────────────────────────────────────

function OtpInputs({ isAr }: { isAr: boolean }) {
  const [values, setValues] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null, null]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const i = Number(e.currentTarget.dataset.index);
    const val = e.target.value.replace(/\D/g, '').slice(-1);
    setValues(prev => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
    if (val && i < 3) inputRefs.current[i + 1]?.focus();
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    const i = Number(e.currentTarget.dataset.index);
    if (e.key === 'Backspace' && !e.currentTarget.value && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
  }, []);

  const inputs = [0, 1, 2, 3].map((i) => (
    <input
      key={i}
      ref={(el) => { inputRefs.current[i] = el; }}
      data-index={i}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={values[i]}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="bg-white border border-[#cdd4df] rounded-[8px] h-[72px] w-[56px] text-center text-[24px] font-medium text-[#121a26] outline-none focus:border-[#0063F5] focus:ring-1 focus:ring-[#0063F5] transition-colors"
    />
  ));

  return (
    <div className="flex gap-3 items-center">
      {isAr ? [...inputs].reverse() : inputs}
    </div>
  );
}

// ── Login form ───────────────────────────────────────────────────────────────

function LoginForm({ isAr, onSubmit }: { isAr: boolean; onSubmit: () => void }) {
  const [remember, setRemember] = useState(false);
  return (
    <div className="flex flex-col gap-12">
      {/* Heading */}
      <div className={isAr ? 'text-right' : ''}>
        <p className="text-[25px] font-medium text-[#121a26] leading-8 mb-0.5">
          {isAr ? 'أهلا بكم في تموّل®' : 'Welcome to Tamawal®'}
        </p>
        <p className="text-[14px] text-[#697586] leading-[22px]">
          {isAr ? 'يرجى تسجيل الدخول إلى حسابك والبدء في إدارته' : 'Please sign-in to your account and start managing'}
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-6">
        {/* Fields */}
        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className={`flex flex-col gap-1.5 ${isAr ? 'items-end' : 'items-start'}`}>
            <label className={`flex gap-0.5 text-[14px] font-medium text-[#202a39] leading-5 ${isAr ? 'flex-row-reverse' : ''}`}>
              {isAr ? 'بريد إلكتروني' : 'Email'}
              <span className="text-[#d91c1c]">*</span>
            </label>
            <input
              type="email"
              placeholder={isAr ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              dir={isAr ? 'rtl' : 'ltr'}
              className={`w-full bg-white border border-[#cdd4df] rounded-[8px] px-3 py-2 text-[16px] text-[#697586] leading-6 shadow-[0px_1px_1px_rgba(10,13,18,0.05)] outline-none focus:border-[#0063F5] focus:ring-1 focus:ring-[#0063F5] transition-colors ${isAr ? 'text-right' : 'text-left'}`}
            />
          </div>

          {/* Password */}
          <div className={`flex flex-col gap-1.5 ${isAr ? 'items-end' : 'items-start'}`}>
            <label className={`flex gap-0.5 text-[14px] font-medium text-[#202a39] leading-5 ${isAr ? 'flex-row-reverse' : ''}`}>
              {isAr ? 'كلمة المرور' : 'Password'}
              <span className="text-[#d91c1c]">*</span>
            </label>
            <input
              type="password"
              placeholder={isAr ? 'أدخل كلمة المرور الخاصة بك' : 'Enter your password'}
              dir={isAr ? 'rtl' : 'ltr'}
              className={`w-full bg-white border border-[#cdd4df] rounded-[8px] px-3 py-2 text-[16px] text-[#697586] leading-6 shadow-[0px_1px_1px_rgba(10,13,18,0.05)] outline-none focus:border-[#0063F5] focus:ring-1 focus:ring-[#0063F5] transition-colors ${isAr ? 'text-right' : 'text-left'}`}
            />
          </div>
        </div>

        {/* Remember me + Forgot password */}
        <div className={`flex items-center ${isAr ? 'flex-row-reverse justify-between' : 'justify-between'}`}>
          <label className={`flex items-center gap-3 cursor-pointer ${isAr ? 'flex-row-reverse' : ''}`}>
            <input type="checkbox" className="sr-only" onChange={e => setRemember(e.target.checked)} />
            <div
              className={`border rounded-[6px] size-5 shrink-0 flex items-center justify-center transition-colors ${remember ? 'bg-[#0063F5] border-[#0063F5]' : 'border-[#cdd4df]'}`}
            >
              {remember && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="text-[16px] font-medium text-[#364152] leading-[26px]">
              {isAr ? 'تذكرنى' : 'Remember me'}
            </span>
          </label>
          <button className="text-[14px] font-medium text-[#004fc6] leading-5">
            {isAr ? 'هل نسيت كلمة السر؟' : 'Forgot Password?'}
          </button>
        </div>

        {/* Sign in button */}
        <button
          onClick={onSubmit}
          className="relative w-full bg-[#0063F5] text-white text-[14px] font-medium leading-5 rounded-[8px] px-[14px] py-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] transition-opacity hover:opacity-90"
        >
          {isAr ? 'تسجيل الدخول' : 'Sign in'}
        </button>
      </div>
    </div>
  );
}

// ── OTP form ─────────────────────────────────────────────────────────────────

function OtpForm({ isAr }: { isAr: boolean }) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6">
      {/* Heading */}
      <div className={isAr ? 'text-right' : ''}>
        <p className="text-[25px] font-medium text-[#121a26] leading-8 mb-0.5">
          {isAr ? 'تم إرسال OTP' : 'OTP has been sent'}
        </p>
        <p className="text-[14px] text-[#697586] leading-[22px]">
          {isAr
            ? 'أدخل رمز التحقق الذي أرسلناه إلى البريد الإلكتروني email@company.com'
            : 'Enter the verification code we sent to email@company.com'}
        </p>
      </div>

      {/* Form */}
      <div className={`flex flex-col gap-6 ${isAr ? 'items-end' : 'items-start'}`}>
        {/* Code label + inputs */}
        <div className={`flex flex-col gap-3 ${isAr ? 'items-end' : 'items-start'}`}>
          <p className="text-[14px] font-medium text-[#202a39] leading-5 whitespace-nowrap">
            {isAr ? 'رمز التحقق' : 'Verification code'}
          </p>
          <OtpInputs isAr={isAr} />
        </div>

        {/* Timer */}
        <p className={`text-[16px] font-medium text-[#697586] leading-[26px] ${isAr ? 'text-right' : ''}`}>
          {isAr ? 'يمكنك طلب رمز جديد خلال 24 ثانية.' : 'You can request a new code in 24 seconds.'}
        </p>

        {/* Verify button */}
        <button
          onClick={() => router.push('/oms')}
          className="relative w-full bg-[#0063F5] text-white text-[14px] font-medium leading-5 rounded-[8px] px-[14px] py-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] transition-opacity hover:opacity-90"
        >
          {isAr ? 'يؤكد' : 'Verify'}
        </button>

        {/* Resend code */}
        <button className={`w-full flex items-center justify-center gap-1 text-[14px] font-medium text-[#9aa4b2] leading-5 px-[14px] py-[10px] ${isAr ? 'flex-row-reverse' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.333 3.333v5h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.075 12.5a7.5 7.5 0 1 1-.175-5.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {isAr ? 'أعد إرسال الرمز' : 'Resend code'}
        </button>

        {/* Contact support */}
        <div className={`flex items-baseline gap-1 ${isAr ? 'flex-row-reverse' : ''}`}>
          <p className="text-[14px] text-[#697586] leading-[22px] whitespace-nowrap">
            {isAr ? 'هل تواجه مشكلة في تسجيل الدخول؟' : 'Having trouble signing in?'}
          </p>
          <button className="text-[14px] font-medium text-[#004fc6] leading-5 whitespace-nowrap">
            {isAr ? 'تواصل مع الدعم' : 'Contact support'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PofPage() {
  const [step, setStep] = useState<Step>('login');
  const [lang, setLang] = useState<Lang>('en');
  const isAr = lang === 'ar';

  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="bg-white border border-[#eef1f6] rounded-xl p-12 w-full max-w-[416px]">

        {/* Header: logo + language toggle */}
        <div className="flex items-center justify-between mb-[100px]">
          <TamawalLogo />
          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="border border-[#f8fafc] rounded-full px-3 py-3 text-[10px] font-bold text-[#202a39] leading-[14px] hover:border-[#eef1f6] transition-colors"
          >
            {isAr ? 'En' : 'عربي'}
          </button>
        </div>

        {/* Step content */}
        {step === 'login'
          ? <LoginForm isAr={isAr} onSubmit={() => setStep('otp')} />
          : <OtpForm isAr={isAr} />
        }

      </div>
    </div>
  );
}
