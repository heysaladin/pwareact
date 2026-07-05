'use client';

import { useState, useEffect, useRef } from 'react';

// ── Hero assets ──────────────────────────────────────────────────────────────
const imgBg          = "http://localhost:3845/assets/99f675afb55c489754593b085eb84d227ae42bf5.svg";
const imgLogo        = "/logo-tamawal-web.svg";
const imgNavArrow    = "http://localhost:3845/assets/4c4ae62485902829fc9e816c9e3b6272289709e3.svg";
const imgSlider      = "http://localhost:3845/assets/958c958b4083704331e66b3ea7f73fca9a8beb0b.svg";
const imgChevron     = "http://localhost:3845/assets/b132fd916e53d0ab6d7a8e2c3e6a207ecab2b392.svg";
const imgArrowRight  = "http://localhost:3845/assets/4b9da7577497222f032976351799034eac9f0e43.svg";
const imgPhoneImg    = "/mockup.png";
const imgAppStore    = "http://localhost:3845/assets/d546918b9349f2d2f6f0c33b97fe51ad05199e4c.svg";
const imgGooglePlay  = "http://localhost:3845/assets/74a1f08e8001561fb28ceb1da93da2a164455551.svg";
const imgHeroBadge   = "/badge.svg";
const imgBadgeCenter = "/badge-center.svg";

// ── Partners ─────────────────────────────────────────────────────────────────
const imgBadaya        = "/logos/badaya.png";
const imgPartner2      = "/logos/partner2.png";
const imgAsoul         = "/logos/asoul.png";
const imgAlyusr        = "/logos/alyusr.png";
const imgTamweelAloula = "/logos/tamweel-aloula.png";
const imgAlinma        = "/logos/alinma.png";
const imgAnb           = "/logos/anb.png";
const imgRasheed       = "/logos/rasheed.png";
const imgTaajeer       = "/logos/taajeer.png";
const imgKuwara        = "/logos/kuwara.png";
const imgNayifat       = "/logos/nayifat.png";
const imgLogo2x        = "/logos/logo2x.png";
const imgSubAfc        = "/logos/subafc.png";
const imgWataniya1     = "/logos/wataniya.png";

// ── Form ─────────────────────────────────────────────────────────────────────
const imgTrash           = "http://localhost:3845/assets/ace3f68d24ea8babe50a7a497bc24d96bba94d67.svg";
const imgArrowDisabled   = "http://localhost:3845/assets/0bdd08fb6f83cb08aeba8b34dbe77a7696174726.svg";
const imgPhoneIconBlue   = "http://localhost:3845/assets/497877c4d3459bd9c7cc111573e1ed6314396def.svg";
const imgCheckGreen      = "http://localhost:3845/assets/d0eb584f28b2e49512e9a57fc36342dc9a03aae4.svg";

// ── FAQ ──────────────────────────────────────────────────────────────────────
const imgArrowDownCircle = "http://localhost:3845/assets/254ba3a52e458076c0b9b38ffa93a79a9e4459ca.svg";
const imgArrowUpCircle   = "http://localhost:3845/assets/2aaba8a0dd13363a3c0900a8ca3d07cec3c26b35.svg";
const imgViewMoreArrow   = "http://localhost:3845/assets/4ed1ddc826f477bf8089254b418f8ea3f2d6fdb4.svg";

// ── Footer ───────────────────────────────────────────────────────────────────
const imgFooterBadge     = "/badge-small.svg";
const imgArrowNext       = "http://localhost:3845/assets/81d50a7431408fc46e51730d5aa34428f1b83b28.svg";
const imgEmailIcon       = "http://localhost:3845/assets/7f2ee257638afd72a51f249195d3f921e359d8f3.svg";
const imgPhoneIcon       = "http://localhost:3845/assets/bb37c2c33523f4a34c420e251c2f11c79a1149a5.svg";
const imgLocationIcon    = "/pinlocation.svg";
const imgLinkedIn        = "http://localhost:3845/assets/cb3a7fab272340302ba86f6a820b28b780a29371.svg";
const imgTwitterX        = "http://localhost:3845/assets/ad2931524412784cfe16d2c27d020156912b9fcb.svg";

