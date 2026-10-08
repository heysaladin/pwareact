const STEPS = [
  { label: 'Customer Details' },
  { label: 'View Offers' },
  { label: 'Identity Verification' },
  { label: 'Consents & Disclosures' },
  { label: 'Offer Details' },
  { label: 'Select & Submit' },
];

interface LucidStepperProps {
  activeStep: number; // 1-based
}

export default function LucidStepper({ activeStep }: LucidStepperProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: 28,
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '16px 20px',
    }}>
      {STEPS.map((step, i) => {
        const num = i + 1;
        const done = num < activeStep;
        const current = num === activeStep;
        return (
          <div key={num} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}>
              {/* Circle */}
              <div style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: done || current ? 'var(--blue)' : 'transparent',
                border: done || current ? 'none' : '1.5px solid var(--border)',
                color: done || current ? '#fff' : 'var(--muted)',
                fontSize: 11,
                fontWeight: 700,
                flexShrink: 0,
              }}>
                {done ? (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : num}
              </div>
              {/* Labels */}
              <div>
                <div style={{ fontSize: 11, fontWeight: current ? 700 : 500, color: current ? 'var(--text)' : done ? 'var(--text)' : 'var(--muted)', lineHeight: 1.3 }}>
                  {step.label}
                </div>
                <div style={{ fontSize: 10, color: done ? 'var(--blue)' : current ? 'var(--text)' : 'var(--muted)', fontWeight: current ? 600 : 400 }}>
                  {done ? 'Completed' : current ? 'In Progress' : 'Pending'}
                </div>
              </div>
            </div>
            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: 1, background: 'var(--border)', margin: '0 10px' }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
