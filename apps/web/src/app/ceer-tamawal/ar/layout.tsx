export default function CeerArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" className="[&_h1]:font-ceer [&_h2]:font-ceer">
      {children}
    </div>
  );
}
