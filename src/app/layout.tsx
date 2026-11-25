import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, company } from "@/content/site";
import { CtaTracker } from "@/components/layout/CtaTracker";
import { revealBootScript } from "@/components/layout/RevealObserver";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/layout/RevealObserver";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const title = `${company.name} · Desenvolvimento de software`;
const description =
  "Desenvolvimento de software: sites, Shopify e o Catequese Hub, sistema online para catequeses. Atendimento online para todo o Brasil, direto de Brasília.";

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
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <a href="#conteudo" className="sr-only z-50 rounded-full bg-ink px-5 py-3 font-semibold text-canvas focus:not-sr-only focus:fixed focus:top-3 focus:left-3">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <RevealObserver />
        <Analytics />
        <CtaTracker />
      </body>
    </html>
  );
}
