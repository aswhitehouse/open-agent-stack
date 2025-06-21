import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Agent Stack",
  description: "A comprehensive framework for building, deploying, and governing AI agents with behavioral contracts, communication protocols, and intelligent supervision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
