import type { Metadata, Viewport } from "next";
import { Figtree, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, company } from "@/content/site";
import { CtaTracker } from "@/components/layout/CtaTracker";
import { revealBootScript } from "@/components/layout/RevealObserver";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const title = `${company.name} · Criação de sites profissionais e institucionais em Brasília (DF)`;
const description =
  "A Pôrto cria sites profissionais sob medida para empresas e profissionais. A partir de R$ 499. Atendimento online, Brasília (DF).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: company.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#f8fafc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${figtree.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        {children}
        <Analytics />
        <CtaTracker />
      </body>
    </html>
  );
}
