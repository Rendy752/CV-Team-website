export interface Project {
	id: string;
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
}
