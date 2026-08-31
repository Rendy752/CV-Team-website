import type { Member } from '$lib/types';

export const member1: Member = {
	id: 'haikal-assegaf',
	slug: 'haikal-assegaf',
	name: 'Haikal Assegaf',
	nickname: 'Haikal',
	role: 'Full Stack Architect & Technical Lead',
	discipline: 'lead',
	avatar:
		'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
	location: 'Jakarta, Indonesia',
	yearsOfExperience: 6,
	availability: 'Lead on Active Sprint',
	statusBadge: 'Pod Lead',
	shortIntro:
		'Architecting high-throughput distributed backends, SvelteKit web systems, and cloud-native infrastructure.',
	bio: 'Software architect with over 6 years of experience driving engineering teams across fintech, enterprise SaaS, and distributed systems. Expert in designing decoupled microservices, optimizing server-rendered frontend performance with SvelteKit & TypeScript, and implementing zero-downtime CI/CD deployment pipelines on GCP and Kubernetes.',
	skills: {
		frontend: [
			'Svelte / SvelteKit',
			'TypeScript',
			'Tailwind CSS',
			'Next.js',
			'WebSockets',
			'HTML5 / CSS3'
		],
		backend: ['Go (Golang)', 'Node.js', 'NestJS', 'gRPC', 'GraphQL', 'REST Architecture'],
		database: ['PostgreSQL', 'Redis Cluster', 'MongoDB', 'Supabase'],
		devops: ['Docker', 'Kubernetes', 'Google Cloud Platform (GCP)', 'GitHub Actions', 'Terraform'],
		tools: ['Git', 'Vite', 'Postman', 'Figma', 'Linux / Bash', 'Prometheus']
	},
	experience: [
		{
			role: 'Lead Full Stack Architect',
			company: 'Nusantara Tech Hub',
			location: 'Jakarta, ID',
			period: '2023 — Present',
			description:
				'Leading a core squad of 6 engineers building an enterprise SaaS platform with SvelteKit, Go microservices, and GCP.',
			highlights: [
				'Reduced initial bundle load latency by 42% by migrating legacy workflows to SvelteKit SSR and streaming responses.',
				'Architected an event-driven notification engine handling 2M+ daily events with Redis Streams and WebSocket workers.'
			],
			techUsed: ['SvelteKit', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'GCP']
		},
		{
			role: 'Senior Backend Engineer',
			company: 'Artha Digital Solusindo',
			location: 'Bandung, ID',
			period: '2021 — 2023',
			description:
				'Engineered high-throughput financial payment gateways and automated settlement reconciliation services.',
			highlights: [
				'Maintained 99.99% uptime for core financial reconciliation endpoints during peak transaction campaigns.',
				'Designed automated CI/CD deployment pipelines reducing build times from 45 minutes to under 4 minutes.'
			],
			techUsed: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes']
		},
		{
			role: 'Full Stack Software Developer',
			company: 'Pratama Solusi Global',
			location: 'Jakarta, ID',
			period: '2019 — 2021',
			description:
				'Developed full stack web portals and dashboard analytics for enterprise banking clients.',
			highlights: [
				'Implemented role-based access control (RBAC) security for 50k+ daily enterprise users.',
				'Integrated third-party banking APIs and real-time ledger accounting.'
			],
			techUsed: ['React', 'Node.js', 'Express', 'MySQL']
		}
	],
	education: [
		{
			degree: 'Bachelor of Computer Science (S.Kom)',
			institution: 'Universitas Indonesia',
			year: '2015 — 2019',
			gpa: '3.86 / 4.00',
			notes:
				'Focus on Distributed Systems and Software Architecture. Graduated with Magna Cum Laude honors.'
		}
	],
	projects: [
		{
			id: 'cloud-vault',
			title: 'CloudVault Identity & Key Management',
			description:
				'Zero-trust distributed key management service with automated cryptographic key rotation and telemetry dashboards.',
			tags: ['Go', 'TypeScript', 'PostgreSQL', 'Docker', 'Security'],
			github: 'https://github.com/haikalassegaf/cloud-vault',
			featured: true,
			metrics: 'Sub-5ms Key Lookup'
		},
		{
			id: 'svelte-flux',
			title: 'SvelteFlux State Orchestrator',
			description:
				'Lightweight reactive state management library designed specifically for Svelte 5 Runes architecture.',
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'NPM Package'],
			github: 'https://github.com/haikalassegaf/svelte-flux',
			featured: true,
			metrics: '2.1kb Gzipped'
		}
	],
	contact: {
		email: 'haikal.assegaf@example.com',
		github: 'https://github.com/haikalassegaf',
		linkedin: 'https://linkedin.com/in/haikalassegaf',
		website: 'https://haikal.dev'
	},
	languages: ['Bahasa Indonesia (Native)', 'English (Professional Working)'],
	interests: ['Distributed Systems', 'Compiler Design', 'System Architecture', 'Road Cycling']
};
