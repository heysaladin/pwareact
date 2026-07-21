'use client';
import { useState, useEffect } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import Topbar from '@/components/orders/Topbar';
import CustomersTable from './CustomersTable';
import CardFooter from '@/components/orders/CardFooter';
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

export default function CustomersPage() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const [searchValue, setSearchValue] = useState('');
  const windowWidth = useWindowWidth();

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
        <Card className="flex-1 orders-card">
          {/* Card Header */}
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-[color:var(--brand\/600,#0063f5)] text-[23.5px] font-semibold leading-[30px] whitespace-nowrap">
              {isAr ? 'العملاء' : 'Customers'}
            </h2>

            {/* Search */}
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
            <CustomersTable />
          </CardContent>

          <CardFooterSlot>
            <CardFooter currentPage={1} totalPages={5} />
          </CardFooterSlot>
        </Card>
      </main>
    </div>
  );
}
