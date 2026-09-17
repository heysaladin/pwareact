import { headers } from 'next/headers';
import { Suspense } from 'react';
import { Screen } from './Screen';

export default async function CarScanPage() {
  const ua = (await headers()).get('user-agent') ?? '';
  const mobile = /android|iphone|ipad|ipod/i.test(ua);

  return (
    <Suspense>
      <Screen mobile={mobile} />
    </Suspense>
  );
}
