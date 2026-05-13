// Cubicle Mobile — shared primitives + Icon set (inline Lucide).
// All icons use stroke-2, rounded caps — matches Cubicle's Lucide house style.

const { useState: useStateMP } = React;

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    home:    <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></>,
    search:  <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
    plus:    <><path d="M5 12h14"/><path d="M12 5v14"/></>,
    bell:    <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>,
    user:    <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    chev:    <path d="m9 18 6-6-6-6"/>,
    chevDown:<path d="m6 9 6 6 6-6"/>,
    back:    <><path d="m15 18-6-6 6-6"/></>,
    close:   <><path d="M18 6 6 18"/><path d="M6 6l12 12"/></>,
    more:    <><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/></>,
    filter:  <><path d="M22 3H2l8 9.46V19l4 2v-8.54z"/></>,
    sort:    <><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h4"/><path d="M11 8h7"/><path d="M11 12h10"/></>,
    check:   <path d="M20 6 9 17l-5-5"/>,
    settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.11.25.34.43.6.51H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    mail:    <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
    lock:    <><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    eye:     <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></>,
    eyeOff:  <><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08a11 11 0 0 1 1.27-.08c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><path d="M2 2l20 20"/></>,
    arrow:   <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    up:      <><path d="m5 15 7-7 7 7"/></>,
    down:    <><path d="m5 9 7 7 7-7"/></>,
    inbox:   <><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></>,
    clock:   <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    cal:     <><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></>,
    cam:     <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></>,
    gift:    <><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></>,
    trash:   <><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></>,
    edit:    <><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></>,
    share:   <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></>,
    help:    <><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    wifi:    <><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></>,
    globe:   <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>,
    shield:  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    card:    <><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></>,
    bolt:    <path d="M13 2 3 14h9l-1 8 10-12h-9z"/>,
    coffee:  <><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></>,
    wallet:  <><path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></>,
    graph:   <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    fingerprint:<><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M17.29 21.02A10 10 0 0 0 22 12.63"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.5 16.5c-.5 1.5-1 3-1.8 4.4"/><path d="M10.66 18c-.2.3-.5.6-.9.83"/><path d="M12 8c-1.7 0-3 1.3-3 3 0 4.5-2 8-3 9"/><path d="M11.75 18A7 7 0 0 0 15 11a3 3 0 0 0-3-3"/></>,
    hash:    <><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></>,
    star:    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>,
    warning: <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    wifi_off:<><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></>,
    layers:  <><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></>,
    moon:    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>,
    sun:     <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></>,
    refresh: <><path d="M21 2v6h-6"/><path d="M21 13a9 9 0 1 1-3-7.7L21 8"/></>,
    map:     <><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></>,
    phone:   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.53 6.53l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>,
    link:    <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

// Cubicle's local SVG sprite (copied in assets/icons.svg). Provide brand-specific glyphs.
function BrandIcon({ name, size = 20 }) {
  // name: 'github' | 'discord' | 'x' | 'bluesky' | 'documentation' | 'social'
  return <svg width={size} height={size} aria-hidden><use href="../../assets/icons.svg#" /></svg>;
}

function cx(...a) { return a.filter(Boolean).join(' '); }

function Button({ variant='default', size, className, children, ...rest }) {
  const s = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';
  const full = size === 'full' ? 'btn-full' : '';
  return <button className={cx('btn', `btn-${variant}`, s, full, className)} {...rest}>{children}</button>;
}

function Input(props) { return <input className={cx('input', props.className)} {...props} />; }
function Textarea(props) { return <textarea className={cx('textarea', props.className)} {...props} />; }

function Field({ label, hint, err, children }) {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      {children}
      {err ? <span className="err">{err}</span> : hint ? <span className="hint">{hint}</span> : null}
    </div>
  );
}

function Badge({ variant='default', children }) {
  return <span className={cx('badge', variant !== 'default' && `badge-${variant}`)}>{children}</span>;
}

