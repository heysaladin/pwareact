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
  { event: 'Mobile app opened',     detail: 'iPhone · Riyadh · Existing trusted device', time: 'Today, 09:42'  },
  { event: 'Profile data reviewed', detail: 'Admin portal · Customer Success',            time: 'Jul 26, 15:12' },
  { event: 'Profile data reviewed', detail: 'Admin portal · Customer Success',            time: 'Jul 26, 15:12' },
  { event: 'Profile data reviewed', detail: 'Admin portal · Customer Success',            time: 'Jul 26, 15:12' },
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
      { labelEn: 'Account activated',    labelAr: 'تم تفعيل الحساب',      status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:27', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Account active' } },
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
      { labelEn: 'Terms & conditions shown',  labelAr: 'تم عرض الشروط والأحكام', status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:28', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Terms displayed' } },
      { labelEn: 'Customer agreement signed', labelAr: 'تم توقيع الاتفاقية',      status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:28', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '18s', reference: 'S-1042', businessOutcome: 'Agreement signed' } },
    ],
  },
  {
    id: 'eligibility',
    labelEn: 'Disclosure',
    labelAr: 'الإفصاح',
    status: 'Passed',
    subLabelEn: '3 checkpoints',
    subLabelAr: '٣ نقاط تحقق',
    checkpoints: [
      { labelEn: 'SIMAH report fetched',  labelAr: 'تم جلب تقرير SIMAH',       status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:29', details: { source: 'SIMAH', attempts: 1, waitingOn: '—', duration: '3s', reference: 'S-1042', businessOutcome: 'Report received' } },
      { labelEn: 'MASDR data validated',  labelAr: 'تم التحقق من بيانات MASDR', status: 'Passed', tag: 'System',    timestamp: 'Jul 11 · 10:29', details: { source: 'MASDR', attempts: 1, waitingOn: '—', duration: '4s', reference: 'S-1042', businessOutcome: 'Data validated' } },
      { labelEn: 'Eligibility decision',  labelAr: 'قرار الأهلية',               status: 'Passed', tag: 'Mandatory', timestamp: 'Jul 11 · 10:29', details: { source: 'Engine', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'S-1042', businessOutcome: 'Eligible' } },
    ],
  },
  {
    id: 'order-submission',
    labelEn: 'Data Validation',
    labelAr: 'التحقق من البيانات',
    status: 'Paused',
    subLabelEn: '6 checkpoints',
    subLabelAr: '٦ نقاط تحقق',
    waitingSince: 'Jul 11 · 10:31',
    waitingOn: 'Customer',
    checkpoints: [
      { labelEn: 'Offer selected',                 labelAr: 'تم اختيار العرض',            status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 10:29', details: { source: 'App', attempts: 1, waitingOn: '—', duration: '8m 12s', reference: 'O-8821', businessOutcome: 'Offer locked' } },
      { labelEn: 'Order created',                  labelAr: 'تم إنشاء الطلب',             status: 'Passed',      tag: 'Mandatory', timestamp: 'Jul 11 · 10:30', details: { source: 'Platform', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'O-8821', businessOutcome: 'Order draft' } },
      { labelEn: 'Confirmation OTP sent',          labelAr: 'تم إرسال رمز تأكيد الطلب',   status: 'Passed',      tag: 'System',    timestamp: 'Jul 11 · 10:31', details: { source: 'SMS gateway', attempts: 1, waitingOn: '—', duration: '< 1s', reference: 'O-8821', businessOutcome: 'OTP dispatched' } },
      {
        labelEn: 'Order confirmation OTP verified',
        labelAr: 'تم التحقق من رمز تأكيد الطلب',
        status: 'Paused',
        tag: 'Mandatory',
        noteEn: 'OTP was sent and remains valid for 4 minutes.',
        noteAr: 'تم إرسال OTP ولا يزال صالحاً لمدة ٤ دقائق.',
        details: { source: 'OTP service', attempts: 1, waitingOn: 'Customer', duration: '—', reference: 'O-8821', businessOutcome: '—' },
      },
      { labelEn: 'Order confirmed',             labelAr: 'تم تأكيد الطلب',           status: 'Not started', tag: 'Mandatory' },
      { labelEn: 'Order submitted to provider', labelAr: 'تم إرسال الطلب للمزود',    status: 'Not started', tag: 'System' },
    ],
  },
];
