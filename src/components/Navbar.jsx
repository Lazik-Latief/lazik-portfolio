import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useReducedMotionPreference } from "./useReducedMotionPreference.js";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ href, label, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="group relative py-3 text-base font-medium text-muted transition-colors hover:text-white"
    >
      {label}
      <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotionPreference();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.09] bg-primary/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-16">
        <motion.a
          href="#top"
          className="flex min-h-14 items-center gap-3.5 font-display font-semibold tracking-tight text-white"
          aria-label="Lazik Latief home"
          whileHover={prefersReducedMotion ? undefined : { y: -1 }}
        >
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-accent/55 bg-[#211f1a] shadow-[0_0_0_4px_rgba(210,183,121,0.06)] sm:h-14 sm:w-14">
            <img
              src={`${import.meta.env.BASE_URL}lazik-latief.jpg`}
              alt=""
              className="h-[124%] w-[124%] max-w-none object-cover object-center"
            />
          </span>
          <span className="whitespace-nowrap text-base sm:text-lg">Lazik Latief</span>
        </motion.a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:gap-9 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 top-20 z-40 min-h-[calc(100vh-5rem)] border-b border-white/[0.06] bg-primary/95 px-6 py-10 backdrop-blur-xl md:hidden"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.07 } },
                hidden: {},
              }}
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-display text-4xl font-semibold text-white"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
