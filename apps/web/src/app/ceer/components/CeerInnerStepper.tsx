import Link from 'next/link';

interface CeerInnerStepperProps {
  activeStep: 1 | 2 | 3 | 4;
}

const steps = [
  { num: '01', label: 'Account', href: '/ceer/step-1' },
  { num: '02', label: 'Verify Identity', href: '/ceer/step-2' },
  { num: '03', label: 'Consents & Validation', href: '/ceer/step-3' },
  { num: '04', label: 'Compare Offers', href: '/ceer/step-4' },
];

export default function CeerInnerStepper({ activeStep }: CeerInnerStepperProps) {
  return (
    <div className="flex items-start mb-8">
      {steps.map((step, i, arr) => {
        const stepNum = i + 1;
        const status: 'active' | 'completed' | 'pending' =
          stepNum === activeStep ? 'active' :
          stepNum < activeStep ? 'completed' : 'pending';

        return (
          <div key={step.num} className={`flex flex-col items-start ${i < arr.length - 1 ? 'flex-1' : ''}`}>
            <div className="flex items-center w-full">
              <Link href={step.href} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-opacity hover:opacity-80 ${
                status === 'active' ? 'border-2 border-[#E87722] text-[#E87722]' :
                status === 'completed' ? 'bg-[#22C55E] text-white' :
                'border border-white/15 text-white/30'
              }`}>
                {status === 'completed' ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                ) : step.num}
              </Link>
              {i < arr.length - 1 && (
                <div className={`flex-1 h-px mx-4 ${status === 'completed' ? 'bg-[#22C55E]/40' : 'bg-white/10'}`} />
              )}
            </div>
            <Link href={step.href} className={`text-xs mt-2 whitespace-nowrap hover:opacity-80 transition-opacity ${
              status === 'active' ? 'text-white' :
              status === 'completed' ? 'text-[#22C55E]' :
              'text-white/40'
            }`}>
              {step.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
