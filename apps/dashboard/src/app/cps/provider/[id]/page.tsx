import CustomerDetailPage from '@/components/cps-official/CustomerDetailPage';
import ProviderSidebar from '@/components/cps-official/ProviderSidebar';

export default async function CpsProviderDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex h-screen overflow-hidden">
      <ProviderSidebar />
      <div className="flex-1 min-w-0 overflow-hidden">
        <CustomerDetailPage profileId={id} listPath="/cps/provider" isProvider />
      </div>
    </div>
  );
}
