'use client';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Mail } from 'lucide-react';
import { useLang } from '@/lib/language-context';

type CustomerStatus = 'Active' | 'Inactive' | 'Suspended';

type Customer = {
  id: string;
  name: string;
  nameAr: string;
  phone: string;
  email: string;
  status: CustomerStatus;
  joinedDate: string;
  joinedTime: string;
  creditScore: number;
  creditRisk: 'MEDIUM RISK' | 'LOW RISK' | 'HIGH RISK' | 'UNDEFINED';
  orderCount: number;
  nationalId: string;
  nationality: string;
  nationalityAr: string;
  simah: boolean;
  masdr: boolean;
};

const CUSTOMERS: Customer[] = [
  { id: 'CPS-001', name: 'Mohammed Al-Rashidi',   nameAr: 'محمد الراشدي',      phone: '+966501234567', email: 'mohammed.r@email.com',   status: 'Active',    joinedDate: 'March 14, 2022',     joinedTime: '10:00 AM', creditScore: 812, creditRisk: 'LOW RISK',    orderCount: 14, nationalId: '1066388128', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: true,  masdr: false },
  { id: 'CPS-002', name: 'Fatimah Al-Otaiby',     nameAr: 'فاطمة العتيبي',     phone: '+966552345678', email: 'fatimah.o@email.com',    status: 'Active',    joinedDate: 'July 22, 2021',      joinedTime: '02:30 PM', creditScore: 743, creditRisk: 'MEDIUM RISK', orderCount: 9,  nationalId: '1073456789', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: true,  masdr: true  },
  { id: 'CPS-003', name: 'Abdullah Al-Ghamdi',    nameAr: 'عبدالله الغامدي',   phone: '+966543456789', email: 'abdullah.g@email.com',   status: 'Inactive',  joinedDate: 'November 8, 2020',   joinedTime: '09:15 AM', creditScore: 624, creditRisk: 'MEDIUM RISK', orderCount: 3,  nationalId: '1081234567', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: false, masdr: false },
  { id: 'CPS-004', name: 'Noura Al-Harbi',        nameAr: 'نورة الحربي',       phone: '+966564567890', email: 'noura.h@email.com',      status: 'Active',    joinedDate: 'January 30, 2023',   joinedTime: '11:45 AM', creditScore: 795, creditRisk: 'LOW RISK',    orderCount: 21, nationalId: '1092345678', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: true,  masdr: false },
  { id: 'CPS-005', name: 'Khalid Al-Zahrani',     nameAr: 'خالد الزهراني',     phone: '+966505678901', email: 'khalid.z@email.com',     status: 'Suspended', joinedDate: 'May 17, 2019',       joinedTime: '03:00 PM', creditScore: 510, creditRisk: 'HIGH RISK',   orderCount: 1,  nationalId: '1054321098', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: false, masdr: false },
  { id: 'CPS-006', name: 'Sara Al-Qahtani',       nameAr: 'سارة القحطاني',     phone: '+966556789012', email: 'sara.q@email.com',       status: 'Active',    joinedDate: 'September 5, 2022',  joinedTime: '08:20 AM', creditScore: 711, creditRisk: 'MEDIUM RISK', orderCount: 7,  nationalId: '1067890123', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: true,  masdr: true  },
  { id: 'CPS-007', name: 'Omar Al-Shehri',        nameAr: 'عمر الشهري',        phone: '+966547890123', email: 'omar.s@email.com',       status: 'Active',    joinedDate: 'December 19, 2021',  joinedTime: '01:00 PM', creditScore: 768, creditRisk: 'MEDIUM RISK', orderCount: 12, nationalId: '1078901234', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: true,  masdr: false },
  { id: 'CPS-008', name: 'Maryam Al-Dosari',      nameAr: 'مريم الدوسري',      phone: '+966568901234', email: 'maryam.d@email.com',     status: 'Inactive',  joinedDate: 'April 28, 2020',     joinedTime: '04:45 PM', creditScore: 651, creditRisk: 'MEDIUM RISK', orderCount: 4,  nationalId: '1089012345', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: false, masdr: false },
  { id: 'CPS-009', name: 'Yazid Al-Mutairi',      nameAr: 'يزيد المطيري',      phone: '+966509012345', email: 'yazid.m@email.com',      status: 'Active',    joinedDate: 'June 11, 2023',      joinedTime: '10:30 AM', creditScore: 831, creditRisk: 'LOW RISK',    orderCount: 18, nationalId: '1090123456', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: true,  masdr: true  },
  { id: 'CPS-010', name: 'Aminah Al-Subhi',       nameAr: 'أمينة الصبحي',      phone: '+966550123456', email: 'aminah.s@email.com',     status: 'Active',    joinedDate: 'February 7, 2022',   joinedTime: '09:00 AM', creditScore: 724, creditRisk: 'MEDIUM RISK', orderCount: 6,  nationalId: '1061234567', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: true,  masdr: false },
  { id: 'CPS-011', name: 'Faisal Al-Anzi',        nameAr: 'فيصل العنزي',       phone: '+966541235678', email: 'faisal.a@email.com',     status: 'Active',    joinedDate: 'August 14, 2021',    joinedTime: '02:00 PM', creditScore: 804, creditRisk: 'LOW RISK',    orderCount: 16, nationalId: '1072345678', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: true,  masdr: true  },
  { id: 'CPS-012', name: 'Hessa Al-Bishi',        nameAr: 'هسة البيشي',        phone: '+966562346789', email: 'hessa.b@email.com',      status: 'Suspended', joinedDate: 'October 3, 2018',    joinedTime: '11:00 AM', creditScore: 488, creditRisk: 'HIGH RISK',   orderCount: 0,  nationalId: '1043456789', nationality: 'Saudi Arabia', nationalityAr: 'المملكة العربية السعودية', simah: false, masdr: false },
];

