import CustomerDetailPage from '@/components/cps-official/CustomerDetailPage';
import InternalSidebarAr from '@/components/cps-official/InternalSidebarAr';

export default async function CpsArabicDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex h-screen overflow-hidden">
      <InternalSidebarAr />
      <div className="flex-1 min-w-0 overflow-hidden">
        <CustomerDetailPage profileId={id} forceLang="ar" listPath="/cps-arabic" />
      </div>
    </div>
  );
}
