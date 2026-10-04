import CpsDetailLayout from '@/components/cps-official/CpsDetailLayout';

export default async function CustomerDetailEnRoute({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { id } = await params;
  const { tab } = await searchParams;
  return <CpsDetailLayout profileId={id} basePath="/cps/en" forceLang="en" listPath="/cps/en" initialTab={tab} />;
}