function Avatar({ initials, size, bg, fg }) {
  const cls = size === 'lg' ? 'avatar avatar-lg' : 'avatar';
  return <span className={cls} style={bg?{background:bg,color:fg,border:'none'}:{}}>{initials}</span>;
}

function Switch({ checked, onChange }) {
  return <span className={cx('switch', checked && 'on')} onClick={() => onChange(!checked)} role="switch" aria-checked={checked}></span>;
}

function Checkbox({ checked, onChange }) {
  return <span className={cx('checkbox', checked && 'on')} onClick={() => onChange(!checked)} role="checkbox" aria-checked={checked}></span>;
}

function Radio({ checked, onChange }) {
  return <span className={cx('radio', checked && 'on')} onClick={() => onChange(true)} role="radio" aria-checked={checked}></span>;
}

function Chip({ active, children, onClick }) {
  return <button className={cx('chip', active && 'active')} onClick={onClick}>{children}</button>;
}

function SearchInput({ value, onChange, placeholder='Search' }) {
  return (
    <label className="search">
      <Icon name="search" size={16} />
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </label>
  );
}

// ===== Layout pieces =====

function AppBar({ title, onBack, onMore, action }) {
  return (
    <div className="appbar">
      {onBack ? (
        <button className="icon-btn" onClick={onBack} aria-label="Back"><Icon name="back" /></button>
      ) : <span style={{width:36}} />}
      <span className="title">{title}</span>
      {action || (onMore ? <button className="icon-btn" onClick={onMore} aria-label="More"><Icon name="more" /></button> : <span style={{width:36}} />)}
    </div>
  );
}

function LargeTitleBar({ title, kicker, action }) {
  const titleOnly = !kicker && !action;
  return (
    <div className="appbar large">
      {kicker && <div className="caption" style={{padding:'0 4px'}}>{kicker}</div>}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
        <h1 style={titleOnly ? {width:'100%',textAlign:'center'} : {}}>{title}</h1>
        {action}
      </div>
    </div>
  );
}

const TABS = [
  { id: 'home',    label: 'Home',   icon: 'home' },
  { id: 'search',  label: 'Search', icon: 'search' },
  { id: 'create',  label: 'New',    icon: 'plus' },
  { id: 'inbox',   label: 'Inbox',  icon: 'inbox' },
  { id: 'profile', label: 'Me',     icon: 'user' },
];

function TabBar({ active, onNav }) {
  return (
    <nav className="tabbar">
      {TABS.map(t => (
        <button key={t.id} className={cx('tab', active === t.id && 'active')} onClick={() => onNav(t.id)}>
          <Icon name={t.icon} size={22} />
          {t.label}
        </button>
      ))}
    </nav>
  );
}

// ===== Feedback primitives =====

function BottomSheet({ open, onClose, title, desc, children }) {
  if (!open) return null;
  return (
    <div className="sheet-overlay" onClick={onClose}>
      <div className="bottom-sheet" onClick={e => e.stopPropagation()}>
        <span className="handle" />
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
        {children}
      </div>
    </div>
  );
}

function AlertDialog({ open, title, desc, confirm='Confirm', cancel='Cancel', destructive, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="alert-dialog" onClick={e => e.stopPropagation()}>
        <h3>{title}</h3>
        {desc && <p>{desc}</p>}
        <div className="row">
          <button className="btn btn-outline" onClick={onCancel}>{cancel}</button>
          <button className={cx('btn', destructive ? 'btn-destructive' : 'btn-default')} onClick={onConfirm}>{confirm}</button>
        </div>
      </div>
    </div>
  );
}

function Toast({ toast }) {
  if (!toast) return null;
  const icon = toast.type === 'success' ? 'check' : toast.type === 'error' ? 'warning' : 'bell';
  return (
    <div className="toast-host">
      <div className={cx('toast', toast.type)}>
        <span className="icon"><Icon name={icon} size={16} /></span>
        <span className="msg">{toast.msg}</span>
      </div>
    </div>
  );
}

