"use client";

import { motion } from "framer-motion";
import DomainSearch from "@/components/DomainSearch";
import ExtensionCardGallery from "@/components/domains/ExtensionCardGallery";
import DomainBenefitsBento from "@/components/domains/DomainBenefitsBento";

export default function DomainsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-white text-zinc-950">
      {/* Hero — clean light background, no Ballpit */}
      <section className="relative w-full overflow-hidden border-b border-zinc-100">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-200/30 via-fuchsia-200/20 to-blue-200/30 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 w-full px-6 md:px-12 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-5xl mx-auto mb-12 md:mb-16"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-zinc-200 text-zinc-600 font-bold text-xs md:text-sm mb-8 tracking-widest uppercase shadow-sm">
              Domain Registration
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 animate-gradient">
                Power Your Digital Sovereignty.
              </span>
            </h1>

            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Register the extensions that define the next era of compute—.ai for intelligence,
              .tech for builders, .com for timeless authority. One registrar, infinite namespace.
            </p>
          </motion.div>

          <DomainSearch magneticButton />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 md:mt-28"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-zinc-950 tracking-tight mb-3">
                Premium Extensions, Engineered to Convert
              </h2>
              <p className="text-zinc-600 font-medium max-w-xl mx-auto">
                Three TLDs. Three industries. One platform that registers, secures, and deploys in seconds.
              </p>
            </div>
            <ExtensionCardGallery />
          </motion.div>
        </div>
      </section>

      {/* Bento benefits */}
      <section className="relative z-20 py-24 md:py-32 px-6 md:px-12 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 md:mb-16"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Infrastructure Included
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
              Every domain ships battle-ready
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto font-medium">
              DNS, privacy, security, and on-chain deployment—provisioned automatically the moment
              your name goes live.
            </p>
          </motion.div>

          <DomainBenefitsBento />
        </div>
      </section>
    </main>
  );
}
