import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, motionProps, staggerContainer } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const projects = [
  {
    title: "Koshur LMS",
    subtitle: "Learning Management System",
    tags: ["React.js", "Next.js", "Supabase", "Redux Toolkit", "Tailwind CSS"],
    description:
      "Comprehensive LMS with dynamic course delivery, progress tracking, student dashboards, and AI-powered learning modules.",
    status: "View Project",
  },
  {
    title: "Rico Marbles",
    subtitle: "Corporate Business Website",
    tags: ["React.js", "Tailwind CSS", "Vercel", "SEO"],
    description:
      "Modern corporate website with responsive layouts, product showcases, and conversion-focused user journeys.",
    status: "View Project",
  },
  {
    title: "A.R. and Sons",
    subtitle: "Hardware & Building Materials Website",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Vite"],
    description:
      "Mobile-first business website with product showcase, intuitive navigation, and customer inquiry workflows.",
    status: "View Project",
  },
  {
    title: "StudyFlow AI",
    subtitle: "In Progress",
    tags: ["Next.js", "AI Integration", "Supabase"],
    description: "AI-powered study assistant SaaS platform currently in active development.",
    status: "In Progress",
  },
];

export default function Projects() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="projects" className="bg-secondary px-6 py-24 md:px-16">
      <motion.div className="mx-auto max-w-7xl" {...motionProps(prefersReducedMotion, staggerContainer)}>
        <motion.p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-400" variants={fadeUp}>
          Projects
        </motion.p>
        <motion.h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl" variants={fadeUp}>
          Selected Work
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-card p-6 transition-colors hover:border-indigo-500/30 hover:shadow-glow"
              variants={fadeUp}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
            >
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-indigo-500 to-transparent" />
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-indigo-400">{project.subtitle}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-auto flex min-h-12 items-center gap-2 pt-6 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
              >
                {project.status}
                <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
