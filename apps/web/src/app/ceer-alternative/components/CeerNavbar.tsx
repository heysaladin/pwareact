interface CeerNavbarProps {
  variant?: 1 | 2 | 3;
}

export default function CeerNavbar({ variant = 2 }: CeerNavbarProps) {
  return (
    <nav className="h-14 px-8 flex items-center justify-between bg-[#0C0C0C] border-b border-white/[0.08]">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-wider text-white font-ceer">CEER</span>
        {variant === 1 ? (
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium text-white/70 hover:text-white cursor-pointer transition-colors">EXPLORE ∨</span>
            <span className="text-xs font-medium text-white/70 hover:text-white cursor-pointer transition-colors">DISCOVER ∨</span>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium text-white/70 hover:text-white cursor-pointer transition-colors">VEHICLES</span>
            <span className="text-xs font-medium text-white/70 hover:text-white cursor-pointer transition-colors">SHOP ∨</span>
            <span className="text-xs font-medium text-white/70 hover:text-white cursor-pointer transition-colors">SERVICES ∨</span>
            <span className="text-xs font-medium text-white/70 hover:text-white cursor-pointer transition-colors">DISCOVER ∨</span>
          </div>
        )}
      </div>

      {variant === 1 ? (
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/70">SA - EN</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <button className="text-xs font-medium text-white border border-[#E87722] px-3 py-1 rounded hover:bg-[#E87722]/10 transition-colors">
            BUILD YOURS +
          </button>
        </div>
      ) : variant === 3 ? (
        <div className="flex items-center gap-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span className="text-xs text-white/70">EN</span>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-xs text-white/70 cursor-pointer">Ahmed ∨</span>
          </div>
          <button className="text-xs font-medium text-white border border-white/20 px-3 py-1.5 rounded hover:bg-white/[0.05] transition-colors">
            BUILD YOURS +
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span className="text-xs text-white/70">EN</span>
          <span className="text-xs text-white/70 hover:text-white cursor-pointer">HELP</span>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-xs text-white/70 hover:text-white cursor-pointer">MY ACCOUNT ∨</span>
          </div>
        </div>
      )}
    </nav>
  );
}
