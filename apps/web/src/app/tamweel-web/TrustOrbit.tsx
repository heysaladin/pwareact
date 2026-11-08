'use client';
import { useEffect, useRef } from 'react';

type Lang = 'en' | 'ar';

const ICONS: Record<string, string> = {
  shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  compare: '<path d="M4 7h11M4 7l3-3M4 7l3 3"/><path d="M20 17H9M20 17l-3-3M20 17l-3 3"/>',
  id: '<rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="11" r="2.2"/><path d="M6 16c.8-1.4 1.8-2 3-2s2.2.6 3 2M14 10h4M14 13h3"/>',
  paper: '<path d="M7 3h7l4 4v14H7z"/><path d="M4 4l16 16"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  bolt: '<path d="M13 2L5 14h6l-1 8 8-12h-6z"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
};

const OUTER: Record<Lang, [string, string][]> = {
  en: [
    ['shield', 'SAMA Licensed'],
    ['compare', 'Compare bank offers'],
    ['id', 'Instant Nafath check'],
    ['paper', 'No paperwork'],
    ['moon', 'Sharia compliant'],
    ['eye', 'No hidden fees'],
    ['bolt', 'Pre-approval in minutes'],
    ['chart', 'Auto SIMAH report'],
  ],
  ar: [
    ['shield', 'مرخّصة من ساما'],
    ['compare', 'عروض من عدة بنوك'],
    ['id', 'تحقق فوري عبر نفاذ'],
    ['paper', 'بدون أوراق'],
    ['moon', 'متوافق مع الشريعة'],
    ['eye', 'بدون رسوم خفية'],
    ['bolt', 'موافقة مبدئية خلال دقائق'],
    ['chart', 'تقرير سمة تلقائي'],
  ],
};

const INNER: Record<Lang, [string, string][]> = {
  en: [
    ['1', 'application'],
    ['3', 'minutes'],
    ['0', 'papers'],
    ['100%', 'digital'],
    ['24/7', 'available'],
    ['0', 'branch visits'],
  ],
  ar: [
    ['١', 'طلب واحد'],
    ['٣', 'دقائق'],
    ['٠', 'أوراق'],
    ['١٠٠٪', 'رقمي'],
    ['٢٤/٧', 'متاح'],
    ['٠', 'زيارات للفرع'],
  ],
};

/* Extra scroll distance (px) during which the logo grows */
const EXTRA = 480;

