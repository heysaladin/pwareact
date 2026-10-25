'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './phone-flip.css';

gsap.registerPlugin(ScrollTrigger);

type Lang = 'en' | 'ar';

type HeroSection = { hero: true; h1: string; em: string; p: string; cue: string };
type StepSection = { n: string; h: string; p: string; li: string[] };
type Section = HeroSection | StepSection;

const COPY: Record<Lang, { sections: Section[] }> = {
  en: {
    sections: [
      { hero: true, h1: 'Financing, compared.', em: 'Decided in minutes.', p: 'Scroll to see the Tamawal phone move through each step of the journey.', cue: 'Scroll' },
      { n: '01', h: 'Apply securely with Tamawal', p: 'Verify your identity with Nafath and share your data only with your consent.', li: ['Nafath identity check', 'Encrypted end to end', 'You control every consent'] },
      { n: '02', h: 'Compare offers', p: 'Every eligible offer side by side: monthly installment, APR and total cost.', li: ['Ranked by total cost', 'Filter by tenure and amount', 'Save offers for later'] },
      { n: '03', h: 'Get your money', p: 'Accept, sign digitally, and receive funds directly in your bank account.', li: ['Digital contract signing', 'Track every step live', 'Funds to your IBAN'] },
      { n: '04', h: 'Improve your credit score', p: 'Understand your SIMAH score and unlock better rates as your Tamawal Score grows.', li: ['Free SIMAH report', 'Personalised tips', 'Better rates over time'] },
    ],
  },
  ar: {
    sections: [
      { hero: true, h1: 'قارن عروض التمويل.', em: 'وقرّر في دقائق.', p: 'مرّر للأسفل لترى هاتف تموّل يتنقّل بين خطوات الرحلة.', cue: 'مرّر' },
      { n: '01', h: 'قدّم طلبك بأمان مع تموّل', p: 'تحقّق من هويتك عبر نفاذ، وشارك بياناتك بموافقتك فقط.', li: ['التحقق من الهوية عبر نفاذ', 'تشفير كامل للبيانات', 'أنت تتحكّم في كل موافقة'] },
      { n: '02', h: 'قارن العروض', p: 'جميع العروض المتاحة لك جنبًا إلى جنب: القسط الشهري والنسبة السنوية والتكلفة الإجمالية.', li: ['مرتّبة حسب التكلفة الإجمالية', 'فلترة حسب المدة والمبلغ', 'احفظ العروض لوقت لاحق'] },
      { n: '03', h: 'استلم تمويلك', p: 'اقبل العرض، ووقّع رقميًا، واستلم المبلغ مباشرة في حسابك البنكي.', li: ['توقيع العقد إلكترونيًا', 'تابع كل خطوة لحظيًا', 'التحويل إلى الآيبان مباشرة'] },
      { n: '04', h: 'حسّن سجلّك الائتماني', p: 'افهم درجتك في سمة، وافتح أسعارًا أفضل مع نمو درجة تموّل.', li: ['تقرير سمة مجاني', 'نصائح مخصّصة لك', 'أسعار أفضل مع الوقت'] },
    ],
  },
};

