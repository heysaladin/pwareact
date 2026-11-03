import TaasSidebar from './TaasSidebar';
import TaasTopBar from './TaasTopBar';
import TaasStepper from './TaasStepper';

type StepState = 'Done' | 'Current' | 'Pending';

const ALL_STEPS = [
  'Discover offers',
  'Verify identity',
  'Consents',
  'Data validation',
  'Eligible offers',
  'Submit order',
];

type Props = {
  currentStep: number; // 1-based
  lang?: 'EN' | 'AR';
  footer: React.ReactNode;
  children: React.ReactNode;
};

export default function TaasPageLayout({ currentStep, lang = 'EN', footer, children }: Props) {
  const steps = ALL_STEPS.map((title, i) => ({
    title,
    state: (i + 1 < currentStep ? 'Done' : i + 1 === currentStep ? 'Current' : 'Pending') as StepState,
    number: String(i + 1),
  }));

  return (
    <div className="flex gap-[16px] items-stretch p-[16px] min-h-screen" style={{ backgroundColor: '#cfcfcf' }}>
      <TaasSidebar />
      <div
        className="border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] flex-col items-start overflow-hidden rounded-[16px]"
        style={{ backgroundColor: '#d7dad4' }}
      >
        {/* Header */}
        <div
          className="border-b border-[rgba(48,63,70,0.2)] flex flex-col gap-[20px] items-start px-[32px] py-[20px] w-full shrink-0"
        >
          <TaasTopBar lang={lang} />
          <TaasStepper steps={steps} />
        </div>

        {/* Body */}
        <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start pb-[24px] pt-[28px] px-[32px] w-full">
          {children}
        </div>

        {/* Footer */}
        <div className="border-t border-[rgba(48,63,70,0.2)] flex items-center justify-between px-[32px] py-[16px] w-full shrink-0 mt-auto">
          {footer}
        </div>
      </div>
    </div>
  );
}
