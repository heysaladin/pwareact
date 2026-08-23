import CustomerDetailPage from '@/components/cps-official/CustomerDetailPage';
import InternalSidebar from '@/components/cps-official/InternalSidebar';

export default async function CustomerDetailEnRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex h-screen overflow-hidden">
      <InternalSidebar />
      <div className="flex-1 min-w-0 overflow-hidden">
        <CustomerDetailPage profileId={id} forceLang="en" listPath="/cps/en" />
      </div>
    </div>
  );
}