type ScreenData = {
  hi: string; offers: string; pre: string; amt: string; mo: string; apr: string;
  lenders: string[]; cta: string; naf: string; nafSub: string; ok: string;
  found: string; best: string; months: string; sent: string; way: string;
  steps: string[]; score: string; good: string; ts: string; tier: string; tip: string;
};
const SCR: Record<Lang, ScreenData> = {
  en: {
    hi: 'Good evening, Khaled', offers: 'Your offers', pre: 'Pre-approved', amt: 'SAR 120,000', mo: '/mo', apr: 'APR',
    lenders: ['Lender A', 'Lender B', 'Lender C', 'Lender D'],
    cta: 'Check my eligibility', naf: 'Nafath verification', nafSub: 'Open Nafath and choose this number',
    ok: 'Identity verified', found: '12 offers found', best: 'Best match', months: '60 months',
    sent: 'Transferred to your account', way: 'Money on its way',
    steps: ['Offer accepted', 'Contract signed', 'Funds transferred'],
    score: 'Credit score', good: 'Very good', ts: 'Tamawal Score', tier: 'Gold tier',
    tip: 'Pay your card on time for 3 months to reach Excellent',
  },
  ar: {
    hi: 'مساء الخير، خالد', offers: 'عروضك', pre: 'موافقة مبدئية', amt: '120,000 ر.س', mo: '/شهريًا', apr: 'النسبة',
    lenders: ['جهة تمويل أ', 'جهة تمويل ب', 'جهة تمويل ج', 'جهة تمويل د'],
    cta: 'تحقّق من أهليتي', naf: 'التحقق عبر نفاذ', nafSub: 'افتح نفاذ واختر هذا الرقم',
    ok: 'تم التحقق من الهوية', found: 'تم العثور على 12 عرضًا', best: 'الأنسب لك', months: '60 شهرًا',
    sent: 'تم التحويل إلى حسابك', way: 'تمويلك في الطريق',
    steps: ['تم قبول العرض', 'تم توقيع العقد', 'تم تحويل المبلغ'],
    score: 'السجل الائتماني', good: 'جيد جدًا', ts: 'درجة تموّل', tier: 'الفئة الذهبية',
    tip: 'سدّد بطاقتك في موعدها 3 أشهر لتصل إلى ممتاز',
  },
};

type Fill = string | CanvasGradient | null | undefined;

