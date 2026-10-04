import { headers } from 'next/headers';
import { Suspense } from 'react';
import { Screen } from './Screen';

export default async function ResultPage() {
  const ua = (await headers()).get('user-agent') ?? '';
  const mobile = /android|iphone|ipad|ipod/i.test(ua);

  if (mobile) {
    return (
      <div className="flex justify-center w-full">
        <div style={{ width: '100%', maxWidth: 375 }}>
          <Suspense>
            <Screen mobile />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eef1f6] flex items-start justify-center">
      <div
        className="relative bg-white overflow-hidden"
        style={{
          width: 375,
          borderRadius: 40,
          boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08)',
        }}
      >
        <Suspense>
          <Screen mobile={false} />
        </Suspense>
      </div>
    </div>
  );
}
