import '../globals.css';
import { GlobalSettingsProvider } from '@/contexts/GlobalSettingsContext';

export const metadata = {
  title: 'Tamawal',
  description: 'Tamawal Design Hub',
  icons: { icon: 'https://www.tamawal.sa/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <GlobalSettingsProvider>{children}</GlobalSettingsProvider>
      </body>
    </html>
  )
}
