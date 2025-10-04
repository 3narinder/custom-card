import type { Metadata } from "next";

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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
