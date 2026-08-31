import type { Member, TeamInfo } from '$lib/types';
import { member1 } from './member1';
import { member2 } from './member2';
import { member3 } from './member3';
import { member4 } from './member4';
import { member5 } from './member5';

export const membersList: Member[] = [member1, member2, member3, member4, member5];

export const teamInfo: TeamInfo = {
	name: 'DevFive Engineering Collective',
	shortName: 'DevFive',
	tagline: 'High-Performance Web, Cloud, Mobile & AI Engineering',
	headline: 'Architecting Scalable Digital Systems with Precision Craftsmanship',
	description:
		'Kami adalah tim pengembang perangkat lunak yang berfokus pada pembangunan aplikasi web modern, sistem cloud berskala besar, aplikasi mobile lintas platform, dan pipeline kecerdasan buatan.',
	foundedYear: 2023,
	stats: [
		{ label: 'Insinyur Inti', value: '5 Spesialis', subtext: 'Full-stack & AI' },
		{ label: 'Total Pengalaman', value: '25+ Tahun', subtext: 'Lintas industri' },
		{ label: 'Proyek Selesai', value: '10+ Sistem', subtext: 'Open-source & Enterprise' },
		{ label: 'Kualitas & Aksesibilitas', value: '100%', subtext: 'Standar tinggi' }
	]
};

export function getMemberById(id: string): Member | undefined {
	return membersList.find(
		(m) =>
			m.id.toLowerCase() === id.toLowerCase() ||
			(m.slug && m.slug.toLowerCase() === id.toLowerCase()) ||
			(m.nickname && m.nickname.toLowerCase() === id.toLowerCase())
	);
}

export function getMemberBySlug(slug: string): Member | undefined {
	return getMemberById(slug);
}

export function getAllProjects() {
	return membersList.flatMap((m) =>
		m.projects.map((p) => ({
			...p,
			authorId: m.id,
			authorName: m.name,
			authorRole: m.role,
			authorAvatar: m.avatar,
			authorDiscipline: m.discipline
		}))
	);
}

export const allProjects = getAllProjects();

export const disciplinesList = [
	{ id: 'all', label: 'Semua Anggota', count: 5 },
	{ id: 'lead', label: 'Tech Lead & Architecture', count: 1 },
	{ id: 'frontend', label: 'UI/UX & Frontend', count: 1 },
	{ id: 'backend', label: 'Cloud & Infrastructure', count: 1 },
	{ id: 'mobile', label: 'Mobile & Cross-Platform', count: 1 },
	{ id: 'ai', label: 'AI & Data Systems', count: 1 }
];
