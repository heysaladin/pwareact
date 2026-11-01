'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './phone-flip.css';

gsap.registerPlugin(ScrollTrigger);

type Lang = 'en' | 'ar';

type Section = { n: string; h: string; p: string; li: string[] };

const COPY: Record<Lang, { sections: Section[] }> = {
  en: {
    sections: [
      { n: '01', h: 'Apply securely with Tamawal', p: 'Verify your identity with Nafath and share your data only with your consent.', li: ['Nafath identity check', 'Encrypted end to end', 'You control every consent'] },
      { n: '02', h: 'Compare offers', p: 'Every eligible offer side by side: monthly installment, APR and total cost.', li: ['Ranked by total cost', 'Filter by tenure and amount', 'Save offers for later'] },
      { n: '03', h: 'Get your money', p: 'Accept, sign digitally, and receive funds directly in your bank account.', li: ['Digital contract signing', 'Track every step live', 'Funds to your IBAN'] },
    ],
  },
  ar: {
    sections: [
      { n: '01', h: 'قدّم طلبك بأمان مع تموّل', p: 'تحقّق من هويتك عبر نفاذ، وشارك بياناتك بموافقتك فقط.', li: ['التحقق من الهوية عبر نفاذ', 'تشفير كامل للبيانات', 'أنت تتحكّم في كل موافقة'] },
      { n: '02', h: 'قارن العروض', p: 'جميع العروض المتاحة لك جنبًا إلى جنب: القسط الشهري والنسبة السنوية والتكلفة الإجمالية.', li: ['مرتّبة حسب التكلفة الإجمالية', 'فلترة حسب المدة والمبلغ', 'احفظ العروض لوقت لاحق'] },
      { n: '03', h: 'استلم تمويلك', p: 'اقبل العرض، ووقّع رقميًا، واستلم المبلغ مباشرة في حسابك البنكي.', li: ['توقيع العقد إلكترونيًا', 'تابع كل خطوة لحظيًا', 'التحويل إلى الآيبان مباشرة'] },
    ],
  },
};

function buildScene(
  canvas: HTMLCanvasElement,
  stageEl: HTMLDivElement,
  panelsEl: HTMLDivElement,
  lang: Lang,
): () => void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isRtl = lang === 'ar';

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

  // ── Phone models (GLB) ────────────────────────────────────────────────
  // section index → model group (0 = batangan/pro, 1 = duo/fold)
  const MODEL_MAP = [0, 1, 1];

  const phone = new THREE.Group(); scene.add(phone);
  const batanganGroup = new THREE.Group();
  const duoGroup = new THREE.Group();
  batanganGroup.visible = true;
  duoGroup.visible = false;
  phone.add(batanganGroup);
  phone.add(duoGroup);
  const phoneGroups = [batanganGroup, duoGroup];

  let duoMixer: THREE.AnimationMixer | null = null;
  let duoAction: THREE.AnimationAction | null = null;

  const gltfLoader = new GLTFLoader();

  function fitModel(model: THREE.Object3D, targetHeight: number) {
    const box3 = new THREE.Box3().setFromObject(model);
    const size = box3.getSize(new THREE.Vector3());
    const center = box3.getCenter(new THREE.Vector3());
    const s = targetHeight / Math.max(size.x, size.y, size.z);
    model.scale.setScalar(s);
    model.position.copy(center).multiplyScalar(-s);
  }

  gltfLoader.loadAsync('/models/iphone-pro.glb').then(gltf => {
    fitModel(gltf.scene, 1.55);
    batanganGroup.add(gltf.scene);
  });

  gltfLoader.loadAsync('/models/iphone-duo.glb').then(gltf => {
    fitModel(gltf.scene, 1.6);
    duoGroup.add(gltf.scene);
    if (gltf.animations.length) {
      duoMixer = new THREE.AnimationMixer(gltf.scene);
      duoAction = duoMixer.clipAction(gltf.animations[0]);
      duoAction.play();
      duoAction.paused = true;
      duoAction.time = 0;
      duoMixer.update(0);
    }
  });

  // shadow
  const shCan = document.createElement('canvas'); shCan.width = shCan.height = 128;
  const sg = shCan.getContext('2d')!;
  const rg = sg.createRadialGradient(64, 64, 0, 64, 64, 64);
  rg.addColorStop(0, 'rgba(11,27,51,.35)');
  rg.addColorStop(1, 'rgba(11,27,51,0)');
  sg.fillStyle = rg; sg.fillRect(0, 0, 128, 128);
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.4, 0.32),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shCan), transparent: true, depthWrite: false }),
  );
  shadow.position.set(0, -1.05, 0); scene.add(shadow);

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
        x: (right ? 1 : -1) * edgeX * mirror * (i === 2 ? 0.42 : 1),
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

  let currentModel = 0, activePanel = -1;
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
    shadow.position.x = phone.position.x + (currentModel === 1 ? (phone.position.x < 0 ? -0.1 : 0.3) : 0);
    shadow.position.y = phone.position.y - 1.05 * phone.scale.x;
    shadow.scale.setScalar(phone.scale.x * (1 - 0.3 * arc));
    (shadow.material as THREE.MeshBasicMaterial).opacity = 1 - 0.5 * arc;

    const tidx = e < 0.5 ? i : i + 1;
    const mIdx = MODEL_MAP[tidx] ?? 0;
    if (mIdx !== currentModel) {
      if (currentModel >= 0) phoneGroups[currentModel].visible = false;
      phoneGroups[mIdx].visible = true;
      currentModel = mIdx;
    }
    if (mIdx === 1 && duoMixer && duoAction) {
      const dur = duoAction.getClip().duration;
      const t2 = i === 1 ? ease(clamp((seg - i - 0.2) / 0.6)) * dur : (tidx === 1 ? 0 : dur);
      duoAction.time = t2;
      duoMixer.update(0);
    }

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
    resize();
    animId = requestAnimationFrame(frame);
  });

  return () => {
    disposed = true;
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', onPointer);
    st.kill();
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
          return (
            <div key={i} className={`pf-panel pf-${sideCls}`}>
              <div className="pf-copy">
                <div className="pf-num">{s.n}</div>
                <h2>{s.h}</h2>
                <p>{s.p}</p>
                <ul>{s.li.map((item, j) => <li key={j}>{item}</li>)}</ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
