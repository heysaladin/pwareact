'use client';
import { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, ChevronDown, X, Settings2, Check } from 'lucide-react';
import { useLang } from '@/lib/language-context';
import { cn } from '@/lib/utils';

const FILTER_FIELDS = [
  {
    key: 'orderStatus', label: 'Order Status', labelAr: 'حالة الطلب',
    options: ['Approved', 'Pending', 'Under Review', 'Processing', 'Rejected', 'Cancelled'],
  },
  {
    key: 'priority', label: 'Priority', labelAr: 'الأولوية',
    options: ['High', 'Medium', 'Low'],
  },
  {
    key: 'sla', label: 'SLA • Escalation in...', labelAr: 'اتفاقية الخدمة',
    options: ['< 1 hour', '1–4 hours', '4–8 hours', '> 8 hours'],
  },
  {
    key: 'aiScore', label: 'AI Score', labelAr: 'درجة الذكاء الاصطناعي',
    options: ['High (80–100)', 'Medium (50–79)', 'Low (< 50)'],
  },
  {
    key: 'loanAmount', label: 'Loan Amount (Group)', labelAr: 'مبلغ القرض (مجموعة)',
    options: ['< 50K', '50K–100K', '100K–500K', '> 500K'],
  },
  {
    key: 'apr', label: 'APR (Group)', labelAr: 'معدل الفائدة السنوي',
    options: ['< 5%', '5–10%', '10–15%', '> 15%'],
  },
] as const;

const COLUMNS = [
  { key: 'orderId',         label: 'Order ID',               labelAr: 'رقم الطلب',                  on: true  },
  { key: 'orderStatus',     label: 'Order Status',           labelAr: 'حالة الطلب',                 on: true  },
  { key: 'priority',        label: 'Priority',               labelAr: 'الأولوية',                    on: true  },
  { key: 'sla',             label: 'SLA • Escalation in...', labelAr: 'اتفاقية الخدمة',             on: true  },
  { key: 'aiScore',         label: 'AI Score',               labelAr: 'درجة الذكاء الاصطناعي',      on: true  },
  { key: 'customerDetails', label: 'Customer Details',       labelAr: 'بيانات العميل',              on: true  },
  { key: 'productDetails',  label: 'Product Details',        labelAr: 'بيانات المنتج',              on: true  },
  { key: 'providerBrand',   label: 'Provider (Brand)',       labelAr: 'مزود (العلامة التجارية)',     on: false },
  { key: 'loanAmount',      label: 'Loan Amount',            labelAr: 'مبلغ القرض',                 on: true  },
] as const;

type ColKey    = typeof COLUMNS[number]['key'];
type FilterKey = typeof FILTER_FIELDS[number]['key'];

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      className={cn(
        'relative inline-flex h-[18px] w-[34px] shrink-0 rounded-full transition-colors duration-200',
        on ? 'bg-[#0063f5]' : 'bg-[#dbdbdb]'
      )}
    >
      <span className={cn(
        'absolute top-px size-4 rounded-full bg-white shadow transition-transform duration-200',
        on ? 'translate-x-[17px]' : 'translate-x-px'
      )} />
    </button>
  );
}

