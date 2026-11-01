'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function DownloadMockup() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 160 / 280, 0.1, 50);
    camera.position.set(0, 0, 5.6);

    // environment
    {
      const env = new THREE.Scene();
      env.add(new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial({ color: 0x1a2a50, side: THREE.BackSide })));
      const ep = (w: number, h: number, x: number, y: number, z: number, ry: number, rx: number, c: number) => {
        const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
        m.position.set(x, y, z); m.rotation.set(rx, ry, 0); env.add(m);
      };
      ep(14, 6, 0, 9, 0, 0, Math.PI / 2, 0xffffff);
      ep(3, 14, -9, 0, 2, Math.PI / 2, 0, 0xaac4ff);
      ep(3, 14, 9, 0, -2, -Math.PI / 2, 0, 0xfff0d0);
      ep(10, 3, 0, -2, -9, 0, 0, 0x6699ff);
      const pm = new THREE.PMREMGenerator(renderer);
      scene.environment = pm.fromScene(env, 0.04).texture;
      pm.dispose();
    }
    scene.add(new THREE.HemisphereLight(0xffffff, 0x304060, 0.4));
    const key = new THREE.DirectionalLight(0xffffff, 0.8);
    key.position.set(2, 3, 4); scene.add(key);

    const phone = new THREE.Group(); scene.add(phone);
    phone.rotation.set(-0.18, -0.72, -0.2);
    phone.scale.setScalar(2.6);
    phone.position.set(0.4, -0.8, 0);

    let animId = 0;
    let disposed = false;
    let time = 0;
    let last = performance.now();
    let entryStart = -1; // -1 = not triggered yet
    const ENTRY_DURATION = 1.8;
    const ENTRY_OFFSET = -5; // how far below it starts

    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);

    function frame(now: number) {
      if (disposed) return;
      const dt = Math.min(0.05, (now - last) / 1000); last = now; time += dt;

      let entryY = 0;
      if (entryStart >= 0) {
        const elapsed = time - entryStart;
        const t = Math.min(1, elapsed / ENTRY_DURATION);
        entryY = ENTRY_OFFSET * (1 - easeOutCubic(t));
      }

      phone.position.y = -0.8 + Math.sin(time * 1.1) * 0.025 + entryY;
      phone.rotation.y = -0.72 + Math.sin(time * 0.7) * 0.015;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(frame);
    }

    const loader = new GLTFLoader();
    loader.loadAsync('/models/iphone-pro.glb').then(gltf => {
      if (disposed) return;
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const s = 1.55 / Math.max(size.x, size.y, size.z);
      gltf.scene.scale.setScalar(s);
      gltf.scene.position.copy(center).multiplyScalar(-s);
      phone.add(gltf.scene);
      resize();
      animId = requestAnimationFrame(frame);
    });

    // Trigger entrance when card scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && entryStart < 0) {
          entryStart = time;
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(canvas.parentElement ?? canvas);

    return () => {
      disposed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
