"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { Shield, Gauge, Network, Headphones } from "lucide-react";

const features = [
  {
    title: "Quantum-Grade Security",
    tagline: "Zero-trust by default, not by upgrade.",
    description:
      "Hardware-isolated enclaves, AES-256-at-rest encryption, and AI-driven threat telemetry scan every packet before it reaches your runtime—SOC 2 Type II certified out of the box.",
    icon: Shield,
    accent: "from-indigo-500 to-violet-500",
    glow: "rgba(99, 102, 241, 0.25)",
    span: "md:col-span-2",
  },
  {
    title: "Sub-Millisecond Edge TTFB",
    tagline: "Speed measured in microseconds, not seconds.",
    description:
      "320+ anycast PoPs terminate TLS at the edge and serve cached responses with a median TTFB under 0.8ms—your users feel instant, everywhere.",
    icon: Gauge,
    accent: "from-cyan-500 to-blue-500",
    glow: "rgba(6, 182, 212, 0.25)",
    span: "md:col-span-1",
  },
  {
    title: "Auto-Scaling Serverless Mesh",
    tagline: "Scale from zero to planet without config.",
    description:
      "Kubernetes-native orchestration spins containers horizontally on demand—handle traffic spikes 100× your baseline with no manual intervention or downtime windows.",
    icon: Network,
    accent: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.25)",
    span: "md:col-span-1",
  },
  {
    title: "24/7 Elite Dev-Ops Support",
    tagline: "Real engineers. Real-time resolution.",
    description:
      "Senior SREs on-call around the clock with a 4-minute median response—incident triage, performance tuning, and deployment guidance included on every plan.",
    icon: Headphones,
    accent: "from-amber-500 to-orange-500",
    glow: "rgba(245, 158, 11, 0.25)",
    span: "md:col-span-2",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

function TiltCell({
  children,
  glow,
}: {
  children: ReactNode;
  glow: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const y = -(e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    setRotate({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: `0 20px 50px -12px ${glow}`,
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function HostingFeaturesBento() {
  return (
    <div className="perspective-[1200px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto"
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
            className={feature.span}
          >
            <TiltCell glow={feature.glow}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-black/5 bg-white/70 backdrop-blur-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${feature.accent} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}
                />

                <div
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.accent} text-white mb-6 shadow-md`}
                >
                  <feature.icon size={24} strokeWidth={2} />
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  {feature.tagline}
                </p>
                <h3 className="text-xl md:text-2xl font-black text-zinc-950 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed font-medium text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </TiltCell>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
