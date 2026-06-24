"use client"; // <--- Add this exactly at line 1

import dynamic from 'next/dynamic';

// Dynamically load Ballpit with SSR disabled so it never slows down initial loading
const Ballpit = dynamic(() => import('@/components/Ballpit'), { ssr: false });

export default function Home() {
  return (
    // Changed: bg-zinc-950 -> bg-white
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      
      {/* 1. HERO CONTAINER (Full Screen Viewport) */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Ballpit Background Layer */}
        <div className="absolute inset-0 z-0">
          <Ballpit
            count={130}                     
            gravity={0.4}                   
            friction={0.995}                
            wallBounce={0.85}               
            followCursor={true}             
            colors={[0xff007f, 0x00f2fe, 0x4facfe]} 
          />
        </div>

        {/* Floating Content Over Canvas */}
        <div className="relative z-10 text-center max-w-2xl px-6 pointer-events-none">
          {/* Changed: text-white -> text-zinc-900 */}
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight mb-4 drop-shadow-lg select-none">
            Welcome to the Pit
          </h1>
          {/* Changed: text-zinc-400 -> text-zinc-600 */}
          <p className="text-zinc-600 text-lg md:text-xl mb-8 select-none">
            An interactive playground layout built completely from scratch.
          </p>
          {/* Changed: Inverted button colors for high contrast on a white background */}
          <button className="pointer-events-auto bg-zinc-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-zinc-800 active:scale-95 transition-all shadow-xl">
            Explore Features
          </button>
        </div>

      </section>

      {/* 2. NEXT SECTIONS */}
      {/* Changed: bg-zinc-900 -> bg-zinc-50 */}
      <section className="relative z-20 bg-zinc-50 min-h-screen py-20 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Changed: text-white -> text-zinc-900 */}
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Your Next Section Here</h2>
          {/* Changed: text-zinc-400 -> text-zinc-600 */}
          <p className="text-zinc-600">This content sits perfectly underneath your hero experience.</p>
        </div>
      </section>

    </main>
  );
}