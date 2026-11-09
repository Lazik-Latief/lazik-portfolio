import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-rule px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>&copy; 2026 Lazik Latief</p>
        <a
          href="https://github.com/Lazik-Latief"
          className="flex min-h-12 items-center gap-2 transition-colors hover:text-accent"
          target="_blank"
          rel="noreferrer"
          aria-label="Lazik Latief on GitHub"
        >
          <Github size={18} />
        </a>
      </div>
    </footer>
  );
}
