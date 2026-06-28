import { motion } from "framer-motion";
import { fadeUp, motionProps, staggerContainer } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const stats = [
  { value: "3+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "2", label: "SaaS platforms built" },
  { value: "1", label: "Startup contribution" },
];

export default function About() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="about" className="px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div {...motionProps(prefersReducedMotion, staggerContainer)}>
          <motion.p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-400" variants={fadeUp}>
            About
          </motion.p>
          <motion.h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl" variants={fadeUp}>
            Who I Am
          </motion.h2>
          <motion.div className="mt-6 space-y-5 text-base leading-relaxed text-muted" variants={fadeUp}>
            <p>
              I am a BCA graduate from the University of Kashmir, Srinagar, class of 2026, with a
              practical focus on building production-ready frontend systems.
            </p>
            <p>
              My work spans freelance delivery, internships, and professional roles where I have built
              React.js and Next.js interfaces, integrated APIs, handled auth flows, and shipped polished
              dashboards and business websites.
            </p>
            <p>
              I care about clean, performant interfaces that solve real problems, feel good to use, and
              hold up when they meet real users.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="glass-panel grid grid-cols-2 gap-4 rounded-2xl p-6"
          {...motionProps(prefersReducedMotion, staggerContainer)}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5" variants={fadeUp}>
              <div className="font-display text-4xl font-bold text-indigo-400">{stat.value}</div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
