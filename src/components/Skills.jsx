import { motion } from "framer-motion";
import { fadeUp, motionProps, staggerContainer } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const categories = [
  ["Frontend", ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]],
  ["JavaScript", ["ES6+", "Async/Await", "REST APIs", "State Management", "Redux Toolkit"]],
  ["Backend/DB", ["Supabase", "PostgreSQL", "JSON", "Authentication"]],
  ["Tools", ["Git", "GitHub", "Vercel", "Netlify", "Figma", "VS Code"]],
];

export default function Skills() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="skills" className="bg-secondary px-6 py-24 md:px-16">
      <motion.div className="mx-auto max-w-7xl" {...motionProps(prefersReducedMotion, staggerContainer)}>
        <motion.p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-400" variants={fadeUp}>
          Skills
        </motion.p>
        <motion.h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl" variants={fadeUp}>
          Tools I Build With
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map(([category, skills]) => (
            <motion.div key={category} className="glass-panel rounded-2xl p-6" variants={fadeUp}>
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-indigo-400">{category}</p>
              <motion.div
                className="mt-5 flex flex-wrap gap-3"
                variants={staggerContainer}
                initial={prefersReducedMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
