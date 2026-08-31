import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ResumeData } from '$lib/types/resume';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/resume/${params.slug}`);

	if (!response.ok) {
		throw error(response.status, 'Gagal mengambil data resume');
	}

	const resume = (await response.json()) as ResumeData;

	return {
		resume
	};
};
