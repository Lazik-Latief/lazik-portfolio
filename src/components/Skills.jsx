import { motion } from "framer-motion";
import { fadeUp, motionProps, staggerContainer } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const categories = [
  ["Frontend", ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]],
  ["Languages", ["JavaScript", "ES6+", "Async/Await"]],
  ["Backend", ["REST APIs", "Authentication", "JSON", "Supabase"]],
  ["Databases", ["PostgreSQL"]],
  ["Tools & Technologies", ["Redux Toolkit", "Git", "GitHub", "Vercel", "Netlify", "Figma", "VS Code"]],
];

export default function Skills() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="skills" className="section-rule bg-secondary px-6 py-24 md:px-16 md:py-32">
      <motion.div className="mx-auto max-w-7xl" {...motionProps(prefersReducedMotion, staggerContainer)}>
        <motion.p className="font-mono text-sm font-medium uppercase tracking-widest text-accent" variants={fadeUp}>
          Skills
        </motion.p>
        <motion.h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl" variants={fadeUp}>
          Tools I Build With
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map(([category, skills]) => (
            <motion.div key={category} className="border-t border-white/10 py-6" variants={fadeUp}>
              <p className="font-mono text-sm font-medium uppercase tracking-wider text-accent">{category}</p>
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
                    className="border border-white/10 px-3.5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-accent/40 hover:text-accent"
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
