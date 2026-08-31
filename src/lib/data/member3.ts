import type { Member } from '$lib/types';

export const member3: Member = {
	id: 'rama-fajar-fadhillah',
	slug: 'rama-fajar-fadhillah',
	name: 'Rama Fajar Fadhillah, S.Kom',
	nickname: 'Rama',
	role: 'Fullstack Developer',
	discipline: 'fullstack',
	avatar:
		'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
	shortIntro:
		'Fullstack developer dengan pengalaman 2+ tahun dalam pengembangan web, backend, serta minat mendalam pada cybersecurity dan cloud infrastructure.',
	email: 'ramafajar805@gmail.com',
	location: 'Indonesia',
	github: 'https://github.com/nullsec45',
	linkedin: 'https://www.linkedin.com/in/ramarff/',
	yearsOfExperience: '2+',
	availability: 'Open for Opportunities',
	bio: 'Lulusan Sarjana Teknik Informatika dari STT Terpadu Nurul Fikri dengan IPK 3.76/4.00. Berpengalaman sebagai Web Engineer dan Backend Developer, terbiasa membangun scalable web apps dan API.',
	aboutMe: {
		introduction:
			'Saya adalah lulusan Sarjana Teknik Informatika dari STT Terpadu Nurul Fikri dengan IPK 3.76/4.00.',
		background:
			'Berpengalaman sebagai Web Engineer dan Backend Developer, terbiasa membangun scalable web apps dan API menggunakan PHP (Laravel, Codeigniter), TypeScript (NestJS, NextJS), Golang, serta mengelola infrastruktur berbasis Docker, Linux, Nginx, dan Kubernetes. Aktif mendalami bidang Cybersecurity (Penetration Testing, OSINT, ISO 27001).',
		interests: ['Web Development', 'Linux', 'Cybersecurity', 'Penetration Testing', 'OSINT'],
		goals:
			'Membangun sistem dan aplikasi backend yang aman, tangguh, scalable, serta mengintegrasikan praktik keamanan siber yang baik dalam setiap pengembangan.'
	},
	skills: {
		frontend: ['ReactJS', 'NextJS', 'TypeScript', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
		backend: ['PHP', 'Laravel', 'Codeigniter', 'Golang', 'NodeJS', 'NestJS'],
		database: ['MySQL', 'PostgreSQL', 'Redis', 'Prisma ORM'],
		tools: [
			'Docker',
			'Kubernetes',
			'AWS',
			'Linux',
			'Nginx',
			'Git',
			'GitLab',
			'Jenkins',
			'Apisix',
			'RabbitMQ'
		],
		devops: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'Nginx', 'Jenkins', 'Argo CD']
	},
	education: [
		{
			id: 'edu-1',
			institution: 'STT Terpadu Nurul Fikri, Depok',
			degree: 'Bachelor Degree in Informatics Engineering',
			major: 'Informatics Engineering',
			year: 'October 2021 - July 2025',
			gpa: '3.76/4.00'
		}
	],
	experience: [
		{
			id: 'exp-1',
			position: 'Backend Developer',
			role: 'Backend Developer',
			company: 'PT Lazio Teknologi Bersama',
			duration: 'Februari 2025 - Agustus 2025',
			period: 'Februari 2025 - Agustus 2025',
			description:
				'Mengembangkan backend Baiq Apps & Laz Core ERP, microservices (payment, notification, ziswaf, qurban, partnership), integrasi payment gateway Doku & Xendit, serta deployment menggunakan Argo CD dan Kubernetes.'
		},
		{
			id: 'exp-2',
			position: 'Backend Developer',
			role: 'Backend Developer',
			company: 'Wiseline (Freelance Remote)',
			duration: 'Januari 2024 - Desember 2024',
			period: 'Januari 2024 - Desember 2024',
			description:
				'Mengembangkan dan memelihara API, membuat dokumentasi API menggunakan OpenAPI Swagger, serta membangun unit testing dan integration testing dengan Jest dan Supertest.'
		},
		{
			id: 'exp-3',
			position: 'Web Engineer',
			role: 'Web Engineer',
			company: 'PT Ciptadra Softindo',
			duration: 'November 2022 - Desember 2024',
			period: 'November 2022 - Desember 2024',
			description:
				'Mengembangkan website klien menggunakan PHP (Laravel, CI), NodeJS, NextJS, melakukan pengamanan kode berbasis OWASP Top 10, penetration testing, serta manajemen database backup menggunakan Cron Job dan Bash.'
		}
	],
	projects: [
		{
			id: 'baiq-apps-laz-core',
			name: 'Baiq Apps & Laz Core ERP',
			title: 'Baiq Apps & Laz Core ERP',
			authorId: 'rama-fajar-fadhillah',
			shortDescription:
				'Pengembangan sistem microservices enterprise untuk layanan pembayaran, ziswaf, qurban, dan manajemen ERP.',
			description:
				'Pengembangan sistem microservices enterprise untuk layanan pembayaran, ziswaf, qurban, dan manajemen ERP.',
			category: 'Enterprise Web Application',
			duration: 'Feb 2025 - Agt 2025',
			status: 'Completed',
			technologies: ['PHP', 'Laravel', 'Golang', 'AWS RDS', 'AWS EC2', 'Kubernetes', 'Argo CD'],
			tags: ['PHP', 'Laravel', 'Golang', 'AWS RDS', 'AWS EC2', 'Kubernetes', 'Argo CD'],
			role: 'Backend Developer',
			contribution: [
				'Mengembangkan microservices mencakup payment, notification, ziswaf, qurban, dan partnership services.',
				'Mengintegrasikan Doku & Xendit payment gateways untuk sistem zakat, infaq, shadaqah, wakaf, dan qurban.',
				'Melakukan deployment service ke server menggunakan Argo CD dan Kubernetes.'
			],
			coverImage:
				'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
			screenshots: [
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
			],
			challenges: [
				{
					challenge:
						'Mengintegrasikan berbagai layanan pembayaran pihak ketiga dan menyelaraskan arsitektur microservices yang kompleks.',
					solution:
						'Menerapkan standarisasi versi semantik, dokumentasi API yang jelas, serta orkestrasi deployment otomatis dengan Argo CD dan K8s.'
				}
			],
			result:
				'Berhasil meluncurkan layanan digital zakat dan ERP yang terintegrasi secara aman dan scalable.',
			liveDemoUrl: 'https://www.ramafajar.my.id/projects',
			sourceCodeUrl: 'https://github.com/nullsec45',
			github: 'https://github.com/nullsec45'
		}
	],
	contact: {
		email: 'ramafajar805@gmail.com',
		github: 'https://github.com/nullsec45',
		linkedin: 'https://www.linkedin.com/in/ramarff/'
	},
	interests: ['Web Development', 'Linux', 'Cybersecurity', 'Penetration Testing', 'OSINT']
};
