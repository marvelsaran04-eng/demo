"use client";

import { motion, type Variants } from "framer-motion";
import { Activity, BrainCircuit, Link2, Radar, ScanSearch, TrendingUp } from "lucide-react";

const featureCards = [
  {
    title: "Autonomous Keyword Clustering",
    description:
      "Group live queries by search intent, funnel stage, and entity overlap so every brief targets a rankable topic graph.",
    icon: BrainCircuit,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Real-Time Core Web Vitals Tracking",
    description:
      "Monitor LCP, INP, CLS, and edge latency in the same workspace that prioritizes fixes by revenue impact.",
    icon: Activity,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Backlink Opportunity Mapping",
    description:
      "Surface partner mentions, competitor link gaps, and high-authority outreach targets ranked by topical trust.",
    icon: Link2,
    accent: "from-emerald-500 to-teal-400",
  },
];

const metrics = [
  { label: "Organic Lift", value: "+186%", color: "text-emerald-500" },
  { label: "SERP Wins", value: "42", color: "text-blue-500" },
  { label: "CWV Score", value: "98", color: "text-fuchsia-500" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const rippleVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] },
  },
};

function RankingChart() {
  return (
    <div className="relative rounded-3xl border border-white/60 bg-white/60 p-5 shadow-[0_24px_80px_rgba(139,92,246,0.18)] backdrop-blur-2xl">
      <div className="rounded-2xl border border-zinc-200/80 bg-white/75 p-5">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-black text-zinc-950">Ranking Chart</p>
            <p className="text-xs font-medium text-zinc-500">AI visibility index</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-bold text-white">
            <TrendingUp size={14} />
            Live climb
          </div>
        </div>

        <svg viewBox="0 0 640 360" role="img" aria-label="Animated ranking chart" className="h-auto w-full">
          <defs>
            <linearGradient id="rankingLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="48%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <linearGradient id="rankingFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {[80, 140, 200, 260, 320].map((y) => (
            <line key={y} x1="48" x2="610" y1={y} y2={y} stroke="#e4e4e7" strokeWidth="1" />
          ))}
          {[96, 210, 324, 438, 552].map((x) => (
            <line key={x} x1={x} x2={x} y1="42" y2="320" stroke="#f4f4f5" strokeWidth="1" />
          ))}

          <motion.path
            d="M64 302 C128 286 138 232 198 224 C268 214 270 168 334 164 C406 160 420 108 486 104 C548 100 558 70 604 58"
            fill="none"
            stroke="#d4d4d8"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.28"
          />
          <motion.path
            d="M64 302 C128 286 138 232 198 224 C268 214 270 168 334 164 C406 160 420 108 486 104 C548 100 558 70 604 58"
            fill="none"
            stroke="url(#rankingLine)"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.path
            d="M64 302 C128 286 138 232 198 224 C268 214 270 168 334 164 C406 160 420 108 486 104 C548 100 558 70 604 58 L604 320 L64 320 Z"
            fill="url(#rankingFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          />

          {[
            { x: 198, y: 224 },
            { x: 334, y: 164 },
            { x: 486, y: 104 },
            { x: 604, y: 58 },
          ].map((point, index) => (
            <motion.circle
              key={`${point.x}-${point.y}`}
              cx={point.x}
              cy={point.y}
              r="8"
              fill="#ffffff"
              stroke="#8b5cf6"
              strokeWidth="4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55 + index * 0.18, duration: 0.35, ease: "easeOut" }}
            />
          ))}

          <text x="48" y="344" fill="#71717a" fontSize="16" fontWeight="700">
            Week 1
          </text>
          <text x="520" y="344" fill="#71717a" fontSize="16" fontWeight="700">
            Week 12
          </text>
          <text x="48" y="58" fill="#18181b" fontSize="18" fontWeight="900">
            Rank 1
          </text>
        </svg>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-zinc-200 bg-white/80 p-4">
              <p className={`text-2xl font-black ${metric.color}`}>{metric.value}</p>
              <p className="mt-1 text-xs font-bold text-zinc-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SeoPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-white text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-100 bg-[linear-gradient(180deg,#f5f3ff_0%,#ffffff_55%,#ffffff_100%)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 grid w-full grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-24 lg:gap-16"
        >
          <div className="mx-auto max-w-xl md:mx-0">
            <motion.span
              variants={rippleVariants}
              className="mb-8 inline-flex rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase text-zinc-600 shadow-sm backdrop-blur-2xl"
            >
              SEO Intelligence
            </motion.span>

            <motion.h1
              variants={rippleVariants}
              className="mb-8 text-5xl font-black leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-blue-600 to-fuchsia-500 animate-gradient">
                Search growth that thinks ahead.
              </span>
            </motion.h1>

            <motion.p
              variants={rippleVariants}
              className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-600 md:text-xl"
            >
              A premium Web3 SEO cockpit that turns live SERP movement, entity gaps, and technical
              health into prioritized actions before competitors notice the shift.
            </motion.p>

            <motion.div variants={rippleVariants} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Entity-aware briefs", "Schema monitoring", "AI Overview tracking", "Technical issue triage"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-2xl"
                  >
                    <Radar size={18} className="text-violet-500" />
                    <span className="text-sm font-bold text-zinc-700">{item}</span>
                  </div>
                ),
              )}
            </motion.div>
          </div>

          <motion.div variants={rippleVariants} className="mx-auto w-full max-w-2xl">
            <RankingChart />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-zinc-50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14 text-center"
          >
            <motion.span variants={rippleVariants} className="mb-4 inline-block text-xs font-bold uppercase text-zinc-500">
              Autonomous Growth Stack
            </motion.span>
            <motion.h2 variants={rippleVariants} className="mb-4 text-4xl font-black text-zinc-950 md:text-5xl">
              Ranking systems for teams that move daily
            </motion.h2>
            <motion.p variants={rippleVariants} className="mx-auto max-w-2xl text-lg font-medium text-zinc-600">
              Replace spreadsheet audits with continuously updated insight loops across keywords,
              performance, and authority signals.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {featureCards.map((feature) => (
              <motion.div
                key={feature.title}
                variants={rippleVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${feature.accent} p-3 text-white shadow-md`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-black text-zinc-950 md:text-2xl">{feature.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-zinc-600 md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <motion.div variants={rippleVariants} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <ScanSearch size={28} className="mb-5 text-blue-500" />
              <h3 className="mb-3 text-2xl font-black text-zinc-950">Intent graph monitoring</h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
                Track how your buyers move from discovery terms to branded comparison searches,
                then ship recommendations to content, engineering, and partnerships in one flow.
              </p>
            </motion.div>

            <motion.div variants={rippleVariants} className="rounded-3xl border border-zinc-200 bg-zinc-950 p-8 shadow-xl">
              <p className="mb-3 text-sm font-bold uppercase text-cyan-300">Next best action</p>
              <h3 className="mb-4 text-3xl font-black text-white">Publish the cluster, fix INP, win three links.</h3>
              <p className="max-w-2xl text-sm font-medium leading-relaxed text-zinc-300 md:text-base">
                The engine connects keyword momentum with page speed and backlink supply, then ranks
                the work that creates compounding organic growth fastest.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
