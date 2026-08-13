import CustomerDetailPage from '@/components/cps-official/CustomerDetailPage';

export default async function CpsArabicDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CustomerDetailPage profileId={id} forceLang="ar" listPath="/cps-arabic" />;
}