// ===== State pieces =====

function EmptyState({ icon='inbox', title, desc, action }) {
  return (
    <div className="state">
      <div className="pic"><Icon name={icon} size={26} /></div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {action}
    </div>
  );
}

function Skeleton({ h=12, w='100%', r=6 }) {
  return <div className="skel" style={{height:h,width:w,borderRadius:r}} />;
}

function KPI({ label, value, delta, direction='up' }) {
  return (
    <div className="kpi">
      <span className="label">{label}</span>
      <span className="val">{value}</span>
      {delta && (
        <span className={cx('delta', direction)}>
          <Icon name={direction==='up'?'up':'down'} size={12} /> {delta}
        </span>
      )}
    </div>
  );
}

function Progress({ value }) {
  return <div className="progress"><div style={{width: Math.max(0, Math.min(100, value)) + '%'}} /></div>;
}

// ===== Bare SVG line chart =====
function LineChart({ data, height=120, color='var(--foreground)' }) {
  const max = Math.max(...data), min = Math.min(...data), range = max - min || 1;
  const w = 100;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = height - ((v - min) / range) * (height - 16) - 8;
    return `${x},${y}`;
  }).join(' ');
  const area = `M0,${height} L${pts.split(' ').join(' L')} L${w},${height} Z`;
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" style={{overflow:'visible'}}>
      <path d={area} fill={color} fillOpacity="0.08" />
      <polyline fill="none" stroke={color} strokeWidth="1.2" vectorEffect="non-scaling-stroke" points={pts} />
    </svg>
  );
}

// Bar chart
function BarChart({ data, height=120, color='var(--primary)' }) {
  const max = Math.max(...data) || 1;
  return (
    <div style={{display:'flex',alignItems:'flex-end',gap:6,height}}>
      {data.map((v, i) => (
        <div key={i} style={{flex:1,background:color,borderRadius:'3px 3px 0 0', height: `${(v / max) * 100}%`, minHeight: 4, opacity: 0.9}} />
      ))}
    </div>
  );
}

// ===== Select (native, styled) =====

function Select({ value, onChange, options, className }) {
  return (
    <div className="select-wrap">
      <select className={cx('select', className)} value={value} onChange={e => onChange(e.target.value)}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <span className="select-icon"><Icon name="chevDown" size={14} /></span>
    </div>
  );
}

// ===== File / image picker =====

function FilePicker({ label='Add photo', desc='PNG or JPG, up to 10 MB' }) {
  const [file, setFile] = useStateMP(null);
  return (
    <label className="file-pick">
      <Icon name="cam" size={22} />
      <div>
        <div style={{font:'500 14px/1 var(--font-sans)',color:'var(--foreground)'}}>{file ? file.name : label}</div>
        {!file && <div style={{font:'400 12px/1.4 var(--font-sans)',color:'var(--muted-foreground)',marginTop:4}}>{desc}</div>}
      </div>
      <input type="file" accept="image/*" style={{display:'none'}} onChange={e => setFile(e.target.files[0])} />
    </label>
  );
}

// ===== Pie chart (bare SVG) =====

