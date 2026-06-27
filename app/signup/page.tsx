"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, LockKeyhole, ServerCog, ShieldCheck, Sparkles } from "lucide-react";

const trustSignals = [
  "Edge deploys in under 60 seconds",
  "Encrypted workspace provisioning",
  "Domains, hosting, email, and SEO in one control plane",
];

const formFields = [
  {
    id: "name",
    label: "Full name",
    type: "text",
    autoComplete: "name",
    placeholder: "Alex Rivera",
  },
  {
    id: "email",
    label: "Work email",
    type: "email",
    autoComplete: "email",
    placeholder: "alex@company.com",
  },
  {
    id: "company",
    label: "Company",
    type: "text",
    autoComplete: "organization",
    placeholder: "Orbit Labs",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    autoComplete: "new-password",
    placeholder: "Create a secure password",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const copyVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: 96, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 92,
      damping: 18,
      mass: 0.8,
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function SignupPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white pt-20 text-zinc-950">
      <section className="relative isolate overflow-hidden border-b border-zinc-100 bg-[linear-gradient(180deg,#f5f3ff_0%,#ffffff_52%,#ffffff_100%)] px-6 py-16 md:px-12 md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-200/30 via-violet-200/30 to-fuchsia-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <motion.span
              variants={copyVariants}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase text-zinc-600 shadow-sm backdrop-blur-2xl"
            >
              <Sparkles size={14} className="text-fuchsia-500" />
              Developer Access
            </motion.span>

            <motion.h1
              variants={copyVariants}
              className="mb-8 text-5xl font-black leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="animate-gradient bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Initialize Your Infrastructure
              </span>
            </motion.h1>

            <motion.p
              variants={copyVariants}
              className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-zinc-600 md:text-xl lg:mx-0"
            >
              Join the network of 100,000+ developers deploying at the edge.
            </motion.p>

            <motion.div variants={copyVariants} className="mt-8 grid gap-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="mx-auto flex w-full max-w-xl items-center gap-3 rounded-2xl border border-zinc-200 bg-white/75 px-4 py-3 text-left shadow-sm backdrop-blur-2xl lg:mx-0"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  <span className="text-sm font-bold text-zinc-700">{signal}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={copyVariants}
              className="mt-10 grid grid-cols-3 gap-3 rounded-3xl border border-zinc-200 bg-white/60 p-3 shadow-sm backdrop-blur-2xl"
            >
              {[
                { label: "Regions", value: "320+", icon: ServerCog },
                { label: "Uptime SLA", value: "99.99%", icon: ShieldCheck },
                { label: "Key Rotation", value: "Auto", icon: LockKeyhole },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/70 p-4">
                  <item.icon size={18} className="mb-3 text-violet-500" />
                  <p className="text-xl font-black text-zinc-950">{item.value}</p>
                  <p className="mt-1 text-xs font-bold text-zinc-500">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-xl rounded-3xl border border-white/60 bg-white/60 p-4 shadow-[0_24px_80px_rgba(139,92,246,0.20)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-cyan-50/60 to-violet-50/70" />
            <div className="relative rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm sm:p-8">
              <motion.div variants={fieldVariants} className="mb-8">
                <p className="text-sm font-black uppercase text-violet-600">
                  Start free
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">
                  Create your command center
                </h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
                  No credit card. No procurement loop. Launch with a verified workspace.
                </p>
              </motion.div>

              <div className="grid gap-5">
                {formFields.map((field) => (
                  <motion.div key={field.id} variants={fieldVariants}>
                    <label
                      htmlFor={field.id}
                      className="mb-2 block text-sm font-bold text-zinc-800"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      required
                      className="w-full rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3.5 text-sm font-semibold text-zinc-950 outline-none transition-all placeholder:text-zinc-400 focus:border-cyan-400 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.18),0_0_28px_rgba(139,92,246,0.22)] focus-visible:ring-0"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fieldVariants} className="mt-5 flex items-start gap-3">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 size-4 rounded border-zinc-300 text-zinc-950 accent-zinc-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="terms" className="text-sm font-medium leading-relaxed text-zinc-600">
                  I agree to receive workspace updates and accept the infrastructure terms.
                </label>
              </motion.div>

              <motion.button
                variants={fieldVariants}
                type="submit"
                className="group animate-gradient relative mt-7 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 px-5 py-4 text-sm font-black text-white shadow-lg shadow-violet-500/25 transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.99]"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                  animate={{ x: ["0%", "420%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative">Create Account</span>
                <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.p variants={fieldVariants} className="mt-5 text-center text-xs font-bold text-zinc-500">
                Prefer to explore first?{" "}
                <Link href="/hosting" className="text-zinc-950 underline-offset-4 hover:underline">
                  View edge plans
                </Link>
              </motion.p>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
