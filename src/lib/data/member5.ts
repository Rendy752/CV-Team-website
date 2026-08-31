import type { Member } from '$lib/types';

export const member5: Member = {
	id: 'rendy-pratama',
	slug: 'rendy-pratama',
	name: 'Rendy Pratama',
	nickname: 'Rendy',
	role: 'Programmer / FullStack Developer',
	discipline: 'mobile',
	avatar:
		'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
	shortIntro:
		'Recent Information Systems graduate with a proven track record of rapidly mastering complex tech stacks and business logic within fast-paced environments.',
	email: 'rendypratama752@gmail.com',
	location: 'Palembang, South Sumatra',
	github: 'https://github.com/',
	linkedin: 'https://linkedin.com/in/rendyp',
	yearsOfExperience: '1+',
	availability: 'Open for Projects & Roles',
	bio: 'Recent Information Systems graduate with a proven track record of rapidly mastering complex tech stacks and business logic within fast-paced environments.',
	aboutMe: {
		introduction:
			'Recent Information Systems graduate with a proven track record of rapidly mastering complex tech stacks and business logic within fast-paced environments.',
		background:
			'Experienced in developing internal marketing ERP, high-frequency API integrations, dynamic commission calculation modules, and interactive web/mobile applications using modern frameworks like React, Next.js, Laravel, and Flutter.',
		interests: [
			'Web Development',
			'Mobile Applications',
			'Software Engineering',
			'Tech Innovation'
		],
		goals:
			'Seeking to leverage skills in building dynamic web and mobile applications in a collaborative, team-oriented environment that values innovation and quality.'
	},
	skills: {
		frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript'],
		backend: ['PHP', 'Laravel'],
		database: ['MySQL', 'SQLite', 'Firebase', 'Room'],
		tools: ['Flutter', 'Jetpack Compose', 'Kotlin', 'Dart'],
		devops: ['Firebase', 'Git']
	},
	education: [
		{
			id: 'edu-1',
			institution: 'Universitas Multi Data Palembang',
			degree: 'Bachelor of Information Systems',
			major: 'Information Systems',
			year: 'Sep 2021 - Apr 2025',
			gpa: '3.93/4.00'
		}
	],
	experience: [
		{
			id: 'exp-1',
			position: 'Programmer',
			role: 'Programmer',
			company: 'Nusantara Sakti Group, Jakarta',
			duration: 'Aug 2025 - Present',
			period: 'Aug 2025 - Present',
			description:
				'Develop and maintain internal marketing ERP. Implement new LOC and COE features, engineer dynamic commission calculation modules, and develop high-frequency API integrations for SPK.'
		},
		{
			id: 'exp-2',
			position: 'FullStack Developer Intern',
			role: 'FullStack Developer Intern',
			company: 'PT Nusantara Infrastructure Tbk, Jakarta',
			duration: 'Feb 2024 - Jun 2024',
			period: 'Feb 2024 - Jun 2024',
			description:
				'Delivered an average of four new feature releases per month, improved application reliability by resolving critical user issues (15% reduction in major bug reports), and developed interactive charts and maps for over 700,000 data points.'
		},
		{
			id: 'exp-3',
			position: 'Vice Chairman',
			role: 'Vice Chairman',
			company: 'Unit Kegiatan Mahasiswa Programming, Palembang',
			duration: 'May 2024 - May 2025',
			period: 'May 2024 - May 2025',
			description:
				'Contributed to the successful organization of the 2024 Coaching Program for over 40 participants and led group projects in a collaborative environment.'
		}
	],
	projects: [
		{
			id: 'animevibe',
			name: 'AnimeVibe',
			title: 'AnimeVibe',
			authorId: 'rendy-pratama',
			shortDescription:
				'Android application for anime enthusiasts with features such as recommendations, filtering, and streaming.',
			description:
				'Android application for anime enthusiasts with features such as recommendations, filtering, and streaming.',
			category: 'Mobile Application',
			duration: '2024 - 2025',
			status: 'Completed',
			technologies: ['Kotlin', 'Android', 'Room', 'Retrofit', 'Coroutines', 'MVVM'],
			tags: ['Kotlin', 'Android', 'Room', 'Retrofit', 'Coroutines', 'MVVM'],
			role: 'Android Developer',
			contribution: [
				'Created an Android application for anime enthusiasts with recommendations, filtering, and streaming.',
				'Employed Room for local data storage and integrated technologies like Retrofit, Coroutines, and MVVM.'
			],
			coverImage:
				'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
			screenshots: [
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
			],
			challenges: [
				{
					challenge:
						'Managing local data storage efficiently and handling asynchronous network streams smoothly.',
					solution:
						'Utilized Room database along with Kotlin Coroutines and Retrofit for robust architecture.'
				}
			],
			result:
				'Successfully deployed a fully functional Android application for anime streaming and recommendations.',
			liveDemoUrl: 'https://rendyp-portofolio.vercel.app',
			sourceCodeUrl: 'https://github.com/',
			github: 'https://github.com/'
		},
		{
			id: 'discord-clone',
			name: 'Discord Clone',
			title: 'Discord Clone',
			authorId: 'rendy-pratama',
			shortDescription: 'Real-time chat platform with text, voice, and video capabilities.',
			description: 'Real-time chat platform with text, voice, and video capabilities.',
			category: 'Web Application',
			duration: '2024 - 2025',
			status: 'Completed',
			technologies: ['Next.js', 'TypeScript', 'Clerk', 'WebSockets', 'Socket.io'],
			tags: ['Next.js', 'TypeScript', 'Clerk', 'WebSockets', 'Socket.io'],
			role: 'FullStack Developer',
			contribution: [
				'Built a real-time chat platform with text, voice, and video capabilities.',
				'Integrated Clerk for authentication and WebSockets with Socket.io for real-time communication.'
			],
			coverImage:
				'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
			screenshots: [
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
			],
			challenges: [
				{
					challenge:
						'Handling low-latency real-time voice, video, and text synchronization across multiple users.',
					solution:
						'Integrated WebSockets with Socket.io alongside Next.js and secure Clerk authentication.'
				}
			],
			result: 'Created a high-performance replica of modern chat and communication software.',
			liveDemoUrl: 'https://rendyp-portofolio.vercel.app',
			sourceCodeUrl: 'https://github.com/',
			github: 'https://github.com/'
		}
	],
	contact: {
		email: 'rendypratama752@gmail.com',
		github: 'https://github.com/',
		linkedin: 'https://linkedin.com/in/rendyp'
	},
	interests: ['Web Development', 'Mobile Applications', 'Software Engineering', 'Tech Innovation']
};
