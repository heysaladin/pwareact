import { headers } from 'next/headers';
import { Screen } from './Screen';

export default async function PayIosPage() {
  const ua = (await headers()).get('user-agent') ?? '';
  const mobile = /android|iphone|ipad|ipod/i.test(ua);

  if (mobile) {
    return <Screen mobile />;
  }

  return (
    <div className="min-h-screen bg-[#eef1f6] flex items-start justify-center">
      <Screen mobile={false} />
    </div>
  );
}
