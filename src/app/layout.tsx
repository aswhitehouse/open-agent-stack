import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Agent Stack – Define, Govern, and Connect AI Agents",
  description:
    "Open Agent Stack is a specification framework for building safe, structured, and interoperable AI agents. Featuring Open Agent Spec, Behavioral Contracts, and DACP.",
  keywords:
    "Open Agent Stack, Open Agent Spec, Behavioral Contracts, Behavioural Contract Engineering, Declarative Agent Communication Protocol, AI agents, agentic systems, DACP, MCP alternative, AI orchestration",
  authors: [{ name: "Andrew Whitehouse" }],
  openGraph: {
    title: "Open Agent Stack – Define, Govern, and Connect AI Agents",
    description: "Open Agent Stack is a specification framework for building safe, structured, and interoperable AI agents. Featuring Open Agent Spec, Behavioral Contracts, and DACP.",
    type: "website",
    url: "https://openagentstack.ai",
    siteName: "Open Agent Stack",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  icons: {
    icon: [
      { url: "/OAS-Logo.png", type: "image/png" },
      { url: "/OAS-Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/OAS-Logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/OAS-Logo.png",
    apple: "/OAS-Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/OAS-Logo.png" />
        <link rel="shortcut icon" type="image/png" href="/OAS-Logo.png" />
        <link rel="apple-touch-icon" href="/OAS-Logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/OAS-Logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/OAS-Logo.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
