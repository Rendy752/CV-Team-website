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
	tagline: 'High-Performance Web, IoT, Cloud, Mobile & AI Engineering',
	headline: 'Kolektif 5 Pengembang Perangkat Lunak, IoT & AI',
	description:
		'Kolektif 5 insinyur perangkat lunak dengan berbagai keahlian: Full Stack Development, IoT & Sistem Cerdas, Keamanan Siber & Cloud, Mobile Application, serta Machine Learning.',
	foundedYear: 2023,
	stats: [
		{ label: 'Insinyur Inti', value: '5 Rekan', subtext: 'Fullstack, IoT, AI & Mobile' },
		{ label: 'Total Proyek', value: '10+ Proyek', subtext: 'Penelitian, Web, IoT & Mobile' },
		{ label: 'Pendidikan', value: 'S1 & D3', subtext: 'Informatika & Telekomunikasi' },
		{ label: 'Status Tim', value: 'Tersedia', subtext: 'Proyek & Kolaborasi' }
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
			authorSlug: m.slug || m.id,
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
	{ id: 'fullstack', label: 'Full Stack Developer', count: 3 },
	{ id: 'ai-iot', label: 'IoT & AI Engineering', count: 1 },
	{ id: 'mobile', label: 'Mobile & Programming', count: 1 }
];
