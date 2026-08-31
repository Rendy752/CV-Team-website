export interface ProjectData {
	slug: string;
	title: string;
	type: string;
	description: string;
	duration: string;
	status: string;
	owner: string;
	background: string;
	challenge: {
		title: string;
		desc: string;
	};
	solution: {
		title: string;
		desc: string;
	};
	techStack: string[];
	deployment: string;
}
export interface Project {
	slug: string;
	name: string;
	shortDescription: string;
	coverImage: string;
	category: string;
	status: string;
	role: string;
	duration: string;
	technologies: string[];
}

export interface Education {
	id: string;
	institution: string;
	degree: string;
	major: string;
	year: string;
}

export interface Experience {
	id: string;
	position: string;
	company: string;
	duration: string;
	description: string;
}

export interface Member {
	id: string;
	name: string;
	role: string;
	avatar: string;
	location: string;
	email: string;
	github: string;
	linkedin: string;
	shortIntro: string;
	aboutMe: {
		introduction: string;
		background: string;
		interests: string[];
		goals: string;
	};
	experience: Experience[];
	education: Education[];
	skills: {
		frontend: string[];
		backend: string[];
		database: string[];
		tools: string[];
	};
	projects: Project[];
export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  category: string;
  duration: string;
  status: 'In Progress' | 'Completed' | 'Beta';
  technologies: string[];
  role: string;
  contribution: string[];
  coverImage: string;
  screenshots: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  result: string;
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
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
