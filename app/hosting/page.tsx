"use client";

import { motion } from "framer-motion";
import HostingFeaturesBento from "@/components/hosting/HostingFeaturesBento";
import HostingPricing from "@/components/hosting/HostingPricing";

export default function HostingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-white text-zinc-950">
      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-zinc-100">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/80 via-white to-white pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-indigo-200/30 via-purple-200/20 to-transparent blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-200/25 to-transparent blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 w-full px-6 md:px-12 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-zinc-200 text-zinc-600 font-bold text-xs md:text-sm mb-8 tracking-widest uppercase shadow-sm">
              Web Hosting
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 animate-gradient">
                Infrastructure That Never Blinks.
              </span>
            </h1>

            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-6">
              Deploy on a globally distributed mesh engineered for sub-millisecond response,
              quantum-grade security, and infinite horizontal scale—without hiring a platform team.
            </p>

            <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-medium">
              From your first commit to your first million requests, ShriTech hosting keeps pace
              with your ambition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features bento */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 md:mb-16"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Platform Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
              Built for engineers who refuse to compromise
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto font-medium">
              Every layer of our stack—edge, compute, security, and support—is tuned for
              production workloads that demand more than shared hosting can deliver.
            </p>
          </motion.div>

          <HostingFeaturesBento />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 md:mb-16"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
              Pick your node. Scale on demand.
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto font-medium">
              No hidden egress fees. No surprise overages. Upgrade or downgrade anytime—your
              infrastructure grows with your traffic, not against your budget.
            </p>
          </motion.div>

          <HostingPricing />
        </div>
      </section>
    </main>
  );
}
