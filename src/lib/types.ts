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
