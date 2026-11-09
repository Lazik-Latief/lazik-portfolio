# Lazik Latief — Portfolio

A responsive, dark-themed portfolio for Lazik Latief, a frontend engineer based in Srinagar, Kashmir. The site is a static React application built with Vite. It presents an introduction, background, skills, experience, selected projects, contact details, and a downloadable CV.

## Tech stack

- **React 18** renders the page from reusable section components.
- **Vite 6** provides the development server and creates the production build.
- **Tailwind CSS 3** handles component layout and responsive styling; `src/index.css` holds the global styles and design tokens.
- **Framer Motion** provides restrained entrance, reveal, and hover transitions.
- **Lucide React** supplies interface icons.
- **JavaScript (ES modules)** is used throughout; there is no TypeScript layer or backend service.

## How the app is assembled

The application starts in `index.html`, which provides the document metadata and the `#root` mount point. Vite loads `src/main.jsx`, which imports the global stylesheet and mounts the React app inside `React.StrictMode`. `src/App.jsx` composes the page in display order:

```text
index.html
└── src/main.jsx
    └── src/App.jsx
        ├── Navbar
        ├── main
        │   ├── Hero
        │   ├── About
        │   ├── Skills
        │   ├── Experience
        │   ├── Projects
        │   └── Contact
        └── Footer
```

Each section is a separate component in `src/components`. This keeps the page composition easy to scan while allowing each section to own its markup, content, and small interactions.

### Navigation and page sections

`Navbar.jsx` contains the site navigation and mobile menu. Its links target section IDs such as `#about` and `#projects`; selecting a mobile link closes the menu. `Hero.jsx` introduces the portfolio owner, displays the portrait, and links to selected work and the CV. The remaining components render the About, Skills, Experience, Projects, Contact, and footer sections in that order.

The portfolio content is currently maintained as JavaScript arrays inside the relevant components:

- `Skills.jsx`: technology names grouped by category.
- `Experience.jsx`: roles, organizations, dates, and responsibility bullets.
- `Projects.jsx`: project titles, summaries, and technology tags.
- `Contact.jsx`: email, phone, and GitHub links.
- `About.jsx`: short biography and education/location details.

There is no CMS or API connection. To change the content, edit these component-level arrays and copy. Project repository/demo links can be added to `Projects.jsx` when the URLs are available.

## Design and interaction

The visual system is defined in `tailwind.config.js` and `src/index.css`. Tailwind extends the project with the charcoal backgrounds, muted gold accent, text colors, and display/body/monospace font families. `index.html` loads Space Grotesk, Inter, and JetBrains Mono. The global stylesheet sets the page background, type defaults, focus outline, portrait treatment, section dividers, and reduced-motion CSS behavior.

Framer Motion is used for the hero entrance, section reveals, and small hover/tap feedback. `motion.js` shares the reveal variants and viewport behavior. `useReducedMotionPreference.js` reads the browser’s `prefers-reduced-motion` setting so motion can be reduced for visitors who request it.

The layout uses responsive Tailwind breakpoints: navigation switches to a menu on smaller screens, the hero identity and details reflow, and the skills/projects grids collapse for narrow viewports. Text sizing is intentionally larger on small screens as well as desktop.

## Static assets and CV download

Files in `public/` are copied by Vite to the root of the built site without being imported into the JavaScript bundle.

- `public/lazik-latief.jpg` is the portrait used in the hero and navbar. The circular frame crops the photo to fit.
- `public/favicon.svg` is the site icon.
- `public/Lazik-cv.pdf` is the original CV asset. Keep this filename’s capitalization in sync with the URLs: production hosts commonly use case-sensitive paths.

The CV links in `Hero.jsx` and `Contact.jsx` use `import.meta.env.BASE_URL` before the static asset path, so they respect Vite’s configured deployment base. Their `download="lazik-cv.pdf"` attribute sets the downloaded filename to lowercase `lazik-cv.pdf`.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal. To create and locally serve the production build:

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. The project currently has no separate test or lint scripts; `npm run build` is the available production compilation check.

## Deploy

This project has **not been deployed yet**. It can be deployed as a static Vite site to a host such as Vercel or Netlify:

1. Push the repository to a Git provider and import it into the static hosting service.
2. Set the build command to `npm run build` and the output directory to `dist`.
3. Use the default root base for a domain-root deployment. If hosting under a subpath, set Vite’s `base` option in `vite.config.js` to that subpath and rebuild; the CV and portrait URLs already use Vite’s base URL.
4. After deployment, check the page at desktop and mobile widths, confirm the portrait and favicon load, and verify the CV request returns `application/pdf`.

## Project scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite’s local development server. |
| `npm run build` | Compile the production site into `dist/`. |
| `npm run preview` | Serve the production build locally for a final check. |
