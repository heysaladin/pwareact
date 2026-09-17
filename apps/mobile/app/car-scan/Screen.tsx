'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

type Stage = 'scan' | 'loading' | 'results';

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: '2024',
  trim: '2.5L GLE',
  price: 109_000,
  color: 'Pearl White',
};

const offers = [
  {
    id: 1,
    bank: 'Al Rajhi Bank',
    initials: 'AR',
    bgColor: '#1a5276',
    monthly: 1_843,
    down: 10_900,
    tenor: 60,
    rate: 4.5,
    tagEn: 'Best Rate',
    tagColor: '#0063F5',
  },
  {
    id: 2,
    bank: 'Riyad Bank',
    initials: 'RB',
    bgColor: '#1e8449',
    monthly: 1_920,
    down: 10_900,
    tenor: 60,
    rate: 4.8,
    tagEn: null,
    tagColor: null,
  },
  {
    id: 3,
    bank: 'Saudi Fransi',
    initials: 'SF',
    bgColor: '#6c3483',
    monthly: 1_756,
    down: 21_800,
    tenor: 60,
    rate: 5.0,
    tagEn: 'Low Monthly',
    tagColor: '#F97316',
  },
];

const css = `
  @keyframes scan-line {
    0%   { top: 8%;  opacity: 1; }
    48%  { opacity: 1; }
    50%  { top: 86%; opacity: 0.4; }
    52%  { opacity: 1; }
    100% { top: 8%;  opacity: 1; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1);   opacity: 0.6; }
    100% { transform: scale(1.7); opacity: 0;   }
  }
  @keyframes flash {
    0%   { opacity: 0; }
    20%  { opacity: 1; }
    100% { opacity: 0; }
  }
`;

/* ─── Scan Screen ─────────────────────────────────────────── */

