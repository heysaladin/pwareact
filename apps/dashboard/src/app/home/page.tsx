import Image from 'next/image';

const loanTypes = [
  { id: 'car', label: 'Car Loan', icon: '/home/type=Car Loan.svg' },
  { id: 'cards', label: 'Cards Loan', icon: '/home/type=Cards Loan.svg' },
  { id: 'personal', label: 'Personal Loan', icon: '/home/type=Personal Loan.svg' },
  { id: 'real-estate', label: 'Real Estate Loan', icon: '/home/type=Real Estate loan.svg' },
];

const navItems = [
  { id: 'home', label: 'Home', icon: '/home/Iconly/Bold/Home.svg', active: true },
  { id: 'document', label: 'Documents', icon: '/home/Iconly/Light/Document.svg' },
  { id: 'folder', label: 'Folder', icon: '/home/Iconly/Light/Folder.svg' },
  { id: 'ticket', label: 'Ticket', icon: '/home/Iconly/Light/Ticket.svg' },
];

export default function MobileHomePage() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] flex justify-center" dir="ltr">
      <div className="w-full max-w-[390px] min-h-screen flex flex-col bg-white relative overflow-hidden shadow-2xl">

        {/* Status bar */}
        <div className="bg-[#1D2939] px-6 pt-14 pb-0" />

        {/* Header */}
        <div className="bg-[#1D2939] px-5 pt-4 pb-5 flex items-center justify-between">
          <Image src="/home/Logo.svg" alt="Tamawali" width={84} height={25} />
          <Image src="/home/Notification Icon Container.svg" alt="Notifications" width={24} height={24} />
        </div>

        {/* User greeting */}
        <div className="bg-[#1D2939] px-5 pb-10 flex items-center gap-3">
          <Image src="/home/Avatar.svg" alt="User avatar" width={40} height={40} />
          <div>
            <p className="text-white/50 text-xs font-medium">Assalamu Alaikum 👋</p>
            <p className="text-white font-semibold text-sm mt-0.5">Muhammad Al-Rashidi</p>
          </div>
        </div>

        {/* White content card - overlaps the dark header */}
        <div className="flex-1 bg-white rounded-t-[28px] -mt-5 relative z-10 flex flex-col">

          {/* Search bar */}
          <div className="px-5 pt-6 pb-5">
            <div className="flex items-center gap-3 bg-[#1D2939] rounded-2xl px-4 py-3.5">
              <Image src="/home/_Magnifier.svg" alt="Search" width={18} height={18} />
              <span className="text-white/30 text-sm font-medium">Search for loans...</span>
            </div>
          </div>

          {/* Loan type heading */}
          <div className="px-5 mb-3">
            <p className="text-[#1D2939] font-semibold text-[15px]">Choose Loan Type</p>
          </div>

          {/* Loan type grid */}
          <div className="px-5 grid grid-cols-2 gap-3 flex-1">
            {loanTypes.map((loan) => (
              <button
                key={loan.id}
                className="bg-[#F9FAFB] rounded-2xl px-3 pt-4 pb-4 flex flex-col items-center gap-2 hover:bg-[#FFDD33]/15 active:scale-[0.98] transition-all"
              >
                <div className="w-[94px] h-[78px] relative flex items-center justify-center">
                  <Image
                    src={loan.icon}
                    alt={loan.label}
                    width={94}
                    height={78}
                    className="object-contain"
                  />
                </div>
                <span className="text-[#1D2939] text-xs font-semibold text-center leading-tight">
                  {loan.label}
                </span>
              </button>
            ))}
          </div>

          {/* Spacer before bottom nav */}
          <div className="h-6" />
        </div>

        {/* Bottom navigation */}
        <div className="bg-white border-t border-[#eef1f6] px-6 pt-3 pb-8 flex justify-around items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="flex flex-col items-center gap-1.5 min-w-[52px]"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
              />
              <span
                className={`text-[10px] font-semibold ${
                  item.active ? 'text-[#0063F5]' : 'text-[#9aa4b2]'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
