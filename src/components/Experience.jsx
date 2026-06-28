import { motion } from "framer-motion";
import { fadeLeft, fadeUp, motionProps } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const entries = [
  {
    role: "Frontend Engineer",
    company: "Mohammad Salman",
    period: "Jan 2026 - Present",
    bullets: [
      "Built and maintained React.js and Next.js SaaS applications",
      "Integrated REST APIs, auth systems, and database-driven workflows",
      "Redux Toolkit state management for complex features",
      "AI-powered learning modules, dashboards, course experiences",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Koshur Scientist",
    period: "Dec 2025 - Feb 2026",
    bullets: [
      "Built reusable UI components, accordions, dashboards, progress trackers",
      "REST API integration and state management for dynamic content",
      "Agile development, Git workflows, team collaboration",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "Aug 2024 - Present",
    bullets: [
      "Responsive business websites with React.js, Next.js, Tailwind CSS",
      "Modern landing pages focused on UX and conversion",
      "Third-party service integrations including forms, maps, and APIs",
      "Full project delivery from requirements to deployment on Vercel",
      "Performance optimization, SEO, mobile responsiveness",
    ],
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="experience" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div {...motionProps(prefersReducedMotion)}>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-400">Experience</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">Where I Have Worked</h2>
        </motion.div>

        <div className="relative mt-14 space-y-8 md:ml-4">
          <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-indigo-500/30 md:block" />
          {entries.map((entry) => (
            <motion.article
              key={`${entry.role}-${entry.company}`}
              className="relative md:pl-12"
              {...motionProps(prefersReducedMotion, fadeLeft)}
            >
              <span className="absolute left-[7px] top-8 hidden h-3 w-3 rounded-full bg-indigo-400 shadow-[0_0_0_8px_rgba(99,102,241,0.12)] md:block" />
              <div className="glass-panel rounded-2xl p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{entry.role}</h3>
                    <p className="mt-1 text-sm font-medium text-indigo-400">{entry.company}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">{entry.period}</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