function ScanScreen({ onCapture }: { onCapture: (dataUrl: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [camReady, setCamReady] = useState(false);
  const [camError, setCamError] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    let cancelled = false;
    navigator.mediaDevices
      ?.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
      .then((stream) => {
        if (cancelled) { stream.getTracks().forEach((t) => t.stop()); return; }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setCamReady(true);
          };
        }
      })
      .catch(() => { if (!cancelled) setCamError(true); });

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const capture = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) { onCapture(''); return; }

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

    // Flash effect then navigate
    setFlash(true);
    setTimeout(() => onCapture(dataUrl), 200);
  }, [onCapture]);

  return (
    <div className="flex flex-col h-full bg-black text-white select-none">
      <style>{css}</style>

      {/* Status bar */}
      <div className="h-[44px] shrink-0 flex items-end justify-between px-6 pb-2 z-10">
        <span className="text-[15px] font-semibold">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><rect x="0" y="3" width="3" height="9" rx="0.5"/><rect x="4.5" y="2" width="3" height="10" rx="0.5"/><rect x="9" y="0.5" width="3" height="11.5" rx="0.5"/><rect x="13.5" y="0" width="2.5" height="12" rx="0.5" opacity="0.3"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="3.5" stroke="white" strokeOpacity="0.35"/><rect x="1.5" y="1.5" width="18" height="9" rx="2.5" fill="white"/><path d="M23.5 4.5v3a1.5 1.5 0 000-3z" fill="white" fillOpacity="0.4"/></svg>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 shrink-0 z-10">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="text-[15px] font-semibold">Car Scan</span>
        <div className="w-8 h-8" />
      </div>

      {/* Viewfinder — fills remaining space */}
      <div className="flex-1 relative overflow-hidden">
        {/* Live camera feed */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          muted
          style={{ display: camReady ? 'block' : 'none' }}
        />
        {/* Hidden canvas for capture */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Fallback when no camera */}
        {!camReady && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center">
            {camError ? (
              <p className="text-white/40 text-sm text-center px-8">
                Camera access denied.<br />Allow camera permission to scan.
              </p>
            ) : (
              <div className="w-6 h-6 rounded-full border-2 border-white/30 border-t-white" style={{ animation: 'spin 0.9s linear infinite' }} />
            )}
          </div>
        )}

        {/* Dim vignette overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />

        {/* Scan-frame bracket overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative" style={{ width: '78%', aspectRatio: '4/3' }}>
            {/* Scan line */}
            <div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent"
              style={{ animation: 'scan-line 2.2s ease-in-out infinite' }}
            />
            {/* Corners */}
            {[
              'top-0 left-0 border-t-[3px] border-l-[3px]',
              'top-0 right-0 border-t-[3px] border-r-[3px]',
              'bottom-0 left-0 border-b-[3px] border-l-[3px]',
              'bottom-0 right-0 border-b-[3px] border-r-[3px]',
            ].map((cls, i) => (
              <div key={i} className={`absolute ${cls} w-7 h-7 border-[#F97316] rounded-sm`} />
            ))}
          </div>
        </div>

        {/* White flash on capture */}
        {flash && (
          <div
            className="absolute inset-0 bg-white pointer-events-none"
            style={{ animation: 'flash 0.35s ease forwards' }}
          />
        )}
      </div>

      {/* Instructions */}
      <div className="flex flex-col items-center gap-1.5 px-8 pt-5 pb-4 shrink-0 z-10">
        <p className="text-sm font-medium text-white/80 text-center">Point camera at the vehicle</p>
        <p className="text-xs text-white/40 text-center">Make sure the full car is visible in frame</p>
      </div>

      {/* Capture button */}
      <div className="flex flex-col items-center gap-6 pb-10 shrink-0 z-10">
        <button
          onClick={capture}
          className="relative w-[72px] h-[72px] flex items-center justify-center active:scale-95 transition-transform"
        >
          <div className="absolute inset-0 rounded-full border-[3px] border-white/40" />
          <div className="w-[58px] h-[58px] rounded-full bg-white" />
        </button>
        <div className="w-[134px] h-[5px] bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

/* ─── Loading Screen ──────────────────────────────────────── */

function LoadingScreen({ photo }: { photo: string }) {
  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]">
      <style>{css}</style>

      {/* Captured photo fills top half, dimmed */}
      <div className="relative flex-1 overflow-hidden">
        {photo ? (
          <img src={photo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        ) : (
          <div className="absolute inset-0 bg-[#111]" />
        )}
        {/* Scan overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#F97316]/30" style={{ animation: 'pulse-ring 1.4s ease-out infinite' }} />
              <div
                className="w-16 h-16 rounded-full border-[3px] border-[#f8fafc]/20 border-t-[#F97316]"
                style={{ animation: 'spin 0.9s linear infinite' }}
              />
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <p className="text-white text-[15px] font-semibold">Analyzing vehicle…</p>
              <p className="text-white/40 text-[13px] text-center leading-relaxed">
                Fetching specs, market value<br />and financing offers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Results Screen ──────────────────────────────────────── */

function ResultsScreen({ photo }: { photo: string }) {
  const [applied, setApplied] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-full bg-[#f8fafc]">
      <style>{css}</style>

      {/* Status bar */}
      <div className="h-[44px] shrink-0 bg-white flex items-end justify-between px-6 pb-2">
        <span className="text-[15px] font-semibold text-[#101828]">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#101828"><rect x="0" y="3" width="3" height="9" rx="0.5"/><rect x="4.5" y="2" width="3" height="10" rx="0.5"/><rect x="9" y="0.5" width="3" height="11.5" rx="0.5"/><rect x="13.5" y="0" width="2.5" height="12" rx="0.5" opacity="0.3"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="3.5" stroke="#101828" strokeOpacity="0.35"/><rect x="1.5" y="1.5" width="18" height="9" rx="2.5" fill="#101828"/><path d="M23.5 4.5v3a1.5 1.5 0 000-3z" fill="#101828" fillOpacity="0.4"/></svg>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>

        {/* Captured photo hero */}
        {photo && (
          <div className="relative w-full bg-black" style={{ aspectRatio: '4/3', animation: 'fade-up 0.35s ease both' }}>
            <img src={photo} alt="Captured car" className="w-full h-full object-cover" />
            {/* Detected badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-white text-[11px] font-semibold">Vehicle Detected</span>
            </div>
          </div>
        )}

        {/* Car details card */}
        <div
          className="bg-white px-5 pt-5 pb-6"
          style={{ animation: 'fade-up 0.4s ease 0.05s both' }}
        >
          {!photo && (
            <div className="w-full h-[180px] bg-[#f8fafc] rounded-xl mb-5 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M3 17h18M5 17V9l2-4h10l2 4v8" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7.5" cy="17.5" r="1.5" fill="#d1d5db"/>
                <circle cx="16.5" cy="17.5" r="1.5" fill="#d1d5db"/>
              </svg>
            </div>
          )}

          <div className="flex items-start gap-3">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#F97316]">Detected</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-medium text-green-600">Verified</span>
                </div>
              </div>
              <p className="text-[20px] font-bold text-[#101828] leading-tight">
                {car.year} {car.make} {car.model}
              </p>
              <p className="text-[13px] text-[#667085] mt-0.5">{car.trim} · {car.color}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-5">
            {[
              { label: 'Market Price', value: `SAR ${car.price.toLocaleString()}` },
              { label: 'Year', value: car.year },
              { label: 'Condition', value: 'New' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#f8fafc] rounded-xl p-3">
                <p className="text-[10px] font-medium text-[#9aa4b2] uppercase tracking-wide mb-1">{stat.label}</p>
                <p className="text-[13px] font-semibold text-[#101828]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financing offers */}
        <div className="px-4 pt-5 pb-4">
          <p className="text-[12px] font-semibold tracking-widest uppercase text-[#667085] mb-4">
            Financing Offers · {offers.length} banks
          </p>

          <div className="flex flex-col gap-3">
            {offers.map((offer, i) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#eef1f6]"
                style={{ animation: `fade-up 0.4s ease ${0.12 + i * 0.08}s both` }}
              >
                <div className="flex items-center gap-3 px-4 pt-4 pb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                    style={{ backgroundColor: offer.bgColor }}
                  >
                    {offer.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-semibold text-[#101828]">{offer.bank}</p>
                    <p className="text-[11px] text-[#9aa4b2]">{offer.rate}% annual rate</p>
                  </div>
                  {offer.tagEn && (
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ color: offer.tagColor!, backgroundColor: offer.tagColor! + '18' }}
                    >
                      {offer.tagEn}
                    </span>
                  )}
                </div>

                <div className="h-px bg-[#eef1f6] mx-4" />

                <div className="grid grid-cols-3 px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[10px] text-[#9aa4b2] font-medium">Monthly</p>
                    <p className="text-[16px] font-bold text-[#101828]">{offer.monthly.toLocaleString()}</p>
                    <p className="text-[10px] text-[#9aa4b2]">SAR / mo</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[10px] text-[#9aa4b2] font-medium">Down Payment</p>
                    <p className="text-[14px] font-semibold text-[#101828]">{offer.down.toLocaleString()}</p>
                    <p className="text-[10px] text-[#9aa4b2]">SAR</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[10px] text-[#9aa4b2] font-medium">Tenor</p>
                    <p className="text-[14px] font-semibold text-[#101828]">{offer.tenor}</p>
                    <p className="text-[10px] text-[#9aa4b2]">months</p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <button
                    onClick={() => setApplied(offer.id)}
                    className="w-full h-[42px] rounded-xl text-[13px] font-semibold transition-colors flex items-center justify-center gap-2"
                    style={
                      applied === offer.id
                        ? { backgroundColor: '#ecfdf5', color: '#059669' }
                        : { backgroundColor: offer.bgColor + '12', color: offer.bgColor }
                    }
                  >
                    {applied === offer.id ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Application Sent
                      </>
                    ) : 'Apply Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-6" />
      </div>

      {/* Home indicator */}
      <div className="h-[34px] bg-white flex items-center justify-center shrink-0 border-t border-[#eef1f6]">
        <div className="w-[134px] h-[5px] bg-[#101828]/20 rounded-full" />
      </div>
    </div>
  );
}

/* ─── Root Screen ─────────────────────────────────────────── */

export function Screen({ mobile }: { mobile: boolean }) {
  const [stage, setStage] = useState<Stage>('scan');
  const [photo, setPhoto] = useState('');

  function handleCapture(dataUrl: string) {
    setPhoto(dataUrl);
    setStage('loading');
    setTimeout(() => setStage('results'), 2600);
  }

  const content = (
    <>
      {stage === 'scan'    && <ScanScreen onCapture={handleCapture} />}
      {stage === 'loading' && <LoadingScreen photo={photo} />}
      {stage === 'results' && <ResultsScreen photo={photo} />}
    </>
  );

  if (mobile) {
    return <div className="h-svh w-full overflow-hidden">{content}</div>;
  }

  return (
    <div className="min-h-screen bg-[#eef1f6] flex items-center justify-center py-12">
      <div
        className="relative overflow-hidden rounded-[44px] shadow-2xl"
        style={{ width: '375px', height: '812px', border: '10px solid #1a1a2e' }}
      >
        {content}
      </div>
    </div>
  );
}
