export type Profile = {
  id: string;
  initials: string;
  name: string;
  nameAr: string;
  phone: string;
  country: string;
  email: string;
  type: 'Customer' | 'Guest';
  stage: string;
  stageAr: string;
  subStage: string;
  subStageAr: string;
  journeyResult: 'Passed' | 'Failed' | 'Pending';
  assignedName: string;
  assignedNameAr: string;
  assignedRole: string;
  simah: boolean;
  masdr: boolean;
  joinedDate: string;
  joinedTime: string;
  orderCount: number;
};

export const PROFILES: Profile[] = [
  {
    id: '1066388128', initials: 'MA', name: 'Mustafa Ibrahim Barakat Alotaibi', nameAr: 'مصطفى إبراهيم بركات العتيبي',
    phone: '+966543346498', country: 'Saudi Arabia', email: 'mustafa.barakat@gmail.com', type: 'Customer',
    stage: 'Terms confirmation pending', stageAr: 'في انتظار تأكيد الشروط', subStage: 'Onboarding', subStageAr: 'الإعداد',
    journeyResult: 'Passed', assignedName: 'Noura Alqahtani', assignedNameAr: 'نورة القحطاني', assignedRole: 'Customer Success',
    simah: true, masdr: false, joinedDate: 'September 09. 2025', joinedTime: '02:18 PM', orderCount: 8,
  },
  {
    id: '1055273904', initials: 'SA', name: 'Sara Khalid Al-Qahtani', nameAr: 'سارة خالد القحطاني',
    phone: '+966512345678', country: 'Saudi Arabia', email: 'sara.qahtani@email.com', type: 'Customer',
    stage: 'Active', stageAr: 'نشط', subStage: 'Financing', subStageAr: 'التمويل',
    journeyResult: 'Passed', assignedName: 'Nora Al-Harbi', assignedNameAr: 'نورة الحربي', assignedRole: 'Retail',
    simah: true, masdr: true, joinedDate: 'August 14. 2025', joinedTime: '10:30 AM', orderCount: 3,
  },
  {
    id: '1048192037', initials: 'FA', name: 'Faisal Abdulaziz Al-Anzi', nameAr: 'فيصل عبدالعزيز العنزي',
    phone: '+966598765432', country: 'Saudi Arabia', email: 'faisal.alanzi@email.com', type: 'Customer',
    stage: 'Document review', stageAr: 'مراجعة المستندات', subStage: 'KYC', subStageAr: 'اعرف عميلك',
    journeyResult: 'Pending', assignedName: 'Ahmed Al-Dosari', assignedNameAr: 'أحمد الدوسري', assignedRole: 'Brokerage',
    simah: false, masdr: false, joinedDate: 'July 22. 2025', joinedTime: '04:45 PM', orderCount: 0,
  },
  {
    id: '1039847261', initials: 'NA', name: 'Noura Mohammed Al-Harbi', nameAr: 'نورة محمد الحربي',
    phone: '+966534567890', country: 'Saudi Arabia', email: 'noura.harbi@email.com', type: 'Customer',
    stage: 'Active', stageAr: 'نشط', subStage: 'Portfolio', subStageAr: 'المحفظة',
    journeyResult: 'Passed', assignedName: 'Omar Almutairi', assignedNameAr: 'عمر المطيري', assignedRole: 'Wealth',
    simah: true, masdr: true, joinedDate: 'June 03. 2025', joinedTime: '09:15 AM', orderCount: 12,
  },
  {
    id: '1027364819', initials: 'KZ', name: 'Khalid Saeed Al-Zahrani', nameAr: 'خالد سعيد الزهراني',
    phone: '+966556781234', country: 'Saudi Arabia', email: 'khalid.zahrani@email.com', type: 'Customer',
    stage: 'Suspended', stageAr: 'موقوف', subStage: 'Compliance', subStageAr: 'الامتثال',
    journeyResult: 'Failed', assignedName: 'Nora Al-Harbi', assignedNameAr: 'نورة الحربي', assignedRole: 'Risk',
    simah: false, masdr: true, joinedDate: 'May 18. 2025', joinedTime: '01:00 PM', orderCount: 5,
  },
  {
    id: '2091038462', initials: 'AB', name: 'Abdullah Tariq Al-Ghamdi', nameAr: 'عبدالله طارق الغامدي',
    phone: '+966567890123', country: 'Saudi Arabia', email: 'abdullah.ghamdi@gmail.com', type: 'Guest',
    stage: 'Registration', stageAr: 'التسجيل', subStage: 'Onboarding', subStageAr: 'الإعداد',
    journeyResult: 'Pending', assignedName: 'Ahmed Al-Dosari', assignedNameAr: 'أحمد الدوسري', assignedRole: 'Retail',
    simah: false, masdr: false, joinedDate: 'September 12. 2025', joinedTime: '11:00 AM', orderCount: 0,
  },
  {
    id: '2087364125', initials: 'HB', name: 'Hessa Ali Al-Bishi', nameAr: 'هسة علي البيشي',
    phone: '+966578901234', country: 'Saudi Arabia', email: 'hessa.bishi@email.com', type: 'Guest',
    stage: 'Email verification', stageAr: 'التحقق من البريد', subStage: 'Onboarding', subStageAr: 'الإعداد',
    journeyResult: 'Pending', assignedName: 'Omar Almutairi', assignedNameAr: 'عمر المطيري', assignedRole: 'Digital',
    simah: false, masdr: false, joinedDate: 'August 28. 2025', joinedTime: '03:22 PM', orderCount: 0,
  },
  {
    id: '2074930185', initials: 'YM', name: 'Yazid Hamad Al-Mutairi', nameAr: 'يزيد حمد المطيري',
    phone: '+966589012345', country: 'Saudi Arabia', email: 'yazid.mutairi@email.com', type: 'Guest',
    stage: 'ID upload', stageAr: 'رفع الهوية', subStage: 'Onboarding', subStageAr: 'الإعداد',
    journeyResult: 'Pending', assignedName: 'Nora Al-Harbi', assignedNameAr: 'نورة الحربي', assignedRole: 'Digital',
    simah: false, masdr: false, joinedDate: 'July 05. 2025', joinedTime: '08:40 AM', orderCount: 0,
  },
];

