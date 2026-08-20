'use client';
import { useRouter, usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ViewSwitcherModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentView = pathname.startsWith('/cps/provider') ? 'provider' : 'internal';

  function handleSelect(view: 'internal' | 'provider') {
    onClose();
    router.push(view === 'provider' ? '/cps/provider' : '/cps');
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[440px] bg-[#0f1117] rounded-2xl border border-[#2a2d36] shadow-2xl p-6 flex flex-col gap-5"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6b7280] hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div>
          <h2 className="text-white text-[16px] font-semibold">Switch View</h2>
          <p className="text-[#6b7280] text-[13px] mt-0.5">Select how you want to access this system</p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleSelect('internal')}
            className={cn(
              'flex flex-col items-start gap-1 p-4 rounded-xl border text-left transition-all',
              currentView === 'internal'
                ? 'border-[#0063f5] bg-[#0063f5]/10'
                : 'border-[#2a2d36] bg-[#1a1d26] hover:border-[#3d4153]'
            )}
          >
            <div className="flex items-center justify-between w-full">
              <span className={cn('text-[14px] font-semibold', currentView === 'internal' ? 'text-[#60a5fa]' : 'text-white')}>
                Internal Team View
              </span>
              {currentView === 'internal' && (
                <span className="px-2 py-0.5 rounded-full bg-[#0063f5]/20 text-[#60a5fa] text-[10px] font-medium border border-[#0063f5]/30">
                  Active
                </span>
              )}
            </div>
            <span className="text-[#6b7280] text-[12px]">Full access for Tamweel internal operations team</span>
          </button>

          <button
            onClick={() => handleSelect('provider')}
            className={cn(
              'flex flex-col items-start gap-1 p-4 rounded-xl border text-left transition-all',
              currentView === 'provider'
                ? 'border-[#0063f5] bg-[#0063f5]/10'
                : 'border-[#2a2d36] bg-[#1a1d26] hover:border-[#3d4153]'
            )}
          >
            <div className="flex items-center justify-between w-full">
              <span className={cn('text-[14px] font-semibold', currentView === 'provider' ? 'text-[#60a5fa]' : 'text-white')}>
                Provider View
              </span>
              {currentView === 'provider' && (
                <span className="px-2 py-0.5 rounded-full bg-[#0063f5]/20 text-[#60a5fa] text-[10px] font-medium border border-[#0063f5]/30">
                  Active
                </span>
              )}
            </div>
            <span className="text-[#6b7280] text-[12px]">Limited view for external financial product providers</span>
          </button>
        </div>

        <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-[#1a1d26] border border-[#2a2d36]">
          <span className="text-[#f59e0b] text-[13px] shrink-0">⚠</span>
          <p className="text-[#9ca3af] text-[12px] leading-relaxed">
            This is not part of the real system. This view switcher exists for mockup and demo purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}
