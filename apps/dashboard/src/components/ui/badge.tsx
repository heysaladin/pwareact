import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-[#0063F5] text-white',
        success: 'border-[#abefc6] bg-[#ecfdf3] text-[#067647] dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300',
        warning: 'border-[#fedf89] bg-[#fffaeb] text-[#b54708] dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300',
        error: 'border-[#fda29b] bg-[#fff1f3] text-[#c01048] dark:border-red-900 dark:bg-red-950 dark:text-red-300',
        info: 'border-[#b9e6fe] bg-[#f0f9ff] text-[#026aa2] dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300',
        neutral: 'border-[#eef1f6] bg-[#f8fafc] text-[#667085] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300',
        completed: 'border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d] dark:border-green-900 dark:bg-green-950 dark:text-green-300',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
