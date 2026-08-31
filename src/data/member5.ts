import type { Member } from '$lib/types';

export const member5: Member = {
	id: 'fajar-ramadhan',
	slug: 'fajar-ramadhan',
	name: 'Fajar Ramadhan',
	nickname: 'Fajar',
	role: 'AI & Data Systems Engineer',
	discipline: 'ai',
	avatar:
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
	location: 'Bali, Indonesia',
	yearsOfExperience: 4,
	availability: 'Open for Consultations',
	statusBadge: 'AI & Data Lead',
	shortIntro:
		'Specializing in RAG pipelines, vector search engines, quantized LLM inference, and high-speed data pipelines.',
	bio: 'Machine learning practitioner and data systems engineer focused on practical production AI integrations. Specializes in building low-latency semantic search engines, high-speed data pipelines using Polars & Rust, and fine-tuning domain-specific language models.',
	skills: {
		frontend: ['TypeScript', 'SvelteKit', 'Streamlit', 'Tailwind CSS', 'Chart.js / D3.js'],
		backend: ['Python (FastAPI, Asyncio)', 'Node.js', 'Rust', 'LangChain & LlamaIndex', 'gRPC'],
		database: ['Qdrant (Vector DB)', 'PostgreSQL (pgvector)', 'Pinecone', 'DuckDB', 'ClickHouse'],
		devops: [
			'Docker',
			'Ollama / vLLM',
			'Hugging Face Inference',
			'AWS SageMaker',
			'GitHub Actions'
		],
		tools: ['PyTorch', 'Jupyter Lab', 'Polars', 'Pandas', 'Weights & Biases', 'Git']
	},
	experience: [
		{
			role: 'Senior AI Systems Engineer',
			company: 'Nusantara AI Labs',
			location: 'Denpasar, ID',
			period: '2023 — Present',
			description:
				'Developing high-precision retrieval-augmented generation (RAG) engines and enterprise semantic document search platforms.',
			highlights: [
				'Built a production RAG document intelligence pipeline indexing 12M+ chunks with sub-180ms hybrid search latency.',
				'Fine-tuned open-source LLMs for Indonesian regional dialect translation and domain-specific sentiment classification.'
			],
			techUsed: ['Python', 'FastAPI', 'Qdrant', 'pgvector', 'PyTorch', 'Docker']
		},
		{
			role: 'Data Scientist & ML Engineer',
			company: 'Semesta Data Analytics',
			location: 'Jakarta, ID',
			period: '2021 — 2023',
			description:
				'Trained predictive customer analytics models and optimized high-volume telemetry ingestion pipelines.',
			highlights: [
				'Refactored batch data transformation pipelines to Rust-backed Polars, reducing processing times from 4 hours to 12 minutes.',
				'Designed real-time recommendation scoring service serving 1.5M requests daily.'
			],
			techUsed: ['Python', 'Polars', 'DuckDB', 'FastAPI', 'PostgreSQL']
		}
	],
	education: [
		{
			degree: 'Bachelor of Computational Statistics (S.Stat)',
			institution: 'Universitas Airlangga (UNAIR)',
			year: '2017 — 2021',
			gpa: '3.85 / 4.00',
			notes:
				'Specialization in Machine Learning, Stochastic Processes, and High-Dimensional Vector Search.'
		}
	],
	projects: [
		{
			id: 'rag-kernel',
			title: 'RAGKernel Vector Search Engine',
			description:
				'Modular retrieval engine featuring semantic re-ranking, hybrid sparse-dense search, and multi-model embeddings.',
			tags: ['Python', 'FastAPI', 'pgvector', 'Qdrant', 'AI'],
			github: 'https://github.com/fajarramadhan/rag-kernel',
			featured: true,
			metrics: 'Sub-180ms Latency'
		},
		{
			id: 'polars-flow',
			title: 'PolarsFlow Data Pipeline Scheduler',
			description:
				'Fast, lightweight ETL scheduler built on Rust-backed Polars for lightning-fast dataframe processing and memory efficiency.',
			tags: ['Python', 'Rust', 'DuckDB', 'TypeScript', 'Data Pipeline'],
			github: 'https://github.com/fajarramadhan/polars-flow',
			featured: true,
			metrics: '10x Faster ETL'
		}
	],
	contact: {
		email: 'fajar.ramadhan@example.com',
		github: 'https://github.com/fajarramadhan',
		linkedin: 'https://linkedin.com/in/fajarramadhan',
		website: 'https://fajar.ai'
	},
	languages: ['Bahasa Indonesia (Native)', 'English (Fluent Working)'],
	interests: ['LLM Quantization', 'Vector Database Systems', 'Scuba Diving', 'Astrophotography']
};
