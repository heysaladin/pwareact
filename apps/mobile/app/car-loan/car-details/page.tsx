import { headers } from 'next/headers';
export default async function CarDetailsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const qs = new URLSearchParams(Object.entries(sp).flatMap(([k, v]) => (Array.isArray(v) ? v : v == null ? [] : [v]).map((x) => [k, x]))).toString();
  const src = `/car-loan-car-details.html${qs ? `?${qs}` : ''}`;
  const ua = (await headers()).get('user-agent') ?? '';
  const mobile = /android|iphone|ipad|ipod/i.test(ua);
  if (mobile) {
    return <iframe src={src} className="w-full border-0" style={{ height: '100svh' }} title="Car Details"/>;
  }
  return (
    <div className="min-h-screen bg-[#eef1f6] flex items-center justify-center">
      <div className="relative bg-white overflow-hidden" style={{ width: 375, height: 812, borderRadius: 40, boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08)' }}>
        <iframe src={src} className="w-full h-full border-0" title="Car Details"/>
      </div>
    </div>
  );
}
