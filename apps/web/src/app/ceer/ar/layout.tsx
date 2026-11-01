export default function CeerArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" className="[&_h1]:font-ceer [&_h2]:font-ceer [&_h1]:uppercase [&_h2]:uppercase" style={{ fontFamily: "'ceerBeta3Font', Arial, sans-serif" }}>
      <style>{`
        .ceer-theme {
          --bg: #030b10;
          --card: #0b1315;
          --border: rgba(189,189,189,0.2);
          --text: #dadada;
          --muted: rgba(189,189,189,0.6);
          --blue: #ff8204;
          --accent: #ff8204;
          --heading: #dadada;
          --highlight: #2e3f46;
          --green: #ff8204;
        }
        [data-theme="dark"] {
          --bg: #030b10;
          --card: #0b1315;
          --border: rgba(189,189,189,0.2);
          --text: #dadada;
          --muted: rgba(189,189,189,0.6);
          --blue: #ff8204;
          --accent: #ff8204;
          --heading: #dadada;
          --highlight: #2e3f46;
          --green: #ff8204;
        }
        [data-theme="light"] {
          --bg: #030b10;
          --card: #0b1315;
          --border: rgba(189,189,189,0.2);
          --text: #dadada;
          --muted: rgba(189,189,189,0.6);
          --blue: #ff8204;
          --accent: #ff8204;
          --heading: #dadada;
          --highlight: #2e3f46;
          --green: #ff8204;
        }
      `}</style>
      {children}
    </div>
  );
}
