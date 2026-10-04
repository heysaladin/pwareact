'use client';
import { useState } from 'react';
import Topbar from '@/components/orders/Topbar';
import ViewSwitcherModal from './ViewSwitcherModal';
import CpsCustomerSidebar from './CpsCustomerSidebar';
import CustomerDetailPage from './CustomerDetailPage';

export default function CpsDetailLayout({
  profileId,
  basePath,
  forceLang,
  listPath,
  isAr,
  isProvider,
  initialTab,
}: {
  profileId: string;
  basePath: string;
  forceLang: 'en' | 'ar';
  listPath: string;
  isAr?: boolean;
  isProvider?: boolean;
  initialTab?: string;
}) {
  const [showSwitcher, setShowSwitcher] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden" dir={isAr ? 'rtl' : undefined}>
      <Topbar onProfileClick={() => setShowSwitcher(true)} />
      {showSwitcher && <ViewSwitcherModal onClose={() => setShowSwitcher(false)} />}
      <div className="flex flex-1 overflow-hidden">
        <CpsCustomerSidebar currentId={profileId} basePath={basePath} isAr={isAr} initialTab={initialTab} />
        <CustomerDetailPage
          profileId={profileId}
          forceLang={forceLang}
          listPath={listPath}
          isProvider={isProvider}
          noTopbar
        />
      </div>
    </div>
  );
}
