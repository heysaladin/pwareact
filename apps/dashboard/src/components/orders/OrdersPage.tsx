'use client';
import { useState, useEffect } from 'react';
import { useOrderSimulation } from '@/hooks/useOrderSimulation';

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
import Topbar from './Topbar';
import FilterBar from './FilterBar';
import StatsRow from './StatsRow';
import OrdersTableHeader from './CardHeader';
import OrdersTable from './OrdersTable';
import OrdersFooter from './CardFooter';
import OrderDetailPanel from './OrderDetailPanel';
import ConciseOrderList from './ConciseOrderList';
import CustomerDetailsPanel from './CustomerDetailsPanel';
import ProductDetailsPanel from './ProductDetailsPanel';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

type RightPanel = 'customer' | 'product' | null;

export default function OrdersPage() {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [rightPanel, setRightPanel] = useState<RightPanel>(null);
  const windowWidth = useWindowWidth();
  const isWide = windowWidth > 1440;

  const isSplitView = selectedOrderId !== null;
  const { orders, justEscalated } = useOrderSimulation(isSplitView);

  const selectedOrder = orders.find((o) => o.id === selectedOrderId) ?? null;

  function handleSelectOrder(id: string) {
    setSelectedOrderId(id);
    setRightPanel(null);
  }

  function handleClose() {
    setSelectedOrderId(null);
    setRightPanel(null);
  }

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
        {!isSplitView && <FilterBar />}
        {!isSplitView && <StatsRow />}

        {isSplitView ? (
          <Card className="flex-1 flex flex-row overflow-visible min-h-0">
            <ConciseOrderList
              orders={orders}
              selectedId={selectedOrderId!}
              onSelect={handleSelectOrder}
              onClose={handleClose}
            />
            <div className={`flex min-w-0 flex-1 ${rightPanel ? 'gap-2 pr-2 pt-2 pb-2' : ''}`}>
              <OrderDetailPanel
                order={selectedOrder}
                onClose={handleClose}
                onOpenCustomerDetails={() => setRightPanel('customer')}
                onOpenProductDetails={() => setRightPanel('product')}
                customerPanelOpen={rightPanel !== null}
                className={
                  rightPanel
                    ? isWide
                      ? 'flex-1 min-w-0 rounded-[6px] border border-[#e2e3e4] dark:border-slate-800'
                      : 'flex-1 min-w-0 basis-0 rounded-[6px] border border-[#e2e3e4] dark:border-slate-800'
                    : undefined
                }
              />
              {rightPanel === 'customer' && (
                <CustomerDetailsPanel
                  order={selectedOrder}
                  onClose={() => setRightPanel(null)}
                  className={isWide ? undefined : 'flex-1 min-w-0 basis-0 w-auto'}
                />
              )}
              {rightPanel === 'product' && (
                <ProductDetailsPanel
                  order={selectedOrder}
                  onClose={() => setRightPanel(null)}
                />
              )}
            </div>
          </Card>
        ) : (
          <Card className="flex-1 orders-card">
            <OrdersTableHeader liveCount={orders.length} />
            <CardContent>
              <OrdersTable orders={orders} justEscalated={justEscalated} onSelectOrder={setSelectedOrderId} />
            </CardContent>
            <CardFooter>
              <OrdersFooter currentPage={1} totalPages={50} />
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  );
}
