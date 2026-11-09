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
    <section id="contact" className="section-rule px-6 py-24 md:px-16 md:py-32">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        {...motionProps(prefersReducedMotion, staggerContainer)}
      >
        <motion.p className="font-mono text-sm font-medium uppercase tracking-widest text-accent" variants={fadeUp}>
          Contact
        </motion.p>
        <motion.h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl" variants={fadeUp}>
          Let's Work Together
        </motion.h2>
        <motion.p className="mt-5 text-lg leading-8 text-muted md:text-xl" variants={fadeUp}>
          I'm available for frontend roles, freelance projects, and collaborations. Reach out and let's
          build something great.
        </motion.p>

        <motion.div className="mt-9 flex flex-wrap justify-center gap-4" variants={staggerContainer}>
          {contacts.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              className="flex min-h-14 items-center justify-center gap-2 border border-white/10 px-5 py-3 text-base font-medium text-white transition-colors hover:border-accent/60 hover:text-accent"
              variants={fadeUp}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon size={18} />
              {label}
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href={`${import.meta.env.BASE_URL}Lazik-cv.pdf`}
          download="lazik-cv.pdf"
          className="mx-auto mt-10 flex min-h-14 w-full items-center justify-center gap-2 border border-accent bg-accent px-7 py-3 text-base font-semibold text-[#171510] transition-colors hover:bg-accent-soft sm:w-fit"
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
