export interface StepperArProps {
  currentStep: 1 | 2 | 3 | 4 | 5 | 6
}

const STEPS = [
  'اكتشف العروض',
  'تحقق من الهوية',
  'الموافقات',
  'التحقق من البيانات',
  'العروض المؤهلة',
  'تقديم الطلب',
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l3.5 3.5 6.5-7" />
    </svg>
  )
}

export default function StepperAr({ currentStep }: StepperArProps) {
  return (
    <div className="flex items-center gap-[10px] w-full">
      {STEPS.map((label, index) => {
        const stepNumber = index + 1
        const state =
          stepNumber < currentStep
            ? 'done'
            : stepNumber === currentStep
            ? 'current'
            : 'pending'

        return (
          <div key={stepNumber} className="flex items-center gap-[10px]">
            {/* Step item */}
            <div className="flex flex-col items-center gap-[6px] shrink-0">
              {/* Indicator */}
              <div
                className={[
                  'w-7 h-7 rounded-[14px] flex items-center justify-center',
                  state === 'done'
                    ? 'bg-[#12b76a]'
                    : state === 'current'
                    ? 'bg-[#0063f5]'
                    : 'bg-white border border-[#d0d5dd]',
                ].join(' ')}
              >
                {state === 'done' ? (
                  <CheckIcon />
                ) : (
                  <span
                    className={[
                      'text-[12px] font-semibold leading-none',
                      state === 'current' ? 'text-white' : 'text-[#475467]',
                    ].join(' ')}
                  >
                    {stepNumber}
                  </span>
                )}
              </div>

              {/* Label */}
              <div className="flex flex-col items-center gap-[2px]">
                <span
                  className={[
                    'text-[12px] font-semibold whitespace-nowrap',
                    state === 'pending' ? 'text-[#475467]' : 'text-[#101828]',
                  ].join(' ')}
                >
                  {label}
                </span>
                <span
                  className={[
                    'text-[11px] whitespace-nowrap',
                    state === 'done'
                      ? 'text-[#12b76a]'
                      : state === 'current'
                      ? 'text-[#0063f5]'
                      : 'text-[#98a2b3]',
                  ].join(' ')}
                >
                  {state === 'done'
                    ? 'مكتمل'
                    : state === 'current'
                    ? 'جارٍ'
                    : 'قيد الانتظار'}
                </span>
              </div>
            </div>

            {/* Connector (after each step except last) */}
            {index < STEPS.length - 1 && (
              <div
                className={[
                  'flex-1 h-[2px] min-w-[4px] rounded-[1px] mb-[22px]',
                  stepNumber < currentStep ? 'bg-[#12b76a]' : 'bg-[#e4e7ec]',
                ].join(' ')}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
