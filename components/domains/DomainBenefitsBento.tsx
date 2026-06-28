"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Shield, Lock, Blocks } from "lucide-react";

const benefits = [
  {
    title: "Anycast DNS Routing",
    tagline: "Lightning propagates everywhere at once.",
    description:
      "Your records replicate across 180+ global edge nodes the moment you hit publish—sub-30ms resolution whether your visitor is in Berlin or Bangalore.",
    icon: Globe,
    accent: "from-blue-500 to-cyan-400",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Identity Guard Privacy",
    tagline: "Your name stays off the auction block.",
    description:
      "Enterprise WHOIS masking swaps personal data for proxy shields automatically, neutralizing scrapers, spam rings, and domain hijack attempts.",
    icon: Shield,
    accent: "from-violet-500 to-fuchsia-400",
    span: "md:col-span-1",
  },
  {
    title: "Instant Registrar Lock",
    tagline: "One toggle. Zero transfer surprises.",
    description:
      "Flip EP-compliant registrar lock from your dashboard and block unauthorized transfers in real time—no support ticket, no 72-hour wait.",
    icon: Lock,
    accent: "from-amber-500 to-orange-400",
    span: "md:col-span-1",
  },
  {
    title: "Automated Smart-Contract Deployment",
    tagline: "On-chain domains, zero Solidity.",
    description:
      "Map Handshake and ENS records to your stack with one-click smart-contract deployment—DNSSEC, wallet routing, and renewal automation included.",
    icon: Blocks,
    accent: "from-emerald-500 to-teal-400",
    span: "md:col-span-2",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function DomainBenefitsBento() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto"
    >
      {benefits.map((benefit) => (
        <motion.div
          key={benefit.title}
          variants={itemVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow ${benefit.span}`}
        >
          <div
            className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${benefit.accent} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
          />

          <div
            className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${benefit.accent} text-white mb-6 shadow-md`}
          >
            <benefit.icon size={24} strokeWidth={2} />
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
            {benefit.tagline}
          </p>
          <h3 className="text-xl md:text-2xl font-black text-zinc-950 mb-3 tracking-tight">
            {benefit.title}
          </h3>
          <p className="text-zinc-600 leading-relaxed font-medium text-sm md:text-base">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
