'use client';
import { X } from 'lucide-react';
import SARSymbol from '@/components/ui/SARSymbol';

const imgProductIcon = '/illustrations/simple-category-icon-perspective---personal.svg';
const imgBankLogo    = '/illustrations/logo.svg';

type Order = {
  id: string;
  productName: string;
  productNameAr: string;
  loanAmount: string;
  apr: string;
  managementFees: string;
  brokerageFees: string;
};

const PRODUCT_SPECS = [
  { label: 'Product brokerage fees percentage',  value: '0.50%'     },
  { label: 'Product max brokerage fees amount',  value: '100'       },
  { label: 'Minimum interest rate (SAR)',         value: '600'       },
  { label: 'Maximum interest rate (SAR)',         value: '24,000'    },
  { label: 'Minimum period',                     value: '6'         },
  { label: 'Maximum period',                     value: '60'        },
  { label: 'Product minimum finance amount',     value: '500'       },
  { label: 'Product maximum finance amount',     value: '2,500,000' },
];

export default function ProductDetailsPanel({
  order,
  onClose,
}: {
  order: Order;
  onClose: () => void;
}) {
  const amount = order.loanAmount.replace(/﷼\s?/, '');

  return (
    <div className="w-[588px] shrink-0 flex flex-col border-l border-[#f2f4f7] overflow-hidden dark:border-slate-800 dark:bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-[#f2f4f7] shrink-0 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-[14px] text-[#667085] dark:text-slate-400">Product ID</span>
          <span className="text-[18px] font-bold text-[#181d27] dark:text-slate-100">{order.id}</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#f9fafb] transition-colors dark:hover:bg-slate-800"
        >
          <X className="w-4 h-4 text-[#667085] dark:text-slate-400" />
        </button>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Title */}
        <div className="px-6 py-6">
          <h2 className="text-[22px] font-bold text-[#181d27] dark:text-slate-100">Product Details</h2>
        </div>

        <div className="px-6 py-4 flex flex-col gap-4">
          {/* Category card */}
          <div className="border border-[#e3e8ef] rounded-lg p-4 flex items-center justify-between dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-[#697586] font-medium dark:text-slate-400">Product category</span>
              <span className="text-[28px] font-bold text-[#181d27] leading-tight dark:text-slate-100">Personal Loan</span>
            </div>
            <img src={imgProductIcon} alt="" className="w-16 h-16 shrink-0" />
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[11px] text-[#697586] font-medium dark:text-slate-400">DBR percentage</span>
              <span className="text-[28px] font-bold text-[#181d27] leading-tight dark:text-slate-100">2.64%</span>
            </div>
          </div>

          {/* Product name */}
          <div className="flex flex-col gap-0.5">
            <p className="text-[18px] font-bold text-[#181d27] dark:text-slate-100">{order.productName}</p>
            <p className="text-left text-[13px] text-[#667085] dark:text-slate-400" dir="ltr">{order.productNameAr}</p>
          </div>

          {/* Provider / Loan / APR */}
          <div className="grid grid-cols-3 gap-4 pb-4 border-b border-[#f2f4f7] dark:border-slate-800">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] text-[#697586] font-medium uppercase tracking-wide dark:text-slate-400">Provider</span>
              <img src={imgBankLogo} alt="Alinma Bank" className="h-10 w-auto object-contain object-left" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] text-[#697586] font-medium uppercase tracking-wide dark:text-slate-400">Loan Amount</span>
              <span className="text-[22px] font-bold text-[#181d27] flex items-center gap-1 dark:text-slate-100">
                <SARSymbol className="w-5 h-4" />{amount}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] text-[#697586] font-medium uppercase tracking-wide dark:text-slate-400">APR:</span>
              <span className="text-[22px] font-bold text-[#181d27] dark:text-slate-100">{order.apr}</span>
            </div>
          </div>

          {/* Specs table */}
          <div className="flex flex-col">
            {PRODUCT_SPECS.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between py-3 ${i < PRODUCT_SPECS.length - 1 ? 'border-b border-[#f2f4f7] dark:border-slate-800' : ''}`}
              >
                <span className="text-[13px] text-[#697586] dark:text-slate-400">{spec.label}</span>
                <span className="text-[13px] font-semibold text-[#181d27] dark:text-slate-100">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
