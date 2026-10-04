import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPS - Customer Profiling System',
  description: 'Customer Profiling System',
};

export default function CpsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
