import Link from 'next/link';

interface CeerBreadcrumbProps {
  activeStep: 1 | 2 | 3 | 4 | 5;
  hideStep5?: boolean;
}

const steps = [
  {
    num: '01',
    label: 'Browse Vehicles',
    href: '/ceer/review-finance',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 17H3a2 2 0 0 1-2-2V9l3-5h12l3 5v6a2 2 0 0 1-2 2h-2"/>
        <circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/>
      </svg>
    ),
  },
  {
    num: '02',
    label: 'Vehicle Details',
    href: '/ceer/review-finance',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/>
      </svg>
    ),
  },
  {
    num: '03',
    label: 'Configure',
    href: '/ceer/step-3',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    num: '04',
    label: 'Review & Finance',
    href: '/ceer/review-finance',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/>
      </svg>
    ),
  },
  {
    num: '05',
    label: 'Finance Start & Eligibility',
    href: '/ceer/step-1',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
];

export default function CeerBreadcrumb({ activeStep, hideStep5 }: CeerBreadcrumbProps) {
  const visibleSteps = hideStep5 ? steps.slice(0, 4) : steps;
  return (
    <div className="border-b border-white/[0.07] px-8 flex items-stretch h-[42px] bg-[#0C0C0C]">
      {visibleSteps.map((step, i) => {
        const stepNum = (i + 1) as 1 | 2 | 3 | 4 | 5;
        const isActive = stepNum === activeStep;
        const isPast = stepNum < activeStep;

        return (
          <div key={step.num} className="flex items-stretch">
            {i > 0 && (
              <div className="flex items-center px-2.5">
                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="text-white/20">
                  <path d="M1 1l3 3.5L1 8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            <Link
              href={step.href}
              className={`flex items-center gap-1.5 text-[11px] font-medium relative px-0.5 ${
                isActive ? 'text-[#E87722]' : isPast ? 'text-white/40 hover:text-white/60' : 'text-white/30 hover:text-white/50'
              } transition-colors`}
            >
              <span className={`flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0 ${
                isActive ? 'bg-[#E87722] text-white' : isPast ? 'bg-white/[0.07] text-white/40' : 'text-white/25'
              }`}>
                {step.icon}
              </span>
              <span className="text-[10px] opacity-60">{step.num}</span>
              <span>{step.label}</span>
              {isActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E87722] rounded-full" />}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
