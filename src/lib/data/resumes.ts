import type { ResumeData } from "$lib/types/resume";

export const resumes: ResumeData[] = [
	{
		slug: "rama-fajar-fadhillah",
		name: "Rama Fajar Fadhillah, S.Kom",
		title: "Fullstack Developer",
		avatarUrl:
			'/image/fajar.jpg',
		address: "Indonesia",

		about:
			"Saya adalah lulusan Sarjana Teknik Informatika dari STT Terpadu Nurul Fikri dengan IPK 3.76/4.00. Berpengalaman sebagai Web Engineer dan Backend Developer, terbiasa membangun scalable web apps dan API menggunakan PHP (Laravel, Codeigniter), TypeScript (NestJS, NextJS), Golang, serta mengelola infrastruktur berbasis Docker, Linux, Nginx, dan Kubernetes. Aktif mendalami bidang Cybersecurity seperti Penetration Testing, OSINT, dan ISO 27001.",

		objectives: [
			"Membangun sistem dan aplikasi backend yang aman, tangguh, dan scalable.",
			"Mengintegrasikan praktik keamanan siber yang baik dalam setiap pengembangan.",
			"Mengembangkan solusi web dan backend yang reliable untuk kebutuhan bisnis.",
		],

		links: [
			{
				label: "Email",
				url: "mailto:ramafajar805@gmail.com",
			},
			{
				label: "GitHub",
				url: "https://github.com/nullsec45",
			},
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/ramarff/",
			},
		],

		workExperiences: [
			{
				id: "exp-1",
				position: "Backend Developer",
				company: "PT Lazio Teknologi Bersama",
				duration: "Februari 2025 - Agustus 2025",
				description:
					"Mengembangkan backend Baiq Apps & Laz Core ERP, microservices (payment, notification, ziswaf, qurban, partnership), integrasi payment gateway Doku & Xendit, serta deployment menggunakan Argo CD dan Kubernetes.",
			},
			{
				id: "exp-2",
				position: "Backend Developer",
				company: "Wiseline (Freelance Remote)",
				duration: "Januari 2024 - Desember 2024",
				description:
					"Mengembangkan dan memelihara API, membuat dokumentasi API menggunakan OpenAPI Swagger, serta membangun unit testing dan integration testing dengan Jest dan Supertest.",
			},
			{
				id: "exp-3",
				position: "Web Engineer",
				company: "PT Ciptadra Softindo",
				duration: "November 2022 - Desember 2024",
				description:
					"Mengembangkan website klien menggunakan PHP (Laravel, CI), NodeJS, NextJS, melakukan pengamanan kode berbasis OWASP Top 10, penetration testing, serta manajemen database backup menggunakan Cron Job dan Bash.",
			},
		],

		educations: [
			{
				id: "edu-1",
				institution: "STT Terpadu Nurul Fikri, Depok",
				degree: "Bachelor Degree in Informatics Engineering",
				major: "Informatics Engineering",
				year: "October 2021 - July 2025",
			},
		],

		additionalActivities: [],

		skills: [
			{
				category: "Frontend",
				skills: [
					"ReactJS",
					"NextJS",
					"TypeScript",
					"JavaScript",
					"Bootstrap",
					"Tailwind CSS",
				],
			},
			{
				category: "Backend",
				skills: [
					"PHP",
					"Laravel",
					"Codeigniter",
					"Golang",
					"NodeJS",
					"NestJS",
				],
			},
			{
				category: "Database",
				skills: [
					"MySQL",
					"PostgreSQL",
					"Redis",
					"Prisma ORM",
				],
			},
			{
				category: "Tools & Infrastructure",
				skills: [
					"Docker",
					"Kubernetes",
					"AWS",
					"Linux",
					"Nginx",
					"Git",
					"GitLab",
					"Jenkins",
					"Apisix",
					"RabbitMQ",
				],
			},
		],

		projects: [
			{
				id: "9",
				slug: "9",
				name: "Baiq Apps & Laz Core ERP",
				shortDescription:
					"Developed microservices such as payment services, notification services, ziswaf services, qurban services, and partnership services.",
				coverImage: null,
				category: "Microservices Ecosystem",
				status: "Completed",
				role: "Backend Developer",
				duration: "Feb 2025 - Aug 2025",
				technologies: [
					"PHP (Laravel)",
					"Golang",
					"AWS RDS",
					"Kubernetes",
					"RabbitMQ",
				],
			},
		],
	},

	{
		slug: "arimbi-dwi-syabillah",
		name: "Arimbi Dwi Syabillah",
		title: "IoT & AI Engineer / Junior Developer",
		avatarUrl:
		"/image/arimbi.jpg",
		address: "Indonesia",

		about:
			"Saya merupakan lulusan D3 Teknologi Telekomunikasi di Telkom University dengan minat dan fokus pada pengembangan sistem berbasis Internet of Things (IoT), kecerdasan buatan (AI), dan jaringan komunikasi. Memiliki pengalaman sebagai intern junior engineer di industri pertambangan serta aktif dalam berbagai proyek riset dan pengembangan seperti smart agriculture berbasis IoT, computer vision untuk klasifikasi objek, dan pengembangan aplikasi web.",

		objectives: [
			"Mengintegrasikan teknologi AI dan IoT untuk menciptakan solusi inovatif.",
			"Mengembangkan sistem yang efisien dan adaptif.",
			"Menciptakan solusi teknologi yang memberikan dampak nyata bagi masyarakat.",
		],

		links: [
			{
				label: "Email",
				url: "mailto:arimbidwisyabillah1304@gmail.com",
			},
			{
				label: "GitHub",
				url: "https://github.com/",
			},
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/arimbidwisyabillah",
			},
		],

		workExperiences: [
			{
				id: "exp-1",
				position: "Internship Junior Engineering",
				company:
					"Bandung Techno Park, Smart Grow Lab Telkom University",
				duration: "Juli 2025 - Juli 2026",
				description:
					"Berkontribusi dalam penelitian klasifikasi daun menggunakan MobileNetV2 dan YOLOv8 & YOLOv11, pengembangan dashboard rantai pasok dan keuangan komunitas agri, sistem mitigasi banjir IoT dan AI, serta rancangan sistem IoT pemantau sampah portabel.",
			},
			{
				id: "exp-2",
				position: "Internship Junior Engineering",
				company:
					"PT. Satria Bahana Sarana (Departemen LPT)",
				duration: "Desember 2022 - Maret 2023",
				description:
					"Membantu pemantauan dan perawatan peralatan tambang, pemilihan teknologi efisiensi operasional, serta pemantauan kualitas lingkungan di sekitar area tambang.",
			},
			{
				id: "exp-3",
				position: "Internship Junior Engineering",
				company:
					"PT. Satria Bahana Sarana (Departemen PKPP)",
				duration: "November 2022 - Desember 2022",
				description:
					"Mendukung perencanaan dan pelaksanaan proyek produksi serta menganalisis data produksi untuk meningkatkan efisiensi dan kinerja.",
			},
			{
				id: "exp-4",
				position: "Internship Junior Engineering",
				company:
					"PT. Satria Bahana Sarana (Departemen K3L)",
				duration: "Oktober 2022 - November 2022",
				description:
					"Mengembangkan program K3 di lokasi tambang dan melakukan inspeksi rutin untuk mengidentifikasi potensi bahaya serta mengurangi risiko kecelakaan.",
			},
		],

		educations: [
			{
				id: "edu-1",
				institution: "Telkom University",
				degree: "Diploma 3 (D3)",
				major: "Teknologi Telekomunikasi",
				year: "2023 - 2026",
			},
			{
				id: "edu-2",
				institution: "SMK Bukit Asam",
				degree: "Sekolah Menengah Kejuruan",
				major: "Geologi Pertambangan",
				year: "2019 - 2023",
			},
		],

		additionalActivities: [],

		skills: [
			{
				category: "Frontend",
				skills: [
					"HTML",
					"CSS",
					"JavaScript",
				],
			},
			{
				category: "Backend",
				skills: [
					"Python",
					"Java",
					"Node.js",
					"Django",
					"PHP (Basic)",
				],
			},
			{
				category: "Database",
				skills: [
					"MySQL",
					"PostgreSQL (Basic)",
				],
			},
			{
				category: "Tools & Technologies",
				skills: [
					"Arduino",
					"ESP8266",
					"ESP32",
					"TensorFlow/Keras",
					"YOLOv8",
					"OpenCV",
					"Git",
					"Docker (Basic)",
					"AWS (Basic)",
				],
			},
		],

		projects: [
			{
				id: "11",
				slug: "11",
				name: "Premium Leaves Tea Classification",
				shortDescription:
					"Classification of premium tea leaves using MobileNetV2 and YOLOv8/YOLOv11 to improve accuracy and efficiency.",
				coverImage: null,
				category: "AI / Computer Vision",
				status: "Ongoing",
				role: "IOT Researcher & Developer",
				duration: "Jul 2025 - Jul 2026",
				technologies: [
					"Python",
					"MobileNetV2",
					"YOLOv8",
					"Computer Vision",
				],
			},
		],
	},

	{
		slug: "muhammad-haikal-ali",
		name: "Muhammad Haikal Ali",
		title: "Fullstack Developer",
		avatarUrl:
			"/image/haikal.jpg",
		address: "Semarang, Indonesia",

		about:
			"Saya adalah lulusan Sarjana Ilmu Komputer dari Universitas Diponegoro dengan IPK 3.54/4.00, memiliki ketertarikan kuat pada pengembangan web, manajemen sistem, dan solusi berbasis kecerdasan buatan. Berpengalaman sebagai Fullstack Developer dalam membangun aplikasi web menggunakan PHP dan Laravel, serta mengerjakan proyek riset machine learning untuk deteksi phishing dan pengembangan aplikasi komunitas.",

		objectives: [
			"Mengembangkan solusi perangkat lunak yang aman dan efisien.",
			"Membangun solusi digital yang berdampak nyata bagi organisasi maupun masyarakat.",
			"Mengembangkan aplikasi web dan sistem berbasis kecerdasan buatan.",
		],

		links: [
			{
				label: "Email",
				url: "mailto:muhammadhaikalali68@gmail.com",
			},
			{
				label: "GitHub",
				url: "https://github.com/haikalassegaf",
			},
			{
				label: "LinkedIn",
				url: "https://linkedin.com/in/haikalali12",
			},
		],

		workExperiences: [
			{
				id: "exp-1",
				position: "Fullstack Developer",
				company: "PT Bank Syariah Indonesia",
				duration: "Januari 2024 - Februari 2024",
				description:
					"Mengembangkan aplikasi web Level 1 Evaluation yang berfokus pada manajemen surat, input, dan output menggunakan PHP dan Laravel untuk antarmuka frontend serta pengaturan routing aplikasi.",
			},
		],

		educations: [
			{
				id: "edu-1",
				institution: "Diponegoro University",
				degree:
					"Bachelor in Computer Science (IPK: 3.54/4.00)",
				major: "Computer Science",
				year: "2021 - 2026",
			},
			{
				id: "edu-2",
				institution: "Semarang 9 High School",
				degree: "High School Diploma",
				major: "Natural Science and Mathematics",
				year: "2018 - 2021",
			},
		],

		additionalActivities: [],

		skills: [
			{
				category: "Frontend",
				skills: [
					"HTML",
					"JavaScript",
					"Flutter",
				],
			},
			{
				category: "Backend",
				skills: [
					"PHP",
					"Laravel",
					"Node.Js",
					"Python",
				],
			},
			{
				category: "Database",
				skills: [
					"MySQL",
				],
			},
			{
				category: "Tools & Technologies",
				skills: [
					"Google Cloud Platform",
					"PostMan",
					"C",
					"C++",
				],
			},
		],

		projects: [
			{
				id: "10",
				slug: "10",
				name: "Knowledge Management System",
				shortDescription:
					"Engineered a machine learning-based email classification dashboard to automate phishing detection.",
				coverImage: null,
				category: "Machine Learning Application",
				status: "Completed",
				role: "Developer & Researcher",
				duration: "N/A",
				technologies: [
					"Python",
					"Machine Learning",
					"GUI",
				],
			},
		],
	},

	{
		slug: "najwan-zaky",
		name: "Najwan Zaky",
		title: "Full Stack Developer",
		avatarUrl:
			"/image/najwan.jpg",
		address: "Bandung, Jawa Barat",

		about:
			"Saya adalah lulusan Teknik Informatika yang memiliki minat dan pengalaman mendalam di bidang pengembangan web, khususnya sebagai Backend dan Full Stack Developer. Terbiasa membangun RESTful API menggunakan Golang, Laravel, dan PostgreSQL, serta mengembangkan antarmuka web menggunakan React.js, Vue.js, dan Nuxt.js. Berpengalaman dalam implementasi autentikasi, manajemen role & permission (RBAC), serta optimasi database.",

		objectives: [
			"Membangun aplikasi end-to-end yang clean dan maintainable.",
			"Mengembangkan aplikasi yang scalable untuk kebutuhan bisnis maupun publik.",
			"Mengembangkan solusi backend dengan performa dan arsitektur yang baik.",
			"Berkontribusi pada pengembangan open source.",
		],

		links: [
			{
				label: "Email",
				url: "mailto:najwanzaky21@gmail.com",
			},
			{
				label: "GitHub",
				url: "https://github.com/najwanzakyahmad",
			},
			{
				label: "LinkedIn",
				url: "https://linkedin.com/in/najwan-zaky-ahmad",
			},
		],

		workExperiences: [
			{
				id: "exp-1",
				position: "Full Stack Developer",
				company: "PT Tabel Data Informatika",
				duration: "Des 2025 - Jun 2026",
				description:
					"Bertanggung jawab membangun dan memelihara aplikasi web menggunakan React, Golang, dan PostgreSQL. Menangani pengembangan RESTful API, integrasi Keycloak, penerapan RBAC, serta optimasi database.",
			},
			{
				id: "exp-2",
				position: "Full Stack Developer Intern",
				company: "Jubelo",
				duration: "Jun 2024 - Okt 2024",
				description:
					"Mengimplementasikan antarmuka pengguna frontend menggunakan Vue.js dan mengembangkan backend RESTful API dengan Laravel serta MySQL untuk sistem internal Jubelo, serta mengintegrasikannya secara mulus.",
			},
		],

		educations: [
			{
				id: "edu-1",
				institution: "Politeknik Negeri Bandung",
				degree: "Diploma / Sarjana Terapan",
				major: "Teknik Informatika",
				year: "2022 - 2025",
			},
		],

		additionalActivities: [],

		skills: [
			{
				category: "Frontend",
				skills: [
					"React.js",
					"Vue.js",
					"Nuxt.js",
					"Tailwind CSS",
					"TypeScript",
				],
			},
			{
				category: "Backend",
				skills: [
					"Golang",
					"Laravel",
					"Node.js",
					"PHP",
					"Java",
				],
			},
			{
				category: "Database",
				skills: [
					"PostgreSQL",
					"MySQL",
					"MongoDB",
					"Redis",
				],
			},
			{
				category: "Tools & Technologies",
				skills: [
					"Git",
					"GitHub",
					"Figma",
					"Docker",
					"Postman",
					"Keycloak",
				],
			},
		],

		projects: [
			{
				id: "2",
				slug: "2",
				name: "Web Internal Jubelo",
				shortDescription:
					"Aplikasi Jubelo Internal System mengelola anggota, klien, dashboard, event calender, dan perhitungan HPP untuk mendukung efisiensi dan keputusan bisnis.",
				coverImage: null,
				category: "Internal Web Application",
				status: "Completed",
				role: "Full Stack Developer",
				duration: "N/A",
				technologies: [
					"Vue",
					"Tailwind",
					"Laravel",
					"MySQL",
				],
			},
			{
				id: "3",
				slug: "siaps-penyusunan-akreditasi-program-studi",
				name: "SIAPS - Penyusunan Akreditasi Program Studi",
				shortDescription:
					"Aplikasi pendukung penyusunan laporan akreditasi: import dari Google Sheets & Drive.",
				coverImage: null,
				category: "Academic Web Application",
				status: "Completed",
				role: "Full Stack Developer",
				duration: "N/A",
				technologies: [
					"React",
					"Laravel",
					"MongoDB",
					"Google API",
				],
			},
		],
	},

	{
		slug: "rendy-pratama",
		name: "Rendy Pratama",
		title: "Programmer / FullStack Developer",
		avatarUrl:
			"/image/rendy.jpg",
		address: "Palembang, South Sumatra",

		about:
			"Recent Information Systems graduate with a proven track record of rapidly mastering complex tech stacks and business logic within fast-paced environments. Experienced in developing internal marketing ERP, high-frequency API integrations, dynamic commission calculation modules, and interactive web/mobile applications using modern frameworks like React, Next.js, Laravel, and Flutter.",

		objectives: [
			"Membangun dynamic web applications.",
			"Membangun dynamic mobile applications.",
			"Mengembangkan software dalam lingkungan kolaboratif dan team-oriented.",
			"Berkontribusi pada pengembangan teknologi yang inovatif dan berkualitas.",
		],

		links: [
			{
				label: "Email",
				url: "mailto:rendypratama752@gmail.com",
			},
			{
				label: "GitHub",
				url: "https://github.com/",
			},
			{
				label: "LinkedIn",
				url: "https://linkedin.com/in/rendyp",
			},
		],

		workExperiences: [
			{
				id: "exp-1",
				position: "Programmer",
				company: "Nusantara Sakti Group, Jakarta",
				duration: "Aug 2025 - Present",
				description:
					"Develop and maintain internal marketing ERP. Implement new LOC and COE features, engineer dynamic commission calculation modules, and develop high-frequency API integrations for SPK.",
			},
			{
				id: "exp-2",
				position: "FullStack Developer Intern",
				company: "PT Nusantara Infrastructure Tbk, Jakarta",
				duration: "Feb 2024 - Jun 2024",
				description:
					"Delivered an average of four new feature releases per month, improved application reliability by resolving critical user issues (15% reduction in major bug reports), and developed interactive charts and maps for over 700,000 data points.",
			},
		],

		educations: [
			{
				id: "edu-1",
				institution: "Universitas Multi Data Palembang",
				degree:
					"Bachelor of Information Systems (GPA: 3.93/4.00)",
				major: "Information Systems",
				year: "Sep 2021 - Apr 2025",
			},
		],

		additionalActivities: [
			{
				id: "activity-1",
				position: "Vice Chairman",
				organization:
					"Unit Kegiatan Mahasiswa Programming, Palembang",
				duration: "May 2024 - May 2025",
				description:
					"Contributed to the successful organization of the 2024 Coaching Program for over 40 participants and led group projects in a collaborative environment.",
			},
		],

		skills: [
			{
				category: "Frontend",
				skills: [
					"React",
					"Next.js",
					"JavaScript",
					"TypeScript",
				],
			},
			{
				category: "Backend",
				skills: [
					"PHP",
					"Laravel",
				],
			},
			{
				category: "Database",
				skills: [
					"MySQL",
					"SQLite",
					"Firebase",
					"Room",
				],
			},
			{
				category: "Tools & Technologies",
				skills: [
					"Flutter",
					"Jetpack Compose",
					"Kotlin",
					"Dart",
				],
			},
		],

		projects: [
			{
				id: "4",
				slug: "4",
				name: "AnimeVibe",
				shortDescription:
					"A comprehensive Android app delivering anime recommendations, advanced filtering, episode streaming, and offline data management.",
				coverImage:
					"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800",
				category: "Mobile Application",
				status: "In Production",
				role: "Android Developer",
				duration: "N/A",
				technologies: [
					"Kotlin",
					"Jetpack Compose",
					"Room",
					"Retrofit",
					"Coroutines",
					"MVVM",
				],
				contribution: [
					"Created an Android application for anime enthusiasts with recommendations, filtering, and streaming.",
					"Employed Room for local data storage and integrated technologies like Retrofit, Coroutines, and MVVM.",
				],
				screenshots: [
					"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
				],
				challenges: [
					{
						challenge:
							"Managing local data storage efficiently and handling asynchronous network streams smoothly.",
						solution:
							"Utilized Room database along with Kotlin Coroutines and Retrofit for robust architecture.",
					},
				],
				result:
					"Successfully deployed a fully functional Android application for anime streaming and recommendations.",
				liveDemoUrl:
					"https://rendyp-portofolio.vercel.app",
				sourceCodeUrl:
					"https://github.com/",
			},

			{
				id: "5",
				slug: "5",
				name: "Discord Clone",
				shortDescription:
					"A feature-rich Discord Clone enhanced with real-time messaging, media sharing, and video/audio rooms.",
				coverImage: null,
				category: "Web Application",
				status: "Completed",
				role: "FullStack Developer",
				duration: "N/A",
				technologies: [
					"Next.js",
					"TypeScript",
					"Tailwind CSS",
					"Socket.IO",
					"LiveKit",
				],
			},

			{
				id: "6",
				slug: "6",
				name: "MariBermusik Mobile",
				shortDescription:
					"A collaborative Flutter-based mobile app designed to help users learn musical instruments through materials provided by other professional users.",
				coverImage: null,
				category: "Mobile Application",
				status: "Completed",
				role: "Mobile Developer",
				duration: "N/A",
				technologies: [
					"Flutter",
					"Dart",
					"Firebase",
				],
			},

			{
				id: "7",
				slug: "7",
				name: "LibraryApp",
				shortDescription:
					"A Laravel based CMS for managing library books and categories with role-based access for users and admins.",
				coverImage: null,
				category: "Web Application",
				status: "Completed",
				role: "FullStack Developer",
				duration: "N/A",
				technologies: [
					"Laravel",
					"MySQL",
					"Bootstrap",
					"Chart.js",
				],
			},

			{
				id: "8",
				slug: "8",
				name: "MealApp",
				shortDescription:
					"A meal-themed web app to enable meal exploration with category filtering and detailed recipes.",
				coverImage: null,
				category: "Web Application",
				status: "Completed",
				role: "FullStack Developer",
				duration: "N/A",
				technologies: [
					"JavaScript ES6",
					"Web Components",
					"Webpack",
					"Materialize CSS",
				],
			},
		],
	},
];