function PieChart({ data, size=120 }) {
  // data: [{ value, color, label }]
  const total = data.reduce((a, d) => a + d.value, 0) || 1;
  let angle = -Math.PI / 2;
  const r = size / 2 - 4, cx_ = size / 2, cy_ = size / 2;
  const slices = data.map(d => {
    const sweep = (d.value / total) * 2 * Math.PI;
    const x1 = cx_ + r * Math.cos(angle), y1 = cy_ + r * Math.sin(angle);
    angle += sweep;
    const x2 = cx_ + r * Math.cos(angle), y2 = cy_ + r * Math.sin(angle);
    return { ...d, path: `M${cx_},${cy_} L${x1},${y1} A${r},${r} 0 ${sweep > Math.PI ? 1 : 0},1 ${x2},${y2} Z` };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {slices.map((s, i) => <path key={i} d={s.path} fill={s.color} />)}
    </svg>
  );
}

// ===== Accordion =====
function Accordion({ items }) {
  const [open, setOpen] = useStateMP(null);
  return (
    <div style={{borderRadius:12,border:'1px solid var(--border)',overflow:'hidden'}}>
      {items.map((it, i) => (
        <div key={i} style={{borderBottom: i<items.length-1 ? '1px solid var(--border)' : 'none'}}>
          <button onClick={() => setOpen(open===i ? null : i)}
            style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',padding:'14px 16px',background:'none',border:'none',font:'500 14px/1.2 var(--font-sans)',color:'var(--foreground)',textAlign:'left',cursor:'pointer'}}>
            {it.trigger}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{flexShrink:0,color:'var(--muted-foreground)',transform: open===i?'rotate(180deg)':'none',transition:'transform .2s'}}>
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          {open===i && <div style={{padding:'0 16px 14px',font:'400 13px/1.6 var(--font-sans)',color:'var(--muted-foreground)'}}>{it.content}</div>}
        </div>
      ))}
    </div>
  );
}

// ===== Toggle =====
function Toggle({ pressed, onToggle, children }) {
  return (
    <button onClick={() => onToggle?.(!pressed)}
      style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:6,height:36,padding:'0 14px',borderRadius:8,border:'1px solid',cursor:'pointer',font:'500 13px/1 var(--font-sans)',
        background: pressed ? 'var(--primary)' : 'transparent',
        color: pressed ? 'var(--primary-foreground)' : 'var(--foreground)',
        borderColor: pressed ? 'var(--primary)' : 'var(--border)',
        transition:'background .15s,color .15s,border-color .15s'}}>
      {children}
    </button>
  );
}

// ===== Breadcrumb =====
function Breadcrumb({ items }) {
  const sep = <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--border)'}}><path d="m9 18 6-6-6-6"/></svg>;
  return (
    <div style={{display:'flex',alignItems:'center',flexWrap:'wrap',gap:5,font:'400 13px/1 var(--font-sans)',color:'var(--muted-foreground)'}}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && sep}
          {it.onClick
            ? <span onClick={it.onClick} style={{cursor:'pointer'}}>{it.label}</span>
            : <span style={{color:'var(--foreground)'}}>{it.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

// ===== Pagination =====
function Pagination({ page=1, total=1, onChange }) {
  const chevL = <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
  const chevR = <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
  const mkBtn = (content, disabled, onClick, active) => (
    <button onClick={onClick} disabled={disabled} style={{display:'inline-flex',alignItems:'center',justifyContent:'center',minWidth:32,height:32,padding:'0 6px',borderRadius:6,border:'1px solid',cursor:disabled?'default':'pointer',font:'400 13px/1 var(--font-sans)',
      background: active ? 'var(--primary)' : 'transparent',
      color: active ? 'var(--primary-foreground)' : disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
      borderColor: active ? 'var(--primary)' : 'var(--border)', opacity: disabled ? .4 : 1}}>
      {content}
    </button>
  );
  return (
    <div style={{display:'flex',alignItems:'center',gap:4}}>
      {mkBtn(chevL, page<=1, ()=>onChange?.(page-1))}
      {Array.from({length:total},(_,i)=>i+1).map(p => mkBtn(p, false, ()=>onChange?.(p), page===p))}
      {mkBtn(chevR, page>=total, ()=>onChange?.(page+1))}
    </div>
  );
}

Object.assign(window, {
  cx, Icon, BrandIcon, Button, Input, Textarea, Field, Badge, Avatar, Switch, Checkbox, Radio, Chip, SearchInput,
  AppBar, LargeTitleBar, TabBar, TABS,
  BottomSheet, AlertDialog, Toast, EmptyState, Skeleton, KPI, Progress, LineChart, BarChart,
  Select, FilePicker, PieChart,
  Accordion, Toggle, Breadcrumb, Pagination,
});
