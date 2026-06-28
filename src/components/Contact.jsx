import { motion } from "framer-motion";
import { Download, Github, Mail, Phone } from "lucide-react";
import { fadeUp, motionProps, staggerContainer } from "./motion.js";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const contacts = [
  { label: "laziklatief@gmail.com", href: "mailto:laziklatief@gmail.com", icon: Mail },
  { label: "+91 7889943194", href: "tel:+917889943194", icon: Phone },
  { label: "Lazik-Latief", href: "https://github.com/Lazik-Latief", icon: Github },
];

export default function Contact() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="contact" className="px-6 py-24 md:px-16">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        {...motionProps(prefersReducedMotion, staggerContainer)}
      >
        <motion.p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-400" variants={fadeUp}>
          Contact
        </motion.p>
        <motion.h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl" variants={fadeUp}>
          Let's Work Together
        </motion.h2>
        <motion.p className="mt-5 text-base leading-relaxed text-muted" variants={fadeUp}>
          I'm available for frontend roles, freelance projects, and collaborations. Reach out and let's
          build something great.
        </motion.p>

        <motion.div className="mt-9 flex flex-wrap justify-center gap-4" variants={staggerContainer}>
          {contacts.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              className="glass-panel flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-colors hover:border-indigo-500/40"
              variants={fadeUp}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon size={16} />
              {label}
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="/Lazik-cv.pdf"
          download="Lazik-Latief-CV.pdf"
          className="mx-auto mt-10 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 sm:w-fit"
          variants={fadeUp}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
        >
          <Download size={16} />
          Download My CV
        </motion.a>
      </motion.div>
    </section>
  );
}
