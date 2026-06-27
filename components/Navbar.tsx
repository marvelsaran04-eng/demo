"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { name: "Domains", href: "#domains" },
    { name: "Hosting", href: "#hosting" },
    { name: "Email", href: "#email" },
    { name: "SEO Tools", href: "#seo" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 px-6 md:px-12 h-20 flex items-center justify-between backdrop-blur-xl bg-white/60 border-b border-zinc-200/50 shadow-sm"
    >
      {/* Logo */}
      <div className="relative flex items-center h-full cursor-pointer hover:scale-105 transition-transform">
        <Image 
          src="/logo.png" 
          alt="ShriTech Logo" 
          width={140}  
          height={140} 
          className="object-contain" 
          style={{ width: 'auto', height: '80%' }} 
          priority 
        />
      </div>

      {/* Desktop Links with Framer Motion Sliding Pill */}
      <div className="hidden md:flex items-center space-x-2">
        {navLinks.map((link, index) => (
          <div 
            key={link.name}
            className="relative px-4 py-2 rounded-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-zinc-900 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <a 
              href={link.href} 
              className={`text-sm font-semibold transition-colors duration-300 ${
                hoveredIndex === index ? "text-white" : "text-zinc-700"
              }`}
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>

      {/* CTA & Mobile Menu */}
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 text-sm font-bold text-zinc-900 bg-white border-2 border-zinc-900 px-5 py-2.5 rounded-full hover:bg-zinc-900 hover:text-white transition-all active:scale-95">
          Sign In
        </button>
        <button className="md:hidden p-2 text-zinc-900">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}