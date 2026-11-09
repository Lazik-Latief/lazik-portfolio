import { motion } from "framer-motion";
import { fadeUp, motionProps, staggerContainer } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const notes = [
  ["Education", "BCA · University of Kashmir · 2023–26"],
  ["Coursework", "Frontend Development & Modern JavaScript · Udemy · 2024"],
  ["Based in", "Srinagar, Jammu & Kashmir"],
  ["Focus", "Frontend systems & product UI"],
  ["Approach", "Clear interfaces, careful delivery"],
];

export default function About() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="about" className="section-rule px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div {...motionProps(prefersReducedMotion, staggerContainer)}>
          <motion.p className="font-mono text-sm font-medium uppercase tracking-widest text-accent" variants={fadeUp}>
            About
          </motion.p>
          <motion.h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl" variants={fadeUp}>
            A little about me
          </motion.h2>
          <motion.div className="mt-7 space-y-6 text-lg leading-8 text-muted md:text-xl md:leading-9" variants={fadeUp}>
            <p>
              I’m a frontend developer and 2026 BCA graduate from the University of Kashmir. I’ve learned by building for real teams and clients, where a design has to work across devices and a feature has to fit the product around it.
            </p>
            <p>
              I work mainly in React and Next.js: shaping interfaces, connecting APIs and authentication, and building dashboards and business sites that stay understandable as they grow.
            </p>
            <p>
              I like untangling a problem before reaching for a component. The best result is usually the one that feels simple to use because the details were considered early.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-y border-white/10 py-2"
          {...motionProps(prefersReducedMotion, staggerContainer)}
        >
          {notes.map(([label, value]) => (
            <motion.div key={label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-white/[0.07] py-5 last:border-0 sm:grid-cols-[130px_1fr]" variants={fadeUp}>
              <div className="font-mono text-[13px] uppercase tracking-widest text-muted">{label}</div>
              <div className="text-base leading-7 text-white/85 sm:text-lg">{value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
