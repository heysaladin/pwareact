'use client';

import { useState, useEffect, useRef } from 'react';
import WebNavbar from '@/components/WebNavbar';

// ── Hero assets ──────────────────────────────────────────────────────────────
const imgBg          = "http://localhost:3845/assets/99f675afb55c489754593b085eb84d227ae42bf5.svg";
const imgLogo        = "/logo-tamawal-web.svg";
const imgNavArrow    = "http://localhost:3845/assets/4c4ae62485902829fc9e816c9e3b6272289709e3.svg";
const imgSlider      = "http://localhost:3845/assets/958c958b4083704331e66b3ea7f73fca9a8beb0b.svg";
const imgChevron     = "http://localhost:3845/assets/b132fd916e53d0ab6d7a8e2c3e6a207ecab2b392.svg";
const imgArrowRight  = "/arrow-right.svg";
const imgPhoneImg    = "/mockup.png";
const imgAppStore    = "/appstore.svg";
const imgGooglePlay  = "/playstore.svg";
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
const imgArrowDisabled   = "/arrow-right.svg";
const imgPhoneIconBlue   = "/icon-phone-white.svg";
const imgCheckGreen      = "/icon-check.svg";

// ── FAQ ──────────────────────────────────────────────────────────────────────
const imgArrowDownCircle = "/arrow-down-circle.svg";
const imgArrowUpCircle   = "/arrow-up-circle.svg";
const imgViewMoreArrow   = "/arrow-right.svg";

// ── Footer ───────────────────────────────────────────────────────────────────
const imgFooterBadge     = "/badge-small.svg";
const imgArrowNext       = "/arrow-next-dark.svg";
const imgEmailIcon       = "/icon-email.svg";
const imgPhoneIcon       = "/icon-phone.svg";
const imgLocationIcon    = "/pinlocation.svg";
const imgLinkedIn        = "/icon-linkedin.svg";
const imgTwitterX        = "/icon-twitter.svg";

// ─────────────────────────────────────────────────────────────────────────────

function ArrowRight({ color = '#414651', className = 'w-5 h-5' }: { color?: string; className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4.16602 10.0001H15.8327M9.99935 15.8334L15.8327 10.0001L9.99935 4.16675" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const howItWorksSlides = [
  {
    img: '/works-summary/1.svg',
    alt: '1',
    title: 'Apply securely with Tamawal',
    body: `It takes five minutes from start to finish. We'll just need some basic information about your data and apply for the loan type you want, only necessary information from your application will be used by our partners to generate personalized offers for you.\n\nWe do not share your contact details until you have chosen an offer.`,
    list: [] as string[],
  },
  {
    img: '/works-summary/3.svg',
    alt: '3',
    title: 'Compare tailored loan offers',
    body: `You will see the details of all loan offers - personalized and unique to you. Compare and choose the loan that meets your needs! `,
    list: ['Rates are Real;', 'No markups and no hidden fees;', 'Everything is 100% Transparent and Free'],
  },
  {
    img: '/works-summary/2.svg',
    alt: '2',
    title: 'Get your money',
    body: `After final checks and contract signing your offer and then receiving your loan amount.\n\nEnjoy your day!`,
    list: [] as string[],
  },
];

const loanProducts = [
  { img: '/products/personal.svg',  alt: 'personal',  title: 'Personal Loan',  subtitle: 'Up To 150,000 SAR', badgeBg: '' },
  { img: '/products/card.svg',      alt: 'card',      title: 'Credit Card',    subtitle: 'Up To 150,000 SAR', badgeBg: 'bg-[rgba(152,162,179,0.32)]' },
  { img: '/products/car.svg',       alt: 'car',       title: 'Car Loan',       subtitle: 'Up To 150,000 SAR', badgeBg: 'bg-[rgba(152,162,179,0.32)]' },
  { img: '/products/mortgage.svg',  alt: 'mortgage',  title: 'Mortgage Loan',  subtitle: 'Up To 150,000 SAR', badgeBg: 'bg-[rgba(152,162,179,0.32)]' },
];

const faqs = [
  {
    q: "What types of financial services does Tamawal offer?",
    a: "Tamawal® is a one-stop shop for getting financial help. They currently offer personal loans and are expanding to include credit cards, car financing, and real estate financing soon.",
  },
  {
    q: "Can you provide an overview of Tamawal's product range?",
    a: "Tamawal's product range includes personal loans, credit cards, car financing, and real estate financing, ensuring that products are compliant with Islamic principles.",
  },
  {
    q: "How does Tamawal assist customers in obtaining financing?",
    a: "Tamawal acts as a digital financial intermediary, connecting customers with licensed financial institutions to facilitate the process of obtaining financing in a convenient and cost-effective manner.",
  },
  {
    q: "Is Tamawal's financing model compliant with Sharia law?",
    a: "Tamawal follows a financing model that is in accordance with Sharia law, ensuring that its services are compliant with Islamic principles.",
  },
];

const MIN = 1000;
const MAX = 100000;
const RULER_PX = 6000;
const EXTRA_PX = 500;
const TOTAL_PX = EXTRA_PX + RULER_PX + EXTRA_PX;

function drawRuler(canvas: HTMLCanvasElement) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width  = TOTAL_PX * dpr;
  canvas.height = 36 * dpr;
  canvas.style.width  = TOTAL_PX + 'px';
  canvas.style.height = '36px';
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);

  const N    = 700;
  const step = TOTAL_PX / N;
  const cy   = 18;

  for (let i = 0; i <= N; i++) {
    const x     = i * step;
    const major = i % 10 === 0;
    const mid   = i % 5  === 0;
    const h     = major ? 18 : mid ? 11 : 6;
    const inRange = x >= EXTRA_PX && x <= EXTRA_PX + RULER_PX;
    const alpha   = inRange ? 1 : 0.12;

    ctx.beginPath();
    ctx.moveTo(x, cy - h / 2);
    ctx.lineTo(x, cy + h / 2);
    ctx.strokeStyle = major
      ? `rgba(153,153,153,${alpha})`
      : `rgba(204,204,204,${alpha})`;
    ctx.lineWidth = major ? 1.5 : 1;
    ctx.stroke();
  }
}

