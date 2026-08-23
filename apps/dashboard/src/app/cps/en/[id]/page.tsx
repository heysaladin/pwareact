import CustomerDetailPage from '@/components/cps-official/CustomerDetailPage';

export default async function CustomerDetailEnRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CustomerDetailPage profileId={id} forceLang="en" listPath="/cps/en" />;
}
