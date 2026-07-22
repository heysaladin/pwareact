'use client';
import { useState, useEffect } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import Topbar from '@/components/orders/Topbar';
import CustomersTable from './CustomersTable';
import ConciseCustomerList from './ConciseCustomerList';
import CardFooter from '@/components/orders/CardFooter';
import CustomerDetailsPanel from '@/components/orders/CustomerDetailsPanel';
import { Card, CardContent, CardFooter as CardFooterSlot } from '@/components/ui/card';
import { useLang } from '@/lib/language-context';
import { cn } from '@/lib/utils';

function useWindowWidth() {
  const [width, setWidth] = useState(1440);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return width;
}

const CUSTOMERS = [
  { id: 'CPS-001', name: 'Mohammed Al-Rashidi',   nameAr: 'محمد الراشدي',      email: 'mohammed.r@email.com',   phone: '+966501234567', status: 'Active'    as const, creditScore: 812, creditRisk: 'LOW RISK'    },
  { id: 'CPS-002', name: 'Fatimah Al-Otaiby',     nameAr: 'فاطمة العتيبي',     email: 'fatimah.o@email.com',    phone: '+966552345678', status: 'Active'    as const, creditScore: 743, creditRisk: 'MEDIUM RISK' },
  { id: 'CPS-003', name: 'Abdullah Al-Ghamdi',    nameAr: 'عبدالله الغامدي',   email: 'abdullah.g@email.com',   phone: '+966543456789', status: 'Inactive'  as const, creditScore: 624, creditRisk: 'MEDIUM RISK' },
  { id: 'CPS-004', name: 'Noura Al-Harbi',        nameAr: 'نورة الحربي',       email: 'noura.h@email.com',      phone: '+966564567890', status: 'Active'    as const, creditScore: 795, creditRisk: 'LOW RISK'    },
  { id: 'CPS-005', name: 'Khalid Al-Zahrani',     nameAr: 'خالد الزهراني',     email: 'khalid.z@email.com',     phone: '+966505678901', status: 'Suspended' as const, creditScore: 510, creditRisk: 'HIGH RISK'   },
  { id: 'CPS-006', name: 'Sara Al-Qahtani',       nameAr: 'سارة القحطاني',     email: 'sara.q@email.com',       phone: '+966556789012', status: 'Active'    as const, creditScore: 711, creditRisk: 'MEDIUM RISK' },
  { id: 'CPS-007', name: 'Omar Al-Shehri',        nameAr: 'عمر الشهري',        email: 'omar.s@email.com',       phone: '+966547890123', status: 'Active'    as const, creditScore: 768, creditRisk: 'MEDIUM RISK' },
  { id: 'CPS-008', name: 'Maryam Al-Dosari',      nameAr: 'مريم الدوسري',      email: 'maryam.d@email.com',     phone: '+966568901234', status: 'Inactive'  as const, creditScore: 651, creditRisk: 'MEDIUM RISK' },
  { id: 'CPS-009', name: 'Yazid Al-Mutairi',      nameAr: 'يزيد المطيري',      email: 'yazid.m@email.com',      phone: '+966509012345', status: 'Active'    as const, creditScore: 831, creditRisk: 'LOW RISK'    },
  { id: 'CPS-010', name: 'Aminah Al-Subhi',       nameAr: 'أمينة الصبحي',      email: 'aminah.s@email.com',     phone: '+966550123456', status: 'Active'    as const, creditScore: 724, creditRisk: 'MEDIUM RISK' },
  { id: 'CPS-011', name: 'Faisal Al-Anzi',        nameAr: 'فيصل العنزي',       email: 'faisal.a@email.com',     phone: '+966541235678', status: 'Active'    as const, creditScore: 804, creditRisk: 'LOW RISK'    },
  { id: 'CPS-012', name: 'Hessa Al-Bishi',        nameAr: 'هسة البيشي',        email: 'hessa.b@email.com',      phone: '+966562346789', status: 'Suspended' as const, creditScore: 488, creditRisk: 'HIGH RISK'   },
];

export default function CustomersPage() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const [searchValue, setSearchValue] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const windowWidth = useWindowWidth();
  const isSplitView = selectedId !== null;

  const selectedCustomer = CUSTOMERS.find(c => c.id === selectedId);

  if (windowWidth < 1024) {
    return (
      <div className="w-full min-h-screen bg-[#f8fafc] dark:bg-slate-950 flex flex-col items-center justify-center gap-6 px-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#fff7ed] border border-[#fed7aa] flex items-center justify-center text-3xl">
          🖥️
        </div>
        <div className="flex flex-col gap-2 max-w-xs">
          <p className="text-[18px] font-semibold text-[#181d27] dark:text-slate-100">Screen too small</p>
          <p className="text-[14px] text-[#697586] dark:text-slate-400 leading-6">
            This dashboard is designed for wide screens. Please open it on a laptop or desktop for the best experience.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#f8fafc] flex flex-col dark:bg-slate-950">
      <Topbar />
      <main className="flex-1 px-6 pt-4 pb-4 flex flex-col gap-4 min-h-0">

        {isSplitView ? (
          /* ── Split View ── */
          <Card className="flex-1 flex flex-row overflow-visible min-h-0">
            <ConciseCustomerList
              customers={CUSTOMERS}
              selectedId={selectedId!}
              onSelect={(id) => setSelectedId(id)}
              onClose={() => setSelectedId(null)}
            />
            <div className="flex flex-1 min-w-0 py-2 pe-2">
              <CustomerDetailsPanel
                order={{
                  customerName: selectedCustomer?.name ?? '',
                  customerId:   selectedCustomer?.id ?? '',
                  customerPhone: selectedCustomer?.phone ?? '',
                  customerEmail: selectedCustomer?.email ?? '',
                }}
                onClose={() => setSelectedId(null)}
                className="flex-1 w-auto"
              />
            </div>
          </Card>
        ) : (
          /* ── Full Table View ── */
          <Card className="flex-1 orders-card">
            {/* Card Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <h2 className="text-[color:var(--brand\/600,#0063f5)] text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">
                {isAr ? 'العملاء' : 'Customers'}
              </h2>

              <div className="relative w-[260px]">
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className={cn(
                    'w-full h-10 ps-9 pe-8 border border-[#d5d7da] rounded-lg text-sm bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] focus:outline-none focus:ring-1 focus:ring-[#0063f5] dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500',
                    searchValue ? 'text-[#121a26] dark:text-slate-100' : 'text-[#697586] dark:text-slate-400'
                  )}
                  placeholder={isAr ? 'البحث برقم العميل، الاسم...' : 'Search by Customer ID, Name...'}
                />
                <Search className="absolute start-3 top-3 w-4 h-4 text-[#9aa4b2] dark:text-slate-500" />
                {searchValue
                  ? <button onClick={() => setSearchValue('')} className="absolute end-3 top-3 flex items-center justify-center w-4 h-4 rounded-full bg-[#d92d20] hover:bg-[#b91c1c]">
                      <X className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </button>
                  : <ChevronDown className="absolute end-3 top-3 w-4 h-4 text-[#9aa4b2] dark:text-slate-500" />
                }
              </div>
            </div>

            <CardContent className="flex-1 overflow-hidden">
              <CustomersTable onSelectCustomer={(id) => setSelectedId(id)} />
            </CardContent>

            <CardFooterSlot>
              <CardFooter currentPage={1} totalPages={5} />
            </CardFooterSlot>
          </Card>
        )}
      </main>
    </div>
  );
}
