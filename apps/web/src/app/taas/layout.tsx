export default function TaasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap');
        .taas { font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        .taas-serif { font-family: 'Newsreader', Georgia, serif; }
      `}</style>
      {children}
    </>
  );
}
