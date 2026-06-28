"use client";

import { motion, type Variants } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

type PricingTier = {
  name: string;
  priceUsd: number;
  priceInr: number;
  description: string;
  features: string[];
  popular?: boolean;
  glowColor: string;
  borderGradient: string;
};

const tiers: PricingTier[] = [
  {
    name: "Developer Node",
    priceUsd: 9,
    priceInr: 799,
    description: "Launch side projects and MVPs on production-grade infrastructure.",
    features: [
      "50GB NVMe SSD storage",
      "100GB edge bandwidth / month",
      "1 vCPU · 2GB RAM container",
      "Free SSL, CDN & DDoS shield",
      "99.9% uptime SLA",
    ],
    glowColor: "rgba(59, 130, 246, 0.35)",
    borderGradient: "from-blue-400/60 via-cyan-400/40 to-blue-500/60",
  },
  {
    name: "Scale Architecture",
    priceUsd: 29,
    priceInr: 2499,
    description: "Built for growing teams shipping daily with confidence.",
    popular: true,
    features: [
      "200GB NVMe SSD storage",
      "1TB edge bandwidth / month",
      "4 vCPU · 8GB RAM auto-scaling",
      "Serverless functions + 3 staging envs",
      "Priority support · 99.95% uptime SLA",
    ],
    glowColor: "rgba(139, 92, 246, 0.45)",
    borderGradient: "from-violet-400/70 via-fuchsia-400/50 to-purple-500/70",
  },
  {
    name: "Enterprise Mesh",
    priceUsd: 149,
    priceInr: 12499,
    description: "Global, mission-critical workloads with dedicated engineering.",
    features: [
      "1TB NVMe · unlimited edge bandwidth",
      "16 vCPU · 32GB dedicated cluster",
      "Multi-region failover mesh (5 regions)",
      "Dedicated DevOps engineer & custom SLA",
      "99.99% uptime · SOC 2 audit reports",
    ],
    glowColor: "rgba(245, 158, 11, 0.35)",
    borderGradient: "from-amber-400/60 via-orange-400/40 to-amber-500/60",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HostingPricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.name}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className={`relative ${tier.popular ? "md:-mt-4 md:mb-4" : ""}`}
        >
          {/* Glowing border wrapper */}
          <div
            className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${tier.borderGradient} opacity-80 blur-[1px]`}
            style={{ boxShadow: `0 0 40px ${tier.glowColor}` }}
          />

          <div
            className={`relative h-full flex flex-col rounded-3xl backdrop-blur-2xl bg-white/70 border border-white/40 p-6 md:p-8 shadow-lg ${
              tier.popular ? "ring-2 ring-violet-500/20" : ""
            }`}
            style={{ boxShadow: `0 24px 48px -12px ${tier.glowColor}` }}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                <Sparkles size={12} />
                Most Popular
              </div>
            )}

            <div className="mb-6 pt-2">
              <h3 className="text-xl font-black text-zinc-950 mb-1">{tier.name}</h3>
              <p className="text-sm text-zinc-600 font-medium">{tier.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-black text-zinc-950">
                  ₹{tier.priceInr.toLocaleString("en-IN")}
                </span>
                <span className="text-zinc-500 font-semibold">/mo</span>
              </div>
              <p className="text-sm font-bold text-violet-600 mt-1">
                ${tier.priceUsd}/mo
              </p>
            </div>

            <ul className="space-y-3.5 flex-1 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="shrink-0 mt-0.5 p-0.5 rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-zinc-700 font-medium leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.98] ${
                tier.popular
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110"
                  : "bg-zinc-950 text-white hover:bg-zinc-800"
              }`}
            >
              {tier.popular ? "Start Scaling" : "Get Started"}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
