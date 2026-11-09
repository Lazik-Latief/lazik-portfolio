import { motion } from "framer-motion";
import { fadeUp, motionProps, staggerContainer } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const projects = [
  {
    title: "Koshur LMS",
    subtitle: "Learning Management System",
    tags: ["React.js", "Next.js", "Supabase", "Redux Toolkit", "Tailwind CSS"],
    description:
      "Comprehensive LMS with dynamic course delivery, progress tracking, student dashboards, and AI-powered learning modules.",
  },
  {
    title: "Rico Marbles",
    subtitle: "Corporate Business Website",
    tags: ["React.js", "Tailwind CSS", "Vercel", "SEO"],
    description:
      "Modern corporate website with responsive layouts, product showcases, and conversion-focused user journeys.",
  },
  {
    title: "A.R. and Sons",
    subtitle: "Hardware & Building Materials Website",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Vite"],
    description:
      "Mobile-first business website with product showcase, intuitive navigation, and customer inquiry workflows.",
  },
  {
    title: "StudyFlow AI",
    subtitle: "In Progress",
    tags: ["Next.js", "AI Integration", "Supabase"],
    description: "AI-powered study assistant SaaS platform currently in active development.",
  },
];

export default function Projects() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="projects" className="section-rule bg-secondary px-6 py-24 md:px-16 md:py-32">
      <motion.div className="mx-auto max-w-7xl" {...motionProps(prefersReducedMotion, staggerContainer)}>
        <motion.p className="font-mono text-sm font-medium uppercase tracking-widest text-accent" variants={fadeUp}>
          Projects
        </motion.p>
        <motion.h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl" variants={fadeUp}>
          Selected Work
        </motion.h2>

        <div className="mt-12 grid gap-x-8 gap-y-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative flex min-h-[320px] flex-col border-t border-white/15 bg-card/40 px-5 py-7 transition-colors hover:border-accent/70 hover:bg-card/80 md:px-7"
              variants={fadeUp}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-sm font-medium uppercase tracking-wider text-accent">{project.subtitle}</p>
                <span className="font-mono text-xs text-muted/70">0{index + 1}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted md:text-lg">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 px-3 py-2 text-sm font-medium text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
