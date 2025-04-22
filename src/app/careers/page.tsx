// app/careers/page.tsx
'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function Careers() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center px-6">
      <Head>
        <title>Careers at G.L.O.O.M Inc</title>
        <meta name="description" content="You weren't supposed to find this." />
      </Head>

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Whoa there. You&apos;re early.</h1>
      <p className="text-center text-lg mb-2 italic">Not everyone gets this far.</p>
      <p className="text-center text-sm text-gray-400">This page isn&apos;t ready… or maybe you aren&apos;t.</p>

      <p className="mt-10 text-xs text-gray-600">
        <Link href="/" className="hover:underline text-gray-500">
          Back to Home
        </Link>
      </p>

      {/* Don't touch unless you're cleared for Level 2 */}
      {/* a2V5X3BocmFzZToiU2hhZG93X0ludGVyaW1fQ2hlY2si */}
      {/* ...they said recruitment was suspended. That wasn't true. */}
    </div>
  );
}