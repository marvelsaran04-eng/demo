"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  Gem,
  Globe2,
  Zap,
  Rocket,
  Server,
  MailPlus,
  ShieldCheck,
  AtSign,
  ScanSearch,
  TrendingUp,
  Wand2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type MegaMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type NavCategory = {
  name: string;
  href: string;
  tagline: string;
  items: MegaMenuItem[];
};

const navCategories: NavCategory[] = [
  {
    name: "Domains",
    href: "/domains",
    tagline: "Own the namespace that defines your AI brand.",
    items: [
      {
        title: "AI Extensions (.ai, .io)",
        description:
          "Claim the TLDs investors and engineers trust—instant registration with AI-powered availability scoring.",
        href: "/domains",
        icon: Sparkles,
      },
      {
        title: "Premium Aftermarket",
        description:
          "Acquire short, category-defining domains from our curated vault with escrow-backed transfer in under 24 hours.",
        href: "/domains",
        icon: Gem,
      },
      {
        title: "Decentralized Handshake Domains",
        description:
          "Register censorship-resistant names on Handshake with one-click DNS bridging to your existing stack.",
        href: "/domains",
        icon: Globe2,
      },
    ],
  },
  {
    name: "Hosting",
    href: "/hosting",
    tagline: "Infrastructure engineered for sub-50ms global response.",
    items: [
      {
        title: "Edge Compute Nodes",
        description:
          "Deploy workloads across 320+ PoPs so inference and APIs execute milliseconds from every user on earth.",
        href: "/hosting",
        icon: Zap,
      },
      {
        title: "Serverless Functions",
        description:
          "Cold starts under 12ms with auto-scaling to 100K concurrent executions—pay only for compute you consume.",
        href: "/hosting",
        icon: Rocket,
      },
      {
        title: "Managed Autonomous VPS",
        description:
          "Self-healing virtual machines with AI-driven patching, NVMe storage, and 10 Gbps uplinks out of the box.",
        href: "/hosting",
        icon: Server,
      },
    ],
  },
  {
    name: "Email",
    href: "/email",
    tagline: "Enterprise-grade mail built for teams that ship fast.",
    items: [
      {
        title: "AI-Powered Inbox Intelligence",
        description:
          "Smart triage, auto-drafted replies, and sentiment routing keep high-priority threads at the top of every queue.",
        href: "/email#email-ai-inbox",
        icon: MailPlus,
      },
      {
        title: "Zero-Trust Encrypted Relay",
        description:
          "End-to-end TLS with per-message encryption keys and DMARC/SPF/DKIM compliance enforced automatically.",
        href: "/email#email-encryption",
        icon: ShieldCheck,
      },
      {
        title: "Branded Workspace Domains",
        description:
          "Provision unlimited @yourdomain.com aliases with SSO, shared calendars, and 99.99% deliverability SLA.",
        href: "/email#email-workspace",
        icon: AtSign,
      },
    ],
  },
  {
    name: "SEO",
    href: "/seo",
    tagline: "Rank faster with data pipelines trained on live SERP signals.",
    items: [
      {
        title: "Semantic Core Audits",
        description:
          "Deep NLP scans map entity gaps against top-ranking competitors and surface actionable content briefs.",
        href: "/seo#seo-audits",
        icon: ScanSearch,
      },
      {
        title: "Real-Time SERP Intelligence",
        description:
          "Track keyword volatility, featured-snippet shifts, and AI Overview citations across 190 markets daily.",
        href: "/seo#seo-serp",
        icon: TrendingUp,
      },
      {
        title: "Autonomous Content Optimizer",
        description:
          "AI rewrites meta tags, schema markup, and internal links on a schedule—without touching your CMS workflow.",
        href: "/seo#seo-optimizer",
        icon: Wand2,
      },
    ],
  },
];

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.25, ease: "easeOut" },
  }),
};

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const activeCategory = navCategories.find((cat) => cat.name === activeMenu);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      onMouseLeave={() => {
        setActiveMenu(null);
        setHoveredIndex(null);
      }}
    >
      {/* Main bar */}
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between backdrop-blur-2xl bg-white/70 border-b border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center h-full hover:scale-105 transition-transform"
        >
          {logoError ? (
            <span className="text-2xl font-black text-zinc-950 tracking-tight">ShriTech</span>
          ) : (
            <Image
              src="/logo.png"
              alt="ShriTech Logo"
              width={140}
              height={140}
              className="object-contain drop-shadow-md"
              style={{ width: "auto", height: "80%" }}
              priority
              onError={() => setLogoError(true)}
            />
          )}
        </Link>

        {/* Desktop nav triggers */}
        <div className="hidden md:flex items-center space-x-1">
          {navCategories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="relative px-4 py-2 rounded-full cursor-pointer"
              onMouseEnter={() => {
                setHoveredIndex(index);
                setActiveMenu(category.name);
              }}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-zinc-950 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`text-sm font-semibold transition-colors duration-300 ${
                  hoveredIndex === index || activeMenu === category.name
                    ? "text-white"
                    : "text-zinc-950"
                }`}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA & mobile menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-zinc-950 backdrop-blur-2xl bg-white/70 border border-black/5 px-5 py-2.5 rounded-full hover:bg-zinc-100 hover:border-black/10 transition-all active:scale-95"
          >
            Sign Up
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden p-2.5 text-zinc-950 rounded-xl hover:bg-zinc-100/80 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mega menu panel */}
      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeCategory.name}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 right-0 top-full px-6 md:px-12 pt-3 pointer-events-auto"
            onMouseEnter={() => setActiveMenu(activeCategory.name)}
          >
            <div className="max-w-5xl mx-auto backdrop-blur-2xl bg-white/70 border border-black/5 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Panel header */}
              <div className="px-8 pt-7 pb-5 border-b border-black/5">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">
                  {activeCategory.name}
                </p>
                <p className="text-base font-medium text-zinc-950">
                  {activeCategory.tagline}
                </p>
              </div>

              {/* Panel links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-3">
                {activeCategory.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      className="group flex gap-4 p-5 rounded-xl hover:bg-zinc-100/80 border border-transparent hover:border-black/5 transition-all duration-200"
                    >
                      <div className="shrink-0 p-2.5 rounded-xl bg-zinc-100 border border-black/5 text-zinc-950 group-hover:bg-zinc-200 group-hover:scale-105 transition-all duration-200">
                        <item.icon size={20} strokeWidth={2} className="text-zinc-950" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-sm font-bold text-zinc-950 transition-colors">
                            {item.title}
                          </span>
                          <ArrowUpRight
                            size={14}
                            className="text-zinc-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          />
                        </div>
                        <p className="text-xs leading-relaxed text-zinc-600 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Panel footer CTA */}
              <div className="px-8 py-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs text-zinc-600 font-medium">
                  Trusted by 12,000+ AI-native teams worldwide
                </span>
                <Link
                  href={activeCategory.href}
                  className="text-xs font-bold text-zinc-950 hover:text-zinc-700 flex items-center gap-1 transition-colors"
                >
                  Explore all {activeCategory.name.toLowerCase()}
                  <ArrowUpRight size={12} className="text-zinc-950" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu - full-screen bottom sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-20 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Bottom sheet panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="absolute bottom-0 left-0 right-0 max-h-[75vh] rounded-t-3xl bg-white/95 backdrop-blur-2xl border-t border-black/5 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-1 sticky top-0 bg-white/95 backdrop-blur-2xl z-10">
                <div className="w-10 h-1.5 rounded-full bg-zinc-300" />
              </div>

              {/* Close button */}
              <div className="flex justify-end px-4 pb-1 sticky top-2 bg-white/95 backdrop-blur-2xl z-10">
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-zinc-100 transition-colors -mt-8"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-4 pb-8">
                {navCategories.map((category) => (
                  <div key={category.name} className="border-b border-black/5 py-2 last:border-b-0">
                    <Link
                      href={category.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-black text-zinc-950 hover:bg-zinc-100/80 transition-colors active:bg-zinc-100"
                    >
                      {category.name}
                      <ArrowUpRight size={16} className="text-zinc-500 shrink-0" />
                    </Link>
                    <div className="grid gap-1 px-2 pb-1">
                      {category.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex gap-3 rounded-xl px-3 py-3.5 hover:bg-zinc-100/80 transition-colors active:bg-zinc-100"
                        >
                          <div className="shrink-0 p-2 rounded-xl bg-zinc-100 border border-black/5 text-zinc-950">
                            <item.icon size={18} strokeWidth={2} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-zinc-950">{item.title}</p>
                            <p className="text-xs leading-relaxed text-zinc-600 mt-0.5">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-4 text-sm font-bold text-white shadow-sm transition-all active:scale-95 hover:bg-zinc-800"
                >
                  Sign Up
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
