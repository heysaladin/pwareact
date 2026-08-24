import { headers } from 'next/headers';
import { Suspense } from 'react';
import { Screen } from './Screen';

export default async function PaySuccessPage() {
  const ua = (await headers()).get('user-agent') ?? '';
  const mobile = /android|iphone|ipad|ipod/i.test(ua);

  if (mobile) {
    return (
      <Suspense>
        <Screen mobile />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-[#eef1f6] flex items-start justify-center">
      <Suspense>
        <Screen mobile={false} />
      </Suspense>
    </div>
  );
}
