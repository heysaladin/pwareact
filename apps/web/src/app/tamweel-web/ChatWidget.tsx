'use client';

import { useState, useEffect, useRef } from 'react';

type Lang = 'en' | 'ar';

interface ChatWidgetProps {
  lang: Lang;
  onComplete: (data: { loanType: number; salary: number; activeLoans: boolean; purpose: number }) => void;
}

type Message = {
  id: number;
  role: 'ai' | 'user';
  text: string;
  chips?: { label: string; value: string | number }[];
  inputType?: 'salary' | 'none';
};

const copy = {
  en: {
    loanTypes: ['Personal Loan', 'Real Estate', 'Car Loan', 'Card Finance'],
    purposes: ['Renovation & Home', 'Travel & Vacation', 'Education', 'Medical Expenses', 'Debt Consolidation', 'Wedding', 'Electronics'],
    steps: [
      { ai: "Hi! 👋 I'm here to help find the best loan for you.\n\nWhat type of financing are you looking for?", chips: (lt: string[]) => lt.map((l, i) => ({ label: l, value: i })) },
      { ai: (lt: string) => `Great choice — **${lt}**! 💪\n\nWhat's your monthly salary?`, inputType: 'salary' as const },
      { ai: 'Got it. Do you currently have any active loans?', chips: () => [{ label: 'YES', value: 'yes' }, { label: 'NO', value: 'no' }] },
      { ai: 'Almost there! What\'s the main purpose of your loan?', chips: (p: string[]) => p.map((v, i) => ({ label: v, value: i })) },
      { ai: (p: string) => `Perfect — **${p}**! ✨\n\nI've got everything I need. Ready to see your best offers?` },
    ],
    salaryPlaceholder: 'Enter your monthly salary (SAR)',
    salaryConfirm: 'Confirm',
    continueCta: 'See My Offers',
    typing: 'Tamawal is thinking...',
  },
  ar: {
    loanTypes: ['قرض شخصي', 'عقار', 'قرض سيارة', 'بطاقة ائتمان'],
    purposes: ['تجديد المنزل', 'السفر', 'التعليم', 'النفقات الطبية', 'توحيد الديون', 'الزفاف', 'الإلكترونيات'],
    steps: [
      { ai: 'مرحباً! 👋 أنا هنا لمساعدتك في إيجاد أفضل قرض.\n\nما نوع التمويل الذي تبحث عنه؟', chips: (lt: string[]) => lt.map((l, i) => ({ label: l, value: i })) },
      { ai: (lt: string) => `رائع — **${lt}**! 💪\n\nما هو راتبك الشهري؟`, inputType: 'salary' as const },
      { ai: 'هل لديك قروض نشطة حالياً؟', chips: () => [{ label: 'نعم', value: 'yes' }, { label: 'لا', value: 'no' }] },
      { ai: 'تقريباً انتهينا! ما هو الغرض الرئيسي من قرضك؟', chips: (p: string[]) => p.map((v, i) => ({ label: v, value: i })) },
      { ai: (p: string) => `ممتاز — **${p}**! ✨\n\nلدي كل المعلومات التي أحتاجها. جاهز لرؤية أفضل العروض؟` },
    ],
    salaryPlaceholder: 'أدخل راتبك الشهري (ريال)',
    salaryConfirm: 'تأكيد',
    continueCta: 'عرض عروضي',
    typing: 'تامول يفكر...',
  },
};

function formatBold(text: string) {
  return text.split('\n').map((line, li) => (
    <span key={li}>
      {line.split(/\*\*(.+?)\*\*/g).map((seg, si) =>
        si % 2 === 1 ? <strong key={si}>{seg}</strong> : seg
      )}
      {li < text.split('\n').length - 1 && <br />}
    </span>
  ));
}