export const ACTIVITY_LOG = [
  { event: 'Mobile app opened',     eventAr: 'فُتح التطبيق',           detail: 'iPhone · Riyadh · Existing trusted device', detailAr: 'iPhone · الرياض · جهاز موثوق',     time: 'Today, 09:42',  timeAr: 'اليوم، 09:42'    },
  { event: 'Profile data reviewed', eventAr: 'تمت مراجعة ملف العميل', detail: 'Admin portal · Customer Success',            detailAr: 'بوابة الإدارة · خدمة العملاء',    time: 'Jul 26, 15:12', timeAr: '٢٦ يوليو، 15:12' },
  { event: 'Profile data reviewed', eventAr: 'تمت مراجعة ملف العميل', detail: 'Admin portal · Customer Success',            detailAr: 'بوابة الإدارة · خدمة العملاء',    time: 'Jul 26, 15:12', timeAr: '٢٦ يوليو، 15:12' },
  { event: 'Profile data reviewed', eventAr: 'تمت مراجعة ملف العميل', detail: 'Admin portal · Customer Success',            detailAr: 'بوابة الإدارة · خدمة العملاء',    time: 'Jul 26, 15:12', timeAr: '٢٦ يوليو، 15:12' },
];

export type CheckpointStatus  = 'Passed' | 'Paused' | 'Failed' | 'Not started';
export type JourneyStepStatus = 'Passed' | 'Paused' | 'Failed' | 'Not started';

