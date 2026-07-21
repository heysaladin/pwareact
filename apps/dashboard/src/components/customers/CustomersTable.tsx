'use client';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { User, Phone, Mail, MapPin } from 'lucide-react';
import { useLang } from '@/lib/language-context';

type CustomerStatus = 'Active' | 'Inactive' | 'Suspended';
type CreditTier = 'Excellent' | 'Good' | 'Fair' | 'Poor';

type Customer = {
  id: string;
  name: string;
  nameAr: string;
  phone: string;
  email: string;
  status: CustomerStatus;
  joinedDate: string;
  creditTier: CreditTier;
  creditScore: number;
  city: string;
  cityAr: string;
  totalOrders: number;
};

const CUSTOMERS: Customer[] = [
  { id: 'CPS-001', name: 'Mohammed Al-Rashidi',   nameAr: 'محمد الراشدي',      phone: '+966 50 123 4567', email: 'mohammed.r@email.com',   status: 'Active',    joinedDate: '2022-03-14', creditTier: 'Excellent', creditScore: 812, city: 'Riyadh',  cityAr: 'الرياض',  totalOrders: 14 },
  { id: 'CPS-002', name: 'Fatimah Al-Otaiby',     nameAr: 'فاطمة العتيبي',     phone: '+966 55 234 5678', email: 'fatimah.o@email.com',    status: 'Active',    joinedDate: '2021-07-22', creditTier: 'Good',      creditScore: 743, city: 'Jeddah',  cityAr: 'جدة',     totalOrders: 9  },
  { id: 'CPS-003', name: 'Abdullah Al-Ghamdi',    nameAr: 'عبدالله الغامدي',   phone: '+966 54 345 6789', email: 'abdullah.g@email.com',   status: 'Inactive',  joinedDate: '2020-11-08', creditTier: 'Fair',      creditScore: 624, city: 'Mecca',   cityAr: 'مكة',     totalOrders: 3  },
  { id: 'CPS-004', name: 'Noura Al-Harbi',        nameAr: 'نورة الحربي',       phone: '+966 56 456 7890', email: 'noura.h@email.com',      status: 'Active',    joinedDate: '2023-01-30', creditTier: 'Excellent', creditScore: 795, city: 'Riyadh',  cityAr: 'الرياض',  totalOrders: 21 },
  { id: 'CPS-005', name: 'Khalid Al-Zahrani',     nameAr: 'خالد الزهراني',     phone: '+966 50 567 8901', email: 'khalid.z@email.com',     status: 'Suspended', joinedDate: '2019-05-17', creditTier: 'Poor',      creditScore: 510, city: 'Dammam',  cityAr: 'الدمام',  totalOrders: 1  },
  { id: 'CPS-006', name: 'Sara Al-Qahtani',       nameAr: 'سارة القحطاني',     phone: '+966 55 678 9012', email: 'sara.q@email.com',       status: 'Active',    joinedDate: '2022-09-05', creditTier: 'Good',      creditScore: 711, city: 'Medina',  cityAr: 'المدينة', totalOrders: 7  },
  { id: 'CPS-007', name: 'Omar Al-Shehri',        nameAr: 'عمر الشهري',        phone: '+966 54 789 0123', email: 'omar.s@email.com',       status: 'Active',    joinedDate: '2021-12-19', creditTier: 'Good',      creditScore: 768, city: 'Taif',    cityAr: 'الطائف',  totalOrders: 12 },
  { id: 'CPS-008', name: 'Maryam Al-Dosari',      nameAr: 'مريم الدوسري',      phone: '+966 56 890 1234', email: 'maryam.d@email.com',     status: 'Inactive',  joinedDate: '2020-04-28', creditTier: 'Fair',      creditScore: 651, city: 'Riyadh',  cityAr: 'الرياض',  totalOrders: 4  },
  { id: 'CPS-009', name: 'Yazid Al-Mutairi',      nameAr: 'يزيد المطيري',      phone: '+966 50 901 2345', email: 'yazid.m@email.com',      status: 'Active',    joinedDate: '2023-06-11', creditTier: 'Excellent', creditScore: 831, city: 'Riyadh',  cityAr: 'الرياض',  totalOrders: 18 },
  { id: 'CPS-010', name: 'Aminah Al-Subhi',       nameAr: 'أمينة الصبحي',      phone: '+966 55 012 3456', email: 'aminah.s@email.com',     status: 'Active',    joinedDate: '2022-02-07', creditTier: 'Good',      creditScore: 724, city: 'Jeddah',  cityAr: 'جدة',     totalOrders: 6  },
  { id: 'CPS-011', name: 'Faisal Al-Anzi',        nameAr: 'فيصل العنزي',       phone: '+966 54 123 5678', email: 'faisal.a@email.com',     status: 'Active',    joinedDate: '2021-08-14', creditTier: 'Excellent', creditScore: 804, city: 'Dammam',  cityAr: 'الدمام',  totalOrders: 16 },
  { id: 'CPS-012', name: 'Hessa Al-Bishi',        nameAr: 'هسة البيشي',        phone: '+966 56 234 6789', email: 'hessa.b@email.com',      status: 'Suspended', joinedDate: '2018-10-03', creditTier: 'Poor',      creditScore: 488, city: 'Abha',    cityAr: 'أبها',    totalOrders: 0  },
];

