'use client';
import { useState } from 'react';
import Topbar from '@/components/orders/Topbar';
import Sidebar from './Sidebar';
import DashboardView from './DashboardView';
import OffersListView from './OffersListView';
import CreateOfferView from './CreateOfferView';
import PerformanceView from './PerformanceView';
import ConflictsView from './ConflictsView';

export type Screen = 'dashboard' | 'offers' | 'create' | 'performance' | 'conflicts';

export default function OffersPage() {
  const [screen, setScreen] = useState<Screen>('dashboard');

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col dark:bg-slate-950">
      <Topbar />
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <Sidebar activeScreen={screen} onNavigate={setScreen} />
        <main className="flex-1 overflow-auto">
          {screen === 'dashboard' && (
            <DashboardView
              onCreateOffer={() => setScreen('create')}
              onViewPerformance={() => setScreen('performance')}
            />
          )}
          {screen === 'offers' && (
            <OffersListView
              onCreateOffer={() => setScreen('create')}
              onViewPerformance={() => setScreen('performance')}
            />
          )}
          {screen === 'create' && <CreateOfferView />}
          {screen === 'performance' && <PerformanceView onBack={() => setScreen('offers')} />}
          {screen === 'conflicts' && <ConflictsView />}
        </main>
      </div>
    </div>
  );
}
