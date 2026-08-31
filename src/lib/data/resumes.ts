import type { ResumeData } from '$lib/types/resume';

export const RESUMES: ResumeData[] = [
	{
		slug: 'arimbi-dwi-syabillah',
		name: 'Arimbi Dwi Syabillah',
		title: 'IoT & AI Engineer / Junior Developer',
		avatarUrl:
			'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
		address: 'Indonesia',
		about:
			'Lulusan D3 Teknologi Telekomunikasi Telkom University dengan minat dan fokus pada pengembangan sistem berbasis Internet of Things (IoT), kecerdasan buatan (AI), dan jaringan komunikasi.',
		objectives: [
			'Lulusan D3 Teknologi Telekomunikasi di Telkom University',
			'Memiliki pengalaman sebagai intern junior engineer di industri pertambangan',
			'Fokus pada IoT, Artificial Intelligence, dan Computer Vision',
			'Mengintegrasikan AI dan IoT untuk menciptakan solusi inovatif dan adaptif'
		],
		links: [
			{ id: 'github', name: 'GitHub', url: 'https://github.com/' },
			{
				id: 'linkedin',
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/arimbidwisyabillah'
			}
		],
		workExperiences: [
			{
				id: 1,
				companyName: 'Bandung Techno Park, Smart Grow Lab Telkom University',
				years: 'Juli 2025 - Juli 2026',
				roles: 'Internship Junior Engineering',
				jobDesc: [
					'Berkontribusi dalam penelitian klasifikasi daun menggunakan MobileNetV2, YOLOv8, dan YOLOv11.',
					'Pengembangan dashboard rantai pasok dan keuangan komunitas agri.',
					'Sistem mitigasi banjir IoT dan AI.',
					'Rancangan sistem IoT pemantau sampah portabel.'
				]
			},
			{
				id: 2,
				companyName: 'PT. Satria Bahana Sarana (Departemen LPT)',
				years: 'Desember 2022 - Maret 2023',
				roles: 'Internship Junior Engineering',
				jobDesc: [
					'Membantu pemantauan dan perawatan peralatan tambang.',
					'Pemilihan teknologi efisiensi operasional.',
					'Pemantauan kualitas lingkungan di sekitar area tambang.'
				]
			},
			{
				id: 3,
				companyName: 'PT. Satria Bahana Sarana (Departemen PKPP)',
				years: 'November 2022 - Desember 2022',
				roles: 'Internship Junior Engineering',
				jobDesc: [
					'Mendukung perencanaan dan pelaksanaan proyek produksi.',
					'Menganalisis data produksi untuk meningkatkan efisiensi dan kinerja.'
				]
			},
			{
				id: 4,
				companyName: 'PT. Satria Bahana Sarana (Departemen K3L)',
				years: 'Oktober 2022 - November 2022',
				roles: 'Internship Junior Engineering',
				jobDesc: [
					'Mengembangkan program K3 di lokasi tambang.',
					'Melakukan inspeksi rutin untuk mengidentifikasi potensi bahaya serta mengurangi risiko kecelakaan.'
				]
			}
		],
		educations: [
			{
				id: 1,
				title: 'Diploma 3 (D3) Teknologi Telekomunikasi',
				schoolName: 'Telkom University',
				years: '2023 - 2026'
			},
			{
				id: 2,
				title: 'Geologi Pertambangan',
				schoolName: 'SMK Bukit Asam',
				years: '2019 - 2023'
			}
		],
		additionalActivities: [],
		skills: [
			{ type: 'Frontend', tools: ['HTML', 'CSS', 'JavaScript'] },
			{ type: 'Backend', tools: ['Python', 'Java', 'Node.js', 'Django', 'PHP (Basic)'] },
			{ type: 'Database', tools: ['MySQL', 'PostgreSQL (Basic)'] },
			{
				type: 'Tools & Hardware',
				tools: [
					'Arduino',
					'ESP8266',
					'ESP32',
					'TensorFlow/Keras',
					'YOLOv8',
					'OpenCV',
					'Git',
					'Docker (Basic)',
					'AWS (Basic)'
				]
			}
		],
		projects: [
			{
				slug: 'iot-hydroponic-fuzzy',
				category: 'IoT & Automation',
				title:
					'IoT Based Fuzzy Logic System for Nutrient and Light Control in Indoor Hydroponic',
				status: 'Completed',
				description:
					'Sistem kendali nutrisi dan pencahayaan hidroponik indoor berbasis IoT menggunakan logika fuzzy.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800',
				role: 'IoT Researcher & Developer',
				techStack: ['IoT', 'Arduino/ESP32', 'Fuzzy Logic', 'MQTT', 'REST API'],
				duration: '2026'
			},
			{
				slug: 'smart-grow-lab-projects',
				category: 'AI & IoT Research',
				title: 'Smart Grow Lab Research & Community Projects',
				status: 'Completed',
				description:
					'Kumpulan proyek riset computer vision (YOLOv8/v11) dan sistem mitigasi banjir berbasis IoT.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
				role: 'Researcher & Developer',
				techStack: ['YOLOv8', 'YOLOv11', 'Python', 'TensorFlow', 'IoT Sensors'],
				duration: '2025 - 2026'
			}
		]
	},
	{
		slug: 'rama-fajar-fadhillah',
		name: 'Rama Fajar Fadhillah, S.Kom',
		title: 'Fullstack Developer',
		avatarUrl:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
		address: 'Indonesia',
		about:
			'Fullstack developer dengan pengalaman 2+ tahun dalam pengembangan web, backend, serta minat mendalam pada cybersecurity dan cloud infrastructure.',
		objectives: [
			'Lulusan Sarjana Teknik Informatika dari STT Terpadu Nurul Fikri (IPK 3.76/4.00)',
			'2+ tahun pengalaman dalam pengembangan web dan backend',
			'Terbiasa membangun scalable web apps dan REST API',
			'Fokus pada Web Development, Linux, Cybersecurity, Penetration Testing, dan OSINT'
		],
		links: [
			{ id: 'github', name: 'GitHub', url: 'https://github.com/nullsec45' },
			{ id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/ramarff/' }
		],
		workExperiences: [
			{
				id: 1,
				companyName: 'PT Lazio Teknologi Bersama',
				years: 'Februari 2025 - Agustus 2025',
				roles: 'Backend Developer',
				jobDesc: [
					'Mengembangkan backend Baiq Apps & Laz Core ERP dan microservices (payment, notification, ziswaf, qurban, partnership).',
					'Integrasi payment gateway Doku & Xendit.',
					'Deployment menggunakan Argo CD dan Kubernetes.'
				]
			},
			{
				id: 2,
				companyName: 'Wiseline',
				years: 'Januari 2024 - Desember 2024',
				roles: 'Backend Developer (Freelance Remote)',
				jobDesc: [
					'Mengembangkan dan memelihara API.',
					'Membuat dokumentasi API menggunakan OpenAPI Swagger.',
					'Membangun unit testing dan integration testing dengan Jest dan Supertest.'
				],
				type: 'Remote'
			},
			{
				id: 3,
				companyName: 'PT Ciptadra Softindo',
				years: 'November 2022 - Desember 2024',
				roles: 'Web Engineer',
				jobDesc: [
					'Mengembangkan website klien menggunakan PHP (Laravel, CI), NodeJS, NextJS.',
					'Melakukan pengamanan kode berbasis OWASP Top 10 dan penetration testing.',
					'Manajemen database backup menggunakan Cron Job dan Bash.'
				]
			}
		],
		educations: [
			{
				id: 1,
				title: 'Bachelor Degree in Informatics Engineering',
				schoolName: 'STT Terpadu Nurul Fikri, Depok',
				years: 'October 2021 - July 2025'
			}
		],
		additionalActivities: [],
		skills: [
			{
				type: 'Frontend',
				tools: ['ReactJS', 'NextJS', 'TypeScript', 'JavaScript', 'Bootstrap', 'Tailwind CSS']
			},
			{
				type: 'Backend',
				tools: ['PHP', 'Laravel', 'Codeigniter', 'Golang', 'NodeJS', 'NestJS']
			},
			{
				type: 'Database',
				tools: ['MySQL', 'PostgreSQL', 'Redis', 'Prisma ORM']
			},
			{
				type: 'Tools & DevOps',
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
				]
			}
		],
		projects: [
			{
				slug: 'baiq-apps-laz-core',
				category: 'Enterprise Web Application',
				title: 'Baiq Apps & Laz Core ERP',
				status: 'Completed',
				description:
					'Pengembangan sistem microservices enterprise untuk layanan pembayaran, ziswaf, qurban, dan manajemen ERP.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
				role: 'Backend Developer',
				techStack: [
					'PHP',
					'Laravel',
					'Golang',
					'AWS RDS',
					'AWS EC2',
					'Kubernetes',
					'Argo CD'
				],
				duration: 'Feb 2025 - Agt 2025'
			}
		]
	},
	{
		slug: 'muhammad-haikal-ali',
		name: 'Muhammad Haikal Ali',
		title: 'Fullstack Developer',
		avatarUrl:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
		address: 'Semarang, Indonesia',
		about:
			'Lulusan Ilmu Komputer Universitas Diponegoro dengan pengalaman sebagai Fullstack Developer dan keahlian dalam machine learning serta pengembangan web.',
		objectives: [
			'Lulusan Sarjana Ilmu Komputer dari Universitas Diponegoro (IPK 3.54/4.00)',
			'Fokus pada Fullstack Development, Machine Learning, dan deteksi phishing',
			'Pengalaman mengembangkan solusi berbasis PHP, Laravel, dan Python',
			'Mengembangkan solusi perangkat lunak yang aman, efisien, dan berdampak nyata'
		],
		links: [
			{ id: 'github', name: 'GitHub', url: 'https://github.com/haikalassegaf' },
			{ id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/haikalali12' }
		],
		workExperiences: [
			{
				id: 1,
				companyName: 'PT Bank Syariah Indonesia',
				years: 'Januari 2024 - Februari 2024',
				roles: 'Fullstack Developer',
				jobDesc: [
					'Mengembangkan aplikasi web Level 1 Evaluation yang berfokus pada manajemen surat, input, dan output menggunakan PHP dan Laravel untuk antarmuka frontend serta pengaturan routing aplikasi.'
				]
			}
		],
		educations: [
			{
				id: 1,
				title: 'Bachelor in Computer Science (IPK: 3.54/4.00)',
				schoolName: 'Diponegoro University',
				years: '2021 - 2026'
			},
			{
				id: 2,
				title: 'High School Diploma (Natural Science and Mathematics)',
				schoolName: 'Semarang 9 High School',
				years: '2018 - 2021'
			}
		],
		additionalActivities: [],
		skills: [
			{ type: 'Frontend', tools: ['HTML', 'JavaScript', 'Flutter'] },
			{ type: 'Backend', tools: ['PHP', 'Laravel', 'Node.Js', 'Python'] },
			{ type: 'Database', tools: ['MySQL'] },
			{ type: 'Tools', tools: ['Google Cloud Platform', 'PostMan', 'C', 'C++'] }
		],
		projects: [
			{
				slug: 'phishing-email-classification',
				category: 'Machine Learning & Security',
				title: 'Knowledge Management System & Phishing Detection Dashboard',
				status: 'Completed',
				description:
					'Dashboard klasifikasi email berbasis machine learning untuk otomatisasi deteksi phishing dan analisis performa model.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
				role: 'Researcher & Developer',
				techStack: ['Python', 'Machine Learning', 'GUI', 'Data Evaluation'],
				duration: '2025 - 2026'
			},
			{
				slug: 'undip-community-service',
				category: 'Web Application',
				title: 'Diponegoro University Community Service Village Profile',
				status: 'Completed',
				description:
					'Aplikasi web Profil Desa berbasis WordPress untuk digitalisasi informasi komunitas dan layanan administrasi.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
				role: 'Web Developer',
				techStack: ['WordPress', 'PHP', 'HTML', 'CMS'],
				duration: '2025'
			}
		]
	},
	{
		slug: 'najwan-zaky',
		name: 'Najwan Zaky',
		title: 'Full Stack Developer',
		avatarUrl:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
		address: 'Bandung, Jawa Barat',
		about:
			'Full Stack Developer berpengalaman dalam membangun RESTful API, arsitektur database, dan antarmuka web yang andal.',
		objectives: [
			'Lulusan Teknik Informatika Politeknik Negeri Bandung',
			'Keahlian dalam Golang, Laravel, PostgreSQL, React.js, dan Vue.js',
			'Berpengalaman dalam implementasi autentikasi, RBAC, dan optimasi database',
			'Fokus pada arsitektur sistem, database relasional, dan performa backend'
		],
		links: [
			{ id: 'github', name: 'GitHub', url: 'https://github.com/najwanzaky' },
			{ id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/najwan-zaky' }
		],
		workExperiences: [
			{
				id: 1,
				companyName: 'PT Tabel Data Informatika',
				years: 'Des 2025 - Jun 2026',
				roles: 'Full Stack Developer',
				jobDesc: [
					'Bertanggung jawab membangun dan memelihara aplikasi web menggunakan React, Golang, dan PostgreSQL.',
					'Menangani pengembangan RESTful API, integrasi Keycloak, penerapan RBAC, serta optimasi database.'
				]
			},
			{
				id: 2,
				companyName: 'Jubelo',
				years: 'Jun 2024 - Okt 2024',
				roles: 'Full Stack Developer Intern',
				jobDesc: [
					'Mengimplementasikan antarmuka pengguna frontend menggunakan Vue.js.',
					'Mengembangkan backend RESTful API dengan Laravel serta MySQL untuk sistem internal Jubelo.'
				]
			}
		],
		educations: [
			{
				id: 1,
				title: 'Diploma / Sarjana Terapan Teknik Informatika',
				schoolName: 'Politeknik Negeri Bandung',
				years: '2022 - 2025'
			}
		],
		additionalActivities: [],
		skills: [
			{
				type: 'Frontend',
				tools: ['React.js', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'TypeScript']
			},
			{ type: 'Backend', tools: ['Golang', 'Laravel', 'Node.js', 'PHP', 'Java'] },
			{ type: 'Database', tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
			{ type: 'Tools', tools: ['Git', 'GitHub', 'Figma', 'Docker', 'Postman', 'Keycloak'] }
		],
		projects: [
			{
				slug: 'digital-village-system',
				category: 'Enterprise Web Application',
				title: 'Website Desa Digital (BuildWithAngga)',
				status: 'Completed',
				description:
					'Aplikasi administrasi desa berbasis Laravel dan Vue.js dengan integrasi Midtrans payment gateway untuk layanan warga.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
				role: 'Full Stack Developer',
				techStack: ['Laravel', 'Vue.js', 'MySQL', 'Midtrans API', 'Tailwind CSS'],
				duration: 'Ongoing / 2025'
			},
			{
				slug: 'campus-accreditation-system',
				category: 'Enterprise Web Application',
				title: 'Campus Accreditation System',
				status: 'Completed',
				description:
					'Sistem aplikasi web tingkat enterprise untuk kepatuhan akreditasi universitas dan manajemen audit dokumen otomatis.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
				role: 'Full Stack Architect & Database Designer',
				techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
				duration: '6 Bulan'
			}
		]
	},
	{
		slug: 'rendy-pratama',
		name: 'Rendy Pratama',
		title: 'Programmer / FullStack Developer',
		avatarUrl:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
		address: 'Palembang, South Sumatra',
		about:
			'Recent Information Systems graduate with a proven track record of rapidly mastering complex tech stacks and business logic within fast-paced environments.',
		objectives: [
			'Bachelor of Information Systems graduate (GPA: 3.93/4.00)',
			'Experienced in ERP systems, API integrations, and dynamic commission modules',
			'Proficient in React, Next.js, Laravel, Flutter, and Kotlin',
			'Passionate about building scalable web and mobile applications'
		],
		links: [
			{ id: 'github', name: 'GitHub', url: 'https://github.com/' },
			{ id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/rendyp' }
		],
		workExperiences: [
			{
				id: 1,
				companyName: 'Nusantara Sakti Group, Jakarta',
				years: 'Aug 2025 - Present',
				roles: 'Programmer',
				jobDesc: [
					'Develop and maintain internal marketing ERP.',
					'Implement new LOC and COE features.',
					'Engineer dynamic commission calculation modules.',
					'Develop high-frequency API integrations for SPK.'
				]
			},
			{
				id: 2,
				companyName: 'PT Nusantara Infrastructure Tbk, Jakarta',
				years: 'Feb 2024 - Jun 2024',
				roles: 'FullStack Developer Intern',
				jobDesc: [
					'Delivered an average of four new feature releases per month.',
					'Improved application reliability by resolving critical user issues (15% reduction in major bug reports).',
					'Developed interactive charts and maps for over 700,000 data points.'
				]
			},
			{
				id: 3,
				companyName: 'Unit Kegiatan Mahasiswa Programming, Palembang',
				years: 'May 2024 - May 2025',
				roles: 'Vice Chairman',
				jobDesc: [
					'Contributed to the successful organization of the 2024 Coaching Program for over 40 participants.',
					'Led group projects in a collaborative environment.'
				]
			}
		],
		educations: [
			{
				id: 1,
				title: 'Bachelor of Information Systems (GPA: 3.93/4.00)',
				schoolName: 'Universitas Multi Data Palembang',
				years: 'Sep 2021 - Apr 2025'
			}
		],
		additionalActivities: [],
		skills: [
			{
				type: 'Frontend',
				tools: ['React', 'Next.js', 'JavaScript', 'TypeScript']
			},
			{ type: 'Backend', tools: ['PHP', 'Laravel'] },
			{ type: 'Database', tools: ['MySQL', 'SQLite', 'Firebase', 'Room'] },
			{ type: 'Mobile & Tools', tools: ['Flutter', 'Jetpack Compose', 'Kotlin', 'Dart'] }
		],
		projects: [
			{
				slug: 'animevibe',
				category: 'Mobile Application',
				title: 'AnimeVibe',
				status: 'Completed',
				description:
					'Android application for anime enthusiasts with features such as recommendations, filtering, and streaming.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
				role: 'Android Developer',
				techStack: ['Kotlin', 'Android', 'Room', 'Retrofit', 'Coroutines', 'MVVM'],
				duration: '2024 - 2025'
			},
			{
				slug: 'discord-clone',
				category: 'Web Application',
				title: 'Discord Clone',
				status: 'Completed',
				description:
					'Real-time chat platform with text, voice, and video capabilities.',
				imageThumbnail:
					'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
				role: 'FullStack Developer',
				techStack: ['Next.js', 'TypeScript', 'Clerk', 'WebSockets', 'Socket.io'],
				duration: '2024 - 2025'
			}
		]
	}
];