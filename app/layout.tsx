import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Custom-cards",
  description: "A custom card webapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.add(theme);
            })();
          `}
        </Script>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
