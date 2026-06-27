"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ExtensionCard = {
  tld: string;
  headline: string;
  pitch: string;
  image: string;
  gradient: string;
};

const extensions: ExtensionCard[] = [
  {
    tld: ".com",
    headline: "The Universal Trust Signal",
    pitch:
      "For four decades, .com has been the internet's default handshake—signaling legitimacy to investors, customers, and search engines before a single pixel loads.",
    image: "/domain-card-1.png",
    gradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
  },
  {
    tld: ".ai",
    headline: "The Cognitive Infrastructure Standard",
    pitch:
      "The global standard for cognitive infrastructure—.ai domains tell the world your product thinks, learns, and scales at machine speed.",
    image: "/domain-card-2.png",
    gradient: "from-violet-500/20 via-fuchsia-400/10 to-purple-600/20",
  },
  {
    tld: ".tech",
    headline: "Built for Builders & Breakthroughs",
    pitch:
      "When your stack is the product, .tech signals you ship at the frontier—startups, OSS maintainers, and R&D labs choose it first.",
    image: "/domain-card-3.png",
    gradient: "from-emerald-500/20 via-teal-400/10 to-cyan-600/20",
  },
];

function getOffset(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function CardImage({ src, alt, tld }: { src: string; alt: string; tld: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200">
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-black text-zinc-300/80">{tld}</span>
        </div>
      )}
    </div>
  );
}

export default function ExtensionCardGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % extensions.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (direction: -1 | 1) => {
    setActive((prev) => (prev + direction + extensions.length) % extensions.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto perspective-[1200px]">
      <div className="relative h-[420px] md:h-[460px] flex items-center justify-center">
        {extensions.map((ext, index) => {
          const offset = getOffset(index, active, extensions.length);
          const isActive = offset === 0;

          return (
            <motion.div
              key={ext.tld}
              className="absolute w-[280px] md:w-[320px] cursor-pointer"
              animate={{
                x: offset * 140,
                rotateY: offset * -28,
                scale: isActive ? 1 : 0.82,
                opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.55,
                zIndex: isActive ? 30 : 20 - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onClick={() => setActive(index)}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`rounded-3xl overflow-hidden border border-black/5 bg-white/80 backdrop-blur-2xl shadow-[0_32px_64px_rgba(0,0,0,0.12)] ${
                  isActive ? "ring-2 ring-zinc-950/10" : ""
                }`}
              >
                <CardImage src={ext.image} alt={`${ext.tld} domain extension`} tld={ext.tld} />
                <div className={`p-6 bg-gradient-to-br ${ext.gradient} backdrop-blur-sm`}>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-black text-zinc-950">{ext.tld}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-badge"
                        className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 bg-white/70 px-2 py-0.5 rounded-full border border-black/5"
                      >
                        Featured
                      </motion.span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-950 mb-2">{ext.headline}</h3>
                  <p className="text-xs leading-relaxed text-zinc-600">{ext.pitch}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => goTo(-1)}
          aria-label="Previous extension"
          className="p-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-black/5 text-zinc-950 hover:bg-zinc-100 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-2">
          {extensions.map((ext, i) => (
            <button
              key={ext.tld}
              onClick={() => setActive(i)}
              aria-label={`Show ${ext.tld}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-zinc-950" : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(1)}
          aria-label="Next extension"
          className="p-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-black/5 text-zinc-950 hover:bg-zinc-100 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="text-center text-sm text-zinc-500 font-medium mt-4"
        >
          Tap a card or use arrows to explore premium extensions
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
