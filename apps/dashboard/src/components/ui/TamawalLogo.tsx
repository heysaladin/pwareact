export default function TamawalLogo({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={112} height={33} className="block dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-tamawal-web.svg" alt="Tamawal" width={112} height={33} className="hidden dark:block" />
    </div>
  );
}
