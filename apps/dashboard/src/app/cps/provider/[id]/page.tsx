import CustomerDetailPage from '@/components/cps-official/CustomerDetailPage';
import CpsCustomerSidebar from '@/components/cps-official/CpsCustomerSidebar';

export default async function CpsProviderDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex h-screen overflow-hidden">
      <CpsCustomerSidebar currentId={id} basePath="/cps/provider" />
      <div className="flex-1 min-w-0 overflow-hidden">
        <CustomerDetailPage profileId={id} listPath="/cps/provider" isProvider />
      </div>
    </div>
  );
}