export default function TrustOrbit({ lang }: { lang: Lang }) {
  const outerData = OUTER[lang];
  const innerData = INNER[lang];

  /* Scroll-zone refs */
  const outerWrapRef = useRef<HTMLDivElement>(null);

  /* Orbit refs */
  const stageRef    = useRef<HTMLDivElement>(null);
  const ringsRef    = useRef<HTMLDivElement>(null);
  const c1Ref       = useRef<SVGPathElement>(null);
  const c2Ref       = useRef<SVGPathElement>(null);
  const dockRef     = useRef<HTMLDivElement>(null);
  const tagRef      = useRef<HTMLDivElement>(null);
  const tagTextRef  = useRef<HTMLSpanElement>(null);
  const stemRef     = useRef<HTMLDivElement>(null);
  const logoMarkRef = useRef<HTMLDivElement>(null);

  const outerElsRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerElsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef      = useRef<number>(0);

  /* ── orbit animation ───────────────────────────────────────────────── */
  useEffect(() => {
    const stage    = stageRef.current;
    const c1       = c1Ref.current;
    const c2       = c2Ref.current;
    const dock     = dockRef.current;
    const tag      = tagRef.current;
    const tagText  = tagTextRef.current;
    if (!stage || !c1 || !c2 || !dock || !tag || !tagText) return;

    const outerEls = outerElsRef.current.filter(Boolean) as HTMLDivElement[];
    const innerEls = innerElsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!outerEls.length || !innerEls.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DEG = Math.PI / 180;
    let outerBase = 0, innerBase = 0, last = performance.now(), active = -1;

    function place(els: HTMLDivElement[], base: number, step: number, R: number, cx: number, cy: number) {
      const span = els.length * step;
      let best = -1, bestAbs = 1e9;
      els.forEach((el, i) => {
        const a = ((base + i * step + span / 2) % span + span) % span - span / 2;
        const r = a * DEG;
        const x = cx + R * Math.sin(r), y = cy - R * Math.cos(r);
        const vis = Math.max(0, Math.min(1, (Math.cos(r) - 0.25) / 0.55));
        const w = el.offsetWidth, h = el.offsetHeight;
        el.style.transform = `translate(${x - w / 2}px,${y - h / 2}px) scale(${0.86 + 0.14 * vis})`;
        el.style.opacity = String(vis);
        if (Math.abs(a) < bestAbs) { bestAbs = Math.abs(a); best = i; }
      });
      return best;
    }

    function setActive(i: number) {
      if (i === active) return;
      outerEls.forEach((el, k) => {
        el.style.boxShadow = k === i
          ? '0 0 0 2px #0063F5, 0 14px 40px rgba(0,99,245,0.20)'
          : '0 10px 30px rgba(0,0,0,0.08), inset 0 -2px 0 rgba(0,0,0,0.04)';
      });
      active = i;
      tag!.style.opacity = '0';
      tag!.style.transform = 'translateY(6px)';
      setTimeout(() => {
        if (tagText) tagText.textContent = outerData[i][1];
        if (tag) { tag!.style.opacity = '1'; tag!.style.transform = 'none'; }
      }, 220);
    }

    function frame(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduce) { outerBase -= 5 * dt; innerBase += 7 * dt; }

      const W = stage!.clientWidth;
      const R1 = Math.min(W * 0.6, 600);
      const R2 = R1 * 0.7;
      const cx = W / 2, cy = 50 + R1;
      const dockTop = cy - R2 + 70;
      dock!.style.top = dockTop + 'px';

      c1!.setAttribute('d', `M ${cx - R1} ${cy} A ${R1} ${R1} 0 0 1 ${cx + R1} ${cy}`);
      c2!.setAttribute('d', `M ${cx - R2} ${cy} A ${R2} ${R2} 0 0 1 ${cx + R2} ${cy}`);

      const best = place(outerEls, outerBase, 22, R1, cx, cy);
      place(innerEls, innerBase, 26, R2, cx, cy);
      setActive(best);
      if (!reduce) rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);

    let reduceIntv: ReturnType<typeof setInterval> | undefined;
    if (reduce) {
      let k = 0;
      const onResize = () => requestAnimationFrame(frame);
      window.addEventListener('resize', onResize);
      reduceIntv = setInterval(() => {
        k = (k + 1) % outerData.length;
        outerBase = -k * 22;
        requestAnimationFrame(frame);
      }, 3500);
      return () => {
        window.removeEventListener('resize', onResize);
        clearInterval(reduceIntv);
        cancelAnimationFrame(rafRef.current);
      };
    }

    return () => { cancelAnimationFrame(rafRef.current); };
  }, [lang, outerData]);

  /* ── scroll-driven logo grow ────────────────────────────────────────── */
  useEffect(() => {
    const outer = outerWrapRef.current;
    if (!outer) return;

    const onScroll = () => {
      const rect   = outer.getBoundingClientRect();
      const totalH = outer.offsetHeight;
      const vh     = window.innerHeight;
      const scrolled = -rect.top; // 0 at section start, totalH at section end

      /* Extra scroll phase starts when orbit stage is fully in view */
      const extraStart = totalH - EXTRA - vh;
      const p = Math.max(0, Math.min(1, (scrolled - extraStart) / EXTRA));

      const rings    = ringsRef.current;
      const tag      = tagRef.current;
      const stem     = stemRef.current;
      const logoMark = logoMarkRef.current;

      if (rings)    rings.style.opacity    = String(Math.max(0, 1 - p * 2.5));
      if (tag)      tag.style.opacity      = String(Math.max(0, 1 - p * 3));
      if (stem)     stem.style.opacity     = String(Math.max(0, 1 - p * 2));
      if (logoMark) {
        const scale = 1 + p * 4.83;
        logoMark.style.transform  = `scale(${scale})`;
        const bgAlpha = Math.max(0, 1 - p * 1.6);
        logoMark.style.background = `linear-gradient(180deg,rgba(255,255,255,${bgAlpha}),rgba(238,244,255,${bgAlpha}))`;
        logoMark.style.boxShadow  = `0 20px 60px rgba(0,0,0,${0.08 * bgAlpha}),0 10px 30px rgba(0,0,0,${0.05 * bgAlpha})`;
        /* fade out orbit logo at peak so fixed overlay takes over */
        logoMark.style.opacity    = String(Math.max(0, 1 - Math.max(0, p - 0.8) / 0.2));
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    /* Outer scroll-zone: orbit height + extra room for logo growth */
    <div ref={outerWrapRef} style={{ height: `calc(100svh + ${EXTRA}px)` }}>
      {/* Sticky orbit stage */}
      <div style={{ position: 'sticky', top: 0, height: '100svh', overflow: 'hidden' }}>
        <div ref={stageRef} className="relative w-full h-full">

          {/* Rings + chips */}
          <div
            ref={ringsRef}
            className="absolute inset-0"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 4%, #000 26%, #000 74%, transparent 96%)',
              maskImage: 'linear-gradient(to right, transparent 4%, #000 26%, #000 74%, transparent 96%)',
            }}
          >
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="rg1" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0%"   stopColor="#C4CDD8" stopOpacity="1"/>
                  <stop offset="60%"  stopColor="#C4CDD8" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#C4CDD8" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="rg2" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0%"   stopColor="#C4CDD8" stopOpacity="1"/>
                  <stop offset="60%"  stopColor="#C4CDD8" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#C4CDD8" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path ref={c1Ref} fill="none" stroke="url(#rg1)" strokeWidth="1.5" />
              <path ref={c2Ref} fill="none" stroke="url(#rg2)" strokeWidth="1.5" />
            </svg>

            {outerData.map(([icon, label], i) => (
              <div
                key={`o-${i}`}
                ref={el => { outerElsRef.current[i] = el; }}
                className="absolute left-0 top-0 flex items-center gap-[10px] select-none pointer-events-none"
                style={{
                  padding: '12px 18px',
                  borderRadius: 20,
                  background: 'linear-gradient(180deg, #ffffff, #EEF4FF)',
                  color: '#021945',
                  fontFamily: "'SF Pro Display', system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08), inset 0 -2px 0 rgba(0,0,0,0.04)',
                  willChange: 'transform, opacity',
                  transition: 'box-shadow 0.4s',
                }}
              >
                <svg
                  viewBox="0 0 24 24" width={20} height={20}
                  style={{ flex: 'none', stroke: 'currentColor', fill: 'none', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }}
                  dangerouslySetInnerHTML={{ __html: ICONS[icon] }}
                />
                <span>{label}</span>
              </div>
            ))}

            {innerData.map(([num, label], i) => (
              <div
                key={`in-${i}`}
                ref={el => { innerElsRef.current[i] = el; }}
                className="absolute left-0 top-0 select-none pointer-events-none"
                style={{
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: '1px solid #E2E6EE',
                  background: '#fff',
                  color: '#8898AA',
                  fontFamily: "'SF Pro Display', system-ui, sans-serif",
                  fontSize: 13,
                  whiteSpace: 'nowrap',
                  fontVariantNumeric: 'tabular-nums',
                  willChange: 'transform, opacity',
                }}
              >
                <b style={{ color: '#021945', fontWeight: 700, marginInlineEnd: 4 }}>{num}</b>
                {label}
              </div>
            ))}
          </div>

          {/* Center dock */}
          <div
            ref={dockRef}
            className="absolute grid justify-items-center"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          >
            <div
              ref={tagRef}
              className="flex items-center gap-[10px] whitespace-nowrap"
              aria-live="polite"
              style={{
                padding: '10px 18px 10px 12px',
                borderRadius: 999,
                background: '#EBF4FF',
                color: '#0063F5',
                border: '1px solid rgba(0,99,245,0.3)',
                boxShadow: '0 0 40px rgba(0,99,245,0.12)',
                fontFamily: "'SF Pro Display', system-ui, sans-serif",
                fontSize: 16,
                transition: 'opacity 0.25s, transform 0.25s',
              }}
            >
              <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#0063F5', display: 'grid', placeItems: 'center', flex: 'none' }}>
                <svg viewBox="0 0 24 24" width={14} height={14} style={{ stroke: '#fff', strokeWidth: 3, fill: 'none' }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <span ref={tagTextRef}>{outerData[0][1]}</span>
            </div>

            <div
              ref={stemRef}
              style={{ width: 2, height: 56, background: 'linear-gradient(#0063F5, #E2E6EE)' }}
            />

            <div
              ref={logoMarkRef}
              aria-hidden="true"
              style={{
                width: 116, height: 116, borderRadius: 30,
                background: 'linear-gradient(180deg, #ffffff, #EEF4FF)',
                display: 'grid', placeItems: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)',
                transformOrigin: 'center center',
                willChange: 'transform',
              }}
            >
              <svg width="64" height="64" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="lm" x1="99.999" y1="0" x2="99.999" y2="199.998" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0063F5"/>
                    <stop offset="1" stopColor="#0063F5" stopOpacity="0.25"/>
                  </linearGradient>
                </defs>
                <path d="M141.013 60.3545C138.172 69.5197 136.354 78.9336 135.558 88.417C127.484 90.2198 119.3 91.4078 111.082 91.9834V148.641C136.735 151.107 161.718 162.164 181.363 181.811L163.175 200C148.489 185.313 129.962 176.809 110.827 174.487L85.5469 150.786V174.899H86.2031C68.1316 177.71 50.7565 186.077 36.834 200L18.6455 181.811C37.3793 163.076 60.9663 152.154 85.3594 149.041V91.7832C78.0133 91.1538 70.7012 90.0348 63.4766 88.4229C62.6792 78.9396 60.8607 69.5261 58.0195 60.3613C84.9992 68.771 114.034 68.7688 141.013 60.3545ZM18.1875 18.6475C63.1205 63.5825 63.1206 136.437 18.1875 181.372L-0.000976562 163.183C34.8867 128.293 34.8867 71.7263 -0.000976562 36.8369L18.1875 18.6475ZM199.997 36.8281C165.109 71.7175 165.109 128.284 199.997 163.174L181.809 181.363C136.876 136.428 136.876 63.5737 181.809 18.6387L199.997 36.8281ZM181.343 18.1895C136.41 63.1245 63.5581 63.1245 18.625 18.1895L36.8135 0C71.7013 34.8894 128.266 34.8894 163.154 0L181.343 18.1895Z" fill="url(#lm)"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
