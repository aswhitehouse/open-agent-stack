'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const codeExample = `open_agent_spec: 0.3.0

agent:
  name: "email-assistant"
  role: "A professional email composition agent"

intelligence:
  type: llm
  engine: openai
  model: gpt-4
  endpoint: https://api.openai.com/v1
  config:
    temperature: 0.7
    max_tokens: 1000

tasks:
  compose_email:
    description: Compose a professional email
    input:
      properties:
        recipient:
          type: string
          description: "Email recipient"
    output:
      type: object
      properties:
        email:
          type: string
          description: "The composed email"
      required: [email]

behavioural_contract:
  version: "0.1.2"
  description: "Professional email composition"
  role: "email_assistant"
  behavioural_flags:
    conservatism: "high"
    verbosity: "moderate"
  response_contract:
    output_format:
      required_fields: [email]

prompts:
  system: |
    You are a professional email assistant. Compose clear, concise emails.
    IMPORTANT: Your response must be a valid JSON object with a single "email" field.
  output_format: |
    Your response must be a JSON object with this exact structure:
    {
      "email": "Your email content here"
    }

interface:
  cli:
    enabled: true

safety:
  role_lock: true
  fallback_behavior: return_empty
  observation_limits:
    max_tokens_seen: 4096
    max_calls: 5`;

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (fadeIn && currentIndex < codeExample.length) {
      const timeout = setTimeout(() => {
        setTypedText(codeExample.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30); // Adjust speed here
      return () => clearTimeout(timeout);
    }
  }, [fadeIn, currentIndex, codeExample]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* Logo and Title Section */}
      <div className={`flex flex-col items-center mb-20 transition-opacity duration-1000 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/OAS-Logo.png"
            alt="Open Agent Stack Logo"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32"
            priority
          />
        </div>
        
        {/* Fade-in Title */}
        <h1 className="text-5xl md:text-6xl font-serif tracking-widest text-center">
          OPEN AGENT STACK
        </h1>
      </div>

      {/* Four-Column Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Column 1: Open Agent Spec */}
        <div className="border-r border-white/20 pr-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-300">Open Agent Spec (OAS)</h2>
          <p className="text-white/80 text-sm">
            A YAML-based specification to declaratively define AI agents, including prompt structure, memory format, and task config.
            Used as the foundation for scaffolding, deployment, and orchestration.
          </p>
          <div className="mt-2 space-y-1">
            <a
              href="https://github.com/aswhitehouse/openagentspec"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 underline text-sm"
            >
              GitHub →
            </a>
            <a
              href="https://github.com/aswhitehouse/behavioural-contracts"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 underline text-sm"
            >
              PyPi →
            </a>
            <a
              href="https://medium.com/@andrewswhitehouse/introducing-open-agent-spec-67a492f07835"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 underline text-sm"
            >
              Medium Post →
            </a>
          </div>
        </div>

        {/* Column 2: Behavioral Contracts */}
        <div className="border-r border-white/20 pr-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-300">Behavioral Contracts (BCE)</h2>
          <p className="text-white/80 text-sm">
            Runtime enforcement for agent behavior. Define what agents must, should, and must not do, and enforce these at inference time.
            Adds guardrails, governance, and observability.
          </p>
          <div className="mt-2 space-y-1">
            <a
              href="https://github.com/aswhitehouse/behavioural-contracts"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 underline text-sm"
            >
              GitHub →
            </a>
            <a
              href="https://github.com/aswhitehouse/behavioural-contracts"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 underline text-sm"
            >
              PyPi →
            </a>
            <a
              href="https://medium.com/@andrewswhitehouse/behavioural-contracts-for-ai-agents-1a38dfa7dcd8"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 underline text-sm"
            >
              Medium Post →
            </a>
          </div>
        </div>

        {/* Column 3: DACP */}
        <div className="border-r border-white/20 pr-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-300">DACP (Coming Soon)</h2>
          <p className="text-white/80 text-sm">
            Declarative Agent Communication Protocol, a message-passing and collaboration layer built around structured task exchange,
            enabling multi-agent systems to interoperate predictably.
          </p>
        </div>

        {/* Column 4: Shepard */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-300">Shepard (Coming Soon)</h2>
          <p className="text-white/80 text-sm">
            A supervising agent process that monitors other agents using BCE rules and DACP tracebacks, ensuring alignment, health, and
            corrective feedback across chains.
            Orchestrates, deploys, removes suspect agents and manages their lifecycle and Observability.
          </p>
        </div>
      </div>

      {/* Code Example Section */}
      <div className="w-full max-w-4xl mt-24">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">See OAS in Action</h2>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono text-sm">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 text-xs">email_assistant.yaml</span>
          </div>
          <pre className="text-green-400 overflow-x-auto">
            <code>{typedText}</code>
            <span className="animate-pulse">|</span>
          </pre>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="w-full max-w-4xl mt-24 border-t border-white/20 pt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-300">Mission & Vision</h2>
        
        <div className="space-y-8">
          {/* Problem Statement */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-white">The Problem</h3>
            <p className="text-white/80 leading-relaxed">
              Today's AI agents are fragmented, unpredictable, and lack standardised governance. Developers face inconsistent APIs, 
              no behavioural guarantees, and limited observability. Multi-agent systems are brittle, with poor communication protocols 
              and no unified supervision. This creates security risks, deployment complexity, and prevents scalable AI applications.
            </p>
          </section>

          {/* Solution */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-white">Our Solution</h3>
            <p className="text-white/80 leading-relaxed">
              The Open Agent Stack provides a comprehensive, interoperable framework for building, deploying, and governing AI agents. 
              We combine declarative specifications, runtime behavioral enforcement, structured communication protocols, and intelligent 
              supervision to create reliable, scalable multi-agent systems.
            </p>
          </section>

          {/* Differentiation from MCP */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-white">Beyond MCP</h3>
            <p className="text-white/80 leading-relaxed">
              While Model Context Protocol (MCP) focuses on tool integration and context management, the Open Agent Stack addresses 
              the broader ecosystem needs: behavioral governance, structured and declarative agent-to-agent communication, lifecycle management, and system-wide 
              supervision. We complement MCP by providing the missing layers for production-ready, multi-agent deployments.
            </p>
          </section>

          {/* How to Contribute */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-white">Get Involved</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We're building this in the open and welcome contributions from the community. Whether you're interested in specifications, 
              behavioral contracts, communication protocols, or supervision systems, there are opportunities to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/andrew-whitehouse-130a9034/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://medium.com/@andrewswhitehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-lg transition-colors"
              >
                Read Our Blog
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-xs text-white/40 text-center">
        © 2025 Open Agent Stack — Created by Andrew Whitehouse
      </footer>
    </main>
  );
}
