'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const codeExample = `open_agent_spec: 1.0.4

agent:
  name: hello-world-agent
  description: A simple agent that responds with a greeting
  role: chat

intelligence:
  type: llm
  engine: openai
  model: gpt-4
  endpoint: https://api.openai.com/v1
  config:
    temperature: 0.7
    max_tokens: 150

tasks:
  greet:
    description: Say hello to a person by name
    timeout: 30
    input:
      type: object
      properties:
        name:
          type: string
          description: The name of the person to greet
          minLength: 1
          maxLength: 100
      required: [name]
    output:
      type: object
      properties:
        response:
          type: string
          description: The greeting response
          minLength: 1
      required: [response]

prompts:
  system: >
    You are a friendly agent that greets people by name.
    Respond with: "Hello <name>!"
  user: "{{name}}"

behavioural_contract:
  version: "0.1.2"
  description: "Simple contract requiring a greeting response"
  role: "Friendly agent"
  behavioural_flags:
    conservatism: "moderate"
    verbosity: "compact"
  response_contract:
    output_format:
      required_fields: [response]`;

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
        <p className="text-base md:text-lg text-gray-400 text-center mt-6 max-w-4xl leading-relaxed">
          Open Agent Stack is an independent, umbrella toolkit for building safe, structured ai agent ecosystems
        </p>
        <p className="text-sm md:text-base text-gray-500 text-center mt-4 max-w-3xl leading-relaxed">
          Think of Open Agent Stack as "HTTP + middleware" for agents!
        </p>
        
        {/* Prime Vector Section */}
        <div className="flex flex-col items-center mt-8 p-6 bg-gray-900/30 rounded-lg border border-gray-700/30">
          <Image
            src="/prime-vector.png"
            alt="Prime Vector Logo"
            width={120}
            height={40}
            className="mb-3"
          />
          <p className="text-sm text-gray-400 text-center">
            Open Agent Stack is a software solution provided by <span className="text-white font-medium">Prime Vector</span>
          </p>
        </div>
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
              href="https://github.com/prime-vector/open-agent-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 underline text-sm"
            >
              GitHub →
            </a>
            <a
              href="https://pypi.org/project/open-agent-spec/"
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
              href="https://pypi.org/project/behavioural-contracts/"
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
          <h2 className="text-2xl font-semibold mb-2 text-gray-300">DACP</h2>
          <p className="text-white/80 text-sm">
            Declarative Agent Communication Protocol, a message-passing and collaboration layer built around structured task exchange,
            enabling multi-agent systems to interoperate predictably.
          </p>
          <div className="mt-2 space-y-1">
            <a
              href="https://pypi.org/project/dacp/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-300 underline text-sm"
            >
              PyPi →
            </a>
          </div>
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

      {/* Tools Section */}
      <div className="w-full max-w-6xl mt-24">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-300">Agent Tool Ecosystem</h2>
        <p className="text-sm md:text-base text-gray-500 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Configure your agents to use tools at runtime - or use standalone!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* File Writer */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">File Writer</h3>
            <p className="text-sm text-gray-400">Write to and modify files on disk</p>
          </div>

          {/* Terminal */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Terminal</h3>
            <p className="text-sm text-gray-400">Command-line interface for agents to run scripts and code</p>
          </div>

          {/* API Generator */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">API Generator</h3>
            <p className="text-sm text-gray-400">Automatically generate REST APIs from external Web Service Specifications</p>
          </div>

          {/* Monitor */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Monitor</h3>
            <p className="text-sm text-gray-400">Real-time monitoring and observability for agent systems</p>
          </div>
        </div>
      </div>

      {/* Code Example Section */}
      <div className="w-full max-w-4xl mt-24">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">See OAS in Action</h2>
        
        {/* YouTube Video Embed */}
        <div className="mb-12">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/aTxObLDu8l4"
              title="Open Agent Stack Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono text-sm">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 text-xs">chat_assistant.yaml</span>
          </div>
          <pre className="text-green-400 overflow-x-auto">
            <code>{codeExample}</code>
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
              Today&apos;s AI agents are fragmented, unpredictable, and lack standardised governance. Developers face inconsistent APIs, 
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
              We&apos;re building this in the open and welcome contributions from the community. Whether you&apos;re interested in specifications, 
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

      {/* Let Us Help You Section */}
      <div className="w-full max-w-4xl mt-24 border-t border-white/20 pt-16">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-300">Let us help you!</h2>
        <p className="text-lg text-gray-400 text-center mb-8">
          With your Open Agent Stack implementation
        </p>
        <div className="flex justify-center">
          <a
            href="https://primevector.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Started with Prime Vector →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-xs text-white/40 text-center">
        © 2025 Open Agent Stack — Created by Andrew Whitehouse
      </footer>
    </main>
  );
}
