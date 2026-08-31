import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ProjectData } from '$lib/types';

export const load: PageLoad = async ({ fetch, params }) => {
	// Gunakan params.slug menyesuaikan dengan nama folder
	const response = await fetch(`/api/project/${params.slug}`);

	if (!response.ok) {
		throw error(response.status, 'Gagal mengambil data project');
	}

	const project = (await response.json()) as ProjectData;

	return {
		project
	};
};
