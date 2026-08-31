import type { ProjectData } from '$lib/types';

// Extend tipe ProjectData dengan 'slug' khusus untuk file data ini
export const projects: ProjectData[] = [
	{
		slug: '1',
		title: 'Premium Leaves Tea Classification',
		type: 'AI / Computer Vision',
		description:
			'Classification of premium tea leaves using MobileNetV2 and YOLOv8/YOLOv11 to improve accuracy and efficiency[cite: 3].',
		duration: 'Jul 2025 - Jul 2026',
		status: 'Ongoing',
		owner: 'Arimbi Dwi Syabillah',
		background:
			'Research project at Smart Grow Lab Telkom University to automate leaf quality assessment[cite: 3].',
		challenge: {
			title: 'Image Classification',
			desc: 'Managing image datasets, preprocessing, and labeling for deep learning models[cite: 3].'
		},
		solution: {
			title: 'Deep Learning Models',
			desc: 'Utilized MobileNetV2 and YOLO object detection models for high-accuracy classification[cite: 3].'
		},
		techStack: ['Python', 'MobileNetV2', 'YOLOv8', 'Computer Vision'],
		deployment: 'Lab Environment'
	},
	{
		slug: '2',
		title: 'Web Internal Jubelo',
		type: 'Internal Web Application',
		description:
			'Aplikasi Jubelo Internal System mengelola anggota, klien, dashboard, event calender, dan perhitungan HPP untuk mendukung efisiensi dan keputusan bisnis.',
		duration: 'N/A',
		status: 'Completed',
		owner: 'Najwan Zaky',
		background: 'Kebutuhan internal untuk digitalisasi manajemen anggota dan perhitungan HPP.',
		challenge: {
			title: 'Data Management',
			desc: 'Mengelola berbagai entitas data secara terpusat.'
		},
		solution: {
			title: 'Integrated Dashboard',
			desc: 'Membangun sistem informasi terpusat menggunakan framework modern.'
		},
		techStack: ['Vue', 'Tailwind', 'Laravel', 'MySQL'],
		deployment: 'N/A'
	},
	{
		slug: '3',
		title: 'SIAPS - Penyusunan Akreditasi Program Studi',
		type: 'Academic Web Application',
		description:
			'Aplikasi pendukung penyusunan laporan akreditasi: import dari Google Sheets & Drive.',
		duration: 'N/A',
		status: 'Completed',
		owner: 'Najwan Zaky',
		background:
			'Dibutuhkan sistem untuk mempermudah penyusunan akreditasi di Politeknik Negeri Bandung.',
		challenge: {
			title: 'File Integration',
			desc: 'Sinkronisasi dokumen dari Google Drive dan Sheets.'
		},
		solution: {
			title: 'Google API Integration',
			desc: 'Menggunakan Google API untuk menarik data secara real-time ke dalam sistem.'
		},
		techStack: ['React', 'Laravel', 'MongoDB', 'Google API'],
		deployment: 'N/A'
	},
	{
		slug: '4',
		title: 'AnimeVibe',
		type: 'Mobile Application',
		description:
			'A comprehensive Android app delivering anime recommendations, advanced filtering, episode streaming, and offline data management[cite: 4].',
		duration: 'N/A',
		status: 'In Production',
		owner: 'Rendy Pratama',
		background: 'Built solo to create an immersive experience for anime enthusiasts[cite: 4].',
		challenge: {
			title: 'API & Data Integration',
			desc: 'Integrating Jikan and Aniwatch API alongside offline data caching[cite: 4].'
		},
		solution: {
			title: 'MVVM & Room Database',
			desc: 'Implemented MVVM architecture with Hilt and Room for data management, plus CI/CD with GitHub Actions[cite: 4].'
		},
		techStack: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt'],
		deployment: 'Play Store'
	},
	{
		slug: '5',
		title: 'Discord Clone',
		type: 'Web Application',
		description:
			'A feature-rich Discord Clone enhanced with real-time messaging, media sharing, and video/audio rooms[cite: 4].',
		duration: 'N/A',
		status: 'Completed',
		owner: 'Rendy Pratama',
		background:
			'Developed to learn TypeScript, real-time communication, and advanced integrations[cite: 4].',
		challenge: {
			title: 'Real-time Interactions',
			desc: 'Handling live typing indicators and synchronous video/audio rooms[cite: 4].'
		},
		solution: {
			title: 'Socket.IO & LiveKit',
			desc: 'Utilized Socket.IO for chat updates and LiveKit for calls, managed via Prisma and CockroachDB[cite: 4].'
		},
		techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Socket.IO', 'LiveKit'],
		deployment: 'Vercel'
	},
	{
		slug: '6',
		title: 'MariBermusik Mobile',
		type: 'Mobile Application',
		description:
			'A collaborative Flutter-based mobile app designed to help users learn musical instruments through materials provided by other professional users[cite: 4].',
		duration: 'N/A',
		status: 'Completed',
		owner: 'Rendy Pratama',
		background: 'Developed with a team of five for a college final assignment[cite: 4].',
		challenge: {
			title: 'User Auth & Data',
			desc: 'Implementing secure Firebase authentication and CRUD functionality for learning materials[cite: 4].'
		},
		solution: {
			title: 'Firebase Integration',
			desc: 'Led Firebase setup (Authentication, Firestore, Analytics) and UI implementation for material management[cite: 4].'
		},
		techStack: ['Flutter', 'Dart', 'Firebase'],
		deployment: 'Mobile'
	},
	{
		slug: '7',
		title: 'LibraryApp',
		type: 'Web Application',
		description:
			'A Laravel based CMS for managing library books and categories with role-based access for users and admins[cite: 4].',
		duration: 'N/A',
		status: 'Completed',
		owner: 'Rendy Pratama',
		background:
			'A solo project to deepen expertise in Laravel MVC architecture and MySQL database management[cite: 4].',
		challenge: {
			title: 'Role & Access',
			desc: 'Creating role-based authentication and responsive, data-driven interfaces[cite: 4].'
		},
		solution: {
			title: 'Full-stack Framework',
			desc: 'Utilized Laravel and Bootstrap, alongside visualization tools like Highcharts and Chart.js[cite: 4].'
		},
		techStack: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
		deployment: 'Local/Web'
	},
	{
		slug: '8',
		title: 'MealApp',
		type: 'Web Application',
		description:
			'A meal-themed web app to enable meal exploration with category filtering and detailed recipes[cite: 4].',
		duration: 'N/A',
		status: 'Completed',
		owner: 'Rendy Pratama',
		background:
			'Built solo for the final submission of Dicoding IDCamp 2023, earning a perfect 5-star rating[cite: 4].',
		challenge: {
			title: 'Framework-free App',
			desc: 'Crafting optimized web applications without utilizing heavy frontend frameworks[cite: 4].'
		},
		solution: {
			title: 'Web Components & APIs',
			desc: 'Mastered ES6 syntax, Web Components, Webpack bundling, and asynchronous Fetch API using TheMealDB[cite: 4].'
		},
		techStack: ['JavaScript ES6', 'Web Components', 'Webpack', 'Materialize CSS'],
		deployment: 'Web'
	},
	{
		slug: '9',
		title: 'Baiq Apps & Laz Core ERP',
		type: 'Microservices Ecosystem',
		description:
			'Developed microservices such as payment services, notification services, ziswaf services, qurban services, and partnership services[cite: 1].',
		duration: 'Feb 2025 - Aug 2025',
		status: 'Completed',
		owner: 'Rama Fajar Fadhillah',
		background:
			'Project for PT Lazio Teknologi Bersama to build a robust ERP and charity application backend[cite: 1].',
		challenge: {
			title: 'System Integration',
			desc: 'Integrating Doku & Xendit payment gateways and multiple notification channels[cite: 1].'
		},
		solution: {
			title: 'Kubernetes Microservices',
			desc: 'Deployed services using Argo CD and Kubernetes, orchestrated with RabbitMQ and Apisix[cite: 1].'
		},
		techStack: ['PHP (Laravel)', 'Golang', 'AWS RDS', 'Kubernetes', 'RabbitMQ'],
		deployment: 'AWS & Kubernetes'
	},
	{
		slug: '10',
		title: 'Knowledge Management System',
		type: 'Machine Learning Application',
		description:
			'Engineered a machine learning-based email classification dashboard to automate phishing detection[cite: 2].',
		duration: 'N/A',
		status: 'Completed',
		owner: 'Muhammad Haikal Ali',
		background:
			'Undergraduate thesis project aimed at replacing manual review workflows with a data-driven security solution[cite: 2].',
		challenge: {
			title: 'Model Accuracy',
			desc: 'Ensuring high precision and recall in detecting phishing attempts[cite: 2].'
		},
		solution: {
			title: 'Comparative Evaluation System',
			desc: 'Optimized model performance by building a comparative evaluation system using comprehensive metrics and confusion matrix visualization[cite: 2].'
		},
		techStack: ['Python', 'Machine Learning', 'GUI'],
		deployment: 'Local GUI'
	}
];
