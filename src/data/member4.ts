import type { Member } from '$lib/types';

export const member4: Member = {
	id: 'nadia-safira',
	slug: 'nadia-safira',
	name: 'Nadia Safira',
	nickname: 'Nadia',
	role: 'Mobile & Cross-Platform Engineer',
	discipline: 'mobile',
	avatar:
		'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
	location: 'Yogyakarta, Indonesia',
	yearsOfExperience: 5,
	availability: 'Available for Projects',
	statusBadge: 'Mobile Architect',
	shortIntro:
		'Building smooth, native-grade mobile applications with Flutter, Kotlin Multiplatform, and local-first databases.',
	bio: 'Mobile systems engineer focused on high frame-rate ergonomics, offline-first local state storage, and seamless hardware sensor integration. Experienced in delivering production applications to millions of users across both iOS and Android ecosystems with strict battery-efficient architectures.',
	skills: {
		frontend: [
			'Flutter & Dart',
			'Kotlin / Android Jetpack',
			'Swift / SwiftUI',
			'React Native',
			'SvelteKit Web Views'
		],
		backend: ['Node.js', 'Firebase Cloud Suite', 'GraphQL', 'REST APIs', 'Supabase Auth'],
		database: ['SQLite / Room', 'Realm Mobile DB', 'Isar Local DB', 'PostgreSQL'],
		devops: [
			'Fastlane Automation',
			'GitHub Actions Mobile CI',
			'Google Play Console',
			'Apple App Store Connect'
		],
		tools: ['Android Studio', 'Xcode Instruments', 'Figma', 'Flipper Debugger', 'Postman']
	},
	experience: [
		{
			role: 'Lead Mobile Application Engineer',
			company: 'Ruang Edukasi Digital',
			location: 'Yogyakarta, ID',
			period: '2022 — Present',
			description:
				'Overseeing the engineering of flagship cross-platform learning apps with over 600k active student downloads.',
			highlights: [
				'Architected an offline video caching synchronization mechanism saving 60% cellular bandwidth for rural learners.',
				'Maintained 99.85% crash-free sessions across 2,400+ distinct Android and iOS hardware models.'
			],
			techUsed: ['Flutter', 'Dart', 'Isar DB', 'Fastlane', 'Firebase']
		},
		{
			role: 'Mobile Software Developer',
			company: 'Nusantara Mobile Labs',
			location: 'Semarang, ID',
			period: '2020 — 2022',
			description:
				'Developed e-commerce customer and rider delivery companion applications with real-time GPS tracking.',
			highlights: [
				'Implemented background geolocation tracking with adaptive battery-saver geofencing algorithms.',
				'Refactored legacy state tree to Riverpod, reducing redundant widget rebuilds by 45%.'
			],
			techUsed: ['Flutter', 'Kotlin', 'Firebase', 'Google Maps SDK']
		}
	],
	education: [
		{
			degree: 'Bachelor of Information Systems (S.Kom)',
			institution: 'Universitas Gadjah Mada (UGM)',
			year: '2016 — 2020',
			gpa: '3.88 / 4.00',
			notes: 'Awarded Best Final Year Capstone Project in Mobile Ubiquitous Computing.'
		}
	],
	projects: [
		{
			id: 'sync-pad',
			title: 'SyncPad Local-First Note System',
			description:
				'Local-first encrypted Markdown note taking mobile application featuring peer-to-peer Wi-Fi synchronization.',
			tags: ['Flutter', 'Dart', 'SQLite', 'Local-First', 'Encryption'],
			github: 'https://github.com/nadiasafira/syncpad',
			featured: true,
			metrics: 'P2P Offline Sync'
		},
		{
			id: 'track-pulse',
			title: 'TrackPulse Biometric Monitor',
			description:
				'Biometric telemetry app interfacing with Bluetooth Low Energy (BLE) smart wearable heart rate sensors.',
			tags: ['Kotlin', 'Swift', 'BLE', 'HealthKit', 'Mobile'],
			github: 'https://github.com/nadiasafira/track-pulse',
			featured: true,
			metrics: '120fps Smooth Graphing'
		}
	],
	contact: {
		email: 'nadia.safira@example.com',
		github: 'https://github.com/nadiasafira',
		linkedin: 'https://linkedin.com/in/nadiasafira',
		website: 'https://nadia.dev'
	},
	languages: ['Bahasa Indonesia (Native)', 'English (Professional Working)'],
	interests: ['Mobile Ergonomics', 'Hardware Wearables', 'Mountain Hiking', 'Film Photography']
};
