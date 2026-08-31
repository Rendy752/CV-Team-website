import type { Member } from '$lib/types';

export const member4: Member = {
	id: 'najwan',
	slug: 'najwan-zaky',
	name: 'Najwan Zaky',
	nickname: 'Najwan',
	role: 'Full Stack Developer',
	discipline: 'fullstack',
	avatar:
		'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
	shortIntro:
		'Full Stack Developer berpengalaman dalam membangun RESTful API, arsitektur database, dan antarmuka web yang andal.',
	email: 'najwanzaky21@gmail.com',
	location: 'Bandung, Jawa Barat',
	github: 'https://github.com/najwanzaky',
	linkedin: 'https://linkedin.com/in/najwan-zaky',
	yearsOfExperience: '2+',
	availability: 'Open for Opportunities',
	bio: 'Lulusan Teknik Informatika yang memiliki minat dan pengalaman mendalam di bidang pengembangan web, khususnya sebagai Backend dan Full Stack Developer.',
	aboutMe: {
		introduction:
			'Saya adalah lulusan Teknik Informatika yang memiliki minat dan pengalaman mendalam di bidang pengembangan web, khususnya sebagai Backend dan Full Stack Developer.',
		background:
			'Terbiasa membangun RESTful API menggunakan Golang, Laravel, dan PostgreSQL, serta mengembangkan antarmuka web menggunakan React.js, Vue.js, dan Nuxt.js. Berpengalaman dalam implementasi autentikasi, manajemen role & permission (RBAC), serta optimasi database.',
		interests: [
			'Systems Architecture',
			'Relational Databases',
			'Backend Performance',
			'Open Source Contribution'
		],
		goals:
			'Membangun aplikasi end-to-end yang clean, maintainable, dan memberikan solusi nyata yang scalable bagi kebutuhan bisnis maupun publik.'
	},
	skills: {
		frontend: ['React.js', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'TypeScript'],
		backend: ['Golang', 'Laravel', 'Node.js', 'PHP', 'Java'],
		database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
		tools: ['Git', 'GitHub', 'Figma', 'Docker', 'Postman', 'Keycloak'],
		devops: ['Docker', 'Git', 'GitHub', 'Keycloak']
	},
	education: [
		{
			id: 'edu-1',
			institution: 'Politeknik Negeri Bandung',
			degree: 'Diploma / Sarjana Terapan',
			major: 'Teknik Informatika',
			year: '2022 - 2025'
		}
	],
	experience: [
		{
			id: 'exp-1',
			position: 'Full Stack Developer',
			role: 'Full Stack Developer',
			company: 'PT Tabel Data Informatika',
			duration: 'Des 2025 - Jun 2026',
			period: 'Des 2025 - Jun 2026',
			description:
				'Bertanggung jawab membangun dan memelihara aplikasi web menggunakan React, Golang, dan PostgreSQL. Menangani pengembangan RESTful API, integrasi Keycloak, penerapan RBAC, serta optimasi database.'
		},
		{
			id: 'exp-2',
			position: 'Full Stack Developer Intern',
			role: 'Full Stack Developer Intern',
			company: 'Jubelo',
			duration: 'Jun 2024 - Okt 2024',
			period: 'Jun 2024 - Okt 2024',
			description:
				'Mengimplementasikan antarmuka pengguna frontend menggunakan Vue.js dan mengembangkan backend RESTful API dengan Laravel serta MySQL untuk sistem internal Jubelo, serta mengintegrasikannya secara mulus.'
		}
	],
	projects: [
		{
			id: 'digital-village-system',
			name: 'Website Desa Digital (BuildWithAngga)',
			title: 'Website Desa Digital (BuildWithAngga)',
			authorId: 'najwan-zaky',
			shortDescription:
				'Aplikasi administrasi desa berbasis Laravel dan Vue.js dengan integrasi Midtrans payment gateway untuk layanan warga.',
			description:
				'Aplikasi administrasi desa berbasis Laravel dan Vue.js dengan integrasi Midtrans payment gateway untuk layanan warga.',
			category: 'Enterprise Web Application',
			duration: 'Ongoing / 2025',
			status: 'Completed',
			technologies: ['Laravel', 'Vue.js', 'MySQL', 'Midtrans API', 'Tailwind CSS'],
			tags: ['Laravel', 'Vue.js', 'MySQL', 'Midtrans API', 'Tailwind CSS'],
			role: 'Full Stack Developer',
			contribution: [
				'Membangun sistem backend dan frontend interaktif untuk pengelolaan data warga, bantuan sosial, acara, dan layanan desa.',
				'Mengintegrasikan Midtrans sebagai payment gateway untuk transaksi digital.',
				'Mengatur manajemen database MySQL secara terstruktur untuk efisiensi data administrasi.'
			],
			coverImage:
				'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
			screenshots: [
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
			],
			challenges: [
				{
					challenge:
						'Menghubungkan sistem pembayaran pihak ketiga secara aman dan real-time ke dalam modul layanan warga.',
					solution:
						'Mengimplementasikan webhook handler Midtrans yang tervalidasi dengan baik di dalam backend Laravel.'
				}
			],
			result:
				'Berhasil menciptakan platform digital yang mempermudah pengelolaan administrasi desa secara transparan dan efisien.',
			liveDemoUrl:
				'https://drive.google.com/file/d/1oJZz7roUtfxuDKQrAFhY7ErNUu2jdT4M/view?usp=sharing',
			sourceCodeUrl: 'https://github.com/najwanzaky',
			github: 'https://github.com/najwanzaky'
		},
		{
			id: 'campus-accreditation-system',
			name: 'Campus Accreditation System',
			title: 'Campus Accreditation System',
			authorId: 'najwan-zaky',
			shortDescription:
				'Sistem aplikasi web tingkat enterprise untuk kepatuhan akreditasi universitas dan manajemen audit dokumen otomatis.',
			description:
				'Sistem aplikasi web tingkat enterprise untuk kepatuhan akreditasi universitas dan manajemen audit dokumen otomatis.',
			category: 'Enterprise Web Application',
			duration: '6 Bulan',
			status: 'Completed',
			technologies: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
			tags: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
			role: 'Full Stack Architect & Database Designer',
			contribution: [
				'Merancang skema SQL dan constraint database untuk 45+ tabel relasional di PostgreSQL.',
				'Mengembangkan endpoint RESTful API lengkap di Laravel dengan autentikasi token.',
				'Membuat tabel interaktif dinamis, form review multi-langkah, dan pembuatan dokumen performa tinggi.'
			],
			coverImage:
				'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
			screenshots: [
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
			],
			challenges: [
				{
					challenge:
						'Mengelola kepatuhan dokumen akreditasi yang besar agar tidak lambat saat diakses.',
					solution:
						'Mendesain asynchronous jobs queue dengan background workers dan centralized PostgreSQL storage.'
				}
			],
			result:
				'Mempercepat waktu kompilasi audit akreditasi dari 12 minggu menjadi di bawah 3 minggu.',
			liveDemoUrl: 'https://demo.campus-accred.example.com',
			sourceCodeUrl: 'https://github.com/najwanzaky/campus-accreditation-system',
			github: 'https://github.com/najwanzaky/campus-accreditation-system'
		}
	],
	contact: {
		email: 'najwanzaky21@gmail.com',
		github: 'https://github.com/najwanzaky',
		linkedin: 'https://linkedin.com/in/najwan-zaky'
	},
	interests: [
		'Systems Architecture',
		'Relational Databases',
		'Backend Performance',
		'Open Source Contribution'
	]
};
