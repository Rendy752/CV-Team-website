export interface LinkItem {
	id: string;
	name: string;
	url: string;
}

export interface WorkExperience {
	id: number;
	companyName: string;
	location?: string;
	years: string;
	roles: string;
	jobDesc: string[];
	type: string;
}

export interface Education {
	id: number;
	title: string;
	schoolName: string;
	location: string;
	years: string;
}

export interface Activity {
	type: string;
	activities: string[];
}

export interface SkillCategory {
	type: string;
	tools: string[];
}

export interface ProjectItem {
	slug: string;
	category: string;
	title: string;
	status: 'Completed' | 'Beta' | 'In Progress';
	description: string;
	imageThumbnail: string;
	role: string;
	techStack: string[];
	duration: string;
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
