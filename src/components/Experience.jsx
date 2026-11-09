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
    <section id="experience" className="section-rule px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div {...motionProps(prefersReducedMotion)}>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-accent">Experience</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">Where I Have Worked</h2>
        </motion.div>

        <div className="mt-12">
          {entries.map((entry, index) => (
            <motion.article
              key={`${entry.role}-${entry.company}`}
              className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-[170px_1fr] md:gap-12 md:py-10"
              {...motionProps(prefersReducedMotion, fadeLeft)}
            >
              <p className="font-mono text-sm uppercase tracking-wider text-muted">{entry.period}</p>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">0{index + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-medium text-white">{entry.role}</h3>
                <p className="mt-1 text-base text-muted sm:text-lg">{entry.company}</p>
                <ul className="mt-5 space-y-3 text-base leading-7 text-muted md:text-lg">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent/80" />
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
