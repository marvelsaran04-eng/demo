"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function DomainSearch() {
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
        className="relative flex items-center bg-white p-2 rounded-full border-2 border-zinc-200 transition-colors"
      >
        <div className="pl-4 text-zinc-400">
          <Search size={24} />
        </div>
        <input 
          type="text"
          placeholder="Find your perfect domain name..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-lg font-medium text-zinc-900 placeholder:text-zinc-400 w-full"
        />
        <select className="hidden sm:block bg-zinc-50 border-none outline-none text-zinc-600 font-bold px-4 h-full cursor-pointer mr-2 rounded-lg">
          <option>.com</option>
          <option>.io</option>
          <option>.tech</option>
          <option>.net</option>
        </select>
        <button className="bg-zinc-900 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-600 transition-colors active:scale-95 shadow-lg">
          Search
        </button>
      </motion.div>
    </motion.div>
  );
}