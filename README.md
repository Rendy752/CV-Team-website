# DevFive — Team CV Website

A modern, responsive portfolio and resume web application built for the **DevFive** 5-member team. The project showcases member profiles, individual detailed CVs, and shared projects using SvelteKit.

---

## 👥 Meet the Team

| Member | Role / Profile Data | Route |
| :--- | :--- | :--- |
| **Arimbi** | Member 1 | `/resume/arimbi` |
| **Fajar** | Member 2 | `/resume/fajar` |
| **Haikal** | Member 3 | `/resume/haikal` |
| **Najwan** | Member 4 | `/resume/najwan` |
| **Rendy** | Member 5 | `/resume/rendy` |

---

## 🛠 Tech Stack

* **Framework:** [SvelteKit](https://kit.svelte.dev/)
* **Language:** TypeScript / JavaScript
* **Styling:** Tailwind CSS
* **Package Manager:** Bun / npm

---

## 📁 File Structure

```text
CV-Team-website/
├── .vscode/                     # VSCode workspace configurations
├── src/
│   ├── data/                    # Legacy / initial member and team datasets
│   │   ├── member[1-5].ts
│   │   ├── team.ts
│   │   └── types.ts
│   ├── lib/
│   │   ├── components/          # Reusable Svelte UI components
│   │   │   ├── Footer.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── MemberCard.svelte
│   │   │   ├── MemberCVModal.svelte
│   │   │   ├── Navbar.svelte
│   │   │   └── ProjectDetail.svelte
│   │   ├── data/                # Data stores for team, resumes, and projects
│   │   │   ├── member[1-5].ts
│   │   │   ├── projects.ts
│   │   │   ├── resumes.ts
│   │   │   └── team.ts
│   │   └── types/               # TypeScript type definitions
│   │       └── resume.ts
│   └── routes/                  # SvelteKit application routes & API endpoints
│       ├── api/                 # Internal API endpoints
│       │   ├── project/[slug]/
│       │   └── resume/[slug]/
│       ├── project/[slug]/      # Project details page
│       ├── resume/[slug]/       # Individual member CV page
│       ├── +layout.svelte       # Root application layout
│       └── +page.svelte         # Home landing page
├── static/
│   ├── data/                    # Static JSON resume schemas
│   │   ├── arimbi.json
│   │   ├── fajar.json
│   │   ├── haikal.json
│   │   ├── najwan.json
│   │   └── rendy.json
│   └── image/                   # Member avatars and team media
│       ├── arimbi.jpg
│       ├── fajar.jpg
│       ├── haikal.jpg
│       ├── najwan.jpg
│       └── rendy.jpg
├── .env.example                 # Sample environment configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Project dependencies and run scripts
└── prettier.config.js           # Code formatting rules
