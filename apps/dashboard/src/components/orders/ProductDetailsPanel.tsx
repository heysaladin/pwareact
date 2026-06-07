'use client';
import { X, Settings } from 'lucide-react';
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
    <div className="w-[588px] shrink-0 flex flex-col rounded-[6px] border border-[#e2e3e4] bg-white overflow-hidden dark:border-slate-800 dark:bg-slate-950">
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-[#f2f4f7] shrink-0 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-[12px] leading-[18px] font-medium text-[#697586] dark:text-slate-400">Product ID</span>
          <span className="text-[18px] leading-[28px] font-bold text-[#181d27] dark:text-slate-100">PROD4535353</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#fee2e2] text-[#d91c1c] hover:bg-[#fff1f3] transition-colors dark:border-red-900 dark:hover:bg-red-950"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="px-6 pt-6 pb-4 flex flex-col gap-6">

          {/* Title */}
          <h2 className="text-[24px] font-bold text-[#181d27] dark:text-slate-100">Product Details</h2>

          {/* Category cards row */}
          <div className="flex gap-3">
            {/* Left: category + illustration */}
            <div className="flex-1 border border-[#e3e8ef] rounded-[8px] p-4 flex items-center justify-between dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col gap-2">
                <span className="text-[12px] text-[#697586] font-medium dark:text-slate-400">Product category</span>
                <span className="text-[28px] font-bold text-[#181d27] leading-tight dark:text-slate-100">Personal Loan</span>
              </div>
              <img src={imgProductIcon} alt="" className="w-20 h-20 shrink-0 object-contain" />
            </div>

            {/* Right: DBR */}
            <div className="w-[136px] shrink-0 border border-[#e3e8ef] rounded-[8px] p-4 flex flex-col gap-2 dark:border-slate-800 dark:bg-slate-900">
              <Settings className="w-5 h-5 text-[#697586] dark:text-slate-400" />
              <span className="text-[12px] text-[#697586] font-medium dark:text-slate-400">DBR percentage</span>
              <span className="text-[28px] font-bold text-[#181d27] leading-tight dark:text-slate-100">2.64%</span>
            </div>
          </div>

          {/* Product name */}
          <div className="flex flex-col gap-2">
            <p className="text-[24px] leading-[1.35] font-bold text-[#121a26] dark:text-slate-100">{order.productName}</p>
            <p className="text-left text-[16px] leading-[1.35] text-[#667085] dark:text-slate-400" dir="ltr">{order.productNameAr}</p>
          </div>

          {/* Provider / Loan / APR */}
          <div className="grid grid-cols-3 gap-4 pb-6 border-b border-[#f2f4f7] dark:border-slate-800">
            <div className="flex flex-col gap-3">
              <span className="text-[14px] font-semibold text-[#697586] dark:text-slate-400">Provider</span>
              <img src={imgBankLogo} alt="Alinma Bank" className="h-10 w-auto object-contain object-left" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[14px] font-semibold text-[#697586] dark:text-slate-400">Loan Amount</span>
              <span className="text-[22px] font-bold text-[#181d27] flex items-center gap-1 dark:text-slate-100">
                <SARSymbol className="w-5 h-4" />{amount}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[14px] font-semibold text-[#697586] dark:text-slate-400">APR:</span>
              <span className="text-[22px] font-bold text-[#181d27] dark:text-slate-100">{order.apr}</span>
            </div>
          </div>

          {/* Specs table */}
          <div className="flex flex-col rounded-[6px] overflow-hidden border border-[#f2f4f7] dark:border-slate-800">
            {PRODUCT_SPECS.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? 'bg-[#f9fafb] dark:bg-slate-900' : 'bg-white dark:bg-slate-950'} ${i < PRODUCT_SPECS.length - 1 ? 'border-b border-[#f2f4f7] dark:border-slate-800' : ''}`}
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
