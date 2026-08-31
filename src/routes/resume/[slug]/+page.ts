import { error } from '@sveltejs/kit';
import { RESUMES } from '$lib/data/resumes';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const resume = RESUMES.find((item) => item.slug === params.slug);

	if (!resume) {
		throw error(404, {
			message: `Resume with slug "${params.slug}" not found`
		});
	}

	return {
		resume
	};
};
