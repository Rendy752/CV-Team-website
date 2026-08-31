export type Discipline = 'all' | 'fullstack' | 'ai-iot' | 'backend' | 'mobile';

export interface AboutMe {
	introduction?: string;
	background?: string;
	interests?: string[];
	goals?: string;
}

export interface Education {
	id?: string;
	institution: string;
	degree: string;
	major?: string;
	year: string;
	gpa?: string;
	notes?: string;
}

export interface Experience {
	id?: string;
	role?: string;
	position?: string;
	company: string;
	location?: string;
	period?: string;
	duration?: string;
	description: string;
	highlights?: string[];
	techUsed?: string[];
}

export interface ProjectChallenge {
	challenge: string;
	solution: string;
}

export interface Project {
	id: string;
	name?: string;
	title?: string;
	authorId?: string;
	shortDescription?: string;
	description?: string;
	category?: string;
	duration?: string;
	status?: string;
	technologies?: string[];
	tags?: string[];
	role?: string;
	contribution?: string[];
	coverImage?: string;
	image?: string;
	screenshots?: string[];
	challenges?: ProjectChallenge[];
	result?: string;
	liveDemoUrl?: string;
	sourceCodeUrl?: string;
	github?: string;
	link?: string;
	metrics?: string;
	featured?: boolean;
}

export interface SocialLinks {
	email?: string;
	github?: string;
	linkedin?: string;
	website?: string;
}

export interface Member {
	id: string;
	slug?: string;
	name: string;
	nickname?: string;
	role: string;
	discipline?: Discipline;
	avatar: string;
	location: string;
	email?: string;
	github?: string;
	linkedin?: string;
	yearsOfExperience?: number | string;
	availability?: string;
	shortIntro: string;
	bio?: string;
	aboutMe?: AboutMe;
	skills: {
		frontend: string[];
		backend: string[];
		database: string[];
		tools: string[];
		devops?: string[];
	};
	education: Education[];
	experience: Experience[];
	projects: Project[];
	contact?: SocialLinks;
	languages?: string[];
	interests?: string[];
}

export interface TeamInfo {
	name: string;
	shortName: string;
	tagline: string;
	headline: string;
	description: string;
	foundedYear: number;
	stats: {
		label: string;
		value: string;
		subtext?: string;
	}[];
}
