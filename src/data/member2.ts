import type { Member } from '$lib/types';

export const member2: Member = {
	id: 'arimbi-dwi-syabillah',
	slug: 'arimbi-dwi-syabillah',
	name: 'Arimbi Dwi Syabillah',
	nickname: 'Arimbi',
	role: 'Senior Frontend & UI/UX Specialist',
	discipline: 'frontend',
	avatar:
		'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
	location: 'Surabaya, Indonesia',
	yearsOfExperience: 5,
	availability: 'Available for Projects',
	statusBadge: 'Design Lead',
	shortIntro:
		'Crafting pixel-perfect, accessible design systems, fluid micro-interactions, and high-performance frontends.',
	bio: 'Frontend engineer and design system architect with deep passion for human-centered digital experiences. Specialized in building atomic design systems, WCAG 2.1 AA accessible web applications, responsive Svelte 5 and Vue components, and frictionless user flows with motion orchestration.',
	skills: {
		frontend: [
			'Svelte 5 & Runes',
			'Tailwind CSS v4',
			'TypeScript',
			'Vue.js / Nuxt',
			'React',
			'CSS Architecture',
			'Framer Motion'
		],
		backend: ['Node.js', 'Express', 'Firebase Cloud Functions', 'RESTful APIs'],
		database: ['Firestore', 'Supabase', 'PostgreSQL'],
		devops: ['Vercel', 'Netlify', 'GitHub Actions CI', 'Cloudflare Pages'],
		tools: [
			'Figma (Tokens & Auto Layout)',
			'Storybook',
			'Chromatic',
			'Adobe XD',
			'PostCSS',
			'Lighthouse'
		]
	},
	experience: [
		{
			role: 'Lead UI/UX & Frontend Developer',
			company: 'PixelCraft Creative Studio',
			location: 'Surabaya, ID',
			period: '2022 — Present',
			description:
				'Designing and implementing scalable design token systems and frontend interfaces for fintech and healthtech clients.',
			highlights: [
				'Built a unified multi-brand design system with 65+ headless components, standardizing UI across 4 separate enterprise web products.',
				'Achieved 100/100 Lighthouse performance and accessibility scores across all core client portals.'
			],
			techUsed: ['SvelteKit', 'Tailwind CSS', 'Figma', 'TypeScript', 'Storybook']
		},
		{
			role: 'Frontend UI Engineer',
			company: 'Nusa Digital Mediatama',
			location: 'Malang, ID',
			period: '2020 — 2022',
			description:
				'Developed modern web applications and responsive interactive data visualization dashboards.',
			highlights: [
				'Coordinated with UX researchers to conduct usability testing sessions with over 180 active participants.',
				'Refactored legacy CSS architectures into modular utility systems, slashing style sheet payloads by 60%.'
			],
			techUsed: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'D3.js']
		}
	],
	education: [
		{
			degree: 'Bachelor of Informatics Engineering (S.Kom)',
			institution: 'Institut Teknologi Sepuluh Nopember (ITS)',
			year: '2016 — 2020',
			gpa: '3.91 / 4.00',
			notes:
				'Valedictorian nominee. Undergraduate research on Adaptive Design Systems for Cross-Device Web Applications.'
		}
	],
	projects: [
		{
			id: 'chroma-ui',
			title: 'Chroma Token-Driven Design System',
			description:
				'Comprehensive token-based component library engineered with Svelte 5, Tailwind CSS v4, and WCAG AA compliance.',
			tags: ['Svelte 5', 'Tailwind CSS', 'Figma Tokens', 'TypeScript'],
			github: 'https://github.com/arimbidwisyabillah/chroma-ui',
			featured: true,
			metrics: '60+ Headless UI Components'
		},
		{
			id: 'kanban-flow',
			title: 'KanbanFlow Agile Board',
			description:
				'Real-time collaborative task workspace featuring fluid drag-and-drop mechanics and dark/light system synchronization.',
			tags: ['SvelteKit', 'TypeScript', 'Supabase', 'Tailwind CSS'],
			github: 'https://github.com/arimbidwisyabillah/kanban-flow',
			featured: true,
			metrics: '60fps Drag & Drop'
		}
	],
	contact: {
		email: 'arimbidwisyabillah1304@gmail.com',
		github: 'https://github.com/arimbidwisyabillah',
		linkedin: 'https://linkedin.com/in/arimbi-dwi-syabillah',
		website: 'https://arimbi.dev'
	},
	languages: ['Bahasa Indonesia (Native)', 'English (Fluent Working)', 'Japanese (Conversational)'],
	interests: [
		'Typography & Kerning',
		'Generative Design',
		'Design Token Standards',
		'Digital Illustration'
	]
};
