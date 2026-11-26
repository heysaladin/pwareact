export default function TamweelWebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap');`}</style>
      {children}
    </>
  );
}