function valToCanvasX(val: number) {
  return EXTRA_PX + ((val - MIN) / (MAX - MIN)) * RULER_PX;
}

function SalarySlider() {
  const [value, setValue]     = useState(7000);
  const [editing, setEditing] = useState(false);
  const [inputStr, setInputStr] = useState('');
  const [salaryError, setSalaryError] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const txRef       = useRef(0);
  const dragging    = useRef(false);
  const startClientX = useRef(0);
  const startTx      = useRef(0);

  function needleX() {
    return (viewportRef.current?.offsetWidth ?? 0) / 2;
  }

  function clampTx(tx: number) {
    const nx = needleX();
    return Math.min(nx - EXTRA_PX, Math.max(nx - EXTRA_PX - RULER_PX, tx));
  }

  function currentValue(tx: number) {
    const cx  = needleX() - tx;
    const val = MIN + ((cx - EXTRA_PX) / RULER_PX) * (MAX - MIN);
    return Math.min(MAX, Math.max(MIN, val));
  }

  function setTxFromValue(val: number) {
    txRef.current = needleX() - valToCanvasX(val);
  }

  function applyTx(tx: number) {
    txRef.current = clampTx(tx);
    if (canvasRef.current) {
      canvasRef.current.style.transform = `translateX(${txRef.current}px)`;
    }
    setValue(currentValue(txRef.current));
    setSalaryError(false);
  }

  useEffect(() => {
    if (!canvasRef.current || !viewportRef.current) return;
    drawRuler(canvasRef.current);
    setTxFromValue(7000);
    applyTx(txRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!dragging.current) return;
      applyTx(startTx.current + (e.clientX - startClientX.current));
    }
    function onUp() { dragging.current = false; }
    function onTouchMove(e: TouchEvent) {
      if (!dragging.current) return;
      applyTx(startTx.current + (e.touches[0].clientX - startClientX.current));
    }
    function onTouchEnd() { dragging.current = false; }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', onTouchEnd);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleViewportMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    dragging.current   = true;
    startClientX.current = e.clientX;
    startTx.current    = txRef.current;
  }

  function handleViewportTouchStart(e: React.TouchEvent) {
    dragging.current   = true;
    startClientX.current = e.touches[0].clientX;
    startTx.current    = txRef.current;
  }

  function handleDisplayClick() {
    setInputStr(String(Math.round(value)));
    setEditing(true);
  }

  function commitInput() {
    const raw = parseFloat(inputStr.replace(/,/g, ''));
    if (!isNaN(raw)) {
      const digits = Math.floor(Math.abs(raw)).toString().length;
      if (digits < 4 || digits > 6) {
        setSalaryError(true);
        setEditing(false);
        return;
      }
      setSalaryError(false);
      const clamped = Math.min(MAX, Math.max(MIN, raw));
      setTxFromValue(clamped);
      applyTx(txRef.current);
    }
    setEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') commitInput();
    if (e.key === 'Escape') setEditing(false);
  }

  const formatted = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="flex gap-[4px] items-start">
        <p className="text-[#475467] text-[13px]">Your Monthly Salary</p>
        <p className="text-[#d91c1c] text-[13px]">*</p>
      </div>

      {/* Editable display */}
      <div
        className={`border rounded-[8px] px-4 py-3 flex items-center gap-2 cursor-text ${salaryError ? 'border-[#f03838]' : 'border-[#EEF1F6]'}`}
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
            className="text-[#101828] text-[24px] font-bold outline-none min-w-[120px]"
          />
        ) : (
          <span className="text-[#101828] text-[24px] font-bold">{formatted}</span>
        )}
      </div>

      {salaryError && (
        <p className="text-[12px] text-[#d91c1c] text-center">Please enter a numeric value with a minimum of 4 digits and a maximum of 6 digits.</p>
      )}

      {/* Canvas ruler row */}
      <div className="flex items-center gap-3 w-full" style={{ userSelect: 'none', marginTop: '0.65rem' }}>
        <span className="flex items-center gap-1 text-[#101828] text-[16px] font-bold whitespace-nowrap">
          <img src="/SAR.svg" alt="SAR" className="w-4 h-4 object-contain" /> 1 K
        </span>

        {/* Viewport: ruler scrolls inside, needle fixed at center */}
        <div
          ref={viewportRef}
          className="flex-1 relative h-[36px] overflow-hidden cursor-grab"
          onMouseDown={handleViewportMouseDown}
          onTouchStart={handleViewportTouchStart}
        >
          <canvas
            ref={canvasRef}
            style={{ position: 'absolute', top: 0, left: 0, height: '36px', imageRendering: 'pixelated' }}
          />
          {/* Fixed needle at center */}
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[28px] bg-[#2563EB] rounded-[2px] pointer-events-none z-[2]"
            style={{ left: '50%' }}
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
  'Education Fees',
  'Furniture & Durable Goods',
  'Hotel / Rentals',
  'Maintenance work',
  'Marriage',
  'Medical Fees',
  'Purchase Goods or Commodities',
  'Renovation & Home Improvements',
  'Tourism & Travel',
  'Utilities payments',
  'Vehicles & Private Transportation needs',
  'Other',
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
    <div className="flex flex-col items-center gap-2 w-full px-4 lg:px-12" ref={containerRef}>
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
    <div className="flex items-center gap-3 w-full px-4 lg:px-12">
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

function HowItWorksSection() {
  const [current, setCurrent] = useState(0);
  const total = howItWorksSlides.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const slide = howItWorksSlides[current];

  return (
    <div className="bg-white">
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-0 md:mx-auto lg:mx-auto px-5 lg:px-2 py-10 md:py-20">
        <h2 className="text-center font-semibold text-3xl md:text-4xl text-[#101828] mb-5">How it works summary</h2>
        <div className="relative">
          <div className="w-full overflow-x-hidden rounded-xl pt-5 md:pt-10 pb-20">
            <div className="w-full text-[#101828]">
              <div className="grid grid-cols-2 place-content-center gap-4 md:gap-8">
                <img alt={slide.alt} width={400} height={400} className="mx-auto me-0 w-full md:w-[400px] h-[400px] object-contain" src={slide.img} />
                <div className="my-auto mx-0 md:me-20 lg:mx-0">
                  <h3 className="text-2xl font-semibold mb-5">{slide.title}</h3>
                  <p className="text-sm font-medium max-w-sm whitespace-pre-line">{slide.body}</p>
                  {slide.list.length > 0 && (
                    <ul className="list-disc text-sm font-medium max-w-sm whitespace-pre-line ms-6 mt-2">
                      {slide.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2">
            {howItWorksSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`block h-1 cursor-pointer rounded-2xl transition-all bg-[#5CACF3] ${i === current ? 'w-8' : 'w-4 border rounded-full border-[#5CACF3] opacity-[24%]'}`} />
            ))}
          </div>
          <button onClick={prev} className="hidden sm:flex absolute top-1/2 left-4 -translate-y-1/2 transition ease-in-out duration-300 text-[#101828] hover:text-white hover:bg-[#03163B] hover:border-[#03163B] cursor-pointer border p-4 rounded-full items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          </button>
          <button onClick={next} className="hidden sm:flex absolute top-1/2 right-4 -translate-y-1/2 transition ease-in-out duration-300 text-[#101828] hover:text-white hover:bg-[#03163B] hover:border-[#03163B] cursor-pointer border p-4 rounded-full items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturedLoansSection() {
  return (
    <div className="bg-white">
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-0 md:mx-auto lg:mx-auto px-5 lg:px-2 py-10 md:py-20">
        <h2 className="text-center font-semibold text-3xl md:text-4xl text-[#101828] mb-5">Featured loans products</h2>
        <div className="relative">
          <div className="w-full overflow-x-hidden flex rounded-xl pt-5 md:pt-10 pb-20 sm:pb-5 md:grid md:grid-cols-2 xl:grid-cols-4 md:place-content-center md:gap-8">
            {loanProducts.map((p) => (
              <div key={p.alt} className="w-full inline-block flex-none md:w-auto">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 md:max-w-[20rem] overflow-hidden mx-auto w-full shadow-none">
                  <div className="bg-clip-border overflow-hidden bg-transparent text-gray-700 shadow-none m-0 rounded-none relative">
                    <img src={p.img} alt={p.alt} className="w-full px-5" />
                    <div className={`uppercase w-full text-center py-2 text-sm ${p.badgeBg} text-white font-medium tracking-widest rounded mt-1`}>Coming soon</div>
                  </div>
                  <div className="p-6">
                    <h3 className="lg:text-2xl font-semibold mb-3 text-[#292929]">{p.title}</h3>
                    <p className="text-md text-gray-500 font-medium">{p.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:hidden absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2">
            {loanProducts.map((_, i) => (
              <span key={i} className={`block h-1 cursor-pointer rounded-2xl transition-all bg-[#5CACF3] ${i === 0 ? 'w-8' : 'w-4 border rounded-full border-[#5CACF3] opacity-[24%]'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppPage() {
  const [openFaq, setOpenFaq]           = useState(-1);
  const [loanType, setLoanType]         = useState<'personal' | 'realEstate' | 'car' | 'card'>('personal');
  const [propertyType, setPropertyType] = useState<'All' | 'Ready units' | 'Mortgage' | 'Land' | 'Off-plan purchase' | 'Self-build'>('All');
  const [activeLoan, setActiveLoan]     = useState<'YES' | 'NO' | null>(null);
  const [commitment, setCommitment]     = useState('');
  const [loanPurpose, setLoanPurpose]   = useState('');
  const [formStep, setFormStep]         = useState<'form' | 'phone' | 'otp'>('form');
  const [phoneNum, setPhoneNum]         = useState('');
  const [otpDigits, setOtpDigits]       = useState(['', '', '', '']);
  const [countdown, setCountdown]       = useState(24);

  const isComplete = activeLoan !== null && loanPurpose !== '';
  const phoneDigits = phoneNum.startsWith('0') ? phoneNum.length - 1 : phoneNum.length;
  const phoneValid = phoneDigits >= 9;
  const phoneError = phoneNum.length > 0 && !phoneValid;
  const phoneIsValid = phoneNum.length > 0 && phoneValid;

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

  function handleCancel() {
    setFormStep('form');
    setPhoneNum('');
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
    <div className="bg-[#f9f8fd]">
      <WebNavbar lang="en" dark />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#F9F8FD] overflow-hidden">

        {/* Dark shape background */}
        <img src="/bg-shape.svg" alt="" className="absolute top-0 left-0 w-full h-full min-h-[500px] lg:min-h-[250px] pointer-events-none" style={{ objectFit: 'fill', maxHeight: '80%' }} />

        <div className="relative max-w-[1440px] mx-auto">

          {/* Hero body: stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-start">

            {/* Left column: headline + phone visual */}
            <div className="lg:w-[736px] lg:flex-shrink-0 lg:relative lg:min-h-[844px] flex flex-col gap-6 lg:gap-0 px-6 lg:px-0 pt-8 lg:pt-0 pb-8 lg:pb-0">

              {/* Headline — in flow on mobile, absolute on desktop */}
              <div className="flex flex-col gap-[16px] lg:absolute lg:top-[150px] lg:left-[129px] lg:w-[577px]">
                <h1 className="text-white text-[32px] lg:text-[48px] font-bold leading-[1.1]">
                  Get the Best Loan, Instantly.
                </h1>
                <p className="text-[#98A2B3] text-[16px] leading-[1.7]">
                  A fully automated way to compare, apply, and track loans across trusted banks — all in one platform, all in real time.
                </p>
              </div>

              {/* Blue rectangle (behind phone) — desktop only */}
              <div className="hidden lg:block absolute top-[419px] left-[108px] w-[598px] h-[363px] bg-[#0063F5] rounded-[32px]" />

              {/* Phone mockup — desktop only */}
              <div className="hidden lg:block absolute top-[357px] left-[72px] w-[426px] h-[467px]">
                <img src={imgPhoneImg} alt="Tamawal App" className="w-full h-full object-contain" />
              </div>

              {/* SAMA badge — desktop only */}
              <div className="hidden lg:block absolute top-[395px] left-[515px] w-[157px] h-[157px]">
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

              {/* Install app — desktop only */}
              <div className="hidden lg:flex lg:absolute lg:top-[598px] lg:left-[509px] lg:flex-col lg:items-end gap-5">
                <p className="text-[#D1DAE8] text-[16px]">Install our app now!</p>
                <div className="flex flex-col gap-3">
                  <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448F] rounded-[6px] h-[40px] overflow-hidden">
                    <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448F] rounded-[6px] h-[40px] overflow-hidden">
                    <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right column: Loan form */}
            <div className={`flex-1 min-w-0 px-6 lg:px-0 lg:pt-[150px] ${formStep === 'form' ? 'pb-8 lg:pb-[100px]' : 'pb-[320px] lg:pb-[280px]'}`}>
              <div className="w-full lg:w-[601px] z-[200] rounded-[32px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] bg-white">
                {/* Header */}
                <div className="bg-[#F1F7FF] border-b border-[#EAECF0] px-6 py-5 rounded-t-[32px]">
                  <p className="text-[#021945] text-[20px] font-bold text-center">Find the best loan for you</p>
                </div>
                {/* Body */}
                <div className={`px-10 py-10 flex flex-col items-center gap-[48px] transition-opacity ${formStep !== 'form' ? 'bg-white opacity-50 pointer-events-none select-none' : 'bg-white'}`}>
                  {/* Loan Type */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p className="text-[#475467] text-[13px]">Select Loan Type</p>
                    <div className="flex gap-2 items-center justify-center w-full flex-wrap">
                      {([
                        { key: 'personal',   label: 'Personal Loan' },
                        { key: 'realEstate', label: 'Real Estate' },
                        { key: 'car',        label: 'Car Loan' },
                        { key: 'card',       label: 'Card Finance' },
                      ] as const).map(({ key, label }) => {
                        const selected = loanType === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setLoanType(key)}
                            className={`px-5 py-3 rounded-[32px] text-[12px] font-semibold border transition-colors ${
                              selected
                                ? 'bg-[#0063F5] border-[#D7E7FE] text-white'
                                : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Coming Soon — Car or Card */}
                  {(loanType === 'car' || loanType === 'card') ? (
                    <div className="flex flex-col items-center gap-4 pb-10">
                      <img
                        src={loanType === 'car'
                          ? '/types/simple-category-icon-perspective---car.svg'
                          : '/types/simple-category-icon-perspective---card.svg'}
                        alt=""
                        className="w-[260px] h-[260px] object-contain"
                      />
                      <p className="text-[#130f26] text-[30px] font-bold text-center">Coming Soon</p>
                      <p className="text-[#4b5565] text-[16px] text-center leading-[1.72] max-w-[400px]">
                        This product is currently unavailable, we will notify you once it is available at Tamawal.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Property Financing type — Real Estate only */}
                      {loanType === 'realEstate' && (
                        <div className="flex flex-col items-center gap-[10px] w-full overflow-hidden">
                          <p className="text-[#475467] text-[13px]">Property Financing type</p>
                          <div className="flex gap-2 items-center w-full overflow-x-auto pb-1">
                            {(['All', 'Ready units', 'Mortgage', 'Land', 'Off-plan purchase', 'Self-build'] as const).map((type) => {
                              const sel = propertyType === type;
                              return (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() => setPropertyType(type)}
                                  className={`px-3 py-3 rounded-[32px] text-[12px] font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                                    sel
                                      ? 'bg-[#0063F5] border-[#D7E7FE] text-white'
                                      : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'
                                  }`}
                                >
                                  {type}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

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
                    </>
                  )}
                </div>
                {/* Footer */}
                <div className="bg-white px-6 pb-[40px] pt-4 rounded-b-[32px] flex justify-center items-start relative">
                  {formStep === 'form' && loanType !== 'car' && loanType !== 'card' && (
                    <button
                      disabled={!isComplete}
                      onClick={isComplete ? handleContinueToPhone : undefined}
                      className={`rounded-[56px] px-6 py-4 flex items-center justify-center gap-2 w-[240px] transition-colors ${
                        isComplete ? 'bg-[#FFDD33] cursor-pointer' : 'bg-[#E2E9F3] cursor-not-allowed'
                      }`}
                    >
                      <span className={`text-[16px] font-semibold ${isComplete ? 'text-[#171717]' : 'text-[#9AA4B2]'}`}>Continue</span>
                      <ArrowRight color={isComplete ? '#414651' : '#9AA4B2'} />
                    </button>
                  )}

                  {/* Phone panel — state 05/06 */}
                  {(formStep === 'phone' || formStep === 'otp') && (
                    <div className="relative h-[163px] w-full">
                      <div className="absolute -translate-x-1/2 left-1/2 top-0 bg-[#0063F5] rounded-[24px] overflow-clip pb-[48px] pt-[16px] px-[22px] w-full max-w-[517px] flex flex-col gap-[25px] items-center">

                        {/* Inner content */}
                        <div className="flex flex-col gap-[18px] items-center w-full rounded-[12px]">

                          {formStep === 'phone' && (() => {
                            const hasLeadingZero = phoneNum.startsWith('0');
                            const inputValue = hasLeadingZero ? phoneNum.slice(1) : phoneNum;
                            return (
                              <>
                                <div className="flex flex-col gap-2 items-center w-full">
                                  <p className="text-white text-[13px]">Mobile Number</p>
                                  <div className={`flex flex-col gap-1 w-full rounded-[8px] pb-1 ${phoneError ? 'bg-[#FECDCA] border border-[#FECDCA]' : phoneIsValid ? 'bg-[#DCFAE6] border border-[#DCFAE6]' : ''}`}>
                                    <div className="bg-[#0041a3] border border-[#00317a] rounded-[8px] pl-3 pr-4 py-3 flex items-center w-full gap-[2px]">
                                      <span className="text-white text-[24px] font-bold mr-1 shrink-0">+966</span>
                                      {hasLeadingZero && (
                                        <span className="text-[#77a6ed] text-[24px] font-bold">0</span>
                                      )}
                                      <input
                                        autoFocus
                                        type="tel"
                                        inputMode="numeric"
                                        placeholder={!phoneNum ? "Enter your mobile number" : ""}
                                        value={inputValue}
                                        onChange={e => {
                                          const raw = e.target.value.replace(/[^0-9 ]/g, '');
                                          setPhoneNum(hasLeadingZero ? '0' + raw : raw);
                                        }}
                                        onKeyDown={e => {
                                          if (e.key === 'Backspace' && hasLeadingZero && phoneNum === '0') {
                                            setPhoneNum('');
                                          }
                                        }}
                                        className="bg-transparent outline-none text-[24px] font-bold text-white placeholder:text-[#77a6ed] placeholder:font-normal flex-1 min-w-0"
                                      />
                                    </div>
                                    {phoneError && (
                                      <div className="px-3">
                                        <p className="text-[#D92D20] text-[16px]">Invalid mobile number</p>
                                      </div>
                                    )}
                                    {phoneIsValid && (
                                      <div className="px-3">
                                        <p className="text-[#079455] text-[16px]">Mobile number valid</p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <p className="text-[#92baf6] text-[12px] text-center leading-[1.5]">
                                  Please enter your mobile number so we can send you a verification code!
                                </p>
                              </>
                            );
                          })()}

                          {formStep === 'otp' && (
                            <>
                              <div className="flex flex-col gap-2 items-center w-full">
                                <p className="text-white text-[13px]">Mobile Number</p>
                                <div className="flex items-center gap-2 justify-center">
                                  <img src={imgPhoneIconBlue} alt="" className="w-5 h-5 flex-shrink-0" />
                                  <span className="text-white text-[24px] font-bold">+966 {phoneNum.startsWith('0') ? phoneNum.slice(1) : phoneNum}</span>
                                  <div className="bg-white rounded-full p-[2px] flex-shrink-0">
                                    <img src={imgCheckGreen} alt="" className="w-3 h-3 block" />
                                  </div>
                                </div>
                              </div>
                              <p className="text-[#92baf6] text-[12px] text-center leading-[1.5] w-full">
                                Please enter verification code from inbox in your mobile number!
                              </p>
                              <OtpInput digits={otpDigits} onChange={setOtpDigits} />
                              <p className="text-[12px] text-center tracking-[0.4px]">
                                <span className="text-[#92baf6]">Resend Code? </span>
                                <span className="text-[#FFDD33]">{countdownStr}</span>
                              </p>
                            </>
                          )}
                        </div>

                        {/* Action buttons */}
                        {formStep === 'phone' && (
                          <div className="flex flex-wrap gap-3 lg:gap-[16px] items-center justify-center">
                            <button
                              onClick={handleCancel}
                              className="border border-[#77a6ed] rounded-[56px] px-[32px] lg:px-[48px] py-[16px] flex items-center justify-center"
                            >
                              <span className="text-[#92baf6] text-[16px] font-semibold">Cancel</span>
                            </button>
                            <button
                              onClick={(phoneNum.startsWith('0') ? phoneNum.length - 1 : phoneNum.length) >= 9 ? handleContinueToOtp : undefined}
                              className={`rounded-[56px] px-[32px] lg:px-[48px] py-[16px] flex items-center gap-[10px] transition-colors ${
                                (phoneNum.startsWith('0') ? phoneNum.length - 1 : phoneNum.length) >= 9 ? 'bg-[#FFDD33] cursor-pointer' : 'bg-[#92baf6] cursor-not-allowed'
                              }`}
                            >
                              <span className="text-[#171717] text-[16px] font-semibold">Continue</span>
                              <ArrowRight />
                            </button>
                          </div>
                        )}

                        {formStep === 'otp' && (
                          <a href="/results" className="bg-[#FFDD33] rounded-[56px] px-[64px] py-[16px] flex items-center gap-[10px]">
                            <span className="text-[#171717] text-[16px] font-semibold">Tamawal</span>
                            <ArrowRight />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── Install app — mobile only ────────────────────────────────────── */}
      <section className="lg:hidden bg-[#f9f8fd] flex flex-col gap-[16px] items-center px-[24px] py-[40px]">
        <p className="text-[16px] text-[#121a26] text-center">Install our app now!</p>
        <div className="flex gap-[12px]">
          <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] overflow-hidden">
            <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] overflow-hidden">
            <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
          </a>
        </div>
      </section>

      {/* ── Partners ─────────────────────────────────────────────────────── */}
      <section className="bg-[#f9f8fd] py-[60px] lg:py-[94px] flex flex-col items-center gap-8 overflow-hidden">
        <h2 className="text-[#101828] text-[32px] font-bold tracking-[0.15px]">Our Partners</h2>
        <div className="w-full overflow-hidden">
          {/* Duplicate logos so the loop is seamless (translateX -50% = one full set) */}
          <div
            className="flex items-center w-max"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center gap-[64px] pr-[64px]">
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

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <HowItWorksSection />

      {/* ── Featured loans ───────────────────────────────────────────────── */}
      <FeaturedLoansSection />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-[94px] px-6 md:px-[75px] flex items-center justify-center">
        <div className="w-full max-w-[1290px] flex flex-col items-center gap-8 md:gap-[40px]">
          <h2 className="text-[#141414] text-[32px] font-bold">F.A.Q</h2>

          <div className="w-full md:w-[1070px]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#E0E0E0]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center gap-4 md:gap-[30px] py-5 md:py-8 text-left"
                >
                  <span className="flex-1 text-[#130F26] text-lg md:text-[30px] font-bold leading-normal">{faq.q}</span>
                  <img
                    src={openFaq === i ? imgArrowUpCircle : imgArrowDownCircle}
                    alt=""
                    className="w-6 h-6 flex-shrink-0"
                  />
                </button>
                {openFaq === i && faq.a && (
                  <div className="pb-5 md:pb-8">
                    <p className="text-[#525252] text-[16px] leading-[1.72]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button className="bg-[#FED644] border border-[#EAECF0] rounded-[50px] px-8 py-6 flex items-center gap-3">
              <span className="text-[#141414] text-[16px]">View more</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#202a39]">
        <div className="max-w-[1440px] mx-auto px-[24px] lg:px-[75px] pt-[60px] lg:pt-[90px] flex flex-col gap-[48px]">
          <div className="flex flex-col lg:flex-row lg:items-start w-full gap-[40px] lg:gap-[64px]">

            {/* Left: logo + SAMA badge + desc */}
            <div className="flex flex-col items-start gap-[40px] lg:gap-0 lg:justify-between lg:self-stretch lg:flex-1">
              <div className="flex items-center">
                <img src={imgLogo} alt="Tamawal" className="h-[32px] w-auto" />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="relative size-[100px]">
                  <img src={imgHeroBadge} alt="" className="absolute inset-0 size-full" style={{ animation: 'badge-spin 18s linear infinite' }} />
                  <img src={imgBadgeCenter} alt="Licensed by SAMA" className="absolute inset-0 size-full" />
                </div>
                <p className="text-[rgba(255,255,255,0.86)] text-[18px] font-semibold leading-[1.5] max-w-[254px]">
                  Tamawal® is supervised and regulated by the Saudi Central Bank under license No. 98/N M/202504
                </p>
              </div>
            </div>

            {/* Right: link columns */}
            <div className="flex flex-col gap-[32px] shrink-0">
              {/* Top row */}
              <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[30px]">
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">About us</p>
                  <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
                    <span>Who we are</span>
                    <span>Our products</span>
                    <span>Our values</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Legal</p>
                  <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
                    <span>Terms and Conditions</span>
                    <span>Data Protection<br />and Privacy</span>
                    <span>Customer Protection<br />Principles</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Take actions</p>
                  <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
                    <span>Be a partner</span>
                    <span>Be a customer</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Customer Care</p>
                  <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
                    <span>Suggestion</span>
                    <span>Complaint</span>
                    <span>Report a Violation</span>
                    <span>Report Financial Fraud</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Bottom row */}
              <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[30px]">
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Contact us</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <img src={imgEmailIcon} alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">info@tamawal.sa</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <img src={imgPhoneIcon} alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">011 512 3870</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <img src={imgPhoneIcon} alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">800 100 0276</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Address</p>
                  <div className="flex gap-[8px] items-start">
                    <img src={imgLocationIcon} alt="" className="w-[13px] mt-[2px] flex-shrink-0" />
                    <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px] leading-[1.45]">Al Olaya (403) street, Riyadh, Saudi Arabia</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-white text-[16px] font-semibold">Working hours</p>
                    <p className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px]">09:00 – 17:00</p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-white text-[16px] font-semibold">Working days</p>
                    <p className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px]">Sunday - Thursday</p>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[8px]">
                  <p className="text-white text-[16px] font-semibold leading-[1.72]">Social media</p>
                  <div className="flex gap-[8px] items-center">
                    <img src={imgLinkedIn} alt="LinkedIn" className="w-[45px] h-[45px]" />
                    <img src={imgTwitterX} alt="X" className="w-[45px] h-[45px]" />
                  </div>
                  <button className="flex items-center gap-[2px] py-[12px]">
                    <span className="text-[rgba(255,255,255,0.86)] text-[16px] font-semibold leading-[1.72]">FAQs</span>
                    <img src={imgArrowNext} alt="" className="w-[24px] h-[24px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-[24px] pb-[24px]">
            <div className="border-t border-white/10" />
            {/* Mobile: stacked centered */}
            <div className="flex flex-col gap-[12px] items-center lg:hidden">
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] text-center leading-[1.7]">Download our App!</p>
              <div className="flex gap-[12px]">
                <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                  <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                  <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
                </a>
              </div>
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] text-center leading-[1.7]">© All right reserved to Tamawal 2026</p>
            </div>
            {/* Desktop: copyright left, download right */}
            <div className="hidden lg:flex items-center justify-between w-full">
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] leading-[1.7]">© All right reserved to Tamawal 2026</p>
              <div className="flex items-center gap-[16px]">
                <p className="text-[rgba(255,255,255,0.64)] text-[16px] leading-[1.7]">Download our App!</p>
                <div className="flex gap-[12px]">
                  <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                    <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                    <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
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
