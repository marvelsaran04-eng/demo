"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { AtSign, CheckCircle2, KeyRound, LockKeyhole, MailCheck, ShieldCheck } from "lucide-react";

const emailRows = [
  {
    from: "system@yourdomain.com",
    subject: "Deployment Successful",
    preview: "Production workspace synced, verified, and sealed behind encrypted SMTP.",
    time: "09:42",
    tag: "Deploy",
  },
  {
    from: "security@yourdomain.com",
    subject: "DKIM Signature Rotated",
    preview: "Fresh 2048-bit keys are live across all branded sending domains.",
    time: "09:18",
    tag: "Auth",
  },
  {
    from: "ops@yourdomain.com",
    subject: "Catch-All Alias Captured",
    preview: "hello@, press@, and investor@ now route into the pristine workspace.",
    time: "08:55",
    tag: "Alias",
  },
  {
    from: "billing@yourdomain.com",
    subject: "Receipt Archived",
    preview: "Invoice stored with zero-knowledge retention and audit-safe access.",
    time: "08:13",
    tag: "Vault",
  },
];

const features = [
  {
    title: "Fully Encrypted SMTP",
    id: "email-encryption",
    description:
      "Every relay is wrapped in enforced TLS, rotating credentials, and message-level policy checks before mail leaves your domain.",
    icon: LockKeyhole,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Catch-All Aliases",
    id: "email-workspace",
    description:
      "Capture every role address, campaign reply, and investor intro without creating inbox clutter or losing brand consistency.",
    icon: AtSign,
    accent: "from-fuchsia-500 to-violet-500",
  },
  {
    title: "DKIM/SPF 1-Click Setup",
    id: "email-dkim",
    description:
      "Publish DNS records, validate alignment, and keep deliverability protected with guided checks that finish in seconds.",
    icon: KeyRound,
    accent: "from-emerald-500 to-teal-400",
  },
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

export default function EmailPage() {
  const [activeEmail, setActiveEmail] = useState(emailRows[0]);

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-white text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-100 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_54%,#ffffff_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 grid w-full grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-12 md:py-24 lg:gap-16"
        >
          <div className="mx-auto max-w-xl md:mx-0">
            <motion.span
              variants={rippleVariants}
              className="mb-8 inline-flex rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase text-zinc-600 shadow-sm backdrop-blur-2xl"
            >
              Custom Email
            </motion.span>

            <motion.h1
              variants={rippleVariants}
              className="mb-8 text-5xl font-black leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 animate-gradient">
                The inbox your launch deserves.
              </span>
            </motion.h1>

            <motion.p
              variants={rippleVariants}
              className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-600 md:text-xl"
            >
              Branded mailboxes for founders, operators, and on-chain teams that need trust,
              deliverability, and a spotless command center from day one.
            </motion.p>

            <motion.div
              variants={rippleVariants}
              className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-zinc-700"
            >
              {["99.99% relay uptime", "Zero-trust access", "Instant DNS checks"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-2xl"
                >
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div id="email-ai-inbox" variants={rippleVariants} className="mx-auto w-full max-w-2xl scroll-mt-28">
            <div className="relative rounded-3xl border border-white/60 bg-white/55 p-4 shadow-[0_24px_80px_rgba(59,130,246,0.18)] backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-cyan-50/60 to-violet-50/70" />
              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm">
                <div className="flex items-center justify-between border-b border-zinc-200/80 px-5 py-4">
                  <div>
                    <p className="text-sm font-black text-zinc-950">Inbox Preview</p>
                    <p className="text-xs font-medium text-zinc-500">workspace@yourdomain.com</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-bold text-white">
                    <ShieldCheck size={14} />
                    Encrypted
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.82fr]">
                  <div className="divide-y divide-zinc-200/80">
                    {emailRows.map((email) => {
                      const isActive = activeEmail.subject === email.subject;

                      return (
                        <button
                          key={email.subject}
                          type="button"
                          onClick={() => setActiveEmail(email)}
                          className={`group w-full px-5 py-4 text-left transition-all ${
                            isActive ? "bg-zinc-950 text-white" : "bg-white/30 text-zinc-950 hover:bg-white/80"
                          }`}
                        >
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <span className={`text-xs font-bold ${isActive ? "text-cyan-200" : "text-blue-600"}`}>
                              From: {email.from}
                            </span>
                            <span className={`text-xs font-bold ${isActive ? "text-zinc-300" : "text-zinc-400"}`}>
                              {email.time}
                            </span>
                          </div>
                          <p className="text-sm font-black">Subject: {email.subject}</p>
                          <p className={`mt-1 text-sm leading-relaxed ${isActive ? "text-zinc-300" : "text-zinc-500"}`}>
                            {email.preview}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <motion.div
                    key={activeEmail.subject}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="border-t border-zinc-200/80 bg-white/60 p-5 lg:border-l lg:border-t-0"
                  >
                    <div className="mb-5 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      {activeEmail.tag} verified
                    </div>
                    <h2 className="mb-3 text-2xl font-black text-zinc-950">{activeEmail.subject}</h2>
                    <p className="mb-6 text-sm font-medium leading-relaxed text-zinc-600">
                      Your pristine workspace is organized, authenticated, and ready for every
                      customer-facing touchpoint your domain creates.
                    </p>
                    <div className="rounded-2xl border border-zinc-200 bg-white/75 p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm font-black text-zinc-950">
                        <MailCheck size={18} className="text-blue-500" />
                        Deliverability score
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "96%" }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400"
                        />
                      </div>
                      <p className="mt-3 text-xs font-bold text-zinc-500">96% inbox placement ready</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:py-32 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 md:mb-14 text-center"
          >
            <motion.span variants={rippleVariants} className="mb-4 inline-block text-xs font-bold uppercase text-zinc-500">
              Mail Infrastructure
            </motion.span>
            <motion.h2 variants={rippleVariants} className="mb-3 md:mb-4 text-4xl font-black text-zinc-950 md:text-5xl">
              Premium email without the admin maze
            </motion.h2>
            <motion.p variants={rippleVariants} className="mx-auto max-w-2xl text-lg font-medium text-zinc-600">
              Everything ships preconfigured for high-trust sending, clean aliases, and fast onboarding.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                id={feature.id}
                variants={rippleVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative scroll-mt-28 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${feature.accent} p-3 text-white shadow-md`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-black text-zinc-950 md:text-2xl">{feature.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-zinc-600 md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
