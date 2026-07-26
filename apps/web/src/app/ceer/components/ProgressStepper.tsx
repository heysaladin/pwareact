interface Step {
  num: string;
  label: string;
  subLabel?: string;
  status: 'completed' | 'active' | 'pending';
}

interface ProgressStepperProps {
  steps: Step[];
}

export default function ProgressStepper({ steps }: ProgressStepperProps) {
  return (
    <div className="flex items-center gap-0">
      {steps.map((step, i) => (
        <div key={step.num} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                step.status === 'completed'
                  ? 'bg-[#22C55E]'
                  : step.status === 'active'
                  ? 'border-2 border-[#E87722] bg-transparent'
                  : 'bg-white/10'
              }`}
            >
              {step.status === 'completed' ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <span className={`text-[10px] font-semibold ${step.status === 'active' ? 'text-[#E87722]' : 'text-white/30'}`}>
                  {step.num}
                </span>
              )}
            </div>
            <div className="text-center">
              <p className={`text-xs font-medium whitespace-nowrap ${step.status === 'pending' ? 'text-white/30' : 'text-white'}`}>
                {step.label}
              </p>
              {step.subLabel && (
                <p className="text-[10px] text-white/40 whitespace-nowrap">{step.subLabel}</p>
              )}
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className={`h-px w-16 mx-2 mb-5 ${step.status === 'completed' ? 'bg-[#22C55E]' : 'bg-white/15'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
