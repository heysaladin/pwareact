import CustomerDetailPage from '@/components/cps-official/CustomerDetailPage';

export default async function CustomerDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CustomerDetailPage profileId={id} />;
}