export default function ChatWidget({ lang, onComplete }: ChatWidgetProps) {
  const c = copy[lang];
  const isRtl = lang === 'ar';
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [salaryInput, setSalaryInput] = useState('');
  const [collected, setCollected] = useState<{ loanType?: number; salary?: number; activeLoans?: boolean; purpose?: number }>({});
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);
  const bootedRef = useRef(false);

  const nextId = () => ++idRef.current;

  const addMessage = (msg: Omit<Message, 'id'>) => {
    setMessages(prev => [...prev, { ...msg, id: nextId() }]);
  };

  const showAI = (text: string, extra?: Partial<Message>, delay = 600) => {
    setTyping(true);
    return new Promise<void>(res => setTimeout(() => {
      setTyping(false);
      addMessage({ role: 'ai', text, ...extra });
      res();
    }, delay));
  };

  // Boot
  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;
    const s = c.steps[0];
    showAI(s.ai as string, { chips: s.chips!(c.loanTypes) }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const handleChip = async (value: string | number, label: string) => {
    // Remove chips from last AI message
    setMessages(prev => prev.map((m, i) => i === prev.length - 1 ? { ...m, chips: undefined } : m));
    addMessage({ role: 'user', text: label });

    if (step === 0) {
      const lt = value as number;
      setCollected(p => ({ ...p, loanType: lt }));
      const s = c.steps[1];
      await showAI(typeof s.ai === 'function' ? s.ai(c.loanTypes[lt]) : s.ai, { inputType: 'salary' });
      setStep(1);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else if (step === 2) {
      const al = value === 'yes';
      setCollected(p => ({ ...p, activeLoans: al }));
      await showAI(c.steps[3].ai as string, { chips: c.steps[3].chips!(c.purposes) });
      setStep(3);
    } else if (step === 3) {
      const pu = value as number;
      setCollected(p => ({ ...p, purpose: pu }));
      const s = c.steps[4];
      await showAI(typeof s.ai === 'function' ? s.ai(c.purposes[pu]) : s.ai);
      setStep(4);
    }
  };

  const handleSalary = async () => {
    const raw = salaryInput.replace(/[^0-9.]/g, '');
    const num = parseFloat(raw);
    if (!num || num < 1000) return;
    setMessages(prev => prev.map((m, i) => i === prev.length - 1 ? { ...m, inputType: undefined } : m));
    addMessage({ role: 'user', text: `SAR ${num.toLocaleString('en-US', { minimumFractionDigits: 2 })}` });
    setSalaryInput('');
    setCollected(p => ({ ...p, salary: num }));
    await showAI(c.steps[2].ai as string, { chips: c.steps[2].chips!() });
    setStep(2);
  };

  const handleContinue = () => {
    onComplete({
      loanType: collected.loanType ?? 0,
      salary: collected.salary ?? 7000,
      activeLoans: collected.activeLoans ?? false,
      purpose: collected.purpose ?? 0,
    });
  };

  return (
    <div className="flex flex-col h-full" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Messages */}
      <div ref={messagesRef} className="flex-1 overflow-y-auto px-5 pt-6 pb-4 flex flex-col gap-4" style={{ maxHeight: 420, minHeight: 300 }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            {msg.role === 'ai' && (
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-[#0063f5] flex items-center justify-center shrink-0">
                  <span className="text-white text-[13px] font-bold leading-none">T</span>
                </div>
                <div
                  className="max-w-[280px] px-4 py-3 rounded-[18px] rounded-bl-[4px] text-[14px] leading-[1.55] text-[#021945]"
                  style={{ background: '#F0F6FF', border: '1px solid #DCE9FF' }}
                >
                  {formatBold(msg.text)}
                </div>
              </div>
            )}
            {msg.role === 'user' && (
              <div
                className="max-w-[240px] px-4 py-3 rounded-[18px] rounded-br-[4px] text-[14px] leading-[1.55] text-white font-medium"
                style={{ background: '#0063f5' }}
              >
                {msg.text}
              </div>
            )}

            {/* Chips */}
            {msg.chips && msg.chips.length > 0 && (
              <div className={`flex flex-wrap gap-2 ${isRtl ? 'justify-end' : 'justify-start'} pl-9`}>
                {msg.chips.map(chip => (
                  <button
                    key={chip.value}
                    onClick={() => handleChip(chip.value, chip.label)}
                    className="px-4 py-2 rounded-full text-[13px] font-semibold border border-[#D7E7FE] bg-white text-[#0063f5] hover:bg-[#0063f5] hover:text-white transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}

            {/* Salary input */}
            {msg.inputType === 'salary' && (
              <div className="pl-9 w-full">
                <div className="flex gap-2 items-center border border-[#D7E7FE] rounded-[12px] px-3 py-2 bg-white focus-within:border-[#0063f5] transition-colors">
                  <img src="/SAR.svg" alt="SAR" className="w-5 h-5 object-contain flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="number"
                    min={1000}
                    max={100000}
                    value={salaryInput}
                    onChange={e => setSalaryInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSalary()}
                    placeholder={c.salaryPlaceholder}
                    className="flex-1 text-[14px] font-semibold text-[#021945] outline-none bg-transparent placeholder:text-[#9AA4B2] placeholder:font-normal"
                  />
                  <button
                    onClick={handleSalary}
                    className="px-3 py-1 bg-[#0063f5] text-white text-[12px] font-bold rounded-full"
                  >
                    {c.salaryConfirm}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-full bg-[#0063f5] flex items-center justify-center shrink-0">
              <span className="text-white text-[13px] font-bold leading-none">T</span>
            </div>
            <div className="px-4 py-3 rounded-[18px] rounded-bl-[4px]" style={{ background: '#F0F6FF', border: '1px solid #DCE9FF' }}>
              <div className="flex gap-1 items-center h-4">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="w-[6px] h-[6px] rounded-full bg-[#0063f5] opacity-60"
                    style={{ animation: `typing-dot 1.2s ${i * 0.2}s infinite` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Continue CTA */}
      {step === 4 && (
        <div className="px-6 pb-[40px] pt-4 flex justify-center border-t border-[#F2F4F7]">
          <button
            onClick={handleContinue}
            className="rounded-[56px] px-6 py-4 flex items-center justify-center gap-2 w-[240px] bg-[#0063F5] cursor-pointer transition-colors hover:bg-[#0052cc]"
          >
            <span className="text-[16px] font-semibold text-white">{c.continueCta}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={isRtl ? 'rotate-180' : ''}>
              <path d="M4.166 10h11.667M10 15.833L15.833 10 10 4.167" stroke="white" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
