# DevFive — Team Profile & Portfolio Platform

**DevFive** is a shared portfolio and curriculum vitae (CV) web application designed to highlight the profiles, technical skill sets, experience, and projects of all five team members. 

**Live Demo:** [https://cv-team-website.vercel.app](https://cv-team-website.vercel.app)

---

## Team Members
* **Member 1:** Arimbi
* **Member 2:** Fajar
* **Member 3:** Haikal
* **Member 4:** Najwan
* **Member 5:** Rendy

---

## Project Structure

```text
CV-Team-website/
├── .vscode/                 # Editor workspace configuration
├── src/
│   ├── lib/
│   │   ├── assets/          # Static component-level assets & icons
│   │   ├── components/      # UI components (Navbar, Hero, MemberCard, CVModal, Footer, etc.)
│   │   ├── data/            # Member profile, resume, and project data definitions
│   │   │   ├── member1.ts
│   │   │   ├── member2.ts
│   │   │   ├── member3.ts
│   │   │   ├── member4.ts
│   │   │   ├── member5.ts
│   │   │   ├── projects.ts
│   │   │   ├── resumes.ts
│   │   │   └── team.ts
│   │   └── types/           # TypeScript interfaces & type definitions
│   ├── routes/
│   │   ├── api/             # API endpoints for dynamic data fetching
│   │   │   ├── project/[slug]/
│   │   │   └── resume/[slug]/
│   │   ├── project/[slug]/  # Detailed project showcase routes
│   │   ├── resume/[slug]/   # Individual member CV pages
│   │   ├── +layout.svelte   # Root app layout & persistent navigation
│   │   └── +page.svelte     # Homepage featuring the team showcase
│   ├── app.d.ts             # Global TypeScript environment definitions
│   └── app.html             # HTML template entry point
├── static/
│   ├── data/                # Raw JSON member datasets
│   └── image/               # Team member profile pictures and illustrations
├── .env.example             # Environment variable templates
├── package.json             # Dependencies and build scripts
└── svelte.config.js         # Framework & adapter configurations
