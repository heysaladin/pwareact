type StepState = 'Done' | 'Current' | 'Pending';

type Step = {
  title: string;
  state: StepState;
  number?: string;
};

function TaasStep({ title, state, number = '1', lang = 'EN' }: Step & { lang?: 'EN' | 'AR' }) {
  const isDone = state === 'Done';
  const isCurrent = state === 'Current';

  const stateLabel = isDone
    ? (lang === 'AR' ? 'مكتمل' : 'Completed')
    : isCurrent
      ? (lang === 'AR' ? 'قيد التنفيذ' : 'In progress')
      : (lang === 'AR' ? 'قيد الانتظار' : 'Pending');

  return (
    <div className="flex gap-[10px] items-center shrink-0">
      <div
        className={`flex items-center justify-center rounded-[14px] shrink-0 size-[28px] ${
          isDone ? 'bg-[#12b76a]' : isCurrent ? 'bg-[#003e52]' : 'bg-white border border-[rgba(48,63,70,0.2)]'
        }`}
      >
        {isDone ? (
          <img alt="" className="size-[16px]" src="/taas/check.svg" />
        ) : (
          <p
            className={`text-[12px] leading-[16px] text-center ${isCurrent ? 'text-white' : 'text-[#1d2d33]'}`}
            style={{ fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' }}
          >
            {number}
          </p>
        )}
      </div>
      <div className="flex flex-col items-start" style={{ fontFamily: "'Saira', sans-serif", fontSize: '12px', lineHeight: '16px' }}>
        <p className="text-[#1d2d33]" style={{ fontVariationSettings: '"wdth" 100' }}>{title}</p>
        <p
          className={isDone ? 'text-[#12b76a]' : isCurrent ? 'text-[#003e52]' : 'text-[rgba(48,63,70,0.7)]'}
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {stateLabel}
        </p>
      </div>
    </div>
  );
}

function Connector() {
  return <div className="bg-[#f4f5f3] flex-[1_0_0] h-[2px] min-w-0 rounded-[1px]" />;
}

export default function TaasStepper({ steps, lang = 'EN' }: { steps: Step[]; lang?: 'EN' | 'AR' }) {
  return (
    <div className="flex gap-[10px] items-center w-full shrink-0">
      {steps.flatMap((step, i) => [
        <TaasStep key={i} {...step} number={String(i + 1)} lang={lang} />,
        ...(i < steps.length - 1 ? [<Connector key={`c-${i}`} />] : []),
      ])}
    </div>
  );
}
