interface Step {
  label: string;
  sub?: string;
  status: 'active' | 'done' | 'pending';
}

export default function StepperBar({ steps }: { steps: Step[] }) {
  return (
    <div className="mb-7 p-5 border border-solid border-[#E5E7EB] rounded-xl bg-white">
      <div className="flex items-start">
        {steps.map((step, i) => {
          const prevDone = i > 0 && steps[i - 1].status === 'done';
          const nextDone = step.status === 'done';
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              {/* Circle row with connecting half-lines */}
              <div className="flex items-center w-full">
                {/* Left half-line (skip for first step) */}
                {i > 0 ? (
                  <div className="flex-1 h-[2px]" style={{ background: prevDone ? '#1B3A24' : '#E5E7EB' }} />
                ) : (
                  <div className="flex-1" />
                )}

                {/* Circle */}
                <div
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                  style={{
                    background: step.status === 'pending' ? 'white' : '#1B3A24',
                    borderColor: step.status === 'pending' ? '#D1D5DB' : '#1B3A24',
                    color: step.status === 'pending' ? '#9CA3AF' : 'white',
                  }}
                >
                  {step.status === 'done' ? (
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>

                {/* Right half-line (skip for last step) */}
                {i < steps.length - 1 ? (
                  <div className="flex-1 h-[2px]" style={{ background: nextDone ? '#1B3A24' : '#E5E7EB' }} />
                ) : (
                  <div className="flex-1" />
                )}
              </div>

              {/* Label */}
              <span
                className="text-[10px] font-semibold mt-1 text-center"
                style={{ color: step.status === 'pending' ? '#9CA3AF' : '#1B3A24', width: '100%' }}
              >
                {step.label}
              </span>
              <span
                className="text-[9px] text-center"
                style={{ color: step.status === 'pending' ? '#9CA3AF' : '#1B3A24', width: '100%' }}
              >
                {step.status === 'done' ? 'مكتمل' : step.status === 'active' ? 'قيد التنفيذ' : 'بانتظار التنفيذ'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
