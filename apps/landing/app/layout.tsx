import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamawal — Digital Finance Brokerage",
  description: "Sharia-compliant financing options tailored to your needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />

        {/* intl-tel-input */}
        <link rel="stylesheet" href="https://cdn.tutorialjinni.com/intl-tel-input/17.0.8/css/intlTelInput.css" />

        {/* Bootstrap & component CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/lineicons.css" />
        <link rel="stylesheet" href="/assets/css/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/css/glightbox.min.css" />

        {/* Site theme */}
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/custom.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
