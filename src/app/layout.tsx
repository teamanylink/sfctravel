import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SFC Travel powered by CTMS | Members Travel Portal",
  description: "Exclusive member travel portal powered by CTMS. Tiered rebates, private aviation, concierge experiences, and sustainability reporting for athletes, fans, and partners.",
  openGraph: {
    title: "SFC Travel powered by CTMS",
    description: "The ultimate competitive fishing experience. Access your exclusive tournaments, manage private charters, and unlock premium rewards.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "SFC Travel powered by CTMS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SFC Travel powered by CTMS",
    description: "The ultimate competitive fishing experience. Access your exclusive tournaments, manage private charters, and unlock premium rewards.",
    images: ["https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#f8f7f5] text-navy-900">
        {children}
      </body>
    </html>
  );
}
