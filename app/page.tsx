"use client"; 

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import DomainSearch from '@/components/DomainSearch';
import ServiceCards from '@/components/ServiceCards';

// Dynamically load Ballpit with SSR disabled
const Ballpit = dynamic(() => import('@/components/Ballpit'), { ssr: false });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
  }, []);

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden pt-20">
      
      {/* 1. HERO CONTAINER */}
      <section className="relative w-full min-h-[100svh] sm:h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        
        {/* Ballpit Background Layer - COLORS UNTOUCHED */}
        <div className="absolute inset-0 z-0">
          <Ballpit
            count={isMobile ? 60 : 130}
            gravity={0.4}
            friction={0.995}
            wallBounce={0.85}
            followCursor={!isMobile}
            colors={[0xff007f, 0x00f2fe, 0x4facfe]}
          />
        </div>

        {/* Floating Animated Content */}
        <div className="relative z-10 text-center w-full px-6 pointer-events-none">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 tracking-wide uppercase shadow-sm">
              Next-Gen Web Infrastructure
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight mb-6 drop-shadow-2xl">
              Power Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
              Big Idea.
            </span>
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium drop-shadow-md">
              Secure domains, lightning-fast hosting, and SEO tools built for modern creators. 
            </p>
          </motion.div>

          {/* Our new interactive Search Bar */}
          <DomainSearch />
          
        </div>
      </section>

      {/* 2. NEXT SECTIONS */}
      <section className="relative z-20 bg-zinc-50 min-h-screen py-16 md:py-24 px-6 md:px-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Section Headers */}
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
            Everything you need to scale
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-12 md:mb-16 text-lg md:text-xl font-medium">
            From your first domain to global server loads, we provide the infrastructure and tools to get you there.
          </p>
          
          {/* Injecting the new Cards Component */}
          <ServiceCards />

        </div>
      </section>

    </main>
  );
}