function buildScene(
  canvas: HTMLCanvasElement,
  stageEl: HTMLDivElement,
  panelsEl: HTMLDivElement,
  lang: Lang,
): () => void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isRtl = lang === 'ar';
  const t = SCR[lang];
  const FF = isRtl ? 'Alexandria, sans-serif' : "'Instrument Sans', sans-serif";

  // ── Renderer ──────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0, 5.6);

  // environment
  {
    const env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial({ color: 0x2a2f38, side: THREE.BackSide })));
    const ep = (w: number, h: number, x: number, y: number, z: number, ry: number, rx: number, c: number) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.rotation.set(rx, ry, 0); env.add(m);
    };
    ep(14, 6, 0, 9, 0, 0, Math.PI / 2, 0xffffff);
    ep(3, 14, -9, 0, 2, Math.PI / 2, 0, 0xdfe8ff);
    ep(3, 14, 9, 0, -2, -Math.PI / 2, 0, 0xfff3e2);
    ep(10, 3, 0, -2, -9, 0, 0, 0x8fb6ff);
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(env, 0.04).texture;
    pm.dispose();
  }
  scene.add(new THREE.HemisphereLight(0xffffff, 0x404858, 0.35));
  const key = new THREE.DirectionalLight(0xffffff, 0.6);
  key.position.set(3, 4, 5); scene.add(key);

  // ── Phone ─────────────────────────────────────────────────────────────
  const rshape = (w: number, h: number, r: number) => {
    const s = new THREE.Shape();
    const [x, y] = [-w / 2, -h / 2];
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
    return s;
  };
  const plate = (w: number, h: number, r: number, mat: THREE.Material, z: number, seg = 24) => {
    const geo = new THREE.ShapeGeometry(rshape(w, h, r), seg);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const uv  = geo.attributes.uv  as THREE.BufferAttribute;
    for (let k = 0; k < pos.count; k++) uv.setXY(k, (pos.getX(k) + w / 2) / w, (pos.getY(k) + h / 2) / h);
    uv.needsUpdate = true;
    const m = new THREE.Mesh(geo, mat); m.position.z = z; return m;
  };

  const W = 0.75, H = 1.55, D = 0.07, BV = 0.016;
  const titanium  = new THREE.MeshStandardMaterial({ color: 0xbfc3ca, metalness: 1,    roughness: 0.3  });
  const glass     = new THREE.MeshStandardMaterial({ color: 0x04060a, metalness: 0.3,  roughness: 0.06 });
  const backMat   = new THREE.MeshStandardMaterial({ color: 0xd9dbe0, metalness: 0.25, roughness: 0.5  });
  const lensMat   = new THREE.MeshStandardMaterial({ color: 0x07090f, metalness: 0.7,  roughness: 0.12 });
  const screenMat = new THREE.MeshBasicMaterial({ toneMapped: false });

  const phone = new THREE.Group(); scene.add(phone);
  const bodyGeo = new THREE.ExtrudeGeometry(rshape(W - BV * 2, H - BV * 2, 0.11), {
    depth: D, bevelEnabled: true, bevelThickness: BV, bevelSize: BV, bevelSegments: 8, curveSegments: 28,
  });
  bodyGeo.center();
  phone.add(new THREE.Mesh(bodyGeo, titanium));

  const FZ = D / 2 + BV + 0.0006;
  phone.add(plate(W - BV * 2 - 0.004, H - BV * 2 - 0.004, 0.108, glass, FZ));
  const screenMesh = plate(0.672, 1.47, 0.092, screenMat, FZ + 0.0006);
  phone.add(screenMesh);
  const island = plate(0.17, 0.05, 0.025, new THREE.MeshBasicMaterial({ color: 0x000000 }), FZ + 0.0012);
  island.position.y = 1.47 / 2 - 0.045; phone.add(island);
  const back = plate(W - BV * 2 - 0.004, H - BV * 2 - 0.004, 0.108, backMat, -FZ);
  back.rotation.y = Math.PI; phone.add(back);

  const camGrp = new THREE.Group();
  camGrp.position.set(0.17, 0.53, -FZ - 0.001); camGrp.rotation.y = Math.PI; phone.add(camGrp);
  camGrp.add(plate(0.3, 0.3, 0.085, new THREE.MeshStandardMaterial({ color: 0xc9ccd2, metalness: 0.6, roughness: 0.25 }), 0));
  (([[-0.065, 0.065], [-0.065, -0.065], [0.07, 0]]) as [number, number][]).forEach(([cx, cy]) => {
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.058, 0.03, 40), titanium);
    ring.rotation.x = Math.PI / 2; ring.position.set(cx, cy, 0.015); camGrp.add(ring);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.032, 40), lensMat);
    lens.rotation.x = Math.PI / 2; lens.position.set(cx, cy, 0.018); camGrp.add(lens);
  });
  (([[-1, 0.32, 0.09], [-1, 0.18, 0.09], [1, 0.26, 0.16]]) as [number, number, number][]).forEach(([side, by, bh]) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.012, bh, 0.035), titanium);
    b.position.set(side * (W / 2 + 0.004), by, 0); phone.add(b);
  });

  // shadow — larger canvas for softer falloff
  const shCan = document.createElement('canvas'); shCan.width = shCan.height = 256;
  const sg = shCan.getContext('2d')!;
  const rg = sg.createRadialGradient(128, 128, 0, 128, 128, 128);
  rg.addColorStop(0,   'rgba(11,27,51,.28)');
  rg.addColorStop(0.4, 'rgba(11,27,51,.14)');
  rg.addColorStop(1,   'rgba(11,27,51,0)');
  sg.fillStyle = rg; sg.fillRect(0, 0, 256, 256);
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.8, 0.42),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shCan), transparent: true, depthWrite: false }),
  );
  shadow.position.set(0, -1.05, -0.3); scene.add(shadow);

  // ── Screen textures ────────────────────────────────────────────────────
  const SW = 280, SH = 605, K = 600 / 280;
  let textures: THREE.CanvasTexture[] = [];

  function makeScreen(idx: number): THREE.CanvasTexture {
    const c = document.createElement('canvas'); c.width = 600; c.height = Math.round(SH * K);
    const g = c.getContext('2d')!; g.scale(K, K);
    const X = (x: number, w = 0) => isRtl ? SW - x - w : x;
    const rr = (x: number, y: number, w: number, h: number, r: number, fill?: Fill, stroke?: string | null) => {
      g.beginPath();
      g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r);
      g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r);
      g.arcTo(x, y, x + w, y, r); g.closePath();
      if (fill) { g.fillStyle = fill as string; g.fill(); }
      if (stroke) { g.strokeStyle = stroke; g.lineWidth = 1; g.stroke(); }
    };
    const box = (x: number, y: number, w: number, h: number, r: number, fill?: Fill, stroke?: string | null) =>
      rr(X(x, w), y, w, h, r, fill, stroke);
    const tx = (s: string, x: number, y: number, size: number, weight: number, col: string, align?: string) => {
      g.font = `${weight} ${size}px ${FF}`; g.fillStyle = col;
      let a = align ?? 'left';
      if (isRtl && a !== 'center') a = a === 'left' ? 'right' : 'left';
      g.textAlign = a as CanvasTextAlign; g.direction = isRtl ? 'rtl' : 'ltr';
      g.fillText(s, a === 'center' ? x : X(x), y);
    };
    const tick = (x: number, y: number, col: string) => {
      box(x, y, 18, 18, 9, col);
      g.strokeStyle = '#fff'; g.lineWidth = 2.4; g.lineCap = 'round'; g.lineJoin = 'round';
      const ox = X(x, 18);
      g.beginPath(); g.moveTo(ox + 5, y + 9.5); g.lineTo(ox + 8, y + 12.5); g.lineTo(ox + 13.5, y + 6); g.stroke();
    };

    g.fillStyle = '#F7F8FB'; g.fillRect(0, 0, SW, SH);
    g.font = "600 13px 'Instrument Sans', sans-serif"; g.fillStyle = '#0B1B33'; g.textAlign = 'left'; g.fillText('9:41', 26, 30);
    g.fillRect(232, 22, 16, 9); g.fillRect(250, 22, 6, 9);
    const INK = '#0B1B33', MUT = '#5B6678', BL = '#0063F5', GR = '#12B76A', CARD = '#FFFFFF', LN = '#EEF0F4';

    if (idx === 0) {
      tx(t.hi, 18, 68, 13, 400, MUT); tx(t.offers, 18, 94, 21, 700, INK);
      const grd = g.createLinearGradient(18, 110, 262, 215);
      grd.addColorStop(0, '#0063F5'); grd.addColorStop(1, '#0A3FA8');
      box(18, 110, 244, 104, 18, grd);
      tx(t.pre, 32, 134, 11, 400, 'rgba(255,255,255,.75)'); tx(t.amt, 32, 166, 26, 700, '#fff');
      tx('2,450' + t.mo + '  ·  4.9%', 32, 198, 11, 500, 'rgba(255,255,255,.85)');
      const sw = ['#EEF4FF', '#F5EFE4', '#E8F7EF'], pr = ['2,450', '2,515', '2,590'], ap = ['4.9%', '5.4%', '5.9%'];
      for (let k = 0; k < 3; k++) {
        const ky = 226 + k * 72;
        box(18, ky, 244, 62, 18, CARD, LN); box(32, ky + 14, 34, 34, 10, sw[k]);
        tx(t.lenders[k], 76, ky + 28, 13, 600, INK); tx(t.apr + ' ' + ap[k], 76, ky + 45, 11, 400, MUT);
        tx(pr[k], 248, ky + 36, 14, 700, INK, 'right');
      }
      box(18, 452, 244, 44, 22, INK); tx(t.cta, 140, 479, 14, 600, '#fff', 'center');
    } else if (idx === 1) {
      tx(t.naf, 18, 84, 21, 700, INK); tx(t.nafSub, 18, 106, 13, 400, MUT);
      g.beginPath(); g.arc(140, 220, 75, 0, Math.PI * 2); g.fillStyle = '#E7F5EE'; g.fill();
      g.beginPath(); g.arc(140, 220, 55, 0, Math.PI * 2); g.fillStyle = '#fff'; g.fill();
      g.font = "700 48px 'Instrument Sans', sans-serif"; g.fillStyle = '#0E8A5F'; g.textAlign = 'center'; g.fillText('47', 140, 237);
      box(18, 330, 244, 50, 18, CARD, LN); tick(34, 346, GR); tx(t.ok, 62, 360, 14, 600, INK);
      box(18, 390, 244, 50, 18, CARD, LN); tick(34, 406, BL); tx('SAMA · Nafath', 62, 420, 12, 500, MUT);
    } else if (idx === 2) {
      tx(t.found, 18, 84, 21, 700, INK);
      box(18, 100, 88, 28, 14, INK); tx(t.months, 62, 118, 11, 500, '#fff', 'center');
      box(112, 100, 72, 28, 14, CARD, '#E2E4EA'); tx('120,000', 148, 118, 11, 500, INK, 'center');
      const sw2 = ['#EEF4FF', '#F5EFE4', '#E8F7EF', '#F3EEFF'];
      const pr2 = ['2,450', '2,515', '2,590', '2,640'], ap2 = ['4.9%', '5.4%', '5.9%', '6.2%'];
      for (let k = 0; k < 4; k++) {
        const ky = 140 + k * 96;
        box(18, ky, 244, 86, 18, CARD, k === 0 ? undefined : LN);
        if (k === 0) {
          rr(X(18, 244) + 1, ky + 1, 242, 84, 17, null, null);
          g.strokeStyle = BL; g.lineWidth = 2; g.stroke();
        }
        box(32, ky + 14, 28, 28, 8, sw2[k]); tx(t.lenders[k], 70, ky + 33, 13, 600, INK);
        if (k === 0) { box(178, ky + 18, 70, 18, 6, BL); tx(t.best, 213, ky + 31, 10, 600, '#fff', 'center'); }
        tx(pr2[k], 32, ky + 70, 18, 700, INK); tx(t.apr + ' ' + ap2[k], 248, ky + 68, 12, 400, MUT, 'right');
      }
    } else if (idx === 3) {
      g.beginPath(); g.arc(140, 140, 48, 0, Math.PI * 2); g.fillStyle = '#E8F7EF'; g.fill();
      g.beginPath(); g.arc(140, 140, 30, 0, Math.PI * 2); g.fillStyle = GR; g.fill();
      g.strokeStyle = '#fff'; g.lineWidth = 4; g.lineCap = 'round';
      g.beginPath(); g.moveTo(128, 141); g.lineTo(136, 149); g.lineTo(153, 131); g.stroke();
      tx(t.sent, 140, 220, 13, 400, MUT, 'center'); tx(t.amt, 140, 256, 30, 700, INK, 'center'); tx(t.way, 140, 282, 15, 600, INK, 'center');
      box(18, 310, 244, 120, 18, CARD, LN);
      const tm = ['10:02', '10:14', '11:30'];
      for (let k = 0; k < 3; k++) {
        const ky = 328 + k * 34;
        tick(34, ky, GR); tx(t.steps[k], 62, ky + 13, 13, 500, INK); tx(tm[k], 248, ky + 13, 11, 400, MUT, 'right');
      }
    } else {
      tx(t.score, 18, 84, 21, 700, INK); box(18, 100, 244, 178, 18, CARD, LN);
      g.lineCap = 'round'; g.lineWidth = 16; g.strokeStyle = '#E9ECF2';
      g.beginPath(); g.arc(140, 226, 80, Math.PI, 0); g.stroke();
      g.strokeStyle = BL; g.beginPath(); g.arc(140, 226, 80, Math.PI, Math.PI * 1.78); g.stroke();
      g.font = "700 40px 'Instrument Sans', sans-serif"; g.fillStyle = INK; g.textAlign = 'center'; g.fillText('712', 140, 222);
      tx(t.good, 140, 262, 13, 600, BL, 'center');
      box(18, 288, 244, 64, 18, CARD, LN); tx(t.ts, 32, 312, 11, 400, MUT); tx('860', 32, 336, 18, 700, INK);
      box(170, 308, 78, 24, 8, '#F5EFE4'); tx(t.tier, 209, 324, 11, 600, '#8A6A35', 'center');
      box(18, 362, 244, 64, 18, INK);
      const line1 = t.tip.slice(0, Math.ceil(t.tip.length / 2)).replace(/\s\S*$/, '');
      tx(line1, 32, 388, 12, 400, '#fff'); tx(t.tip.slice(line1.length).trim(), 32, 406, 12, 400, '#fff');
    }

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }

  function buildTextures() {
    textures.forEach(tex => tex.dispose());
    textures = [0, 1, 2, 3, 4].map(makeScreen);
  }

  // ── Poses ──────────────────────────────────────────────────────────────
  type Pose = { x: number; y: number; ry: number; rx: number; rz: number; s: number; spin: number };
  let poses: Pose[] = [];

  function buildPoses() {
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    const halfW = halfH * camera.aspect;
    const isMobile = camera.aspect < 0.9;
    const mirror = isRtl ? -1 : 1;
    const edgeX = isMobile ? 0 : Math.min(halfW * 0.48, 2.6);
    poses = COPY[lang].sections.map((_, i) => {
      const right = i % 2 === 0;
      return {
        x: (right ? 1 : -1) * edgeX * mirror,
        y: isMobile ? halfH * 0.36 : (i === 0 ? 0.02 : 0),
        ry: (right ? -0.38 : 0.38) * mirror * (isMobile ? 0.5 : 1),
        rx: i === 0 ? 0.12 : 0.06,
        rz: (right ? 0.04 : -0.04) * mirror,
        s: isMobile ? 0.72 : (i === 0 ? 1.08 : 1),
        spin: 0,
      };
    });
    let acc = poses[0].ry;
    poses.forEach((p, i) => {
      if (i) {
        const isMob = camera.aspect < 0.9;
        const dir = isMob ? (i % 2 ? -1 : 1) * mirror : Math.sign(p.x - poses[i - 1].x) || 1;
        acc += (p.ry - poses[i - 1].ry) + (reduce ? 0 : Math.PI * 2 * dir);
      }
      p.spin = acc;
    });
  }

  // ── Resize ────────────────────────────────────────────────────────────
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); buildPoses();
  }
  window.addEventListener('resize', resize);

  // ── Scroll ────────────────────────────────────────────────────────────
  let target = 0;
  const st = ScrollTrigger.create({
    trigger: stageEl, start: 'top top', end: 'bottom bottom',
    onUpdate: (s) => { target = s.progress; },
  });

  // ── Pointer ───────────────────────────────────────────────────────────
  const pointer = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    pointer.x = e.clientX / window.innerWidth - 0.5;
    pointer.y = e.clientY / window.innerHeight - 0.5;
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  // ── Loop ──────────────────────────────────────────────────────────────
  const lerp = (a: number, b: number, t2: number) => a + (b - a) * t2;
  const clamp = (v: number) => Math.min(1, Math.max(0, v));
  const ease = (t2: number) => t2 < 0.5 ? 4 * t2 * t2 * t2 : 1 - Math.pow(-2 * t2 + 2, 3) / 2;

  let currentIdx = -1, activePanel = -1;
  let last = performance.now(), time = 0, smooth = 0;
  let animId = 0;
  let disposed = false;
  const wrapEl = canvas.parentElement!;

  function frame(now: number) {
    if (disposed) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now; time += dt;
    smooth += (target - smooth) * (reduce ? 1 : 1 - Math.pow(0.0008, dt));
    const n = poses.length - 1, seg = smooth * n;
    const i = Math.min(Math.floor(seg), n - 1);
    const e = ease(clamp((seg - i - 0.2) / 0.6));
    const a = poses[i], b = poses[i + 1];
    const arc = Math.sin(Math.PI * e);
    const idle = reduce ? 0 : 1;
    phone.position.x = lerp(a.x, b.x, e);
    phone.position.y = lerp(a.y, b.y, e) + arc * 0.1 + Math.sin(time * 1.2) * 0.025 * idle;
    phone.rotation.y = lerp(a.spin, b.spin, e) + pointer.x * 0.25 * idle + Math.sin(time * 0.8) * 0.04 * idle;
    phone.rotation.x = lerp(a.rx, b.rx, e) + arc * 0.22 + pointer.y * 0.15 * idle;
    phone.rotation.z = lerp(a.rz, b.rz, e);
    phone.scale.setScalar(lerp(a.s, b.s, e) * (1 - 0.12 * arc));
    shadow.position.x = phone.position.x;
    shadow.position.y = phone.position.y - 1.08 * phone.scale.x;
    shadow.scale.setScalar(phone.scale.x * (1 - 0.2 * arc));
    (shadow.material as THREE.MeshBasicMaterial).opacity = Math.pow(1 - arc, 2);

    const tidx = e < 0.5 ? i : i + 1;
    if (tidx !== currentIdx) { currentIdx = tidx; screenMat.map = textures[tidx]; screenMat.needsUpdate = true; }

    const ap = Math.round(seg);
    if (ap !== activePanel) {
      activePanel = ap;
      panelsEl.querySelectorAll('.pf-panel').forEach((p, k) => p.classList.toggle('pf-on', k === ap));
    }

    const v = new THREE.Vector3().copy(phone.position).project(camera);
    wrapEl.style.setProperty('--gx', ((v.x + 1) * 50).toFixed(1) + '%');
    renderer.render(scene, camera);
    animId = requestAnimationFrame(frame);
  }

  void document.fonts.ready.then(() => {
    if (disposed) return;
    buildTextures(); resize();
    animId = requestAnimationFrame(frame);
  });

  return () => {
    disposed = true;
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', onPointer);
    st.kill();
    textures.forEach(tex => tex.dispose());
    renderer.dispose();
  };
}

