export default function LucidArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap');`}</style>
      {children}
    </div>
  );
}
