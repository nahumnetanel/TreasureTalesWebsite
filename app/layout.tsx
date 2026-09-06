import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://treasuretales-adventure.nahumneta.chatgpt.site'),
  title: 'TreasureTales — כל מקום מסתיר סיפור',
  description: 'ציד אוצרות אינטראקטיבי שמשלב מפה, חידות ודמויות במציאות רבודה.',
  alternates: { canonical: '/', languages: { 'he-IL': '/', 'en-US': '/en' } },
  openGraph: {
    title: 'TreasureTales — כל מקום מסתיר סיפור',
    description: 'ציד אוצרות אינטראקטיבי שמשלב מפה, חידות ודמויות במציאות רבודה.',
    type: 'website',
    locale: 'he_IL',
    images: [{ url: '/og.jpg', width: 1731, height: 909, alt: 'TreasureTales — Every place hides a story' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TreasureTales — כל מקום מסתיר סיפור',
    description: 'ציד אוצרות אינטראקטיבי שמשלב מפה, חידות ודמויות במציאות רבודה.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="he" dir="rtl"><body>{children}</body></html>;
}