// ─────────────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What types of financial services does Tamawal® offer?",
    a: "Tamawal® offers various types of financial services, including personal loans, credit cards, car financing, and real estate financing.",
  },
  {
    q: "Can you provide an overview of Tamawal®'s product range?",
    a: "",
  },
  {
    q: "Is Tamawal®'s financing model compliant with Sharia law?",
    a: "",
  },
];

const MIN = 1000;
const MAX = 100000;

function SalarySlider() {
  const [value, setValue]   = useState(7500);
  const [editing, setEditing] = useState(false);
  const [inputStr, setInputStr] = useState('');
  const trackRef   = useRef<HTMLDivElement>(null);
  const dragging   = useRef(false);

  const pct = ((value - MIN) / (MAX - MIN)) * 100;

  function clamp(raw: number) {
    return Math.min(MAX, Math.max(MIN, Math.round(raw / 500) * 500));
  }

  function valueFromClientX(clientX: number) {
    if (!trackRef.current) return value;
    const rect  = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return clamp(MIN + ratio * (MAX - MIN));
  }

  function handleTrackMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    dragging.current = true;
    setValue(valueFromClientX(e.clientX));
  }

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!dragging.current) return;
      setValue(valueFromClientX(e.clientX));
    }
    function onUp() { dragging.current = false; }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, []);

  function handleDisplayClick() {
    setInputStr(String(value));
    setEditing(true);
  }

  function commitInput() {
    setValue(clamp(Number(inputStr) || MIN));
    setEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') commitInput();
    if (e.key === 'Escape') setEditing(false);
  }

  const formatted = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <p className="text-[#475467] text-[13px]">Your Monthly Salary</p>

      {/* Editable display */}
      <div
        className="border border-[#EEF1F6] rounded-[8px] px-4 py-3 flex items-center gap-2 cursor-text w-full"
        onClick={!editing ? handleDisplayClick : undefined}
      >
        <img src="/SAR.svg" alt="SAR" className="w-6 h-6 object-contain flex-shrink-0" />
        {editing ? (
          <input
            autoFocus
            type="text"
            inputMode="numeric"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value.replace(/[^0-9]/g, ''))}
            onBlur={commitInput}
            onKeyDown={handleKeyDown}
            className="text-[#101828] text-[24px] font-bold outline-none w-full"
          />
        ) : (
          <span className="text-[#101828] text-[24px] font-bold">{formatted}</span>
        )}
      </div>

      {/* Drag track row */}
      <div className="flex items-center gap-3 w-full mt-1" style={{ userSelect: 'none' }}>
        <span className="flex items-center gap-1 text-[#101828] text-[16px] font-bold whitespace-nowrap">
          <img src="/SAR.svg" alt="SAR" className="w-4 h-4 object-contain" /> 1 K
        </span>

        {/* Custom drag track — ruler image + draggable bar */}
        <div
          ref={trackRef}
          onMouseDown={handleTrackMouseDown}
          className="flex-1 relative h-[32px] cursor-pointer"
        >
          {/* Ruler image from Figma */}
          <img
            src={imgSlider}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />
          {/* Blue fill overlay (left of bar) */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-[#0063F5] rounded-full pointer-events-none"
            style={{ width: `${pct}%`, left: 0 }}
          />
          {/* Vertical bar handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#0063F5] rounded-full cursor-grab pointer-events-none"
            style={{ left: `calc(${pct}% - 1.5px)` }}
          />
        </div>

        <span className="flex items-center gap-1 text-[#101828] text-[16px] font-bold whitespace-nowrap">
          <img src="/SAR.svg" alt="SAR" className="w-4 h-4 object-contain" /> 100 K
        </span>
      </div>
    </div>
  );
}

const loanOptions = [
  'Personal Loan',
  'Car Financing',
  'Real Estate',
  'Credit Card',
  'New House Building Loan',
  'Home Renovation Loan',
  'Land Purchase Loan',
  'Business Loan',
  'Education Loan',
  'Medical Loan',
  'Debt Consolidation',
  'Wedding Loan',
];

function LoanPurposeSelect({ selected, onSelect }: { selected: string; onSelect: (v: string) => void }) {
  const [cycleIdx, setCycleIdx]   = useState(0);
  const [fade, setFade]           = useState(true);
  const [open, setOpen]           = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const timerRef                  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef              = useRef<HTMLDivElement>(null);
  const buttonRef                 = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selected) return;
    timerRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCycleIdx(i => (i + 1) % loanOptions.length);
        setFade(true);
      }, 400);
    }, 2800);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [cycleIdx, selected]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleOpen() {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'fixed',
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }
    setOpen(o => !o);
  }

  const displayed = selected || loanOptions[cycleIdx];

  return (
    <div className="flex flex-col items-center gap-2 w-full px-12" ref={containerRef}>
      <p className="text-[#475467] text-[13px]">Select Loan Purpose</p>
      <div className="relative w-full">
        <button
          ref={buttonRef}
          type="button"
          onClick={handleOpen}
          className="w-full border border-[#EEF1F6] rounded-[8px] px-4 py-3 flex items-center justify-between bg-white cursor-pointer focus:outline-none focus:border-[#0063F5] text-left"
        >
          <span
            className="text-[#101828] text-[18px] font-bold transition-opacity duration-400"
            style={{ opacity: selected ? 1 : (fade ? 1 : 0) }}
          >
            {displayed}
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={`flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {open && (
          <div style={dropdownStyle} className="bg-white border border-[#EEF1F6] rounded-[8px] shadow-lg overflow-y-auto max-h-[240px]">
            {loanOptions.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => { onSelect(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-3 text-[16px] hover:bg-[#F5F9FF] transition-colors ${selected === opt ? 'text-[#0063F5] font-bold' : 'text-[#101828]'}`}
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

// ─── Monthly commitment row ───────────────────────────────────────────────────
function CommitmentRow({ value, onChange, onClear }: {
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
}) {
  const [focused, setFocused] = useState(false);
  const display = focused
    ? value
    : value
      ? Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : '';

  return (
    <div className="flex items-center gap-3 w-full px-12">
      <button type="button" onClick={onClear} className="flex-shrink-0">
        <img src={imgTrash} alt="Remove" className="w-5 h-5" />
      </button>
      <div className="flex-1 border border-[#EEF1F6] rounded-[8px] px-4 py-3 flex items-center gap-2">
        <img src="/SAR.svg" alt="SAR" className="w-5 h-5 object-contain flex-shrink-0" />
        <input
          type="text"
          inputMode="numeric"
          placeholder="0.00"
          value={display}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
          className="text-[#101828] text-[18px] font-bold outline-none w-full placeholder:text-[#9AA4B2] placeholder:font-normal"
        />
      </div>
    </div>
  );
}

// ─── OTP 4-digit input ────────────────────────────────────────────────────────
function OtpInput({ digits, onChange }: {
  digits: string[];
  onChange: (d: string[]) => void;
}) {
  const refs = useRef<(HTMLInputElement | null)[]>([null, null, null, null]);

  function handleChange(i: number, raw: string) {
    const ch = raw.replace(/[^0-9]/g, '').slice(-1);
    const next = [...digits];
    next[i] = ch;
    onChange(next);
    if (ch && i < 3) refs.current[i + 1]?.focus();
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  }

  return (
    <div className="flex gap-2">
      {digits.map((d, i) => (
        <input
          key={i}
          ref={el => { refs.current[i] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={d}
          onChange={e => handleChange(i, e.target.value)}
          onKeyDown={e => handleKeyDown(i, e)}
          className="bg-[#0041a3] border border-[#00317a] rounded-[8px] w-[53px] h-[78px] text-white text-[46.5px] leading-[54px] text-center outline-none font-bold p-3"
        />
      ))}
    </div>
  );
}

export default function AppPage() {
  const [openFaq, setOpenFaq]           = useState(0);
  const [activeLoan, setActiveLoan]     = useState<'YES' | 'NO' | null>(null);
  const [commitment, setCommitment]     = useState('');
  const [loanPurpose, setLoanPurpose]   = useState('');
  const [formStep, setFormStep]         = useState<'form' | 'phone' | 'otp'>('form');
  const [phoneNum, setPhoneNum]         = useState('');
  const [otpDigits, setOtpDigits]       = useState(['', '', '', '']);
  const [countdown, setCountdown]       = useState(24);

  const isComplete = activeLoan !== null && loanPurpose !== '';

  useEffect(() => {
    if (formStep !== 'otp' || countdown <= 0) return;
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [formStep, countdown]);

  function handleLoanToggle(val: 'YES' | 'NO') {
    if (activeLoan === val) return;
    setActiveLoan(val);
    if (val === 'NO') setCommitment('');
  }

  function handleContinueToPhone() {
    setFormStep('phone');
    setPhoneNum('');
  }

  function handleContinueToOtp() {
    setFormStep('otp');
    setOtpDigits(['', '', '', '']);
    setCountdown(24);
  }

  const countdownStr = `${String(Math.floor(countdown / 60)).padStart(2, '0')}:${String(countdown % 60).padStart(2, '0')}`;

  return (
    <div className="min-w-[1440px] bg-[#f9f8fd]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[844px]">

        {/* Dark gradient background — full bleed */}
        <div className="absolute inset-0 bg-[#021945]" />
        <div className="absolute -top-[159px] left-1/2 -translate-x-1/2 w-[1440px] h-[838px] pointer-events-none">
          <img src={imgBg} alt="" className="absolute inset-0 w-full h-full" />
        </div>

        {/* Centered content container */}
        <div className="absolute inset-0 flex justify-center">
        <div className="relative w-[1440px]">

        {/* Navbar */}
        <div className="absolute top-[25px] left-0 w-full px-[75px]">
          <div className="flex items-center justify-between h-[45px]">
            {/* Logo + nav */}
            <div className="flex items-center gap-[56px]">
              <div className="flex items-center">
                <img src={imgLogo} alt="Tamawal" className="h-[33px] w-auto" />
              </div>
              <nav className="flex items-center gap-[40px]">
                <a href="#" className="text-white text-[16px] font-medium">App</a>
                <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Tamawal</a>
                <div className="flex items-center gap-1">
                  <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Services</a>
                  <div className="w-[12px] h-[12px] ml-1 rotate-180">
                    <img src={imgNavArrow} alt="" className="w-full h-full" />
                  </div>
                </div>
                <a href="#" className="text-[#98A2B3] text-[16px] font-medium">About us</a>
                <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Contact us</a>
              </nav>
            </div>
            {/* Right */}
            <div className="flex items-center gap-8">
              <div className="w-[104px] h-[45px]" />
              <div className="border border-[#344054] rounded-full w-[44px] h-[44px] flex items-center justify-center">
                <span className="text-[#98A2B3] text-[13px] font-medium">عربي</span>
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="absolute top-[150px] left-[129px] w-[577px] flex flex-col gap-[16px]">
          <h1 className="text-white text-[48px] font-bold leading-[1.1]">
            Get the Best Loan, Instantly.
          </h1>
          <p className="text-[#98A2B3] text-[16px] leading-[1.7]">
            A fully automated way to compare, apply, and track loans across trusted banks — all in one platform, all in real time.
          </p>
        </div>

        {/* Blue rectangle (behind phone) */}
        <div className="absolute top-[419px] left-[108px] w-[598px] h-[363px] bg-[#0063F5] rounded-[32px]" />

        {/* Phone mockup */}
        <div className="absolute top-[357px] left-[72px] w-[426px] h-[467px]">
          <img src={imgPhoneImg} alt="Tamawal App" className="w-full h-full object-contain" />
        </div>

        {/* SAMA badge — outer ring spins, center stays */}
        <div className="absolute top-[395px] left-[515px] w-[157px] h-[157px]">
          <img
            src={imgHeroBadge}
            alt=""
            className="w-full h-full"
            style={{ animation: 'badge-spin 18s linear infinite' }}
          />
          <img
            src={imgBadgeCenter}
            alt="Licensed by SAMA"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Install app */}
        <div className="absolute top-[598px] left-[509px] flex flex-col items-end gap-5">
          <p className="text-[#D1DAE8] text-[16px]">Install our app now!</p>
          <div className="flex flex-col gap-3">
            <div className="border border-[#16448F] rounded-[6px] w-[128px] h-[40px] overflow-hidden">
              <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
            </div>
            <div className="border border-[#16448F] rounded-[6px] w-[128px] h-[40px] overflow-hidden">
              <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Loan form */}
        <div className="absolute top-[150px] left-[736px] w-[601px] z-[200] rounded-[32px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
          {/* Header */}
          <div className="bg-[#F1F7FF] border-b border-[#EAECF0] px-6 py-5 rounded-t-[32px]">
            <p className="text-[#021945] text-[20px] font-bold text-center">Find the best loan for you</p>
          </div>
          {/* Body */}
          <div className={`px-6 py-10 flex flex-col items-center gap-8 transition-opacity ${formStep !== 'form' ? 'bg-transparent opacity-50 pointer-events-none select-none' : 'bg-white'}`}>
            {/* Salary */}
            <SalarySlider />
            {/* Active loans */}
            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-[#475467] text-[13px]">Do you have active loans?</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleLoanToggle('YES')}
                  className={`rounded-[8px] px-12 py-3 text-[18px] font-semibold transition-colors ${
                    activeLoan === 'YES'
                      ? 'bg-[#0063F5] border border-[#004FC6] text-white'
                      : 'bg-[#F5F9FF] border border-[#D7E7FE] text-[#202A39]'
                  }`}
                >YES</button>
                <button
                  type="button"
                  onClick={() => handleLoanToggle('NO')}
                  className={`rounded-[8px] px-12 py-3 text-[18px] font-semibold transition-colors ${
                    activeLoan === 'NO'
                      ? 'bg-[#0063F5] border border-[#004FC6] text-white'
                      : 'bg-[#F5F9FF] border border-[#D7E7FE] text-[#202A39]'
                  }`}
                >NO</button>
              </div>
            </div>

            {/* Monthly commitments — only when YES */}
            {activeLoan === 'YES' && (
              <div className="flex flex-col items-center gap-2 w-full">
                <p className="text-[#475467] text-[13px]">Monthly commitments</p>
                <CommitmentRow
                  value={commitment}
                  onChange={setCommitment}
                  onClear={() => setCommitment('')}
                />
              </div>
            )}

            {/* Loan purpose */}
            <LoanPurposeSelect selected={loanPurpose} onSelect={setLoanPurpose} />
          </div>
          {/* Footer */}
          <div className={`flex justify-center items-start relative ${formStep === 'form' ? 'bg-white px-6 pb-10 pt-4 rounded-b-[32px]' : 'bg-[#0063F5] pt-4 pb-12'}`}>
            {formStep === 'form' && (
              <button
                disabled={!isComplete}
                onClick={isComplete ? handleContinueToPhone : undefined}
                className={`rounded-[56px] px-6 py-4 flex items-center justify-center gap-2 w-[240px] transition-colors ${
                  isComplete ? 'bg-[#FFDD33] cursor-pointer' : 'bg-[#E2E9F3] cursor-not-allowed'
                }`}
              >
                <span className={`text-[16px] font-semibold ${isComplete ? 'text-[#171717]' : 'text-[#9AA4B2]'}`}>Continue</span>
                <img src={isComplete ? imgArrowRight : imgArrowDisabled} alt="" className="w-5 h-5" />
              </button>
            )}

            {/* Phone panel — state 05/06 */}
            {(formStep === 'phone' || formStep === 'otp') && (
              <div className="w-full flex flex-col gap-[25px] items-center px-[22px]">
                <div className="flex flex-col gap-[25px] items-center w-full">

                  {/* Inner content */}
                  <div className="flex flex-col gap-[18px] items-center p-6 w-full rounded-[12px]">

                    {formStep === 'phone' && (
                      <>
                        <div className="flex flex-col gap-2 items-center w-full px-12">
                          <p className="text-white text-[13px]">Mobile Number</p>
                          <div className="bg-[#0041a3] border border-[#0041a3] rounded-[8px] pl-3 pr-4 py-3 flex items-center w-full">
                            <span className="text-white text-[24px] font-bold mr-1">+</span>
                            <input
                              autoFocus
                              type="tel"
                              inputMode="numeric"
                              placeholder="Enter your mobile number"
                              value={phoneNum}
                              onChange={e => setPhoneNum(e.target.value.replace(/[^0-9 ]/g, ''))}
                              className="bg-transparent outline-none text-[24px] font-bold text-white placeholder:text-[#77a6ed] placeholder:font-normal w-full"
                            />
                          </div>
                        </div>
                        <p className="text-[#92baf6] text-[12px] text-center leading-[1.5]">
                          Please enter your mobile number so we can send you a verification code!
                        </p>
                      </>
                    )}

                    {formStep === 'otp' && (
                      <>
                        {/* Verified phone display */}
                        <div className="flex flex-col gap-2 items-center w-full">
                          <p className="text-white text-[13px]">Mobile Number</p>
                          <div className="flex items-center gap-2 justify-center">
                            <img src={imgPhoneIconBlue} alt="" className="w-5 h-5 flex-shrink-0" />
                            <span className="text-white text-[24px] font-bold">+{phoneNum}</span>
                            <div className="bg-white rounded-full p-[2px] flex-shrink-0">
                              <img src={imgCheckGreen} alt="" className="w-3 h-3 block" />
                            </div>
                          </div>
                        </div>
                        <p className="text-[#92baf6] text-[12px] text-center leading-[1.5] w-full">
                          Please enter verification code from inbox in your mobile number!
                        </p>
                        {/* OTP boxes */}
                        <OtpInput digits={otpDigits} onChange={setOtpDigits} />
                        {/* Resend countdown */}
                        <p className="text-[12px] text-center tracking-[0.4px]">
                          <span className="text-[#92baf6]">Resend Code? </span>
                          <span className="text-[#FFDD33]">{countdownStr}</span>
                        </p>
                      </>
                    )}
                  </div>

                  {/* Action button */}
                  {formStep === 'phone' && (
                    <button
                      onClick={phoneNum.length >= 9 ? handleContinueToOtp : undefined}
                      className={`rounded-[56px] px-[64px] py-[16px] flex items-center gap-[10px] transition-colors ${
                        phoneNum.length >= 9 ? 'bg-[#FFDD33] cursor-pointer' : 'bg-[#92baf6] cursor-not-allowed'
                      }`}
                    >
                      <span className="text-[#171717] text-[16px] font-semibold">Continue</span>
                      <img src={imgArrowRight} alt="" className="w-5 h-5" />
                    </button>
                  )}

                  {formStep === 'otp' && (
                    <button className="bg-[#FFDD33] rounded-[56px] px-[64px] py-[16px] flex items-center gap-[10px]">
                      <span className="text-[#171717] text-[16px] font-semibold">Process</span>
                      <img src={imgArrowRight} alt="" className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        </div>{/* /w-[1440px] */}
        </div>{/* /flex justify-center */}

      </section>

      {/* ── Partners ─────────────────────────────────────────────────────── */}
      <section className="bg-[#f9f8fd] py-[94px] flex flex-col items-center gap-8 overflow-hidden">
        <h2 className="text-[#101828] text-[32px] font-bold tracking-[0.15px]">Our Partners</h2>
        <div className="w-full overflow-hidden">
          {/* Duplicate logos so the loop is seamless (translateX -50% = one full set) */}
          <div
            className="flex items-center gap-10 w-max"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center gap-10">
                <img src={imgBadaya}        alt="" className="h-[65px] w-auto object-contain flex-shrink-0" />
                <img src={imgPartner2}      alt="" className="h-[94px] w-auto object-contain flex-shrink-0" />
                <img src={imgAsoul}         alt="" className="h-[60px] w-auto object-contain flex-shrink-0" />
                <img src={imgAlyusr}        alt="" className="h-[58px] w-auto object-contain flex-shrink-0" />
                <img src={imgTamweelAloula} alt="" className="h-[52px] w-auto object-contain flex-shrink-0" />
                <img src={imgAlinma}        alt="" className="h-[50px] w-auto object-contain flex-shrink-0" />
                <img src={imgAnb}           alt="" className="h-[39px] w-auto object-contain flex-shrink-0" />
                <img src={imgRasheed}       alt="" className="h-[38px] w-auto object-contain flex-shrink-0" />
                <img src={imgTaajeer}       alt="" className="h-[31px] w-auto object-contain flex-shrink-0" />
                <img src={imgKuwara}        alt="" className="h-[32px] w-auto object-contain flex-shrink-0" />
                <img src={imgNayifat}       alt="" className="h-[40px] w-auto object-contain flex-shrink-0" />
                <img src={imgWataniya1}     alt="" className="h-[40px] w-auto object-contain flex-shrink-0" />
                <img src={imgLogo2x}        alt="" className="h-[47px] w-auto object-contain flex-shrink-0" />
                <img src={imgSubAfc}        alt="" className="h-[57px] w-auto object-contain flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-[94px] px-[75px] flex items-center justify-center">
        <div className="w-[1290px] flex flex-col items-center gap-[40px]">
          <h2 className="text-[#141414] text-[32px] font-bold">F.A.Q</h2>

          <div className="w-[1070px]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#E0E0E0]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center gap-[30px] py-8 text-left"
                >
                  <span className="flex-1 text-[#130F26] text-[30px] font-bold leading-normal">{faq.q}</span>
                  <img
                    src={openFaq === i ? imgArrowUpCircle : imgArrowDownCircle}
                    alt=""
                    className="w-6 h-6 flex-shrink-0"
                  />
                </button>
                {openFaq === i && faq.a && (
                  <div className="pb-8">
                    <p className="text-[#525252] text-[16px] leading-[1.72]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button className="bg-[#FED644] border border-[#EAECF0] rounded-[50px] px-8 py-6 flex items-center gap-3">
              <span className="text-[#141414] text-[16px]">View more</span>
              <img src={imgViewMoreArrow} alt="" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#0063F5]">
        <div className="max-w-[1440px] mx-auto px-[75px] pt-[90px] flex flex-col gap-[48px]">
        <div className="flex items-start justify-between w-full">

          {/* Left: logo + SAMA */}
          <div className="flex flex-col justify-between self-stretch w-[280px]">
            <div className="flex items-center">
              <img src={imgLogo} alt="Tamawal" className="h-[33px] w-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <img src={imgFooterBadge} alt="SAMA" className="w-[81px] h-[81px]" />
              <p className="text-white/80 text-[18px] font-semibold leading-[1.72]">
                Tamawal is under the supervision and authority of Saudi Central Bank (SAMA)
              </p>
            </div>
          </div>

          {/* Right: link columns */}
          <div className="flex flex-col gap-8 flex-1 ml-[60px]">
            {/* Top row */}
            <div className="flex gap-[30px]">
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">About us</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Who we are</span>
                  <span>Our products</span>
                  <span>Our values</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Legal</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Terms and Conditions</span>
                  <span>Data Protection and Privacy</span>
                  <span>Customer Protection Principles</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Take actions</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Be a partner</span>
                  <span>Be a customer</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Customer Care</p>
                <p className="text-white/64 text-[14px] leading-[1.45]">You can give suggestions or a complaint for better Tamawal!</p>
                <div className="flex flex-col">
                  <button className="flex items-center gap-1 py-3 text-white/86 text-[16px]">
                    Send a message <img src={imgArrowNext} alt="" className="w-6 h-6" />
                  </button>
                  <button className="flex items-center gap-1 py-3 text-white/86 text-[16px]">
                    FAQs <img src={imgArrowNext} alt="" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Bottom row */}
            <div className="flex gap-[30px]">
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Contact us</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={imgEmailIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">info@tamawal.sa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={imgPhoneIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">011 512 3870</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={imgPhoneIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">800 100 0276</span>
                  </div>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Address</p>
                <div className="flex gap-2 items-start">
                  <img src={imgLocationIcon} alt="" className="w-[13px] mt-1 flex-shrink-0" />
                  <span className="text-white/64 text-[14px] leading-[1.45]">Al Olaya (403) street, Riyadh, Saudi Arabia</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-4">
                <div>
                  <p className="text-white text-[16px] font-semibold">Working hours</p>
                  <p className="text-white/64 text-[14px]">09:00 – 17:00</p>
                </div>
                <div>
                  <p className="text-white text-[16px] font-semibold">Working days</p>
                  <p className="text-white/64 text-[14px]">Sunday - Thursday</p>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-semibold leading-[1.72]">Social media</p>
                <div className="flex gap-2 items-center">
                  <img src={imgLinkedIn} alt="LinkedIn" className="w-[45px] h-[45px]" />
                  <div className="border border-white/24 rounded-full w-[45px] h-[45px] flex items-center justify-center overflow-hidden">
                    <img src={imgTwitterX} alt="X" className="w-5 h-[15px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 pb-6">
          <div className="border-t border-white/10" />
          <p className="text-white/32 text-[16px] text-center leading-[1.7]">
            Tamawal Digital Brokerage Company operates under the supervision and regulation of the Saudi Arabian Monetary Authority (SAMA)
          </p>
        </div>
        </div>{/* /max-w-[1440px] */}
      </footer>

    </div>
  );
}
