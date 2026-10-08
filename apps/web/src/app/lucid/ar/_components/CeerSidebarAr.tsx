import Link from 'next/link';

interface Props {
  backHref?: string;
  backLabel?: string;
}

const specs = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 6V4M16 6V4M3 10h18"/>
      </svg>
    ),
    name: 'محرك أمامي وخلفي، دفع رباعي',
    label: 'ناقل الحركة',
  },
  {
    icon: <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#4a6a9c', flexShrink: 0 }} />,
    name: 'أزرق فاذوم معدني',
    label: 'لون الهيكل الخارجي',
  },
  {
    icon: (
      <div style={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, display: 'flex' }}>
        <div style={{ width: '50%', background: '#1a1a1a' }} />
        <div style={{ width: '50%', background: '#b5632a' }} />
      </div>
    ),
    name: 'تاهو',
    label: 'طراز المقصورة الداخلية',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
        <line x1="19.07" y1="4.93" x2="16.24" y2="7.76"/><line x1="7.76" y1="16.24" x2="4.93" y2="19.07"/>
      </svg>
    ),
    name: '20" إيرو لايت',
    label: 'الإطارات',
  },
];

const financials = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/>
      </svg>
    ),
    name: '٤٦٦٬٧٨٥ ر.س',
    label: 'سعر المركبة (شامل ض.ق.م)',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 12V8H6a2 2 0 0 1 0-4h14v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
      </svg>
    ),
    name: '٩٣٬٣٥٧ ر.س (٢٠٪)',
    label: 'الدفعة المقدمة',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>
      </svg>
    ),
    name: '٣٧٣٬٤٢٨ ر.س',
    label: 'مبلغ التمويل',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2M15 4V2M5 9h14"/>
      </svg>
    ),
    name: '36 شهراً',
    label: 'مدة التمويل',
  },
];

export default function CeerSidebarAr({ backHref, backLabel = 'العودة إلى لوسيد' }: Props) {
  return (
    <aside dir="rtl" style={{
      width: 320,
      flexShrink: 0,
      background: 'var(--card)',
      borderLeft: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      position: 'sticky',
      top: 0,
      height: '100%',
      color: 'var(--text)',
    }}>

      <style>{`
        [data-theme="light"] .lucid-sidebar-logo { filter: brightness(0); }
        [data-theme="dark"] .lucid-sidebar-logo { filter: brightness(0) invert(1); }
        [data-theme="light"] .lucid-car-bg { background: linear-gradient(180deg, #e8eaed 0%, #f5f5f5 100%); }
        [data-theme="dark"] .lucid-car-bg { background: linear-gradient(180deg, #1a2233 0%, #111827 100%); }
      `}</style>

      {/* Header */}
      <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)' }}>
        <img src="/lucid-motors-logo.svg" alt="Lucid Motors" className="lucid-sidebar-logo" style={{ height: 10, width: 'auto' }} />
        {backHref && (
          <Link href={backHref} style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' }}>
            {backLabel} →
          </Link>
        )}
      </div>

      {/* Car image */}
      <div className="lucid-car-bg" style={{ width: '100%', flexShrink: 0 }}>
        <img src="/lucid-car.webp" alt="Lucid Air Touring" style={{ width: '100%', display: 'block' }} />
      </div>

      {/* Model info */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 2 }}>2026</p>
        <h2 style={{ fontSize: 26, fontWeight: 400, color: 'var(--text)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif", lineHeight: 1.2 }}>Air Touring</h2>
      </div>

      {/* Specs — no separators between items */}
      {specs.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '11px 20px', color: 'var(--muted)' }}>
          <div style={{ flexShrink: 0, width: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{s.name}</p>
            <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>{s.label}</p>
          </div>
        </div>
      ))}

      {/* Range — separator above and below */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '11px 20px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>
        <div style={{ flexShrink: 0, width: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4"/>
          </svg>
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>حتى 660 كم</p>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>المدى (تقديري)</p>
        </div>
      </div>

      {/* Financials — no separators between items */}
      {financials.map((f, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '11px 20px', color: 'var(--muted)' }}>
          <div style={{ flexShrink: 0, width: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{f.name}</p>
            <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>{f.label}</p>
          </div>
        </div>
      ))}

      {/* Security footer */}
      <div style={{ padding: '14px 20px', display: 'flex', gap: 12, alignItems: 'flex-start', background: 'var(--bg)', margin: 12, borderRadius: 12, marginTop: 'auto' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1, color: 'var(--muted)' }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>بياناتك آمنة</p>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3, lineHeight: 1.5 }}>نستخدم تشفيراً بمستوى بنكي لحماية معلوماتك.</p>
        </div>
      </div>

    </aside>
  );
}