function getStatusVariant(s: CustomerStatus): 'success' | 'error' | 'warning' {
  if (s === 'Active') return 'success';
  if (s === 'Suspended') return 'error';
  return 'warning';
}

function getCreditVariant(t: CreditTier): 'success' | 'warning' | 'error' | 'info' {
  if (t === 'Excellent') return 'success';
  if (t === 'Good') return 'info';
  if (t === 'Fair') return 'warning';
  return 'error';
}

const statusLabelAr: Record<CustomerStatus, string> = {
  Active: 'نشط', Inactive: 'غير نشط', Suspended: 'موقوف',
};

const creditLabelAr: Record<CreditTier, string> = {
  Excellent: 'ممتاز', Good: 'جيد', Fair: 'مقبول', Poor: 'ضعيف',
};

export default function CustomersTable() {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-white dark:hover:bg-slate-950">
          <TableHead className="w-36"  dir={isAr ? 'auto' : undefined}>{isAr ? 'رقم العميل'  : 'Customer ID'}</TableHead>
          <TableHead className="w-64"  dir={isAr ? 'auto' : undefined}>{isAr ? 'بيانات العميل' : 'Customer Details'}</TableHead>
          <TableHead className="w-32"  dir={isAr ? 'auto' : undefined}>{isAr ? 'الحالة'      : 'Status'}</TableHead>
          <TableHead className="w-44"  dir={isAr ? 'auto' : undefined}>{isAr ? 'درجة الائتمان' : 'Credit Score'}</TableHead>
          <TableHead className="w-40"  dir={isAr ? 'auto' : undefined}>{isAr ? 'المدينة'     : 'City'}</TableHead>
          <TableHead className="w-40"  dir={isAr ? 'auto' : undefined}>{isAr ? 'تاريخ الانضمام' : 'Joined Date'}</TableHead>
          <TableHead className="w-28 text-center" dir={isAr ? 'auto' : undefined}>{isAr ? 'الطلبات' : 'Orders'}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {CUSTOMERS.map((customer) => (
          <TableRow key={customer.id}>
            {/* Customer ID */}
            <TableCell>
              <span className="font-semibold text-sm text-[#181d27] dark:text-slate-100 font-ltr" dir="auto">
                {customer.id}
              </span>
            </TableCell>

            {/* Customer Details */}
            <TableCell>
              <div className="flex flex-col gap-1.5 rtl:items-end">
                <span className="font-semibold text-sm text-[#121a26] dark:text-slate-100">
                  {isAr ? customer.nameAr : customer.name}
                </span>
                <div className="flex items-center gap-2 text-xs text-[#717680] dark:text-slate-400">
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{customer.phone}</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-[#717680] dark:text-slate-400">
                  <Mail className="w-3 h-3" />{customer.email}
                </span>
              </div>
            </TableCell>

            {/* Status */}
            <TableCell>
              <Badge variant={getStatusVariant(customer.status)} className="rounded-2xl text-xs font-medium">
                {isAr ? statusLabelAr[customer.status] : customer.status}
              </Badge>
            </TableCell>

            {/* Credit Score */}
            <TableCell>
              <div className="flex flex-col gap-1">
                <Badge variant={getCreditVariant(customer.creditTier)} className="rounded-full text-xs font-semibold w-fit">
                  {isAr ? creditLabelAr[customer.creditTier] : customer.creditTier}
                </Badge>
                <span className="text-xs text-[#717680] dark:text-slate-400">{customer.creditScore}</span>
              </div>
            </TableCell>

            {/* City */}
            <TableCell>
              <span className="flex items-center gap-1.5 text-sm text-[#364152] dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#9aa4b2] dark:text-slate-500 shrink-0" />
                {isAr ? customer.cityAr : customer.city}
              </span>
            </TableCell>

            {/* Joined Date */}
            <TableCell>
              <span className="text-sm text-[#717680] dark:text-slate-400" dir="auto">
                {customer.joinedDate}
              </span>
            </TableCell>

            {/* Total Orders */}
            <TableCell className="text-center">
              <span className="text-sm font-semibold text-[#181d27] dark:text-slate-100">
                {customer.totalOrders}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
