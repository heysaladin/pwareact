export default function CeerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400&family=Saira:wdth,wght@75..125,100..900&family=Almarai:wght@400&display=swap');
      `}</style>
      {children}
    </>
  );
}
