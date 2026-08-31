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
  shortIntro: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  aboutMe: {
    introduction: string;
    background: string;
    interests: string[];
    goals: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
}

export interface TeamWorkflowStep {
  title: string;
  description: string;
}

export interface TeamCollaborationNode {
  role: string;
  description: string;
  memberId: string;
  memberName: string;
}

export interface TeamInfo {
  name: string;
  tagline: string;
  description: string;
  aboutGroup: string;
  whyCreated: string;
  groupInterests: string[];
  groupGoals: string[];
  expertise: {
    frontend: string[];
    backend: string[];
    database: string[];
    mobile: string[];
  };
  workflow: TeamWorkflowStep[];
  collaboration: TeamCollaborationNode[];
}