type CreditRisk = 'VERY HIGH RISK' | 'HIGH RISK' | 'MEDIUM RISK' | 'LOW RISK' | 'VERY LOW RISK' | 'UNDEFINED';

const RISK_COLOR: Record<CreditRisk, string> = {
  'VERY HIGH RISK': '#D92D20',
  'HIGH RISK':      '#DC6803',
  'MEDIUM RISK':    '#0063F5',
  'LOW RISK':       '#079455',
  'VERY LOW RISK':  '#067647',
  'UNDEFINED':      '#9AA4B2',
};

const RISK_BADGE: Record<CreditRisk, string> = {
  'VERY HIGH RISK': 'border-[#D92D20] text-[#B42318]',
  'HIGH RISK':      'border-[#DC6803] text-[#A15E07]',
  'MEDIUM RISK':    'border-[#0063F5] text-[#004FC6]',
  'LOW RISK':       'border-[#079455] text-[#067647]',
  'VERY LOW RISK':  'border-[#067647] text-[#067647]',
  'UNDEFINED':      'border-[#9AA4B2] text-[#9AA4B2]',
};

const RISK_LABEL_AR: Record<CreditRisk, string> = {
  'VERY HIGH RISK': 'مخاطر عالية جدًا',
  'HIGH RISK':      'عالية الخطورة',
  'MEDIUM RISK':    'مخاطرة متوسطة',
  'LOW RISK':       'منخفض المخاطر',
  'VERY LOW RISK':  'مخاطر منخفضة جدًا',
  'UNDEFINED':      'غير محدد',
};

// Score → risk bucket (300–900 range)
export function scoreToRisk(score: number): CreditRisk {
  if (score <= 0)   return 'UNDEFINED';
  if (score < 500)  return 'VERY HIGH RISK';
  if (score < 600)  return 'HIGH RISK';
  if (score < 650)  return 'MEDIUM RISK';
  if (score < 750)  return 'LOW RISK';
  return 'VERY LOW RISK';
}

// Semicircle gauge: arc from 9 o'clock → 12 o'clock → 3 o'clock (top half)
// Container is 102×56px with overflow-hidden; circle center sits just below the bottom edge.
export function CreditScoreGauge({
  score,
  risk,
  isAr = false,
}: {
  score: number;
  risk: CreditRisk;
  isAr?: boolean;
}) {
  const MIN = 300, MAX = 900;
  const pct = score <= 0 ? 0 : Math.min(1, Math.max(0, (score - MIN) / (MAX - MIN)));

  // SVG geometry
  const cx = 51, cy = 52, r = 42;
  const C = 2 * Math.PI * r;   // full circumference ≈ 263.89
  const H = Math.PI * r;       // half circumference ≈ 131.95  (our 180° track)

  // Negative dashoffset shifts the pattern backward so the dash starts at
  // position C−H = 9 o'clock, then travels clockwise via 12 o'clock to 3 o'clock.
  const offset = -H;

  const color = RISK_COLOR[risk];
  const label = isAr ? RISK_LABEL_AR[risk] : risk;

  return (
    <div className="flex items-center gap-3">
      {/* Gauge */}
      <div className="relative w-[102px] h-[56px] shrink-0 overflow-hidden">
        <svg viewBox="0 0 102 56" className="absolute inset-0 w-full h-full">
          {/* Track */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="#E9EAEB"
            strokeWidth="8"
            strokeDasharray={`${H} ${C}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
          {/* Progress */}
          {pct > 0 && (
            <circle
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeDasharray={`${H * pct} ${C}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          )}
        </svg>
        {/* Score label */}
        <span className="absolute bottom-0 left-0 right-0 text-center text-[13px] font-semibold text-[#181d27] dark:text-slate-100 leading-none">
          {score > 0 ? score : '—'}
        </span>
      </div>

      {/* Badge */}
      <span
        className={`text-[11px] font-semibold border rounded-full px-2.5 py-0.5 whitespace-nowrap ${RISK_BADGE[risk]}`}
      >
        {label}
      </span>
    </div>
  );
}
