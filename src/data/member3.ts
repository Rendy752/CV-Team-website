import type { Member } from '$lib/types';

export const member3: Member = {
	id: 'rizky-pratama',
	slug: 'rizky-pratama',
	name: 'Rizky Pratama',
	nickname: 'Rizky',
	role: 'Backend & Cloud Infrastructure Engineer',
	discipline: 'backend',
	avatar:
		'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
	location: 'Bandung, Indonesia',
	yearsOfExperience: 5,
	availability: 'Available for Projects',
	statusBadge: 'Infra Specialist',
	shortIntro:
		'Specializing in resilient microservices, low-latency gRPC APIs, Kubernetes clusters, and telemetry pipelines.',
	bio: 'Cloud systems and backend engineer with strong expertise in building fault-tolerant infrastructure and distributed computing layers. Proven track record of managing multi-region Kubernetes clusters on GCP and AWS, tuning PostgreSQL performance under heavy loads, and automating infrastructure with Terraform.',
	skills: {
		frontend: ['TypeScript', 'HTML5 / CSS', 'SvelteKit (API integration)'],
		backend: [
			'Go (Golang)',
			'Rust',
			'Node.js',
			'gRPC / Protocol Buffers',
			'Apache Kafka',
			'GraphQL'
		],
		database: ['PostgreSQL (Partitioning & Tuning)', 'Redis Cluster', 'ClickHouse', 'DynamoDB'],
		devops: [
			'Kubernetes (k8s)',
			'Docker / Containerd',
			'Terraform',
			'Google Cloud Platform',
			'AWS',
			'Prometheus & Grafana'
		],
		tools: ['Git', 'Linux Kernel Tuning', 'Helm', 'ArgoCD', 'Postman', 'k6 Load Testing']
	},
	experience: [
		{
			role: 'Senior Cloud Infrastructure Engineer',
			company: 'Nusantara Cloud Systems',
			location: 'Bandung, ID',
			period: '2022 — Present',
			description:
				'Managing multi-region Kubernetes deployments, container orchestrations, and real-time observability stacks.',
			highlights: [
				'Reduced cloud infrastructure operational spend by 35% via dynamic auto-scaling node groups and Spot instance orchestration.',
				'Designed zero-loss distributed logging and monitoring pipeline processing 50k RPS with Prometheus and Grafana.'
			],
			techUsed: ['Kubernetes', 'Go', 'Terraform', 'GCP', 'Prometheus', 'ArgoCD']
		},
		{
			role: 'Backend Systems Engineer',
			company: 'Fintech Utama Indonesia',
			location: 'Jakarta, ID',
			period: '2020 — 2022',
			description:
				'Engineered core financial ledger transaction services with strict ACID transactional integrity in Go and PostgreSQL.',
			highlights: [
				'Achieved sub-15ms p99 response times on core balance verification endpoints handling 800+ transactions per second.',
				'Successfully migrated legacy monolithic database to partitioned PostgreSQL cluster with zero user downtime.'
			],
			techUsed: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'gRPC']
		}
	],
	education: [
		{
			degree: 'Bachelor of Computer Engineering (S.T.)',
			institution: 'Institut Teknologi Bandung (ITB)',
			year: '2016 — 2020',
			gpa: '3.82 / 4.00',
			notes: 'Focus on Network Protocols and High-Performance Distributed Computing.'
		}
	],
	projects: [
		{
			id: 'mesh-router',
			title: 'KubeMesh Service Gateway',
			description:
				'Dynamic service mesh and API gateway configured for low-overhead mTLS, automated circuit breaking, and rate limiting.',
			tags: ['Go', 'Kubernetes', 'gRPC', 'Docker', 'Network Security'],
			github: 'https://github.com/rizkypratama/kubemesh',
			featured: true,
			metrics: '<1ms Proxy Overhead'
		},
		{
			id: 'pg-telemetry',
			title: 'PG-Telemetry Observability Engine',
			description:
				'Real-time database query performance analyzer and lock contention visualizer for high-concurrency PostgreSQL instances.',
			tags: ['Rust', 'PostgreSQL', 'TypeScript', 'Grafana'],
			github: 'https://github.com/rizkypratama/pg-telemetry',
			featured: true,
			metrics: 'Live Lock Contention Graph'
		}
	],
	contact: {
		email: 'rizky.pratama@example.com',
		github: 'https://github.com/rizkypratama',
		linkedin: 'https://linkedin.com/in/rizkypratama',
		website: 'https://rizky.cloud'
	},
	languages: ['Bahasa Indonesia (Native)', 'English (Fluent Working)'],
	interests: ['Linux Kernels', 'eBPF Observability', 'Distributed Consensus', 'Trail Running']
};
