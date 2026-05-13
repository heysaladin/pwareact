// Cubicle Mobile — all screens. One component per app surface.
// Wired from App.jsx via a single `screen` router string.

const { useState: useStateScr, useEffect: useEffectScr } = React;

/* ============ 1. ONBOARDING ============ */
const ONB = [
  { title: 'Quiet by design.',       desc: 'A focus-first workspace that stays out of your way until you need it.', glyph: 'bolt' },
  { title: 'Your stack, tokenized.', desc: 'Every color, radius and shadow lives as a CSS variable. Brand it in minutes.', glyph: 'layers' },
  { title: 'Ship considered work.',  desc: 'From prototype to production on one system, one voice, one type.',      glyph: 'shield' },
];
function OnboardingScreen({ onDone }) {
  const [i, setI] = useStateScr(0);
  const s = ONB[i];
  return (
    <div className="onb">
      <div>
        <div className="art"><Icon name={s.glyph} size={48} /></div>
        <h1>{s.title}</h1>
        <p>{s.desc}</p>
      </div>
      <div>
        <div className="dots">{ONB.map((_, k) => <span key={k} className={k===i?'on':''} />)}</div>
        <div className="actions">
          {i < ONB.length - 1 ? (
            <>
              <Button variant="default" size="full" onClick={() => setI(i + 1)}>Continue</Button>
              <Button variant="ghost" size="sm" onClick={onDone}>Skip</Button>
            </>
          ) : (
            <>
              <Button variant="default" size="full" onClick={onDone}>Get started</Button>
              <Button variant="ghost" size="sm" onClick={() => setI(0)}>Back to start</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============ 2. AUTH: Login + OTP ============ */
function LoginScreen({ onNext, onBack }) {
  const [email, setEmail] = useStateScr('mira@relay.dev');
  const [pw, setPw] = useStateScr('');
  const [show, setShow] = useStateScr(false);
  return (
    <div className="screen">
      <AppBar title="Sign in" onBack={onBack} />
      <div className="scroll">
        <div>
          <h1 style={{font:'600 26px/30px var(--font-sans)',letterSpacing:'-0.8px',margin:'8px 0 4px'}}>Welcome back.</h1>
          <p style={{font:'400 15px/22px var(--font-sans)',color:'var(--muted-foreground)',margin:0}}>Enter your credentials to continue.</p>
        </div>
        <Field label="Email">
          <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@work.com" />
        </Field>
        <Field label="Password" hint="At least 8 characters.">
          <div style={{position:'relative'}}>
            <Input type={show?'text':'password'} value={pw} onChange={e=>setPw(e.target.value)} placeholder="••••••••" style={{paddingRight:44}} />
            <button type="button" onClick={()=>setShow(!show)} className="icon-btn" style={{position:'absolute',right:4,top:4,color:'var(--muted-foreground)'}} aria-label="Toggle password visibility">
              <Icon name={show?'eyeOff':'eye'} size={18} />
            </button>
          </div>
        </Field>
        <Button variant="default" size="full" onClick={() => onNext('otp')}>Continue</Button>
        <Button variant="outline" size="full"><Icon name="fingerprint" /> Use Face ID</Button>
        <p style={{textAlign:'center',font:'500 14px/1 var(--font-sans)',color:'var(--muted-foreground)',margin:'8px 0'}}>
          Forgot your password?
        </p>
      </div>
    </div>
  );
}

function OTPScreen({ onDone, onBack }) {
  const [code, setCode] = useStateScr(['2','4','7','','','']);
  const focused = code.findIndex(c => c === '');
  const setAt = (i, v) => {
    const next = [...code]; next[i] = v.slice(-1); setCode(next);
    if (v && i < 5) {
      // no-op — visual only
    }
  };
  return (
    <div className="screen">
      <AppBar title="Verify" onBack={onBack} />
      <div className="scroll">
        <div>
          <h1 style={{font:'600 26px/30px var(--font-sans)',letterSpacing:'-0.8px',margin:'8px 0 4px'}}>Check your email</h1>
          <p style={{font:'400 15px/22px var(--font-sans)',color:'var(--muted-foreground)',margin:0}}>We sent a 6-digit code to mira@relay.dev. Enter it below to continue.</p>
        </div>
        <div className="otp-row">
          {code.map((c, i) => (
            <div key={i} className={cx('cell', i === focused && 'on')}>{c}</div>
          ))}
        </div>
        <Button variant="default" size="full" onClick={onDone}>Verify and continue</Button>
        <Button variant="ghost" size="sm" style={{alignSelf:'center'}}>Resend code in 28s</Button>
      </div>
    </div>
  );
}

/* ============ 3. HOME / DASHBOARD ============ */
function HomeScreen({ onOpenTx, onToast }) {
  const [range, setRange] = useStateScr('30d');
  return (
    <div className="screen">
      <LargeTitleBar
        kicker="Cubicle"
        title="Good morning, Mira."
        action={<button className="icon-btn"><Icon name="bell" /></button>}
      />
      <div className="scroll">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          <KPI label="MRR"        value="$48.2k" delta="+12.4%" direction="up" />
          <KPI label="Active"     value="2,148"  delta="+3.1%"  direction="up" />
          <KPI label="Churn"      value="1.8%"   delta="-0.4%"  direction="down" />
          <KPI label="NPS"        value="62"     delta="+5"     direction="up" />
        </div>

        <div className="chart-card">
          <div className="chart-head">
            <div><div className="name">Revenue</div><div className="big">$48,214</div></div>
            <div className="chip-row">
              {['7d','30d','90d'].map(r => <Chip key={r} active={range===r} onClick={()=>setRange(r)}>{r}</Chip>)}
            </div>
          </div>
          <LineChart data={[12,18,14,22,28,24,30,34,31,40,38,48]} />
        </div>

        <div>
          <div className="caption" style={{margin:'4px 0 8px'}}>Quick actions</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
            {[['plus','New'],['card','Pay'],['share','Share'],['graph','Report']].map(([icon,l]) => (
              <button key={l} className="card" onClick={() => onToast(`${l} tapped`)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,padding:'14px 8px'}}>
                <span className="avatar" style={{width:36,height:36,background:'var(--muted)',border:'none'}}><Icon name={icon} size={18} /></span>
                <span style={{font:'500 12px/1 var(--font-sans)'}}>{l}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="caption" style={{margin:'4px 0 8px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span>Recent activity</span>
            <a style={{color:'var(--foreground)',fontSize:11,cursor:'pointer'}}>See all</a>
          </div>
          <div className="list">
            {[
              { t:'Payment from Acme Corp',   s:'$2,400 · 2 hours ago',    icon:'wallet',  tail:<Badge variant="success">Paid</Badge> },
              { t:'New signup — Lana Reyes',  s:'Starter plan · 4h ago',  icon:'user',    tail:<span className="trailing"><Icon name="chev" size={14} /></span> },
              { t:'Invoice #1842 overdue',    s:'Humm Inc · 1d ago',      icon:'warning', tail:<Badge variant="warning">Late</Badge> },
              { t:'Report exported',          s:'Weekly KPIs · 2d ago',   icon:'graph',   tail:<span className="trailing"><Icon name="chev" size={14} /></span> },
            ].map((r, i) => (
              <div key={i} className="list-item" onClick={onOpenTx}>
                <span className="leading"><Icon name={r.icon} size={18} /></span>
                <div className="body"><div className="t">{r.t}</div><div className="s">{r.s}</div></div>
                {r.tail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ 4. SEARCH + FILTER ============ */
function SearchScreen({ onFilter }) {
  const [q, setQ] = useStateScr('');
  const [filter, setFilter] = useStateScr('all');
  const data = [
    { t:'Acme Corp',        s:'Customer · Enterprise', icon:'wallet' },
    { t:'Weekly KPIs',      s:'Report · Updated today', icon:'graph' },
    { t:'Humm Inc',         s:'Customer · Pro',         icon:'wallet' },
    { t:'Onboarding flow',  s:'Project · In progress',  icon:'layers' },
    { t:'Mira Chen',        s:'Teammate · Design',      icon:'user' },
    { t:'Q1 Roadmap',       s:'Doc · Edited 2d ago',    icon:'hash' },
  ];
  const filtered = data.filter(d => !q || d.t.toLowerCase().includes(q.toLowerCase()) || d.s.toLowerCase().includes(q.toLowerCase()));
  const cats = [['all','All'],['customers','Customers'],['reports','Reports'],['projects','Projects'],['people','People']];
  return (
    <div className="screen">
      <LargeTitleBar title="Search" />
      <div className="scroll">
        <SearchInput value={q} onChange={setQ} placeholder="Search everything" />
        <div className="chip-row scroll-x">
          {cats.map(([id,l]) => <Chip key={id} active={filter===id} onClick={() => setFilter(id)}>{l}</Chip>)}
          <button className="chip" onClick={onFilter} aria-label="Filter">
            <Icon name="filter" size={14} /> Filters
          </button>
        </div>
        {filtered.length === 0 ? (
          <EmptyState icon="search" title="Nothing here yet" desc={`No results matching "${q}".`} />
        ) : (
          <div className="list">
            {filtered.map((d, i) => (
              <div key={i} className="list-item">
                <span className="leading"><Icon name={d.icon} size={18} /></span>
                <div className="body"><div className="t">{d.t}</div><div className="s">{d.s}</div></div>
                <span className="trailing"><Icon name="chev" size={14} /></span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============ 5. CREATE / FORM ============ */
function CreateScreen({ onDone, onCancel }) {
  const [name, setName] = useStateScr('');
  const [category, setCategory] = useStateScr('general');
  const [notify, setNotify] = useStateScr(true);
  const [priority, setPriority] = useStateScr('normal');
  const [notes, setNotes] = useStateScr('');
  const err = name.trim().length > 0 && name.trim().length < 3 ? 'Name must be at least 3 characters.' : null;

  return (
    <div className="screen">
      <div className="appbar">
        <button className="icon-btn" onClick={onCancel} aria-label="Cancel"><Icon name="close" /></button>
        <span className="title">New report</span>
        <Button variant="default" size="sm" onClick={() => !err && onDone(name || 'Untitled')} style={{height:32,padding:'0 14px'}}>Save</Button>
      </div>
      <div className="scroll">
        <Field label="Name" err={err}>
          <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Weekly KPIs" autoFocus />
        </Field>
        <Field label="Category">
          <div className="chip-row">
            {[['general','General'],['revenue','Revenue'],['growth','Growth'],['ops','Ops']].map(([v,l]) => (
              <Chip key={v} active={category===v} onClick={()=>setCategory(v)}>{l}</Chip>
            ))}
          </div>
        </Field>
        <Field label="Priority">
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {[['low','Low'],['normal','Normal'],['high','High']].map(([v,l]) => (
              <label key={v} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 0',borderBottom:'1px solid var(--border)'}}>
                <Radio checked={priority===v} onChange={()=>setPriority(v)} />
                <span style={{font:'400 15px/1 var(--font-sans)'}}>{l}</span>
              </label>
            ))}
          </div>
        </Field>
        <Field>
          <label style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'4px 0'}}>
            <span style={{font:'500 15px/1 var(--font-sans)'}}>Notify team on publish</span>
            <Switch checked={notify} onChange={setNotify} />
          </label>
        </Field>
        <Field label="Notes">
          <Textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Optional context for your team." />
        </Field>
        <Button variant="destructive" size="full" onClick={onCancel} style={{marginTop:8,height:'auto',paddingTop:14,paddingBottom:14}}><Icon name="trash" size={14} /> Discard draft</Button>
      </div>
    </div>
  );
}

/* ============ 6. INBOX / NOTIFICATIONS ============ */
function InboxScreen({ onOpenDetail, onToast }) {
  const [tab, setTab] = useStateScr('all');
  const items = [
    { cat:'alert',   t:'Invoice #1842 overdue',        s:'Humm Inc · Payment 2d late',     time:'Just now', unread:true,  icon:'warning' },
    { cat:'mention', t:'Lana mentioned you',            s:'In "Q1 Roadmap" doc',           time:'1h',      unread:true,  icon:'hash' },
    { cat:'alert',   t:'Deploy succeeded',              s:'cubicle@1.4.2 → production',    time:'3h',      unread:false, icon:'check' },
    { cat:'mention', t:'Jamal replied',                 s:'Let\'s ship it next week.',    time:'Yesterday', unread:false, icon:'mail' },
    { cat:'alert',   t:'Plan upgrade successful',       s:'Pro · $24/mo · annual',         time:'2d',      unread:false, icon:'card' },
  ];
  const filtered = tab === 'all' ? items : items.filter(i => i.cat === tab);
  return (
    <div className="screen">
      <LargeTitleBar
        title="Inbox"
        action={<button className="icon-btn" onClick={() => onToast('Marked as read')}><Icon name="check" /></button>}
      />
      <div className="scroll">
        <div className="chip-row">
          {[['all','All'],['alert','Alerts'],['mention','Mentions']].map(([v,l]) => (
            <Chip key={v} active={tab===v} onClick={()=>setTab(v)}>{l}</Chip>
          ))}
        </div>
        {filtered.length === 0 ? (
          <EmptyState icon="inbox" title="Inbox zero" desc="You're all caught up. New notifications will appear here." />
        ) : (
          <div className="list">
            {filtered.map((it, i) => (
              <div key={i} className="list-item" onClick={() => onOpenDetail(it)}>
                <span className="leading"><Icon name={it.icon} size={18} /></span>
                <div className="body">
                  <div className="t" style={{display:'flex',alignItems:'center',gap:6}}>
                    {it.unread && <span className="activity-dot" />}
                    {it.t}
                  </div>
                  <div className="s">{it.s}</div>
                </div>
                <span className="trailing" style={{font:'500 12px/1 var(--font-mono)'}}>{it.time}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function NotificationDetail({ item, onBack }) {
  return (
    <div className="screen">
      <AppBar title="Notification" onBack={onBack} />
      <div className="scroll">
        <div className="card" style={{display:'flex',flexDirection:'column',gap:12}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <span className="leading" style={{width:36,height:36,borderRadius:8,background:'var(--muted)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Icon name={item.icon} size={18} /></span>
            <div>
              <div style={{font:'600 15px/1.2 var(--font-sans)'}}>{item.t}</div>
              <div style={{font:'400 13px/1 var(--font-sans)',color:'var(--muted-foreground)',marginTop:2}}>{item.time}</div>
            </div>
          </div>
          <p style={{font:'400 14px/22px var(--font-sans)',color:'var(--foreground)',margin:0}}>{item.s}. Open the related item to take action. You can also dismiss or snooze this notification for later.</p>
          <div style={{display:'flex',gap:8}}>
            <Button variant="default">Open</Button>
            <Button variant="outline">Snooze</Button>
            <Button variant="ghost"><Icon name="trash" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ 7. PROFILE + SETTINGS ============ */
function ProfileScreen({ onOpenSettings, onLogout }) {
  return (
    <div className="screen">
      <LargeTitleBar title="Profile" action={<button className="icon-btn" onClick={onOpenSettings}><Icon name="settings" /></button>} />
      <div className="scroll">
        <div className="profile-head">
          <Avatar initials="MC" size="lg" />
          <div className="name">Mira Chen</div>
          <div className="meta">Head of Design · Relay</div>
          <div style={{marginTop:8,display:'flex',gap:8}}>
            <Button variant="outline" size="sm"><Icon name="edit" size={14} /> Edit profile</Button>
            <Button variant="outline" size="sm"><Icon name="share" size={14} /> Share</Button>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
          <KPI label="Projects" value="14" />
          <KPI label="Reports"  value="37" />
          <KPI label="Team"     value="8" />
        </div>

        <div className="list-header">Account</div>
        <div className="list">
          {[
            { t:'Account details',       icon:'user' },
            { t:'Billing and plan',      icon:'card',     tail:<Badge>Pro</Badge> },
            { t:'Team workspaces',       icon:'layers',   tail:<span className="trailing">2</span> },
            { t:'Security and privacy',  icon:'shield' },
          ].map((r, i, a) => (
            <div key={i} className="list-item" style={{padding:'18px 16px'}} onClick={onOpenSettings}>
              <span className="leading"><Icon name={r.icon} size={18} /></span>
              <div className="body"><div className="t">{r.t}</div></div>
              {r.tail || <span className="trailing"><Icon name="chev" size={14} /></span>}
            </div>
          ))}
        </div>

        <div className="list-header">Support</div>
        <div className="list">
          {[
            { t:'Help and FAQs',       icon:'help' },
            { t:'Contact support',     icon:'mail' },
            { t:'What\'s new',         icon:'gift' },
          ].map((r, i) => (
            <div key={i} className="list-item" style={{padding:'18px 16px'}}>
              <span className="leading"><Icon name={r.icon} size={18} /></span>
              <div className="body"><div className="t">{r.t}</div></div>
              <span className="trailing"><Icon name="chev" size={14} /></span>
            </div>
          ))}
        </div>

        <Button variant="destructive" size="full" onClick={onLogout} style={{height:'auto',paddingTop:14,paddingBottom:14}}>Sign out</Button>
      </div>
    </div>
  );
}

function SettingsScreen({ onBack, dark, onToggleDark }) {
  const [biometric, setBiometric] = useStateScr(true);
  const [notif, setNotif] = useStateScr(true);
  const [marketing, setMarketing] = useStateScr(false);
  const [lang] = useStateScr('English');

  return (
    <div className="screen">
      <AppBar title="Settings" onBack={onBack} />
      <div className="scroll">
        <div className="list-header">General</div>
        <div className="list">
          <div className="list-item">
            <span className="leading"><Icon name={dark?'moon':'sun'} size={18} /></span>
            <div className="body"><div className="t">Dark mode</div></div>
            <Switch checked={dark} onChange={onToggleDark} />
          </div>
          <div className="list-item">
            <span className="leading"><Icon name="globe" size={18} /></span>
            <div className="body"><div className="t">Language</div></div>
            <span className="trailing">{lang}</span>
            <Icon name="chev" size={14} />
          </div>
        </div>

        <div className="list-header">Security</div>
        <div className="list">
          <div className="list-item">
            <span className="leading"><Icon name="fingerprint" size={18} /></span>
            <div className="body"><div className="t">Biometric unlock</div><div className="s">Use Face ID to unlock the app</div></div>
            <Switch checked={biometric} onChange={setBiometric} />
          </div>
          <div className="list-item">
            <span className="leading"><Icon name="lock" size={18} /></span>
            <div className="body"><div className="t">Change password</div></div>
            <Icon name="chev" size={14} />
          </div>
        </div>

        <div className="list-header">Notifications</div>
        <div className="list">
          <div className="list-item">
            <span className="leading"><Icon name="bell" size={18} /></span>
            <div className="body"><div className="t">Push notifications</div></div>
            <Switch checked={notif} onChange={setNotif} />
          </div>
          <div className="list-item">
            <span className="leading"><Icon name="mail" size={18} /></span>
            <div className="body"><div className="t">Product updates</div><div className="s">Weekly product emails</div></div>
            <Switch checked={marketing} onChange={setMarketing} />
          </div>
        </div>

        <p style={{textAlign:'center',font:'400 12px/1.4 var(--font-mono)',color:'var(--muted-foreground)',padding:'12px 0 4px'}}>
          Cubicle Mobile · v1.4.2 (build 2026.04)
        </p>
      </div>
    </div>
  );
}

/* ============ 8. TRANSACTIONS (list + detail) ============ */
const TX = [
  { id:'t1', kind:'in',  who:'Acme Corp',         amt:  2400,  date:'Today, 10:14',  cat:'Revenue',      icon:'wallet' },
  { id:'t2', kind:'out', who:'AWS',               amt: -312.40,date:'Today, 06:00',  cat:'Infrastructure', icon:'globe' },
  { id:'t3', kind:'in',  who:'Humm Inc',          amt:  1800,  date:'Yesterday',     cat:'Revenue',      icon:'wallet' },
  { id:'t4', kind:'out', who:'Figma',             amt:  -48,   date:'Yesterday',     cat:'Software',     icon:'layers' },
  { id:'t5', kind:'out', who:'Coffee Run',        amt:  -14.25,date:'Apr 12',        cat:'Team',         icon:'coffee' },
  { id:'t6', kind:'in',  who:'Upland LLC',        amt:   960,  date:'Apr 10',        cat:'Revenue',      icon:'wallet' },
];

function TransactionsScreen({ onOpen }) {
  const inc  = TX.filter(t => t.kind === 'in').reduce((a,t)=>a+t.amt,0);
  const out  = TX.filter(t => t.kind === 'out').reduce((a,t)=>a+t.amt,0);
  return (
    <div className="screen">
      <LargeTitleBar title="Activity" action={<button className="icon-btn"><Icon name="sort" /></button>} />
      <div className="scroll">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          <KPI label="Incoming" value={`$${inc.toLocaleString()}`} delta="+14.2%" direction="up" />
          <KPI label="Outgoing" value={`$${Math.abs(out).toFixed(2)}`} delta="-2.1%" direction="down" />
        </div>
        <div className="chart-card">
          <div className="chart-head">
            <div><div className="name">Last 12 weeks</div><div className="big">${(inc+out).toLocaleString()}</div></div>
            <Badge variant="success">Net positive</Badge>
          </div>
          <BarChart data={[10,14,11,18,14,22,20,26,23,30,28,34]} color="var(--foreground)" />
        </div>
        <div className="list-header">Recent</div>
        <div className="list">
          {TX.map(t => (
            <div key={t.id} className="list-item tx-row" onClick={() => onOpen(t)}>
              <span className="leading"><Icon name={t.icon} size={18} /></span>
              <div className="body"><div className="t">{t.who}</div><div className="s">{t.cat} · {t.date}</div></div>
              <span className={cx('amount', t.kind==='in'?'pos':'neg')}>
                {t.kind==='in'?'+':'-'}${Math.abs(t.amt).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TransactionDetail({ tx, onBack, onDelete }) {
  const [showConfirm, setShowConfirm] = useStateScr(false);
  return (
    <div className="screen muted">
      <AppBar title="Transaction" onBack={onBack} onMore={() => {}} />
      <div className="scroll">
        <div className="card" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8,padding:'24px 16px'}}>
          <span className="avatar avatar-lg"><Icon name={tx.icon} size={32} /></span>
          <div style={{font:'500 14px/1 var(--font-sans)',color:'var(--muted-foreground)',marginTop:4}}>{tx.who}</div>
          <div style={{font:'700 36px/1 var(--font-sans)',letterSpacing:'-1.2px'}}>
            {tx.kind==='in'?'+':'-'}${Math.abs(tx.amt).toFixed(2)}
          </div>
          <Badge variant={tx.kind==='in'?'success':'muted'}>{tx.kind==='in'?'Received':'Sent'}</Badge>
        </div>

        <div className="list">
          <div className="list-item"><div className="body"><div className="s">Category</div><div className="t">{tx.cat}</div></div></div>
          <div className="list-item"><div className="body"><div className="s">Date</div><div className="t">{tx.date}</div></div></div>
          <div className="list-item"><div className="body"><div className="s">Reference</div><div className="t" style={{font:'500 14px/1.2 var(--font-mono)'}}>{tx.id.toUpperCase()}-2026</div></div></div>
          <div className="list-item"><div className="body"><div className="s">Status</div><div className="t">Settled</div></div><Badge variant="success">Complete</Badge></div>
        </div>

        <div style={{display:'flex',gap:8}}>
          <Button variant="outline" size="full"><Icon name="share" /> Share</Button>
          <Button variant="outline" size="full"><Icon name="edit" /> Edit</Button>
        </div>
        <Button variant="destructive" size="full" onClick={() => setShowConfirm(true)} style={{height:'auto',paddingTop:14,paddingBottom:14}}>
          <Icon name="trash" /> Delete transaction
        </Button>
      </div>
      <AlertDialog
        open={showConfirm}
        title="Delete transaction?"
        desc="This cannot be undone. The transaction will be removed from all reports."
        confirm="Delete"
        destructive
        onConfirm={() => { setShowConfirm(false); onDelete(); }}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
}

/* ============ 9. HELP / FAQ ============ */
function HelpScreen({ onBack }) {
  const [open, setOpen] = useStateScr(0);
  const items = [
    { q:'How do I upgrade my plan?',        a:'Open Profile → Billing and plan. Select Pro or Enterprise and follow the checkout flow.' },
    { q:'Can I export my data?',            a:'Yes. From any report or list, tap More → Export. CSV, JSON, and PDF are supported.' },
    { q:'Is biometric unlock secure?',      a:'Face ID and Touch ID keys are stored in the Secure Enclave and never leave your device.' },
    { q:'How do I invite teammates?',       a:'Profile → Team workspaces → Invite. They will receive an email to join your workspace.' },
  ];
  return (
    <div className="screen">
      <AppBar title="Help" onBack={onBack} />
      <div className="scroll">
        <SearchInput value="" onChange={() => {}} placeholder="Search help articles" />
        <div className="list-header">Frequently asked</div>
        <div className="list">
          {items.map((it, i) => (
            <div key={i} className="list-item" style={{flexDirection:'column',alignItems:'stretch',padding:'0'}}>
              <button onClick={() => setOpen(open===i?-1:i)} style={{display:'flex',alignItems:'center',gap:12,padding:'14px 16px',background:'transparent',border:'none',color:'inherit',textAlign:'left',width:'100%',cursor:'pointer'}}>
                <span style={{flex:1,font:'500 15px/20px var(--font-sans)'}}>{it.q}</span>
                <Icon name={open===i?'up':'chevDown'} size={14} />
              </button>
              {open === i && (
                <div style={{padding:'0 16px 14px',font:'400 14px/21px var(--font-sans)',color:'var(--muted-foreground)'}}>{it.a}</div>
              )}
            </div>
          ))}
        </div>
        <Button variant="outline" size="full"><Icon name="mail" /> Contact support</Button>
      </div>
    </div>
  );
}

/* ============ 10. OFFLINE STATE ============ */
function OfflineScreen() {
  return (
    <div className="screen">
      <LargeTitleBar title="Connection lost" />
      <div className="scroll" style={{justifyContent:'center',flex:1}}>
        <EmptyState
          icon="wifi_off"
          title="You're offline"
          desc="Check your connection and we'll pick up where you left off."
          action={<Button variant="default"><Icon name="wifi" size={14} /> Retry</Button>}
        />
      </div>
    </div>
  );
}

/* ============ 11. SPLASH ============ */
function SplashScreen() {
  return (
    <div className="screen" style={{alignItems:'center',justifyContent:'center',display:'flex',background:'var(--background)'}}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16,marginTop:'auto',marginBottom:'auto'}}>
        <span style={{width:64,height:64,borderRadius:14,background:'var(--foreground)'}} />
        <div style={{font:'700 22px/1 var(--font-sans)',letterSpacing:'-0.7px'}}>cubicle</div>
      </div>
      <div style={{position:'absolute',bottom:80,left:0,right:0,display:'flex',justifyContent:'center'}}>
        <span className="spinner" />
      </div>
    </div>
  );
}

/* ============ 12. REGISTER ============ */
function RegisterScreen({ onNext, onBack }) {
  const [name, setName] = useStateScr('');
  const [email, setEmail] = useStateScr('');
  const [pw, setPw] = useStateScr('');
  const [agreed, setAgreed] = useStateScr(false);
  return (
    <div className="screen">
      <AppBar title="Create account" onBack={onBack} />
      <div className="scroll">
        <div>
          <h1 style={{font:'600 26px/30px var(--font-sans)',letterSpacing:'-0.8px',margin:'8px 0 4px'}}>Get started.</h1>
          <p style={{font:'400 15px/22px var(--font-sans)',color:'var(--muted-foreground)',margin:0}}>Create your Cubicle account.</p>
        </div>
        <Field label="Full name">
          <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Mira Chen" />
        </Field>
        <Field label="Work email">
          <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@work.com" />
        </Field>
        <Field label="Password" hint="At least 8 characters.">
          <Input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="••••••••" />
        </Field>
        <label style={{display:'flex',alignItems:'flex-start',gap:12,padding:'4px 0',cursor:'pointer'}}>
          <Checkbox checked={agreed} onChange={setAgreed} />
          <span style={{font:'400 14px/21px var(--font-sans)',color:'var(--muted-foreground)'}}>
            I agree to the <strong style={{color:'var(--foreground)',fontWeight:500}}>Terms of Service</strong> and <strong style={{color:'var(--foreground)',fontWeight:500}}>Privacy Policy</strong>.
          </span>
        </label>
        <Button variant="default" size="full" onClick={() => agreed && onNext && onNext()}>Create account</Button>
        <p style={{textAlign:'center',font:'400 14px/1 var(--font-sans)',color:'var(--muted-foreground)',margin:'4px 0'}}>
          Already have an account?{' '}
          <span style={{color:'var(--foreground)',fontWeight:500,cursor:'pointer'}} onClick={onBack}>Sign in</span>
        </p>
      </div>
    </div>
  );
}

/* ============ 13. FORGOT PASSWORD ============ */
function ForgotPasswordScreen({ onBack }) {
  const [email, setEmail] = useStateScr('mira@relay.dev');
  const [sent, setSent] = useStateScr(false);
  if (sent) return (
    <div className="screen">
      <AppBar title="Check your email" onBack={onBack} />
      <div className="scroll" style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:16,padding:'40px 24px'}}>
        <div style={{width:56,height:56,borderRadius:14,background:'color-mix(in srgb, var(--green-600) 12%, transparent)',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'var(--green-600)'}}>
          <Icon name="check" size={26} />
        </div>
        <h3 style={{font:'600 20px/24px var(--font-sans)',margin:0}}>Reset link sent</h3>
        <p style={{font:'400 14px/21px var(--font-sans)',color:'var(--muted-foreground)',margin:0,maxWidth:260}}>
          We sent a reset link to <strong style={{color:'var(--foreground)'}}>{email}</strong>. Check your inbox.
        </p>
        <Button variant="default" size="full" onClick={onBack}>Back to sign in</Button>
      </div>
    </div>
  );
  return (
    <div className="screen">
      <AppBar title="Forgot password" onBack={onBack} />
      <div className="scroll">
        <div>
          <h1 style={{font:'600 26px/30px var(--font-sans)',letterSpacing:'-0.8px',margin:'8px 0 4px'}}>Reset password.</h1>
          <p style={{font:'400 15px/22px var(--font-sans)',color:'var(--muted-foreground)',margin:0}}>Enter your email and we'll send a reset link.</p>
        </div>
        <Field label="Email">
          <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@work.com" />
        </Field>
        <Button variant="default" size="full" onClick={() => setSent(true)}>Send reset link</Button>
      </div>
    </div>
  );
}

/* ============ 14. LIST / FEED ============ */
function ListFeedScreen({ onOpen }) {
  const [filter, setFilter] = useStateScr('all');
  const [q, setQ] = useStateScr('');
  const items = [
    { id:1, title:'Q1 Revenue Report',    sub:'Updated 2h ago · Finance',  icon:'graph',  badge:'New',   bv:'success' },
    { id:2, title:'Onboarding Checklist', sub:'6/8 tasks complete · Design', icon:'check', badge:null,   bv:null },
    { id:3, title:'Infrastructure Costs', sub:'Review needed · DevOps',     icon:'globe',  badge:'Alert', bv:'warning' },
    { id:4, title:'Team Retro Notes',     sub:'Yesterday · People',         icon:'hash',   badge:null,   bv:null },
    { id:5, title:'Marketing Leads',      sub:'3d ago · Growth',            icon:'bolt',   badge:null,   bv:null },
    { id:6, title:'Security Audit',       sub:'Apr 8 · Compliance',         icon:'shield', badge:'Late',  bv:'destructive' },
  ];
  const cats = [['all','All'],['finance','Finance'],['design','Design'],['devops','DevOps'],['growth','Growth']];
  const filtered = items.filter(it =>
    (!q || it.title.toLowerCase().includes(q.toLowerCase())) &&
    (filter === 'all' || it.sub.toLowerCase().includes(filter.toLowerCase()))
  );
  return (
    <div className="screen">
      <LargeTitleBar title="Reports" action={<button className="icon-btn"><Icon name="plus" size={18} /></button>} />
      <div className="scroll">
        <SearchInput value={q} onChange={setQ} placeholder="Search reports" />
        <div className="chip-row scroll-x">
          {cats.map(([v,l]) => <Chip key={v} active={filter===v} onClick={() => setFilter(v)}>{l}</Chip>)}
        </div>
        {filtered.length === 0 ? (
          <EmptyState icon="search" title="No results" desc={`No reports matching "${q}".`} />
        ) : (
          <div className="list">
            {filtered.map(it => (
              <div key={it.id} className="list-item" onClick={() => onOpen && onOpen(it)}>
                <span className="leading"><Icon name={it.icon} size={18} /></span>
                <div className="body"><div className="t">{it.title}</div><div className="s">{it.sub}</div></div>
                {it.badge ? <Badge variant={it.bv}>{it.badge}</Badge> : <span className="trailing"><Icon name="chev" size={14} /></span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============ 15. ITEM DETAIL ============ */
function ItemDetailScreen({ onBack, onToast }) {
  const [showDelete, setShowDelete] = useStateScr(false);
  const fire = msg => onToast && onToast(msg);
  return (
    <div className="screen muted">
      <AppBar
        title=""
        onBack={onBack}
        action={
          <div style={{display:'flex',gap:4}}>
            <button className="icon-btn" onClick={() => fire('Shared')}><Icon name="share" size={18} /></button>
            <button className="icon-btn" onClick={() => setShowDelete(true)}><Icon name="trash" size={18} /></button>
          </div>
        }
      />
      <div className="scroll">
        <div style={{background:'var(--muted)',borderRadius:12,aspectRatio:'16/9',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--muted-foreground)',border:'1px solid var(--border)'}}>
          <Icon name="graph" size={40} />
        </div>
        <div className="card" style={{display:'flex',flexDirection:'column',gap:8}}>
          <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:8}}>
            <h2 style={{font:'600 20px/24px var(--font-sans)',letterSpacing:'-0.5px',margin:0,flex:1}}>Q1 Revenue Report</h2>
            <Badge variant="success">Published</Badge>
          </div>
          <p style={{font:'400 14px/21px var(--font-sans)',color:'var(--muted-foreground)',margin:0}}>
            Summary of revenue streams, growth metrics, and forecasts for Q1 2026. Includes YoY comparisons.
          </p>
          <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:4}}>
            {['Finance','Q1 2026','Revenue'].map(tag => <Badge key={tag} variant="muted">{tag}</Badge>)}
          </div>
        </div>
        <div className="list">
          <div className="list-item"><div className="body"><div className="s">Author</div><div className="t">Mira Chen</div></div></div>
          <div className="list-item"><div className="body"><div className="s">Updated</div><div className="t">Today, 10:22</div></div></div>
          <div className="list-item"><div className="body"><div className="s">Category</div><div className="t">Finance</div></div></div>
          <div className="list-item"><div className="body"><div className="s">Views</div><div className="t">138</div></div></div>
        </div>
        <div style={{display:'flex',gap:8}}>
          <Button variant="default" size="full" onClick={() => fire('Editing')}><Icon name="edit" size={14} /> Edit</Button>
          <Button variant="outline" onClick={() => fire('Exported')}><Icon name="share" size={14} /></Button>
        </div>
      </div>
      <AlertDialog
        open={showDelete}
        title="Delete report?"
        desc="This action cannot be undone."
        confirm="Delete" destructive
        onConfirm={() => { setShowDelete(false); onBack && onBack(); }}
        onCancel={() => setShowDelete(false)}
      />
    </div>
  );
}

/* ============ 16. MAINTENANCE ============ */
function MaintenanceScreen() {
  return (
    <div className="screen" style={{background:'var(--background)'}}>
      <LargeTitleBar title="Maintenance" />
      <div className="scroll" style={{flex:1}}>
        <EmptyState
          icon="settings"
          title="Down for maintenance"
          desc="We're making improvements. This won't take long — we'll be back shortly."
          action={
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,marginTop:8}}>
              <span className="caption">Estimated time</span>
              <div style={{font:'700 28px/1 var(--font-sans)',letterSpacing:'-0.8px'}}>~15 min</div>
            </div>
          }
        />
      </div>
    </div>
  );
}

/* ============ 17. ERROR STATE ============ */
function ErrorScreen({ onRetry }) {
  return (
    <div className="screen">
      <LargeTitleBar title="Error" />
      <div className="scroll" style={{flex:1}}>
        <EmptyState
          icon="warning"
          title="Something went wrong"
          desc="We couldn't load this page. Try again or contact support if the problem persists."
          action={
            <div style={{display:'flex',gap:8,flexWrap:'wrap',justifyContent:'center',marginTop:4}}>
              <Button variant="default" onClick={onRetry}><Icon name="refresh" size={14} /> Try again</Button>
              <Button variant="outline"><Icon name="mail" size={14} /> Support</Button>
            </div>
          }
        />
      </div>
    </div>
  );
}

/* ============ 18. COMPONENT SHOWCASE ============ */
function ComponentShowcaseScreen() {
  const [boldOn, setBoldOn] = useStateScr(true);
  const [italicOn, setItalicOn] = useStateScr(false);
  const [pg, setPg] = useStateScr(1);
  const faqItems = [
    { trigger: 'Is it accessible?',    content: 'Yes. It follows WAI-ARIA patterns and is keyboard navigable.' },
    { trigger: 'Dark mode supported?', content: 'First-class — every token has a .dark counterpart.' },
    { trigger: 'Can it be animated?',  content: 'Yes. Disable via the animation token.' },
  ];
  return (
    <div className="screen" style={{overflowY:'auto'}}>
      <AppBar title="New components" />
      <div className="scroll" style={{padding:'16px',display:'flex',flexDirection:'column',gap:22}}>

        <div>
          <div className="caption" style={{marginBottom:8}}>Breadcrumb</div>
          <Breadcrumb items={[{label:'Home',onClick:()=>{}},{label:'Settings',onClick:()=>{}},{label:'Profile'}]} />
        </div>

        <div>
          <div className="caption" style={{marginBottom:8}}>Accordion</div>
          <Accordion items={faqItems} />
        </div>

        <div>
          <div className="caption" style={{marginBottom:8}}>Progress</div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {[['Storage',68],['Bandwidth',34],['Build',91]].map(([l,v]) => (
              <div key={l}>
                <div style={{display:'flex',justifyContent:'space-between',font:'400 12px/1 var(--font-sans)',color:'var(--muted-foreground)',marginBottom:4}}><span>{l}</span><span>{v}%</span></div>
                <Progress value={v} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="caption" style={{marginBottom:8}}>Skeleton</div>
          <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
            <Skeleton h={36} w={36} r={18} />
            <div style={{flex:1,display:'flex',flexDirection:'column',gap:7}}>
              <Skeleton h={13} w="55%" />
              <Skeleton h={11} w="80%" />
              <Skeleton h={11} w="65%" />
            </div>
          </div>
        </div>

        <div>
          <div className="caption" style={{marginBottom:8}}>Toggle</div>
          <div style={{display:'flex',gap:8}}>
            <Toggle pressed={boldOn} onToggle={setBoldOn}>Bold</Toggle>
            <Toggle pressed={italicOn} onToggle={setItalicOn}>Italic</Toggle>
          </div>
        </div>

        <div>
          <div className="caption" style={{marginBottom:8}}>Pagination</div>
          <Pagination page={pg} total={4} onChange={setPg} />
        </div>

      </div>
    </div>
  );
}

/* ============ 19. LANDING — PROJECT LIST ============ */
const GTC_SCREENS = [
  { name: 'Onboarding',          icon: 'bolt' },
  { name: 'Login',               icon: 'lock' },
  { name: 'OTP Verify',          icon: 'shield' },
  { name: 'Register',            icon: 'user' },
  { name: 'Forgot Password',     icon: 'mail' },
  { name: 'Home / Dashboard',    icon: 'home' },
  { name: 'Search',              icon: 'search' },
  { name: 'Create Report',       icon: 'plus' },
  { name: 'List / Feed',         icon: 'hash' },
  { name: 'Item Detail',         icon: 'graph' },
  { name: 'Inbox',               icon: 'inbox' },
  { name: 'Notification Detail', icon: 'bell' },
  { name: 'Profile',             icon: 'user' },
  { name: 'Settings',            icon: 'settings' },
  { name: 'Transactions',        icon: 'wallet' },
  { name: 'Transaction Detail',  icon: 'card' },
  { name: 'Help / FAQ',          icon: 'help' },
  { name: 'Offline State',       icon: 'wifi' },
  { name: 'Splash',              icon: 'bolt' },
  { name: 'Maintenance',         icon: 'settings' },
  { name: 'Error State',         icon: 'warning' },
  { name: 'Component Showcase',  icon: 'layers' },
];

const PROJECTS = [
  {
    id: 'gtc',
    name: 'GTC',
    desc: 'General Transaction Console',
    color: '#18181b',
    screens: GTC_SCREENS.length,
    status: 'Active',
  },
];

function LandingScreen({ onOpen }) {
  const { useState: useSt } = React;
  const [q, setQ] = useSt('');
  const filtered = PROJECTS.filter(p =>
    !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="screen">
      <LargeTitleBar
        kicker="Tamweel"
        title="Projects"
        action={<button className="icon-btn"><Icon name="plus" size={20} /></button>}
      />
      <div className="scroll">
        <SearchInput value={q} onChange={setQ} placeholder="Search projects" />

        {filtered.length === 0 ? (
          <EmptyState icon="search" title="No projects" desc={`Nothing matching "${q}".`} />
        ) : (
          <div className="list">
            {filtered.map(p => (
              <div
                key={p.id}
                className="list-item"
                style={{ padding: '16px 16px', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => onOpen(p)}
              >
                <span
                  className="leading"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: p.color,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="layers" size={20} />
                </span>
                <div className="body" style={{ flex: 1, marginLeft: 12 }}>
                  <div className="t" style={{ font: '600 16px/1.2 var(--font-sans)', marginBottom: 2 }}>{p.name}</div>
                  <div className="s">{p.desc}</div>
                  <div style={{ marginTop: 6, display: 'flex', gap: 6, alignItems: 'center' }}>
                    <Badge variant="success">{p.status}</Badge>
                    <span style={{ font: '400 12px/1 var(--font-mono)', color: 'var(--muted-foreground)' }}>
                      {p.screens} screens
                    </span>
                  </div>
                </div>
                <span className="trailing"><Icon name="chev" size={14} /></span>
              </div>
            ))}
          </div>
        )}

        <div style={{ padding: '24px 0 8px', textAlign: 'center', font: '400 12px/1.4 var(--font-mono)', color: 'var(--muted-foreground)' }}>
          {PROJECTS.length} project{PROJECTS.length !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}

/* ============ GTC PROJECT BROWSER ============ */
function GTCProjectScreen({ project, onBack }) {
  const { useState: useSt } = React;
  const [q, setQ] = useSt('');
  const filtered = GTC_SCREENS.filter(s =>
    !q || s.name.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div className="screen">
      <AppBar
        title={project.name}
        onBack={onBack}
        action={<button className="icon-btn"><Icon name="more" size={18} /></button>}
      />
      <div className="scroll">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '4px 0 12px' }}>
          <span style={{
            width: 56, height: 56, borderRadius: 14,
            background: project.color,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', flexShrink: 0,
          }}>
            <Icon name="layers" size={26} />
          </span>
          <div>
            <div style={{ font: '700 22px/1 var(--font-sans)', letterSpacing: '-0.6px' }}>{project.name}</div>
            <div style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--muted-foreground)', marginTop: 3 }}>{project.desc}</div>
            <div style={{ marginTop: 6, display: 'flex', gap: 6 }}>
              <Badge variant="success">{project.status}</Badge>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 4 }}>
          <KPI label="Screens" value={project.screens} />
          <KPI label="Version"  value="1.0" />
          <KPI label="Build"    value="26" />
        </div>

        <SearchInput value={q} onChange={setQ} placeholder="Search screens" />

        <div className="list-header">Screens</div>
        {filtered.length === 0 ? (
          <EmptyState icon="search" title="No results" desc={`No screens matching "${q}".`} />
        ) : (
          <div className="list">
            {filtered.map((s, i) => (
              <div key={i} className="list-item">
                <span className="leading" style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'var(--muted)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon name={s.icon} size={15} />
                </span>
                <div className="body">
                  <div className="t">{s.name}</div>
                </div>
                <span className="trailing"><Icon name="chev" size={14} /></span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, {
  OnboardingScreen, LoginScreen, OTPScreen,
  RegisterScreen, ForgotPasswordScreen,
  HomeScreen, SearchScreen, CreateScreen,
  ListFeedScreen, ItemDetailScreen,
  InboxScreen, NotificationDetail,
  ProfileScreen, SettingsScreen,
  TransactionsScreen, TransactionDetail,
  HelpScreen, OfflineScreen, SplashScreen,
  MaintenanceScreen, ErrorScreen,
  ComponentShowcaseScreen,
  LandingScreen, GTCProjectScreen, PROJECTS,
  TX,
});
