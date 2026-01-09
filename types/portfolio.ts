export type TeamBreakdown = Record<string, number>;

export interface Project {
    id: string;
    title: string;
    featured: boolean;
    budget: number;
    currency: string;
    duration: string;
    company: string;
    location: string;
    description: string;
    teamSize: number;
    teamBreakdown?: TeamBreakdown;
    technologies: string[];
    roiMetrics: { [key: string]: string };
    keyAchievements: string[];
}

export interface CareerMilestone {
    id: string;
    year: string;
    phase: string;
    role: string;
    companies: string[];
    location: string;
    category: string;
    description: string;
    keyAchievements: string[];
    skills: string[];
}

export interface SkillItem {
    name: string;
    proficiency: number;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    verificationUrl?: string;
    featured: boolean;
    award?: boolean;
}

export interface Recommendation {
    name: string;
    role: string;
    text: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    tagline: string;
    subtitle: string;
    bio: string;
    location: string;
    email: string;
    linkedin: string;
    meetingUrl: string;
}

export interface GlobalMetrics {
    budgetManaged: number;
    currency: string;
    projectCount: number;
    stakeholderCount: number;
    maxTeamSize: number;
}

export interface PortfolioData {
    globalMetrics: GlobalMetrics;
    projects: Project[];
    careerTimeline: CareerMilestone[];
    skills: SkillCategory[];
    recommendations: Recommendation[];
    certifications: Certification[];
    personalInfo: PersonalInfo;
}
