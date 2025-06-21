import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Agent Stack – Define, Govern, and Connect AI Agents",
  description:
    "Open Agent Stack is a specification framework for building safe, structured, and interoperable AI agents. Featuring Open Agent Spec, Behavioral Contracts, and DACP.",
  keywords:
    "Open Agent Stack, Open Agent Spec, Behavioral Contracts, Declarative Agent Communication Protocol, AI agents, agentic systems, DACP, MCP alternative, AI orchestration",
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
