import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { fadeUp } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

export default function Hero() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section
      id="top"
      className="editorial-grid relative flex min-h-[90svh] items-center overflow-hidden bg-primary px-6 pb-28 pt-32 md:px-16"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1fr_280px] lg:items-end">
        <div className="max-w-4xl">
          <motion.div
            className="flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-8"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
          >
            <div
              className="profile-disc flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/50 sm:h-40 sm:w-40 md:h-44 md:w-44"
            >
              <img
                src={`${import.meta.env.BASE_URL}lazik-latief.jpg`}
                alt="Lazik Latief"
                className="h-[124%] w-[124%] max-w-none object-cover object-center"
              />
            </div>
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-accent">
                Frontend engineer <span className="px-2 text-white/30">/</span> Srinagar, Kashmir
              </p>
              <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
                Lazik Latief<span className="text-accent">.</span>
              </h1>
            </div>
          </motion.div>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={{
              ...fadeUp,
              visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.16 } },
            }}
          >
            I build thoughtful web interfaces with React and Next.js, taking products from a clear idea to a dependable, responsive experience. My work spans SaaS features, client websites, and the details that make both feel complete.
          </motion.p>

          <motion.div
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={{
              ...fadeUp,
              visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.28 } },
            }}
          >
            <motion.a
              href={`${import.meta.env.BASE_URL}Lazik-cv.pdf`}
              download="lazik-cv.pdf"
              className="flex min-h-14 w-full items-center justify-center gap-2 border border-accent bg-accent px-7 py-3 text-base font-semibold text-[#171510] transition-colors hover:bg-accent-soft sm:w-auto"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
            <motion.a
              href="#projects"
              className="flex min-h-14 w-full items-center justify-center gap-2 border border-white/20 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-accent/60 hover:text-accent sm:w-auto"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              <ArrowDownRight size={18} />
              View selected work
            </motion.a>
          </motion.div>
        </div>

        <motion.aside
          className="border-l border-white/15 pl-6 text-base leading-7 text-muted lg:mb-2"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-accent">Currently</p>
          <p className="mt-3 text-white/85">Building SaaS products and useful web experiences.</p>
          <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.18em] text-muted">Working with</p>
          <p className="mt-2">React · Next.js · JavaScript</p>
        </motion.aside>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 right-6 flex min-h-12 items-center gap-3 font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:text-accent md:right-16"
      >
        <span>Scroll to explore</span>
        <ArrowDownRight size={17} />
      </a>
    </section>
  );
}
