export default function CeerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&_h1]:font-ceer [&_h2]:font-ceer">
      {children}
    </div>
  );
}
