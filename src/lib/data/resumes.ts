import type { ResumeData } from '$lib/types/resume';

export const RESUMES: ResumeData[] = [
	{
		slug: 'rama-fajar',
		name: 'Rama Fajar',
		title: 'Junior Fullstack Developer',
		avatarUrl: '/images/rama.jpg',
		address: 'DKI Jakarta, Indonesia',
		about: 'Passionate developer focusing on scalable web applications and security.',
		objectives: [
			'2+ years of experience working in web development',
			'Final year student in STT Terpadu Nurul Fikri',
			'Passionate in programming as backend engineer and start as a junior full stack developer',
			'Interest in programming, devops, and cyber security',
			'Currently learning CI/CD, Next.js, ISO 27001, and Blockchain.'
		],
		links: [
			{ id: 'github', name: 'GitHub', url: 'https://github.com' },
			{ id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com' },
			{ id: 'instagram', name: 'Instagram', url: 'https://instagram.com' }
		],
		workExperiences: [
			{
				id: 1,
				companyName: 'PT Ciptadra Softindo',
				location: 'Depok, West Java',
				years: '2022 - 2024',
				roles: 'Web Developer',
				jobDesc: [
					'Developing client websites using PHP, Laravel, CI, and NextJS.',
					'Maintenance and scalable client websites.',
					'Automating database and asset backups using Cron Job & Bash.',
					'Deploying applications to client servers.',
					'Fixing security vulnerabilities & penetration testing.'
				],
				type: 'Onsite'
			},
			{
				id: 2,
				companyName: 'Wiseline',
				years: 'Jan 2024 - Dec 2024',
				roles: 'Backend Engineer',
				jobDesc: ['Developed high performance REST APIs.', 'Created unit and integration testing.'],
				type: 'Remote'
			}
		],
		educations: [
			{
				id: 1,
				title: 'Informatics Engineering',
				schoolName: 'STT Terpadu Nurul Fikri',
				location: 'South Jakarta',
				years: '2021 - Present'
			},
			{
				id: 2,
				title: 'Senior High School',
				schoolName: 'SMKN 16 Jakarta',
				location: 'Central Jakarta',
				years: '2018 - 2021'
			}
		],
		additionalActivities: [
			{
				type: 'Community',
				activities: [
					'Member of Anon Cyber Team',
					'Organizer at IPV1 Community',
					'Frontend Speaker at GDGoC STT Terpadu Nurul Fikri'
				]
			}
		],
		skills: [
			{ type: 'Frontend', tools: ['Svelte', 'React', 'Next.js', 'TailwindCSS'] },
			{ type: 'Backend', tools: ['Node.js', 'NestJS', 'PHP', 'Laravel'] },
			{ type: 'Database', tools: ['PostgreSQL', 'MySQL', 'Redis'] },
			{ type: 'Others', tools: ['TypeScript', 'Docker', 'Nginx', 'Git'] }
		],
		projects: [
			{
				slug: 'campus-accreditation',
				category: 'ENTERPRISE WEB APPLICATION',
				title: 'Campus Accreditation System',
				status: 'Completed',
				description:
					'An enterprise-grade web application for university accreditation compliance, audit management, and automated document generation.',
				imageThumbnail: '/images/projects/campus.jpg',
				role: 'Full Stack Architect & Database Designer',
				techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
				duration: '6 Months'
			},
			{
				slug: 'campuss-accreditation1',
				category: 'ENTERPRISE WEB APPLICATION',
				title: 'Campus Accreditation System',
				status: 'Completed',
				description:
					'An enterprise-grade web application for university accreditation compliance, audit management, and automated document generation.',
				imageThumbnail: '/images/projects/campus.jpg',
				role: 'Full Stack Architect & Database Designer',
				techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
				duration: '6 Months'
			},
			{
				slug: 'smart-energy-grid',
				category: 'INDUSTRIAL IOT DASHBOARD',
				title: 'Smart Energy Grid Monitor',
				status: 'Beta',
				description:
					'Real-time telemetry and management portal for industrial electrical distribution networks, highlighting anomalous consumption.',
				imageThumbnail: '/images/projects/energy.jpg',
				role: 'Backend & Telemetry Pipeline Developer',
				techStack: ['React', 'Node.js', 'TimescaleDB', 'Tailwind CSS', 'MQTT'],
				duration: '4 Months'
			}
		]
	},
	// 4 profil mock lainnya
	{
		slug: 'valen-aditya',
		name: 'Valen Aditya',
		title: 'Senior Frontend Engineer',
		avatarUrl: '/images/placeholder.jpg',
		address: 'Bandung, Indonesia',
		about: 'Frontend mentor and UI performance specialist.',
		objectives: ['5+ years modern JS framework specialist', 'Design system architect'],
		links: [{ id: 'github', name: 'GitHub', url: '#' }],
		workExperiences: [
			{
				id: 1,
				companyName: 'Tech Corp',
				years: '2020 - Present',
				roles: 'Lead UI',
				jobDesc: ['Architecting frontend codebase'],
				type: 'Hybrid'
			}
		],
		educations: [
			{
				id: 1,
				title: 'Computer Science',
				schoolName: 'ITB',
				location: 'Bandung',
				years: '2016 - 2020'
			}
		],
		additionalActivities: [
			{ type: 'Mentorship', activities: ['Mentoring 100+ students in frontend fundamentals'] }
		],
		skills: [{ type: 'Frontend', tools: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Vite'] }],
		projects: [
			{
				slug: 'campus-accreditation',
				category: 'ENTERPRISE WEB APPLICATION',
				title: 'Campus Accreditation System',
				status: 'Completed',
				description:
					'An enterprise-grade web application for university accreditation compliance, audit management, and automated document generation.',
				imageThumbnail: '/images/projects/campus.jpg',
				role: 'Full Stack Architect & Database Designer',
				techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
				duration: '6 Months'
			},
			{
				slug: 'smart-energy-grid',
				category: 'INDUSTRIAL IOT DASHBOARD',
				title: 'Smart Energy Grid Monitor',
				status: 'Beta',
				description:
					'Real-time telemetry and management portal for industrial electrical distribution networks, highlighting anomalous consumption.',
				imageThumbnail: '/images/projects/energy.jpg',
				role: 'Backend & Telemetry Pipeline Developer',
				techStack: ['React', 'Node.js', 'TimescaleDB', 'Tailwind CSS', 'MQTT'],
				duration: '4 Months'
			}
		]
	},
	{
		slug: 'sarah-amanda',
		name: 'Sarah Amanda',
		title: 'UI/UX Designer & Dev',
		avatarUrl: '/images/placeholder.jpg',
		address: 'Surabaya, Indonesia',
		about: 'Bridging aesthetics and code.',
		objectives: ['Focused on accessible UI and component-based workflows'],
		links: [{ id: 'linkedin', name: 'LinkedIn', url: '#' }],
		workExperiences: [],
		educations: [],
		additionalActivities: [],
		skills: [{ type: 'Design & Code', tools: ['Figma', 'TailwindCSS', 'HTML/CSS Semantics'] }],
		projects: [
			{
				slug: 'campus-accreditation',
				category: 'ENTERPRISE WEB APPLICATION',
				title: 'Campus Accreditation System',
				status: 'Completed',
				description:
					'An enterprise-grade web application for university accreditation compliance, audit management, and automated document generation.',
				imageThumbnail: '/images/projects/campus.jpg',
				role: 'Full Stack Architect & Database Designer',
				techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
				duration: '6 Months'
			},
			{
				slug: 'smart-energy-grid',
				category: 'INDUSTRIAL IOT DASHBOARD',
				title: 'Smart Energy Grid Monitor',
				status: 'Beta',
				description:
					'Real-time telemetry and management portal for industrial electrical distribution networks, highlighting anomalous consumption.',
				imageThumbnail: '/images/projects/energy.jpg',
				role: 'Backend & Telemetry Pipeline Developer',
				techStack: ['React', 'Node.js', 'TimescaleDB', 'Tailwind CSS', 'MQTT'],
				duration: '4 Months'
			}
		]
	},
	{
		slug: 'budi-santoso',
		name: 'Budi Santoso',
		title: 'Cloud & DevOps Specialist',
		avatarUrl: '/images/placeholder.jpg',
		address: 'Yogyakarta, Indonesia',
		about: 'Automation and CI/CD enthusiast.',
		objectives: ['Ensuring high availability and secure deployment pipelines'],
		links: [{ id: 'github', name: 'GitHub', url: '#' }],
		workExperiences: [],
		educations: [],
		additionalActivities: [],
		skills: [{ type: 'DevOps', tools: ['Docker', 'Kubernetes', 'Linux', 'CI/CD'] }],
		projects: [
			{
				slug: 'campus-accreditation',
				category: 'ENTERPRISE WEB APPLICATION',
				title: 'Campus Accreditation System',
				status: 'Completed',
				description:
					'An enterprise-grade web application for university accreditation compliance, audit management, and automated document generation.',
				imageThumbnail: '/images/projects/campus.jpg',
				role: 'Full Stack Architect & Database Designer',
				techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
				duration: '6 Months'
			},
			{
				slug: 'smart-energy-grid',
				category: 'INDUSTRIAL IOT DASHBOARD',
				title: 'Smart Energy Grid Monitor',
				status: 'Beta',
				description:
					'Real-time telemetry and management portal for industrial electrical distribution networks, highlighting anomalous consumption.',
				imageThumbnail: '/images/projects/energy.jpg',
				role: 'Backend & Telemetry Pipeline Developer',
				techStack: ['React', 'Node.js', 'TimescaleDB', 'Tailwind CSS', 'MQTT'],
				duration: '4 Months'
			}
		]
	},
	{
		slug: 'dina-lestari',
		name: 'Dina Lestari',
		title: 'Data Analyst',
		avatarUrl: '/images/placeholder.jpg',
		address: 'Jakarta, Indonesia',
		about: 'Turning raw metrics into actionable business intelligence.',
		objectives: ['Proficient in SQL optimization, business reporting, and ETL workflows'],
		links: [{ id: 'linkedin', name: 'LinkedIn', url: '#' }],
		workExperiences: [],
		educations: [],
		additionalActivities: [],
		skills: [{ type: 'Analytics', tools: ['SQL', 'PostgreSQL', 'Python', 'Tableau'] }],
		projects: [
			{
				slug: 'campus-accreditation',
				category: 'ENTERPRISE WEB APPLICATION',
				title: 'Campus Accreditation System',
				status: 'Completed',
				description:
					'An enterprise-grade web application for university accreditation compliance, audit management, and automated document generation.',
				imageThumbnail: '/images/projects/campus.jpg',
				role: 'Full Stack Architect & Database Designer',
				techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
				duration: '6 Months'
			},
			{
				slug: 'smart-energy-grid',
				category: 'INDUSTRIAL IOT DASHBOARD',
				title: 'Smart Energy Grid Monitor',
				status: 'Beta',
				description:
					'Real-time telemetry and management portal for industrial electrical distribution networks, highlighting anomalous consumption.',
				imageThumbnail: '/images/projects/energy.jpg',
				role: 'Backend & Telemetry Pipeline Developer',
				techStack: ['React', 'Node.js', 'TimescaleDB', 'Tailwind CSS', 'MQTT'],
				duration: '4 Months'
			}
		]
	}
];