function FilterDropdown({
  field,
  value,
  isOpen,
  onToggleOpen,
  onSelect,
  isAr,
}: {
  field: typeof FILTER_FIELDS[number];
  value: string;
  isOpen: boolean;
  onToggleOpen: () => void;
  onSelect: (v: string) => void;
  isAr: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onToggleOpen();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onToggleOpen]);

  return (
    <div ref={ref} className="relative flex-1 min-w-[140px]">
      <button
        onClick={onToggleOpen}
        className={cn(
          'w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-800',
          isOpen
            ? 'border-2 border-[#2a7df7] text-[#181d27] font-medium dark:text-slate-100'
            : value
              ? 'border border-[#d5d7da] text-[#181d27] font-medium dark:border-slate-600 dark:text-slate-100'
              : 'border border-[#d5d7da] text-[#717680] dark:border-slate-600 dark:text-slate-400'
        )}
      >
        <span className="truncate">{value || (isAr ? field.labelAr : field.label)}</span>
        <ChevronDown className={cn('w-4 h-4 shrink-0 text-[#667085] dark:text-slate-400 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] start-0 z-50 w-full min-w-[160px] bg-white border border-[#e9eaeb] rounded-lg py-1 shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.05),0px_4px_6px_-2px_rgba(10,13,18,0.01),0px_2px_2px_-1px_rgba(10,13,18,0.02)] dark:bg-slate-900 dark:border-slate-700">
          {field.options.map((opt) => (
            <div key={opt} className="px-1.5 py-px">
              <button
                onClick={() => onSelect(opt)}
                className={cn(
                  'w-full flex items-center gap-2 pl-2 pr-2.5 py-2.5 rounded-md text-left',
                  opt === value ? 'bg-[#fafafa] dark:bg-slate-800' : 'hover:bg-[#fafafa] dark:hover:bg-slate-800'
                )}
              >
                <span className="flex-1 text-sm font-medium text-[#181d27] dark:text-slate-100">{opt}</span>
                {opt === value && <Check className="w-4 h-4 text-[#0063f5] shrink-0" />}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CardHeader({ liveCount: _liveCount }: { liveCount?: number }) {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  const [colConfigOpen, setColConfigOpen] = useState(false);
  const [filterOpen, setFilterOpen]       = useState(false);
  const [searchValue, setSearchValue]     = useState('');
  const [openFilterKey, setOpenFilterKey] = useState<FilterKey | null>(null);
  const [filterValues, setFilterValues]   = useState<Partial<Record<FilterKey, string>>>({});
  const [appliedValues, setAppliedValues] = useState<Partial<Record<FilterKey, string>>>({});

  const [colVisibility, setColVisibility] = useState<Record<ColKey, boolean>>(
    Object.fromEntries(COLUMNS.map((c) => [c.key, c.on])) as Record<ColKey, boolean>
  );
  const [pendingVisibility, setPendingVisibility] = useState<Record<ColKey, boolean>>({ ...colVisibility });

  function openColConfig() {
    setPendingVisibility({ ...colVisibility });
    setColConfigOpen(true);
  }

  function applyColConfig() {
    setColVisibility({ ...pendingVisibility });
    setColConfigOpen(false);
  }

  function resetColConfig() {
    setPendingVisibility(Object.fromEntries(COLUMNS.map((c) => [c.key, c.on])) as Record<ColKey, boolean>);
  }

  function applyFilters() {
    setAppliedValues({ ...filterValues });
    setFilterOpen(false);
    setOpenFilterKey(null);
  }

  function resetFilters() {
    setFilterValues({});
    setAppliedValues({});
  }

  const appliedFilterCount = Object.values(appliedValues).filter(Boolean).length;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <h2 className="text-[#0063f5] text-2xl font-bold">{isAr ? 'طلبات' : 'Orders'}</h2>
        </div>

        <div className="flex items-center gap-3">
          {/* Settings / column config */}
          <div className="relative">
            <button
              onClick={() => colConfigOpen ? setColConfigOpen(false) : openColConfig()}
              className={cn(
                'flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm dark:bg-slate-900',
                colConfigOpen
                  ? 'border border-[#d92d20]'
                  : 'border border-[#d5d7da] hover:bg-[#f9fafb] dark:border-slate-700 dark:hover:bg-slate-800'
              )}
            >
              {colConfigOpen
                ? <X className="w-4 h-4 text-[#d92d20]" />
                : <Settings2 className="w-4 h-4 text-[#667085] dark:text-slate-400" />
              }
            </button>

            {colConfigOpen && (
              <div className="absolute top-[calc(100%+8px)] start-0 z-50 w-[300px] bg-white border border-[#efefef] rounded-[6px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.08)] dark:bg-slate-900 dark:border-slate-700">
                <div className="px-2 py-[11px] border-b border-[#eef1f6] dark:border-slate-700">
                  <p className="text-sm text-[#717680] leading-6 dark:text-slate-400">
                    {isAr ? 'تكوين أعمدة الجدول للعرض' : "Configure the table's column to show"}
                  </p>
                  <p className="text-xs text-[#9aa4b2] mt-0.5 dark:text-slate-500">
                    {isAr ? 'هذا نص تلميح للمساعدة.' : 'This is a hint text to help user.'}
                  </p>
                </div>
                {COLUMNS.map(({ key, label, labelAr }) => (
                  <button
                    key={key}
                    onClick={() => setPendingVisibility((prev) => ({ ...prev, [key]: !prev[key] }))}
                    className="flex items-center gap-3 px-2 py-[11px] w-full hover:bg-[#fafafa] dark:hover:bg-slate-800"
                  >
                    <Toggle
                      on={pendingVisibility[key]}
                      onToggle={() => setPendingVisibility((prev) => ({ ...prev, [key]: !prev[key] }))}
                    />
                    <span className="text-sm font-semibold text-[#1e2228] dark:text-slate-100">
                      {isAr ? labelAr : label}
                    </span>
                  </button>
                ))}
                <div className="flex items-center justify-end gap-3 px-2 py-[11px] border-t border-[#eef1f6] dark:border-slate-700">
                  <button onClick={resetColConfig} className="px-4 py-2 rounded-md border border-[#d92d20] text-[#d92d20] text-sm font-medium hover:bg-red-50 dark:hover:bg-red-950/30">
                    {isAr ? 'إعادة تعيين' : 'Reset'}
                  </button>
                  <button onClick={applyColConfig} className="px-4 py-2 rounded-md bg-[#0063f5] text-white text-sm font-medium hover:bg-[#0052d4]">
                    {isAr ? 'تطبيق' : 'Apply'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative w-[260px]">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={cn(
                'w-full h-10 ps-9 pe-8 border border-[#d5d7da] rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0063f5] dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500',
                searchValue ? 'text-[#121a26] dark:text-slate-100' : 'text-[#717680] dark:text-slate-400'
              )}
              placeholder={isAr ? 'البحث باستخدام رقم الطلب، رقم العميل، الاسم...' : 'Search by Order ID, Customer ID, Name...'}
            />
            <Search className="absolute start-3 top-3 w-4 h-4 text-[#9aa4b2] dark:text-slate-500" />
            {searchValue
              ? <button onClick={() => setSearchValue('')} className="absolute end-3 top-3 flex items-center justify-center w-4 h-4 rounded-full bg-[#d92d20] hover:bg-[#b91c1c]">
                  <X className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </button>
              : <ChevronDown className="absolute end-3 top-3 w-4 h-4 text-[#9aa4b2] dark:text-slate-500" />
            }
          </div>

          {/* Filter */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2.5 bg-white border rounded-lg text-sm font-medium text-[#344054] shadow-sm dark:bg-slate-900 dark:text-slate-100',
              filterOpen
                ? 'border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),0px_0px_0px_2px_white,0px_0px_0px_4px_#77a6ed] dark:border-slate-600'
                : 'border-[#d5d7da] hover:bg-[#f9fafb] dark:border-slate-700 dark:hover:bg-slate-800'
            )}
          >
            <SlidersHorizontal className="w-4 h-4 text-[#667085] dark:text-slate-400" />
            {isAr ? 'فلتر' : 'Filter'}{appliedFilterCount > 0 && ` (${appliedFilterCount})`}
            <ChevronDown className="w-4 h-4 text-[#667085] dark:text-slate-400" />
          </button>
        </div>
      </div>

      {/* Filter panel */}
      {filterOpen && (
        <div className="px-6 pb-6">
          <div className="bg-white border border-[#eaecf0] rounded-lg shadow-[0px_12px_12px_rgba(0,0,0,0.06)] p-6 dark:bg-slate-900 dark:border-slate-700">
            <div className="flex items-center gap-4 flex-wrap">
              {FILTER_FIELDS.map((field) => (
                <FilterDropdown
                  key={field.key}
                  field={field}
                  value={filterValues[field.key] ?? ''}
                  isOpen={openFilterKey === field.key}
                  onToggleOpen={() => setOpenFilterKey((k) => k === field.key ? null : field.key)}
                  onSelect={(v) => {
                    setFilterValues((prev) => ({ ...prev, [field.key]: v }));
                    setOpenFilterKey(null);
                  }}
                  isAr={isAr}
                />
              ))}

              <div className="flex items-center gap-3 shrink-0">
                <button onClick={resetFilters} className="px-4 py-2 rounded-md border border-[#d92d20] text-[#d92d20] text-sm font-medium hover:bg-red-50 dark:hover:bg-red-950/30">
                  {isAr ? 'إعادة تعيين' : 'Reset'}
                </button>
                <button onClick={applyFilters} className="px-4 py-2 rounded-md bg-[#0063f5] text-white text-sm font-medium hover:bg-[#0052d4]">
                  {isAr ? 'تطبيق' : 'Apply'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
