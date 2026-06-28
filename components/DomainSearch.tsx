"use client";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

type DomainSearchProps = {
  magneticButton?: boolean;
};

function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-zinc-900 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-600 transition-colors active:scale-95 shadow-lg"
    >
      {children}
    </motion.button>
  );
}

export default function DomainSearch({ magneticButton = false }: DomainSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="w-full max-w-2xl mx-auto mt-10 pointer-events-auto"
    >
      <motion.div 
        animate={{ 
          boxShadow: isFocused 
            ? "0px 10px 30px rgba(0, 0, 0, 0.15)" 
            : "0px 4px 10px rgba(0, 0, 0, 0.05)",
          scale: isFocused ? 1.02 : 1
        }}
        className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white p-2 rounded-2xl sm:rounded-full border-2 border-zinc-200 transition-colors"
      >
        <div className="flex items-center flex-1">
          <div className="pl-4 text-zinc-400 shrink-0">
            <Search size={24} />
          </div>
          <input 
            type="text"
            placeholder="Find your perfect domain name..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 bg-transparent border-none outline-none px-4 py-3.5 sm:py-3 text-base sm:text-lg font-medium text-zinc-900 placeholder:text-zinc-400 w-full min-w-0"
          />
          <select className="hidden sm:block bg-zinc-50 border-none outline-none text-zinc-600 font-bold px-4 h-full cursor-pointer mr-2 rounded-lg shrink-0">
            <option>.com</option>
            <option>.io</option>
            <option>.tech</option>
            <option>.net</option>
          </select>
        </div>
        {magneticButton ? (
          <MagneticButton>Search</MagneticButton>
        ) : (
          <button className="bg-zinc-900 text-white font-bold px-6 md:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-full hover:bg-blue-600 transition-colors active:scale-95 shadow-lg w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2 text-sm sm:text-base">
            Search
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}