function getRiskBorderColor(risk: Customer['creditRisk']) {
  if (risk === 'LOW RISK') return 'border-[#0063f5] text-[#004fc6]';
  if (risk === 'HIGH RISK') return 'border-[#f04438] text-[#b42318]';
  return 'border-[#9aa4b2] text-[#9aa4b2]';
}

function getStatusStyle(s: CustomerStatus) {
  if (s === 'Active') return 'bg-[#ecfdf3] border-[#abefc6] text-[#067647]';
  if (s === 'Suspended') return 'bg-[#fef3f2] border-[#fecdca] text-[#b42318]';
  return 'bg-[#fffaeb] border-[#fedf89] text-[#b54708]';
}

function YesNoBadge({ value }: { value: boolean }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-2xl border text-[13px] font-medium ${value ? 'bg-[#ecfdf3] border-[#abefc6] text-[#067647]' : 'bg-[#fef3f2] border-[#fecdca] text-[#b42318]'}`}>
      {value ? 'Yes' : 'No'}
    </span>
  );
}

const statusLabelAr: Record<CustomerStatus, string> = {
  Active: 'نشط', Inactive: 'غير نشط', Suspended: 'موقوف',
};

export default function CustomersTable({ onSelectCustomer }: { onSelectCustomer?: (id: string) => void }) {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-white dark:hover:bg-slate-950">
          <TableHead className="w-8" />
          <TableHead className="w-32"  dir={isAr ? 'auto' : undefined}>{isAr ? 'رقم العميل'       : 'Customer ID'}</TableHead>
          <TableHead className="w-64"  dir={isAr ? 'auto' : undefined}>{isAr ? 'بيانات العميل'    : 'Customer Details'}</TableHead>
          <TableHead className="w-48"  dir={isAr ? 'auto' : undefined}>{isAr ? 'درجة الائتمان'    : 'Credit Score'}</TableHead>
          <TableHead className="w-20"  dir={isAr ? 'auto' : undefined}>{isAr ? 'الطلبات'          : 'Orders'}</TableHead>
          <TableHead className="w-36"  dir={isAr ? 'auto' : undefined}>{isAr ? 'رقم الجوال'       : 'Mobile Number'}</TableHead>
          <TableHead className="w-36"  dir={isAr ? 'auto' : undefined}>{isAr ? 'رقم الهوية'       : 'National/Iqama ID'}</TableHead>
          <TableHead className="w-36"  dir={isAr ? 'auto' : undefined}>{isAr ? 'الجنسية'          : 'Nationality'}</TableHead>
          <TableHead className="w-20"  dir={isAr ? 'auto' : undefined}>SIMAH</TableHead>
          <TableHead className="w-20"  dir={isAr ? 'auto' : undefined}>MASDR</TableHead>
          <TableHead className="w-44"  dir={isAr ? 'auto' : undefined}>{isAr ? 'تاريخ الانضمام'   : 'Joined Date'}</TableHead>
          <TableHead className="w-24"  dir={isAr ? 'auto' : undefined}>{isAr ? 'الحالة'           : 'Status'}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {CUSTOMERS.map((customer, i) => (
          <TableRow key={customer.id} className={i % 2 !== 0 ? 'bg-[#f9fbfc] dark:bg-slate-900/50' : ''}>
            {/* Expand */}
            <TableCell>
              <button
                onClick={() => onSelectCustomer?.(customer.id)}
                className="flex items-center justify-center w-8 h-8 border border-[#e3e8ef] rounded-full bg-white hover:bg-[#f0f6ff] hover:border-[#0063f5] transition-colors dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-blue-950"
              >
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="text-[#697586]">
                  <path d="M7 1L1 6.5L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </TableCell>

            {/* Customer ID */}
            <TableCell>
              <span className="text-[15px] font-medium text-[#121a26] dark:text-slate-100 font-ltr" dir="ltr">
                {customer.id}
              </span>
            </TableCell>

            {/* Customer Details */}
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e9eaeb] dark:bg-slate-700 shrink-0 overflow-hidden flex items-center justify-center text-sm font-semibold text-[#697586]">
                  {customer.name.charAt(0)}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[14px] font-medium text-[#121a26] dark:text-slate-100 truncate">
                    {isAr ? customer.nameAr : customer.name}
                  </span>
                  <span className="flex items-center gap-1 text-[13px] text-[#697586] dark:text-slate-400 truncate">
                    <Mail className="w-3 h-3 shrink-0" />
                    {customer.email}
                  </span>
                </div>
              </div>
            </TableCell>

            {/* Credit Score */}
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="relative w-[56px] h-[56px] shrink-0">
                  <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                    <circle cx="28" cy="28" r="22" fill="none" stroke="#e9eaeb" strokeWidth="4" />
                    <circle
                      cx="28" cy="28" r="22"
                      fill="none"
                      stroke={customer.creditRisk === 'LOW RISK' ? '#0063f5' : customer.creditRisk === 'HIGH RISK' ? '#f04438' : '#9aa4b2'}
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 22}`}
                      strokeDashoffset={`${2 * Math.PI * 22 * (1 - (customer.creditScore - 300) / 550)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[12px] font-medium text-[#181d27] dark:text-slate-100">
                    {customer.creditScore}
                  </span>
                </div>
                <span className={`text-[11px] font-semibold border rounded-full px-2 py-0.5 whitespace-nowrap ${getRiskBorderColor(customer.creditRisk)}`}>
                  {customer.creditRisk}
                </span>
              </div>
            </TableCell>

            {/* Order Count */}
            <TableCell>
              <span className="text-[15px] font-medium text-[#121a26] dark:text-slate-100">{customer.orderCount}</span>
            </TableCell>

            {/* Mobile Number */}
            <TableCell>
              <span className="text-[15px] font-medium text-[#121a26] dark:text-slate-100" dir="ltr">{customer.phone}</span>
            </TableCell>

            {/* National/Iqama ID */}
            <TableCell>
              <span className="text-[15px] font-medium text-[#121a26] dark:text-slate-100" dir="ltr">{customer.nationalId}</span>
            </TableCell>

            {/* Nationality */}
            <TableCell>
              <span className="text-[15px] font-medium text-[#121a26] dark:text-slate-100">
                {isAr ? customer.nationalityAr : customer.nationality}
              </span>
            </TableCell>

            {/* SIMAH */}
            <TableCell><YesNoBadge value={customer.simah} /></TableCell>

            {/* MASDR */}
            <TableCell><YesNoBadge value={customer.masdr} /></TableCell>

            {/* Joined Date */}
            <TableCell>
              <div className="flex flex-col gap-0.5">
                <span className="text-[14px] font-medium text-[#121a26] dark:text-slate-100">{customer.joinedDate}</span>
                <span className="text-[13px] text-[#697586] dark:text-slate-400">{customer.joinedTime}</span>
              </div>
            </TableCell>

            {/* Status */}
            <TableCell>
              <span className={`inline-flex items-center px-3 py-1 rounded-2xl border text-[13px] font-medium ${getStatusStyle(customer.status)}`}>
                {isAr ? statusLabelAr[customer.status] : customer.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