export default function PhoneFlip({ lang }: { lang: Lang }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const stageRef   = useRef<HTMLDivElement>(null);
  const panelsRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas   = canvasRef.current;
    const stageEl  = stageRef.current;
    const panelsEl = panelsRef.current;
    if (!canvas || !stageEl || !panelsEl) return;
    return buildScene(canvas, stageEl, panelsEl, lang);
  }, [lang]);

  const isRtl = lang === 'ar';
  const sections = COPY[lang].sections;

  return (
    <section ref={stageRef} className="pf-stage" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="pf-canvas-wrap" aria-hidden="true">
        <canvas ref={canvasRef} className="pf-canvas" />
      </div>
      <div ref={panelsRef} className="pf-panels">
        {sections.map((s, i) => {
          const phoneRight = (i % 2 === 0) !== isRtl;
          const side = phoneRight ? 'l' : 'r';
          const sideCls = isRtl ? (side === 'l' ? 'r' : 'l') : side;
          if ('hero' in s && s.hero) {
            return (
              <div key={i} className={`pf-panel pf-${sideCls}`}>
                <div className="pf-copy">
                  <h1>{s.h1}<em>{s.em}</em></h1>
                  <p>{s.p}</p>
                  <div className="pf-cue"><span className="pf-cue-icon" />{s.cue}</div>
                </div>
              </div>
            );
          }
          const ns = s as StepSection;
          return (
            <div key={i} className={`pf-panel pf-${sideCls}`}>
              <div className="pf-copy">
                <div className="pf-num">{ns.n}</div>
                <h2>{ns.h}</h2>
                <p>{ns.p}</p>
                <ul>{ns.li.map((item, j) => <li key={j}>{item}</li>)}</ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
