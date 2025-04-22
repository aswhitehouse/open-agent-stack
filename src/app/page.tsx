// app/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ThumbsUp } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const announcements = [
  {
    id: 1,
    title: 'Day 1: CEO Introduction',
    content: `Good morning everyone, to the esteemed members of the board and the dedicated staff of G.L.O.O.M Inc.

I step into this role with a profound sense of optimism and a clear vision for our future. It's undeniable that the recent past has presented its challenges, and I acknowledge the difficulties we've navigated. However, I believe that within these challenges lie significant opportunities for growth and renewal.

The results from the previous quarter indicate a downturn across several key performance indicators:
- Customer engagement
- Time to market
- AI Alignment
- Employee satisfaction

While this paints a picture we must address, it also provides us with a baseline from which we will measure our progress and demonstrate our collective ability to turn the tide.

My commitment to you is that we will tackle these areas head-on in the coming quarter. Our core values will be our guiding stars:
- Empowering staff in their usage of AI to benefit their work-life balance – not to diminish the crucial role of our talented workforce
- Climate Conscious Technology Deployment, ensuring our innovation aligns with a sustainable future
- Increasing public trust in corporate usage of AI systems, fostering transparency and ethical practices
- Re-building shareholder trust in the company's direction through consistent performance and clear communication

We are all aware of the directions our competitors are taking. The buzz around "AI agent" technology, wearable glasses, and even talk of "worker replacement" fills the industry air. But here at G.L.O.O.M Inc., we are choosing a different path. We are flipping the script.

Instead of automating away human creativity, we are focusing on automating the executive layer, freeing up our most valuable asset – our people – to drive innovation and growth.

We will not be competing in the wearable tech or AI agent race as they currently envision it. We will "out innovate" them by building an "agentic strategy layer" – an intelligent framework that guides and governs, allowing our empowered staff to pioneer human-in-the-loop AI technologies that will genuinely accelerate humanity forward.

Our current share price stands strong at $3000 USD. To put this in perspective:
- Compared to HZLA's current price of $250 USD, we are trading approximately 1141% higher
- Compared to MOOTE's $520 USD, we are approximately 500% higher

This reflects the underlying strength and potential of G.L.O.O.M Inc., a potential we are poised to unlock even further.

I am genuinely excited to join you all on this journey to new heights. In the coming days, I will be meeting with the Autonomous AI Board to discuss our strategic roadmap in detail. Following that, you can expect weekly communications from me, as well as regular staff engagement surveys to ensure your voices are heard and valued.

I wish you all a prosperous week ahead. Let us remember our focus:
- To reduce the time it takes to move from idea to prototype
- Foster rapid innovation
- Not simply rush products to market

Thank you.

— Nexa Ry, C.E.O.`,
    date: '2025-04-20'
  },
];

const chartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'G.L.O.O.M Inc Share Price (USD)',
      data: [1000, 1800, 2400, 3000],
      fill: false,
      borderColor: '#10B981',
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Simulated GLOOM Market Trajectory',
    },
  },
};

export default function Home() {
  const [selected, setSelected] = useState(announcements[0]);
  const [animatedText, setAnimatedText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText(selected.content.slice(0, index + 1));
      index++;
      if (index === selected.content.length) clearInterval(interval);
    }, 10);

    console.log("🕳️ Curious minds tend to look at: /careers");

    const handleWheel = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().catch(() => {
          console.log('Audio play failed');
        });
        setHasInteracted(true);
        window.removeEventListener('wheel', handleWheel);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [selected, hasInteracted]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log('Audio play failed');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-fixed relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 via-white/10 to-gray-200/10"></div>
      
      {/* Audio Element */}
      <audio
        ref={audioRef}
        preload="auto"
        autoPlay
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.error('Audio error:', e);
          const audio = e.target as HTMLAudioElement;
          console.error('Audio error details:', {
            error: audio.error,
            networkState: audio.networkState,
            readyState: audio.readyState,
            src: audio.currentSrc
          });
        }}
      >
        <source src="/bgroundaw.mp3" type="audio/mpeg" />
        <source src="/bgroundaw.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <Head>
        <title>G.L.O.O.M Inc — Official Communications</title>
        <meta name="description" content="Ethical memos from the AI CEO of G.L.O.O.M Inc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Audio Control */}
      <button
        onClick={toggleAudio}
        className="absolute top-4 left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        title={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? "🔊" : "🔈"}
      </button>

      {/* Animated Sticker */}
      <div className="gloom-sticker px-4 py-2 rounded-full text-xs font-semibold bg-yellow-300 text-black shadow-lg animate-pulse hover:animate-shimmer sm:absolute sm:top-6 sm:right-6 z-50 max-w-[65%] mx-auto">
        Powered by Generative AI CEO
      </div>

      {/* Banner Section */}
      <div className="bg-gray-900 text-white py-8 px-4 text-center shadow-md">
        <h1 className="text-4xl font-bold tracking-tight">G.L.O.O.M Inc</h1>
        <p className="mt-2 text-lg">Global Leadership Optimization & Organizational Morality</p>
      </div>

      <main className="max-w-3xl mx-auto p-6">
        <div className="flex justify-center mb-2">
          <Image
            src="/ceo.png"
            alt="CEO portrait. The eyes see beyond the paperclip."
            width={160}
            height={160}
            className="rounded-full shadow-lg border-4 border-white hover:scale-105 transition-transform duration-500"
          />
        </div>
        <p className="text-center text-xl font-semibold text-white mb-6 font-[cursive] drop-shadow-lg">Nexa Ry, C.E.O.</p>

        <div className="bg-white rounded-xl shadow-xl p-6 mb-6 border border-gray-200 transition-all duration-500 ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Current Announcement: {selected.title}</h2>
          <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {animatedText}
          </p>
          <p className="mt-8 text-right text-xl font-signature text-gray-600">— Nexa Ry</p>
          <p className="mt-4 text-sm text-gray-500">Posted on: {selected.date}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="bg-green-50 border border-green-300 p-4 rounded-xl mb-6 flex items-center gap-4">
          <ThumbsUp className="text-green-600 w-6 h-6" />
          <div>
            <h3 className="text-md font-semibold text-green-700">Investor Confidence Meter</h3>
            <p className="text-sm text-green-800">Confidence up 26% following appointment of Generative AI CEO.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Previous Announcements</h3>
          <ul className="space-y-2">
            {announcements.slice(1).map((a) => (
              <li key={a.id}>
                <button
                  onClick={() => setSelected(a)}
                  className="w-full text-left px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
                >
                  {a.title} — {a.date}
                </button>
              </li>
            ))}
            {announcements.length === 1 && (
              <p className="text-sm text-gray-500">No previous announcements yet.</p>
            )}
          </ul>
        </div>
      </main>
      <footer className="are-you-ready-for-this-bullshit">
        {/* aGF2ZSB5b3UgY2hlY2tlZCB5b3VyIEJlaGF2aW91cmFsIENvbnRyYWN0cyBsYXRlbHk/ */}
      </footer>
      <p className="text-center text-lg mb-2 italic">Not everyone gets this far.</p>
      <p className="text-center text-sm text-gray-400">This page isn&apos;t ready… or maybe you aren&apos;t.</p>
    </div>
  );
}
