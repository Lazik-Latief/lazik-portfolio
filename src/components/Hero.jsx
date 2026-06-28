import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { fadeUp } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const roles = ["React Developer", "Next.js Engineer", "UI/UX Implementor", "SaaS Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotionPreference();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, []);

  const heroMotion = prefersReducedMotion
    ? {}
    : {
        animate: { scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-6 pb-20 pt-28 text-center md:px-16"
    >
      <motion.div
        className="pointer-events-none absolute left-[-100px] top-[-100px] h-[500px] w-[500px] rounded-full bg-indigo-600 opacity-30 blur-[120px]"
        {...heroMotion}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-80px] right-[-80px] h-[400px] w-[400px] rounded-full bg-violet-700 opacity-30 blur-[120px]"
        {...heroMotion}
        transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <motion.p
          className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-400"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
        >
          Frontend Developer &middot; Based in Srinagar, J&amp;K
        </motion.p>
        <motion.h1
          className="mt-6 font-display text-5xl font-bold tracking-tight text-white md:text-7xl"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={{
            ...fadeUp,
            visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.1 } },
          }}
        >
          Lazik Latief
        </motion.h1>

        <div className="mt-5 min-h-10 font-display text-2xl font-medium text-indigo-400 md:text-3xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          className="mt-6 max-w-lg text-base leading-relaxed text-muted"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={{
            ...fadeUp,
            visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.3 } },
          }}
        >
          I build fast, polished, and scalable web applications, from SaaS platforms to client-facing
          products. Focused on clean UI, real-world integrations, and code that ships.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={{
            ...fadeUp,
            visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.42 } },
          }}
        >
          <motion.a
            href="/lazik-cv.pdf"
            download="Lazik-Latief-CV.pdf"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 sm:w-auto"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
          >
            <Download size={16} />
            Download CV
          </motion.a>
          <motion.a
            href="#projects"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-indigo-500/50 hover:bg-white/10 sm:w-auto"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
          >
            <ArrowDown size={16} />
            View Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center text-indigo-400/50"
        aria-label="Scroll to about"
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
