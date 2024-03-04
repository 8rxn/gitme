import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Git Me",
  description: "Your personal GiHub Card Generator",
  metadataBase: new URL("https://git-me.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://git-me.vercel.app",
    siteName: "Git Me",
    images: ["/api/preview"],
  },
  twitter: {
    creator: "@8rxn_",
    site: "@8rxn_",
    card: "summary_large_image",
    images: ["/api/preview"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar></Navbar>
          <div className="w-[400px] h-[400px] sm:h-[600px] sm:w-[600px] absolute -z-10 top-1/2 left-1/2 translate-x-[-50%] brightness-125 opacity-80 dark:opacity-100 translate-y-[-50%] blur-3xl dark:brightness-50">
            <div className="gradient-blob-1"></div>
          </div>
          <main className="flex min-h-screen flex-col items-center  justify-center gap-20 pt-24 p-8 sm:p-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-NQSQEMPWEY" />
    </html>
  );
}
