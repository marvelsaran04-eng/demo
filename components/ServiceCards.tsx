"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Server, Mail, Globe } from "lucide-react";

// Data for your services
const services = [
  {
    title: "Domain Registration",
    description: "Secure your brand's digital identity instantly with hundreds of top-level domains.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-50",
    href: "/domains",
  },
  {
    title: "Cloud Hosting",
    description: "Lightning-fast, ultra-reliable servers with 99.9% guaranteed uptime.",
    icon: Server,
    color: "text-purple-500",
    bg: "bg-purple-50",
    href: "/hosting",
  },
  {
    title: "Custom Email",
    description: "Build trust with professional @yourdomain.com email addresses.",
    icon: Mail,
    color: "text-pink-500",
    bg: "bg-pink-50",
    href: "/email",
  },
  // ─── SEO temporarily disabled ───
  // {
  //   title: "SEO Tools",
  //   description: "Climb the Google rankings with our built-in analytics and optimization suite.",
  //   icon: LineChart,
  //   color: "text-emerald-500",
  //   bg: "bg-emerald-50",
  //   href: "/seo",
  // },
];

// 1. Fixed TypeScript issue by explicitly typing variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServiceCards() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
    >
      {services.map((service) => (
        <Link key={service.title} href={service.href} className="block h-full">
        <motion.div 
          variants={cardVariants}
          // 2. Moved shadow animation into Framer Motion to prevent jitter
          whileHover={{ 
            y: -8, 
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // Tailwind's shadow-xl
            transition: { duration: 0.2 } 
          }}
          // 3. Removed 'hover:shadow-xl' and 'transition-shadow' from className
          className="h-full bg-white p-6 md:p-8 rounded-3xl border border-zinc-100 shadow-sm cursor-pointer group flex flex-col items-start text-left"
        >
          {/* Icon Wrapper */}
          <div className={`p-3 md:p-4 rounded-2xl ${service.bg} ${service.color} mb-4 md:mb-6 transition-transform group-hover:scale-110 duration-300`}>
            <service.icon size={32} strokeWidth={2} />
          </div>
          
          <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
          <p className="text-zinc-500 leading-relaxed font-medium">
            {service.description}
          </p>
          
          {/* Subtle "Learn More" link that appears on hover */}
          <div className="mt-8 flex items-center gap-2 text-sm font-bold text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
