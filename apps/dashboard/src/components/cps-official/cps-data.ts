export type Profile = {
  id: string;
  initials: string;
  name: string;
  nameAr: string;
  phone: string;
  country: string;
  email: string;
  nationalId: string;
  dob?: string;
  gender?: string;
  type: 'Customer' | 'Guest';
  stage: string;
  stageAr: string;
  subStage: string;
  subStageAr: string;
  journeyResult: 'Passed' | 'Failed' | 'Paused';
  assignedName: string;
  assignedNameAr: string;
  assignedRole: string;
  simah: boolean | 'Expired';
  masdr: boolean;
  joinedDate: string;
  joinedTime: string;
  orderCount: number;
  labels: string[];
  labelsAr: string[];
};

export const PROFILES: Profile[] = [
  {
    id: '1066388128', initials: 'MA', name: 'Mustafa Ibrahim Barakat Alotaibi', nameAr: 'مصطفى إبراهيم بركات العتيبي',
    phone: '+966543346498', country: 'Saudi Arabia', email: 'mustafa.barakat@gmail.com', nationalId: '9573566234', dob: '23-03-1993', gender: 'Male', type: 'Customer',
    stage: 'Order Submission', stageAr: 'تقديم الطلب', subStage: 'Order Submission Completed', subStageAr: 'تم تقديم الطلب',
    journeyResult: 'Passed', assignedName: 'Omar Almutairi', assignedNameAr: 'عمر المطيري', assignedRole: 'Brokerage',
    simah: true, masdr: false, joinedDate: 'September 09. 2025', joinedTime: '02:18 PM', orderCount: 8,
    labels: ['Priority Follow-up', 'Annoying'], labelsAr: ['متابعة ذات أولوية', 'عميل مزعج'],
  },
  {
    id: '1061847293', initials: 'LO', name: 'Lina Omar Al-Shehri', nameAr: 'لينا عمر الشهري',
    phone: '+966501234567', country: 'Saudi Arabia', email: 'lina.shehri@gmail.com', nationalId: '1061847293', type: 'Guest',
    stage: 'Order Submission', stageAr: 'تقديم الطلب', subStage: 'Order Submission Completed', subStageAr: 'تم إرسال الطلب',
    journeyResult: 'Paused', assignedName: 'Omar Almutairi', assignedNameAr: 'عمر المطيري', assignedRole: 'Brokerage',
    simah: false, masdr: false, joinedDate: 'September 09. 2025', joinedTime: '02:18 PM', orderCount: 0,
    labels: ['Test Profile', 'Incomplete Profile'], labelsAr: ['ملف تجريبي', 'ملف غير مكتمل'],
  },
  {
    id: '1055273904', initials: 'SA', name: 'Sara Khalid Al-Qahtani', nameAr: 'سارة خالد القحطاني',
    phone: '+966512345678', country: 'Saudi Arabia', email: 'sara.qahtani@email.com', nationalId: '1055273904', type: 'Customer',
    stage: 'Order Submission', stageAr: 'تقديم الطلب', subStage: 'Order Submission Completed', subStageAr: 'تم إرسال الطلب',
    journeyResult: 'Failed', assignedName: 'Omar Almutairi', assignedNameAr: 'عمر المطيري', assignedRole: 'Brokerage',
    simah: 'Expired', masdr: false, joinedDate: 'September 09. 2025', joinedTime: '02:18 PM', orderCount: 3,
    labels: ['Suspected Fraud', 'Annoying'], labelsAr: ['مشبوه في الاحتيال', 'عميل مزعج'],
  },
  {
    id: '1048192037', initials: 'FA', name: 'Faisal Abdulaziz Al-Anzi', nameAr: 'فيصل عبدالعزيز العنزي',
    phone: '+966598765432', country: 'Saudi Arabia', email: 'faisal.alanzi@email.com', nationalId: '1048192037', type: 'Customer',
    stage: 'Order Submission', stageAr: 'تقديم الطلب', subStage: 'Order Submission Completed', subStageAr: 'تم إرسال الطلب',
    journeyResult: 'Passed', assignedName: 'Omar Almutairi', assignedNameAr: 'عمر المطيري', assignedRole: 'Brokerage',
    simah: false, masdr: false, joinedDate: 'September 09. 2025', joinedTime: '02:18 PM', orderCount: 0,
    labels: ['Priority Follow-up', 'Annoying'], labelsAr: ['متابعة ذات أولوية', 'عميل مزعج'],
  },
  {
    id: '1039847261', initials: 'NA', name: 'Noura Mohammed Al-Harbi', nameAr: 'نورة محمد الحربي',
    phone: '+966534567890', country: 'Saudi Arabia', email: 'noura.harbi@email.com', nationalId: '1039847261', type: 'Customer',
    stage: 'Order Submission', stageAr: 'تقديم الطلب', subStage: 'Order Submission Completed', subStageAr: 'تم إرسال الطلب',
    journeyResult: 'Passed', assignedName: 'Omar Almutairi', assignedNameAr: 'عمر المطيري', assignedRole: 'Brokerage',
    simah: true, masdr: true, joinedDate: 'September 09. 2025', joinedTime: '02:18 PM', orderCount: 12,
    labels: ['Priority Follow-up'], labelsAr: ['متابعة ذات أولوية'],
  },
  {
    id: '1031759482', initials: 'TM', name: 'Tariq Mohammed Al-Dossari', nameAr: 'طارق محمد الدوسري',
    phone: '+966567891234', country: 'Saudi Arabia', email: 'tariq.dossari@email.com', nationalId: '1031759482', type: 'Guest',
    stage: 'Order Submission', stageAr: 'تقديم الطلب', subStage: 'Order Submission Completed', subStageAr: 'تم إرسال الطلب',
    journeyResult: 'Paused', assignedName: '', assignedNameAr: '', assignedRole: '',
    simah: false, masdr: false, joinedDate: 'September 09. 2025', joinedTime: '02:18 PM', orderCount: 0,
    labels: ['Priority Follow-up'], labelsAr: ['متابعة ذات أولوية'],
  },
  {
    id: '1027364819', initials: 'KZ', name: 'Khalid Saeed Al-Zahrani', nameAr: 'خالد سعيد الزهراني',
    phone: '+966556781234', country: 'Saudi Arabia', email: 'khalid.zahrani@email.com', nationalId: '1027364819', type: 'Customer',
    stage: 'Order Submission', stageAr: 'تقديم الطلب', subStage: 'Order Submission Completed', subStageAr: 'تم إرسال الطلب',
    journeyResult: 'Failed', assignedName: 'Nora Al-Harbi', assignedNameAr: 'نورة الحربي', assignedRole: 'Risk',
    simah: false, masdr: true, joinedDate: 'September 09. 2025', joinedTime: '02:18 PM', orderCount: 5,
    labels: ['High Risk'], labelsAr: ['خطر عالٍ'],
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
  tag: 'Mandatory' | 'System' | 'Optional';
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
      { labelEn: 'Mobile number entered',     labelAr: 'تم إدخال رقم الجوال',         status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 09:42', details: { source: 'Mobile app', attempts: 1, waitingOn: 'No one', duration: '—', reference: '+966 55 214 8...', businessOutcome: '—' } },
      { labelEn: 'Registration OTP verified', labelAr: 'تم التحقق من رمز التسجيل',    status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:29', details: { source: 'SMS gateway', attempts: 1, waitingOn: '—', duration: '43s', reference: 'S-1108', businessOutcome: 'OTP verified' } },
      { labelEn: 'Guest PIN created',         labelAr: 'تم إنشاء رمز الضيف',           status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:29', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'PIN set' } },
      { labelEn: 'Guest PIN confirmed',        labelAr: 'تم تأكيد رمز الضيف',          status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:29', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'PIN confirmed' } },
      { labelEn: 'Optional profile details',  labelAr: 'تفاصيل الملف الشخصي الاختيارية', status: 'Passed', tag: 'Optional', timestamp: 'Jul 11 · 10:29', noteEn: 'Name, gender, email and date of birth added voluntarily', noteAr: 'تمت إضافة الاسم والجنس والبريد الإلكتروني وتاريخ الميلاد طوعاً', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'Profile enriched' } },
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
    labelEn: 'Payment',
    labelAr: 'الدفع',
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
      { labelEn: 'Primary employment validated', labelAr: 'تم التحقق من التوظيف الأساسي',   status: 'Passed',      tag: 'Optional', timestamp: 'Aug 12 · 09:47', details: { source: 'MASDAR', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'MSD-10042', businessOutcome: 'Employment confirmed' } },
      { labelEn: 'Manual entry required',        labelAr: 'يلزم الإدخال اليدوي',             status: 'Passed',      tag: 'System',      timestamp: 'Aug 12 · 09:48', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'Manual step triggered' } },
      { labelEn: 'Manual employment data',       labelAr: 'بيانات التوظيف اليدوية',          status: 'Passed',      tag: 'Optional', timestamp: 'Aug 12 · 09:49', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1108', businessOutcome: 'Manual data recorded' } },
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
      { labelEn: 'Customer qualification notification',   labelAr: 'إشعار تأهيل العميل',               status: 'Not started', tag: 'Optional' },
      { labelEn: 'SIMAH result linked to Engine request', labelAr: 'ربط نتيجة SIMAH بطلب المحرك',      status: 'Not started', tag: 'System' },
    ],
  },
  {
    id: 'eligibility',
    labelEn: 'Eligibility',
    labelAr: 'الأهلية',
    status: 'Passed',
    subLabelEn: '3 checkpoints',
    subLabelAr: '٣ نقاط تحقق',
    checkpoints: [
      { labelEn: 'Credit score threshold met',    labelAr: 'استيفاء حد درجة الائتمان',    status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Income ratio validated',         labelAr: 'التحقق من نسبة الدخل',         status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Debt burden calculated',         labelAr: 'حساب عبء الديون',               status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Employment stability checked',   labelAr: 'التحقق من استقرار التوظيف',     status: 'Not started', tag: 'System'      },
      { labelEn: 'Age eligibility verified',       labelAr: 'التحقق من أهلية العمر',          status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Nationality criteria met',       labelAr: 'استيفاء معايير الجنسية',          status: 'Not started', tag: 'System'      },
      { labelEn: 'Financing amount validated',     labelAr: 'التحقق من مبلغ التمويل',          status: 'Not started', tag: 'Mandatory'   },
      { labelEn: 'Down payment confirmed',         labelAr: 'تأكيد الدفعة المقدمة',            status: 'Not started', tag: 'Optional' },
      { labelEn: 'Engine decision requested',      labelAr: 'طلب قرار المحرك',                status: 'Not started', tag: 'System'      },
      { labelEn: 'Eligibility result issued',      labelAr: 'إصدار نتيجة الأهلية',             status: 'Not started', tag: 'Mandatory'   },
    ],
  },
  {
    id: 'order-submission',
    labelEn: 'Order submission',
    labelAr: 'تقديم الطلب',
    status: 'Paused',
    subLabelEn: '6 checkpoints',
    subLabelAr: '٦ نقاط تحقق',
    waitingSince: 'Jul 11 · 10:31',
    waitingOn: 'Customer',
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

// ─── Guest journey ────────────────────────────────────────────────────────────

export type SubJourney = {
  id: string;
  labelEn: string;
  labelAr: string;
  overlineEn: string;
  overlineAr: string;
  status: JourneyStepStatus;
  checkpoints: Checkpoint[];
};

export type GuestJourneyStep = {
  id: string;
  labelEn: string;
  labelAr: string;
  overlineEn: string;
  overlineAr: string;
  status: JourneyStepStatus;
  checkpoints: Checkpoint[];
  subJourneys?: SubJourney[];
};

export const GUEST_JOURNEY_STEPS: GuestJourneyStep[] = [
  {
    id: 'created-as-guest',
    labelEn: 'Created as Guest',
    labelAr: 'تم الإنشاء كضيف',
    overlineEn: 'Preserved history',
    overlineAr: 'سجل محفوظ',
    status: 'Paused',
    checkpoints: [],
    subJourneys: [
      {
        id: 'guest-registration',
        labelEn: 'Guest registration',
        labelAr: 'تسجيل الضيف',
        overlineEn: 'Account access',
        overlineAr: 'الوصول إلى الحساب',
        status: 'Passed',
        checkpoints: [
          { labelEn: 'Mobile number entered',     labelAr: 'تم إدخال رقم الجوال',             status: 'Paused',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:42', noteEn: 'Saudi mobile format validated',               noteAr: 'تم التحقق من تنسيق الجوال السعودي', details: { source: 'Mobile app',  attempts: 1, waitingOn: 'No one', duration: '—',    reference: 'O-8821', businessOutcome: '—'            } },
          { labelEn: 'Registration OTP verified', labelAr: 'تم التحقق من رمز التسجيل',        status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 10:29', noteEn: 'Verified on the first attempt',               noteAr: 'تم التحقق في المحاولة الأولى',      details: { source: 'SMS gateway', attempts: 1, waitingOn: '—',      duration: '43s',  reference: 'S-1108', businessOutcome: 'OTP verified' } },
          { labelEn: 'Guest PIN created',         labelAr: 'تم إنشاء رمز الضيف',              status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 10:29', noteEn: 'PIN policy passed',                           noteAr: 'اجتاز سياسة PIN',                   details: { source: 'App',         attempts: 1, waitingOn: '—',      duration: '< 1s', reference: 'S-1108', businessOutcome: 'PIN set'      } },
          { labelEn: 'Guest PIN confirmed',       labelAr: 'تم تأكيد رمز الضيف',              status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 10:29', noteEn: 'PIN confirmation matched',                    noteAr: 'تطابقت تأكيد PIN',                  details: { source: 'App',         attempts: 1, waitingOn: '—',      duration: '< 1s', reference: 'S-1108', businessOutcome: 'PIN confirmed' } },
          { labelEn: 'Optional profile details',  labelAr: 'تفاصيل الملف الشخصي الاختيارية', status: 'Not started', tag: 'Optional',                               noteEn: 'Skipped without blocking the guest journey',  noteAr: 'تم التخطي دون إعاقة رحلة الضيف' },
        ],
      },
      {
        id: 'product-search',
        labelEn: 'Product search',
        labelAr: 'البحث عن المنتجات',
        overlineEn: 'Repeatable',
        overlineAr: 'قابل للتكرار',
        status: 'Paused',
        checkpoints: [
          { labelEn: 'Search started',            labelAr: 'بدأ البحث',                 status: 'Paused',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:42', noteEn: 'No activity recorded',                        noteAr: 'لا يوجد نشاط مسجل',                 details: { source: 'Mobile app', attempts: 1, waitingOn: 'No one', duration: '—', reference: 'O-8821', businessOutcome: '—' } },
          { labelEn: 'Search criteria submitted', labelAr: 'تم إرسال معايير البحث',     status: 'Not started', tag: 'Mandatory',                               noteEn: 'Waiting for guest input',                     noteAr: 'في انتظار إدخال الضيف' },
          { labelEn: 'Results generated',         labelAr: 'تم إنشاء النتائج',          status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded',                        noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Result selected',           labelAr: 'تم اختيار النتيجة',         status: 'Not started', tag: 'Mandatory',                               noteEn: 'Required only when the guest continues from a result', noteAr: 'مطلوب فقط عند متابعة الضيف من نتيجة' },
          { labelEn: 'Register interest form',    labelAr: 'نموذج تسجيل الاهتمام',      status: 'Not started', tag: 'Mandatory',                               noteEn: 'Optional and does not affect search completion', noteAr: 'اختياري ولا يؤثر على اكتمال البحث' },
        ],
      },
      {
        id: 'search-payment',
        labelEn: 'Search payment',
        labelAr: 'دفع البحث',
        overlineEn: 'Linked to search',
        overlineAr: 'مرتبط بالبحث',
        status: 'Not started',
        checkpoints: [
          { labelEn: 'Payment initiated',         labelAr: 'بدأ الدفع',                  status: 'Paused',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:42', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل', details: { source: 'Mobile app', attempts: 1, waitingOn: 'No one', duration: '—', reference: 'O-8821', businessOutcome: '—' } },
          { labelEn: 'Gateway response received', labelAr: 'تم استلام استجابة البوابة',  status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Payment successful',        labelAr: 'تم الدفع بنجاح',             status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Invoice generated',         labelAr: 'تم إنشاء الفاتورة',          status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
        ],
      },
      {
        id: 'customer-conversion',
        labelEn: 'Customer conversion',
        labelAr: 'التحويل إلى عميل',
        overlineEn: 'GTC flow',
        overlineAr: 'مسار GTC',
        status: 'Not started',
        checkpoints: [
          { labelEn: 'National / Iqama ID entered', labelAr: 'تم إدخال رقم الهوية / الإقامة', status: 'Paused',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:42', noteEn: 'No activity recorded',                                             noteAr: 'لا يوجد نشاط مسجل',                          details: { source: 'Mobile app', attempts: 1, waitingOn: 'No one', duration: '—', reference: 'O-8821', businessOutcome: '—' } },
          { labelEn: 'Conversion terms accepted',   labelAr: 'تم قبول شروط التحويل',          status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded',                                             noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Conversion OTP verified',     labelAr: 'تم التحقق من رمز التحويل',      status: 'Not started', tag: 'Mandatory',                               noteEn: 'Starts after terms are accepted',                                  noteAr: 'يبدأ بعد قبول الشروط' },
          { labelEn: 'Nafath verified',             labelAr: 'تم التحقق عبر نفاذ',            status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded',                                             noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Mobile ownership verified',   labelAr: 'تم التحقق من ملكية الجوال',     status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded',                                             noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'TCC confirmed',               labelAr: 'تم تأكيد TCC',                  status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded',                                             noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Customer PIN created',        labelAr: 'تم إنشاء رمز العميل',           status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded',                                             noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Customer PIN confirmed',      labelAr: 'تم تأكيد رمز العميل',           status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded',                                             noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Customer contract accepted',  labelAr: 'تم قبول عقد العميل',            status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded',                                             noteAr: 'لا يوجد نشاط مسجل' },
          { labelEn: 'Profile converted to Customer', labelAr: 'تم تحويل الملف إلى عميل',    status: 'Not started', tag: 'Mandatory',                               noteEn: 'The same profile ID is retained; no second profile is created',    noteAr: 'يتم الاحتفاظ بنفس رقم الملف ولا يُنشأ ملف ثانٍ' },
        ],
      },
    ],
  },
  {
    id: 'customer-access',
    labelEn: 'Customer access',
    labelAr: 'وصول العميل',
    overlineEn: 'Repeatable login',
    overlineAr: 'تسجيل دخول متكرر',
    status: 'Paused',
    checkpoints: [
      { labelEn: 'Login identifier accepted',              labelAr: 'تم قبول معرف تسجيل الدخول',          status: 'Paused',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:42', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل', details: { source: 'Mobile app', attempts: 1, waitingOn: 'No one', duration: '—', reference: 'O-8821', businessOutcome: '—' } },
      { labelEn: 'Login OTP sent',                         labelAr: 'تم إرسال رمز تسجيل الدخول',          status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:43', noteEn: 'OTP dispatched via SMS', noteAr: 'تم إرسال الرمز عبر الرسائل القصيرة' },
      { labelEn: 'Login OTP verified',                     labelAr: 'تم التحقق من رمز تسجيل الدخول',     status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:44', noteEn: 'Verified on the first attempt', noteAr: 'تم التحقق في المحاولة الأولى' },
      { labelEn: 'Customer PIN entered',                   labelAr: 'تم إدخال رمز العميل',                status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:44', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Customer PIN verified',                  labelAr: 'تم التحقق من رمز العميل',            status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:44', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Reset or change PIN',                    labelAr: 'إعادة تعيين أو تغيير الرمز',         status: 'Not started', tag: 'Optional',                               noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Authenticated session created',          labelAr: 'تم إنشاء جلسة مصادقة',              status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:45', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Customer access confirmed',              labelAr: 'تم تأكيد وصول العميل',              status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:45', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Payment and report validity evaluated',  labelAr: 'تم تقييم صلاحية الدفع والتقرير',    status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:45', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Updated terms confirmation',             labelAr: 'تأكيد الشروط المحدثة',               status: 'Not started', tag: 'Optional',                               noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
    ],
  },
  {
    id: 'payment',
    labelEn: 'Payment',
    labelAr: 'الدفع',
    overlineEn: '15-day validity',
    overlineAr: 'صلاحية ١٥ يومًا',
    status: 'Paused',
    checkpoints: [
      { labelEn: 'Login identifier accepted',         labelAr: 'تم قبول معرف تسجيل الدخول',   status: 'Paused',      tag: 'System',    timestamp: 'Jul 11 · 09:42', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل', details: { source: 'Billing service', attempts: 1, waitingOn: 'No one', duration: '—', reference: 'O-8821', businessOutcome: '—' } },
      { labelEn: 'Login OTP verified',                labelAr: 'تم التحقق من رمز تسجيل الدخول', status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:43', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Order confirmed',                   labelAr: 'تم تأكيد الطلب',               status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Payment initiated',                 labelAr: 'بدأ الدفع',                     status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:44', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Gateway response received',         labelAr: 'تم استلام استجابة البوابة',     status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:44', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Payment successful',                labelAr: 'تم الدفع بنجاح',                status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:45', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Invoice or receipt linked to profile', labelAr: 'تم ربط الفاتورة بالملف',    status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:45', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
    ],
  },
  {
    id: 'disclosure',
    labelEn: 'Disclosure',
    labelAr: 'الإفصاح',
    overlineEn: 'Versioned snapshot',
    overlineAr: 'لقطة إصدار',
    status: 'Paused',
    checkpoints: [
      { labelEn: 'Personal details completed',                   labelAr: 'تم اكتمال التفاصيل الشخصية',             status: 'Paused',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:42', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل', details: { source: 'Mobile app', attempts: 1, waitingOn: 'No one', duration: '—', reference: 'O-8821', businessOutcome: '—' } },
      { labelEn: 'Declaration accepted',                         labelAr: 'تم قبول الإقرار',                        status: 'Not started', tag: 'Mandatory',                               noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Employment captured',                          labelAr: 'تم تسجيل بيانات التوظيف',               status: 'Not started', tag: 'System',                                  noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Additional income captured',                   labelAr: 'تم تسجيل الدخل الإضافي',                status: 'Not started', tag: 'Optional',                               noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Commitments captured',                         labelAr: 'تم تسجيل الالتزامات',                   status: 'Not started', tag: 'System',                                  noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Disclosure submitted',                         labelAr: 'تم تقديم الإفصاح',                      status: 'Not started', tag: 'System',                                  noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Financial frequency set to monthly',           labelAr: 'تم تعيين التكرار المالي شهريًا',        status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:43', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Disclosure submitted',                         labelAr: 'تم تقديم الإفصاح',                      status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 09:44', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Disclosure snapshot recorded',                 labelAr: 'تم تسجيل لقطة الإفصاح',                status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:44', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Disclosure snapshot ready for Eligibility',    labelAr: 'لقطة الإفصاح جاهزة للأهلية',           status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:45', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
    ],
  },
  {
    id: 'data-validation',
    labelEn: 'Data Validation',
    labelAr: 'التحقق من البيانات',
    overlineEn: 'Report validity',
    overlineAr: 'صلاحية التقرير',
    status: 'Paused',
    checkpoints: [
      { labelEn: 'MASDAR report validity evaluated',   labelAr: 'تم تقييم صلاحية تقرير مصدر',  status: 'Paused',      tag: 'System',    timestamp: 'Jul 11 · 09:42', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل', details: { source: 'MASDAR', attempts: 1, waitingOn: 'No one', duration: '—', reference: 'O-8821', businessOutcome: 'Expired · new request required' } },
      { labelEn: 'SIMAH report validity evaluated',    labelAr: 'تم تقييم صلاحية تقرير سيمه',  status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 09:43', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Required report action determined',  labelAr: 'تم تحديد الإجراء المطلوب للتقرير', status: 'Not started', tag: 'Mandatory',                          noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
    ],
  },
  {
    id: 'eligibility',
    labelEn: 'Eligibility',
    labelAr: 'الأهلية',
    overlineEn: 'Decision Engine',
    overlineAr: 'محرك القرار',
    status: 'Not started',
    checkpoints: [
      { labelEn: 'Eligibility request created',           labelAr: 'تم إنشاء طلب الأهلية',              status: 'Not started', tag: 'Mandatory', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Disclosure snapshot linked',            labelAr: 'تم ربط لقطة الإفصاح',              status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Payment decision or reference linked',  labelAr: 'تم ربط قرار الدفع أو مرجعه',       status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Employment snapshot linked',            labelAr: 'تم ربط لقطة التوظيف',              status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'SIMAH result linked',                   labelAr: 'تم ربط نتيجة سيمه',                status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Required data validated',               labelAr: 'تم التحقق من البيانات المطلوبة',   status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Engine started',                        labelAr: 'تم تشغيل المحرك',                  status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Engine completed',                      labelAr: 'اكتمل المحرك',                     status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Eligibility result returned',           labelAr: 'تم إرجاع نتيجة الأهلية',          status: 'Not started', tag: 'Mandatory', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Offers generated',                      labelAr: 'تم إنشاء العروض',                  status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
    ],
  },
  {
    id: 'order-submission',
    labelEn: 'Order submission',
    labelAr: 'تقديم الطلب',
    overlineEn: 'OTP & IVR',
    overlineAr: 'OTP وIVR',
    status: 'Not started',
    checkpoints: [
      { labelEn: 'Offer or product selected',              labelAr: 'تم اختيار العرض أو المنتج',         status: 'Not started', tag: 'Mandatory', noteEn: 'No Order ID · waiting for eligibility', noteAr: 'لا يوجد رقم طلب · في انتظار الأهلية', details: { source: 'Mobile app', attempts: 0, waitingOn: 'No one', duration: '—', reference: '—', businessOutcome: '—' } },
      { labelEn: 'Order created',                          labelAr: 'تم إنشاء الطلب',                   status: 'Not started', tag: 'Mandatory', noteEn: 'No Order ID · waiting for eligibility', noteAr: 'لا يوجد رقم طلب · في انتظار الأهلية' },
      { labelEn: 'Order confirmation OTP sent',            labelAr: 'تم إرسال رمز تأكيد الطلب',         status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Order confirmation OTP verified',        labelAr: 'تم التحقق من رمز تأكيد الطلب',    status: 'Not started', tag: 'Mandatory', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Order confirmed',                        labelAr: 'تم تأكيد الطلب',                   status: 'Not started', tag: 'Mandatory', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Order submitted',                        labelAr: 'تم تقديم الطلب',                   status: 'Not started', tag: 'Mandatory', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Order IVR completed',                    labelAr: 'اكتمل IVR الطلب',                  status: 'Not started', tag: 'Mandatory', noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Provider or Brokerage receipt recorded', labelAr: 'تم تسجيل إيصال المزود أو الوسيط', status: 'Not started', tag: 'Optional',  noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
      { labelEn: 'Order closed',                           labelAr: 'تم إغلاق الطلب',                   status: 'Not started', tag: 'System',    noteEn: 'No activity recorded', noteAr: 'لا يوجد نشاط مسجل' },
    ],
  },
];

// ─── Provider journey ─────────────────────────────────────────────────────────

export type ProviderCheckpointResult = 'Passed' | 'Valid at request' | 'Failed' | 'Pending';

export type ProviderCheckpoint = {
  nameEn: string;
  nameAr: string;
  recordedValue: string;
  result: ProviderCheckpointResult;
  eventTime: string;
};

export type ProviderStep = {
  id: string;
  labelEn: string;
  labelAr: string;
  overlineEn: string;
  overlineAr: string;
  status: 'Passed' | 'Paused' | 'Not started';
  checkpoints: ProviderCheckpoint[];
};

export const PROVIDER_JOURNEY_STEPS: ProviderStep[] = [
  {
    id: 'customer-verification',
    labelEn: 'Customer Verification',
    labelAr: 'التحقق من العميل',
    overlineEn: 'Customer & report checks',
    overlineAr: 'فحوصات العميل والتقارير',
    status: 'Passed',
    checkpoints: [
      { nameEn: 'Identity and customer profile', nameAr: 'الهوية وملف العميل',      recordedValue: 'Verified',       result: 'Passed',           eventTime: '09:11 AM' },
      { nameEn: 'MASDAR report',                 nameAr: 'تقرير مصدر',               recordedValue: 'MSD-•••-804',    result: 'Valid at request', eventTime: '09:13 AM' },
      { nameEn: 'SIMAH report',                  nameAr: 'تقرير سيمه',               recordedValue: 'SMH-•••-173',    result: 'Valid at request', eventTime: '09:14 AM' },
    ],
  },
  {
    id: 'eligibility',
    labelEn: 'Eligibility',
    labelAr: 'الأهلية',
    overlineEn: 'Engine request & result',
    overlineAr: 'طلب المحرك والنتيجة',
    status: 'Passed',
    checkpoints: [
      { nameEn: 'Eligibility engine request',    nameAr: 'طلب محرك الأهلية',         recordedValue: 'Approved',       result: 'Passed',           eventTime: '09:15 AM' },
      { nameEn: 'Credit score threshold',        nameAr: 'حد درجة الائتمان',          recordedValue: '720 pts',        result: 'Passed',           eventTime: '09:15 AM' },
      { nameEn: 'Debt burden ratio',             nameAr: 'نسبة عبء الديون',           recordedValue: '28%',            result: 'Passed',           eventTime: '09:16 AM' },
      { nameEn: 'Engine decision',               nameAr: 'قرار المحرك',               recordedValue: 'Pre-approved',   result: 'Passed',           eventTime: '09:16 AM' },
    ],
  },
  {
    id: 'order-submission',
    labelEn: 'Order Submission',
    labelAr: 'تقديم الطلب',
    overlineEn: 'Confirmation & handoff',
    overlineAr: 'التأكيد والإحالة',
    status: 'Passed',
    checkpoints: [
      { nameEn: 'Provider selection',            nameAr: 'اختيار المزود',             recordedValue: 'Namaa Finance',  result: 'Passed',           eventTime: '09:20 AM' },
      { nameEn: 'Order created',                 nameAr: 'إنشاء الطلب',               recordedValue: 'O-8740',         result: 'Passed',           eventTime: '09:21 AM' },
      { nameEn: 'Provider notified',             nameAr: 'إشعار المزود',              recordedValue: 'Confirmed',      result: 'Passed',           eventTime: '09:21 AM' },
    ],
  },
  {
    id: 'provider-outcome',
    labelEn: 'Provider Outcome',
    labelAr: 'نتيجة المزود',
    overlineEn: 'Provider / OMS outcome',
    overlineAr: 'نتيجة المزود / OMS',
    status: 'Passed',
    checkpoints: [
      { nameEn: 'Provider order status',         nameAr: 'حالة طلب المزود',           recordedValue: 'Closed',         result: 'Passed',           eventTime: '03:18 PM' },
      { nameEn: 'Final disbursement',            nameAr: 'الصرف النهائي',             recordedValue: 'SAR 150,000',    result: 'Passed',           eventTime: '03:18 PM' },
      { nameEn: 'Provider confirmation',         nameAr: 'تأكيد المزود',              recordedValue: 'Namaa Finance',  result: 'Passed',           eventTime: '03:18 PM' },
    ],
  },
];
