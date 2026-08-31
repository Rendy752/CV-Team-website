export interface LinkItem {
	label: string;
	url: string;
}

export interface WorkExperience {
	id: string;
	position: string;
	company: string;
	duration: string;
	description: string;
}

export interface Education {
	id: string;
	institution: string;
	degree: string;
	major: string;
	year: string;
}

export interface Activity {
	id: string;
	position: string;
	organization: string;
	duration: string;
	description: string;
}

export interface SkillCategory {
	category: string;
	skills: string[];
}

export interface ProjectItem {
	id: string;
	slug: string;
	name: string;
	shortDescription: string;
	coverImage: string | null;
	category: string;
	status: string;
	role: string;
	duration: string;
	technologies: string[];
	contribution?: string[];
	screenshots?: string[];
	challenges?: {
		challenge: string;
		solution: string;
	}[];
	result?: string;
	liveDemoUrl?: string;
	sourceCodeUrl?: string;
}

export interface ResumeData {
	slug: string;
	name: string;
	title: string;
	avatarUrl: string;
	address: string;
	addressUrl?: string;
	about: string;
	objectives: string[];
	links: LinkItem[];
	workExperiences: WorkExperience[];
	educations: Education[];
	additionalActivities: Activity[];
	skills: SkillCategory[];
	projects: ProjectItem[];
}