export type Checkpoint = {
  labelEn: string;
  labelAr: string;
  status: CheckpointStatus;
  tag: 'Mandatory' | 'System' | 'Conditional';
  timestamp?: string;
  noteEn?: string;
  noteAr?: string;
  details?: { source: string; attempts: number; waitingOn: string; duration: string; reference: string; businessOutcome: string };
};

export type JourneyStep = {
  id: string;
  labelEn: string;
  labelAr: string;
  status: JourneyStepStatus;
  subLabelEn?: string;
  subLabelAr?: string;
  waitingSince?: string;
  waitingOn?: string;
  checkpoints: Checkpoint[];
};

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'guest-history',
    labelEn: 'Created as Guest',
    labelAr: 'إنشاء حساب ضيف',
    status: 'Passed',
    subLabelEn: '4 guest stages · 3 checkpoints',
    subLabelAr: '٤ مراحل ضيف · ٣ نقاط تحقق',
    checkpoints: [
      { labelEn: 'Guest record found',      labelAr: 'تم العثور على سجل الضيف',   status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:20', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Guest identified' } },
      { labelEn: 'Interest data captured',  labelAr: 'تم تسجيل بيانات الاهتمام', status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:21', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '1m 02s', reference: 'S-1042', businessOutcome: 'Interest recorded' } },
      { labelEn: 'Guest session validated', labelAr: 'تم التحقق من جلسة الضيف',  status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:22', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Session valid' } },
    ],
  },
  {
    id: 'customer-access',
    labelEn: 'Customer access',
    labelAr: 'وصول العميل',
    status: 'Passed',
    subLabelEn: '3 checkpoints',
    subLabelAr: '٣ نقاط تحقق',
    checkpoints: [
      { labelEn: 'Identity verified',    labelAr: 'تم التحقق من الهوية',  status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:25', details: { source: 'Nafath', attempts: 1, waitingOn: '—', duration: '2m 14s', reference: 'S-1042', businessOutcome: 'Identity confirmed' } },
      { labelEn: 'Mobile OTP confirmed', labelAr: 'تم تأكيد OTP الجوال', status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:26', details: { source: 'SMS gateway', attempts: 1, waitingOn: '—', duration: '43s', reference: 'S-1042', businessOutcome: 'OTP verified' } },
      { labelEn: 'Account activated',    labelAr: 'تم تفعيل الحساب',     status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:27', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Account active' } },
    ],
  },
  {
    id: 'payment',
    labelEn: 'Payment',
    labelAr: 'الدفع',
    status: 'Passed',
    subLabelEn: '4 checkpoints',
    subLabelAr: '٤ نقاط تحقق',
    checkpoints: [
      { labelEn: 'Payment method selected', labelAr: 'تم اختيار طريقة الدفع', status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:34', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '45s', reference: 'S-1042', businessOutcome: 'Method locked' } },
      { labelEn: 'Payment initiated',       labelAr: 'تم بدء الدفع',           status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:35', details: { source: 'Payment gateway', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Payment sent' } },
      { labelEn: 'Payment confirmed',       labelAr: 'تم تأكيد الدفع',         status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:35', details: { source: 'Payment gateway', attempts: 1, waitingOn: '—', duration: '2s', reference: 'S-1042', businessOutcome: 'Funds received' } },
      { labelEn: 'Receipt generated',       labelAr: 'تم إنشاء الإيصال',       status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:35', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Receipt sent' } },
    ],
  },
  {
    id: 'disclosure',
    labelEn: 'Disclosure',
    labelAr: 'الإفصاح',
    status: 'Passed',
    subLabelEn: '2 checkpoints',
    subLabelAr: '٢ نقطتا تحقق',
    checkpoints: [
      { labelEn: 'Terms & conditions shown',  labelAr: 'تم عرض الشروط والأحكام', status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:36', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Terms displayed' } },
      { labelEn: 'Customer agreement signed', labelAr: 'تم توقيع الاتفاقية',     status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:37', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '18s', reference: 'S-1042', businessOutcome: 'Agreement signed' } },
    ],
  },
  {
    id: 'data-validation',
    labelEn: 'Data validation',
    labelAr: 'التحقق من البيانات',
    status: 'Paused',
    subLabelEn: '15 checkpoints · 3 sub-steps',
    subLabelAr: '١٥ نقطة تحقق · ٣ مراحل فرعية',
    waitingSince: 'Aug 12 · 09:52',
    waitingOn: 'SIMAH',
    checkpoints: [
      // ── Report validity (0–2) ──────────────────────────────────────────────
      { labelEn: 'MASDAR report valid',          labelAr: 'تقرير MASDAR صالح',              status: 'Passed',      tag: 'Mandatory',   timestamp: 'Aug 12 · 09:44', details: { source: 'MASDAR', attempts: 1, waitingOn: '—', duration: '1s', reference: 'MSD-10042', businessOutcome: 'Report valid' } },
      { labelEn: 'SIMAH report valid',           labelAr: 'تقرير SIMAH صالح',               status: 'Passed',      tag: 'Mandatory',   timestamp: 'Aug 12 · 09:45', details: { source: 'SIMAH', attempts: 1, waitingOn: '—', duration: '1s', reference: 'SMH-62019', businessOutcome: 'Report valid' } },
      { labelEn: 'Required action complete',     labelAr: 'اكتملت الإجراءات المطلوبة',       status: 'Passed',      tag: 'System',      timestamp: 'Aug 12 · 09:45', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'Pre-checks cleared' } },
      // ── MASDR & employment (3–8) ───────────────────────────────────────────
      { labelEn: 'MASDAR request sent',          labelAr: 'تم إرسال طلب MASDAR',            status: 'Passed',      tag: 'System',      timestamp: 'Aug 12 · 09:46', details: { source: 'MASDAR', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'MSD-10042', businessOutcome: 'Request sent' } },
      { labelEn: 'MASDAR response received',     labelAr: 'تم استلام رد MASDAR',             status: 'Passed',      tag: 'System',      timestamp: 'Aug 12 · 09:47', details: { source: 'MASDAR', attempts: 1, waitingOn: '—', duration: '1s', reference: 'MSD-10042', businessOutcome: 'Response received' } },
      { labelEn: 'Primary employment validated', labelAr: 'تم التحقق من التوظيف الأساسي',   status: 'Passed',      tag: 'Conditional', timestamp: 'Aug 12 · 09:47', details: { source: 'MASDAR', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'MSD-10042', businessOutcome: 'Employment confirmed' } },
      { labelEn: 'Manual entry required',        labelAr: 'يلزم الإدخال اليدوي',             status: 'Passed',      tag: 'System',      timestamp: 'Aug 12 · 09:48', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'Manual step triggered' } },
      { labelEn: 'Manual employment data',       labelAr: 'بيانات التوظيف اليدوية',          status: 'Passed',      tag: 'Conditional', timestamp: 'Aug 12 · 09:49', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'Manual data recorded' } },
      { labelEn: 'Employment snapshot captured', labelAr: 'تم التقاط لقطة التوظيف',          status: 'Passed',      tag: 'System',      timestamp: 'Aug 12 · 09:49', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'Snapshot stored' } },
      // ── SIMAH credit data (9–14) ───────────────────────────────────────────
      { labelEn: 'SIMAH request initiated',               labelAr: 'تم إرسال طلب SIMAH',               status: 'Passed',      tag: 'System',    timestamp: 'Aug 12 · 09:50', details: { source: 'SIMAH', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'SMH-62019', businessOutcome: 'Request sent' } },
      {
        labelEn: 'SIMAH response unavailable',
        labelAr: 'استجابة SIMAH غير متاحة',
        status: 'Paused',
        tag: 'Mandatory',
        timestamp: 'Aug 12 · 09:52',
        noteEn: 'SIMAH response is unavailable. Automatic retry scheduled.',
        noteAr: 'استجابة SIMAH غير متاحة. تمت جدولة إعادة المحاولة تلقائيًا.',
        details: { source: 'SIMAH', attempts: 1, waitingOn: 'SIMAH', duration: '—', reference: 'SMH-62019', businessOutcome: 'Technical unavailability · No eligibility result' },
      },
      { labelEn: 'Customer-facing error displayed',       labelAr: 'تم عرض رسالة الخطأ للعميل',        status: 'Passed',      tag: 'System',    timestamp: 'Aug 12 · 09:52', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'SMH-62019', businessOutcome: 'Error shown to customer' } },
      { labelEn: 'Automatic SIMAH retry scheduled',       labelAr: 'تمت جدولة إعادة محاولة SIMAH',     status: 'Passed',      tag: 'System',    timestamp: 'Aug 12 · 09:53', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'SMH-62019', businessOutcome: 'Retry queued' } },
      { labelEn: 'Customer qualification notification',   labelAr: 'إشعار تأهيل العميل',               status: 'Not started', tag: 'Conditional' },
      { labelEn: 'SIMAH result linked to Engine request', labelAr: 'ربط نتيجة SIMAH بطلب المحرك',      status: 'Not started', tag: 'System' },
    ],
  },
  {
    id: 'eligibility',
    labelEn: 'Eligibility & Decision Engine',
    labelAr: 'الأهلية ومحرك القرار',
    status: 'Not started',
    subLabelEn: '10 checkpoints',
    subLabelAr: '١٠ نقاط تحقق',
    checkpoints: [
      { labelEn: 'Credit score threshold met',    labelAr: 'استيفاء حد درجة الائتمان',    status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Income ratio validated',         labelAr: 'التحقق من نسبة الدخل',         status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Debt burden calculated',         labelAr: 'حساب عبء الديون',               status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Employment stability checked',   labelAr: 'التحقق من استقرار التوظيف',     status: 'Not started', tag: 'System'      },
      { labelEn: 'Age eligibility verified',       labelAr: 'التحقق من أهلية العمر',          status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Nationality criteria met',       labelAr: 'استيفاء معايير الجنسية',          status: 'Not started', tag: 'System'      },
      { labelEn: 'Financing amount validated',     labelAr: 'التحقق من مبلغ التمويل',          status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Down payment confirmed',         labelAr: 'تأكيد الدفعة المقدمة',            status: 'Not started', tag: 'Conditional' },
      { labelEn: 'Engine decision requested',      labelAr: 'طلب قرار المحرك',                status: 'Not started', tag: 'System'      },
      { labelEn: 'Eligibility result issued',      labelAr: 'إصدار نتيجة الأهلية',             status: 'Not started', tag: 'Mandatory'   },
    ],
  },
  {
    id: 'order-submission',
    labelEn: 'Order submission',
    labelAr: 'تقديم الطلب',
    status: 'Not started',
    subLabelEn: '9 checkpoints',
    subLabelAr: '٩ نقاط تحقق',
    checkpoints: [
      { labelEn: 'Offer presented to customer', labelAr: 'تقديم العرض للعميل',       status: 'Not started', tag: 'System'      },
      { labelEn: 'Offer selected',              labelAr: 'تم اختيار العرض',           status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Terms reviewed',              labelAr: 'مراجعة الشروط',              status: 'Not started', tag: 'System'      },
      { labelEn: 'OTP confirmed',               labelAr: 'تأكيد OTP',                 status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'IVR call completed',          labelAr: 'اكتمال مكالمة IVR',          status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Order created',               labelAr: 'تم إنشاء الطلب',             status: 'Not started', tag: 'System'      },
      { labelEn: 'Order confirmed',             labelAr: 'تم تأكيد الطلب',             status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Provider notified',           labelAr: 'تم إبلاغ المزود',             status: 'Not started', tag: 'System'      },
      { labelEn: 'Order submitted',             labelAr: 'تم تقديم الطلب',              status: 'Not started', tag: 'Mandatory'   },
    ],
  },
];
