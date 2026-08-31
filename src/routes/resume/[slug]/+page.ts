import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`/data/${params.slug}.json`);

	if (!res.ok) {
		throw error(404, {
			message: `Resume dengan slug "${params.slug}" tidak ditemukan`
		});
	}

	const resume = await res.json();

	return {
		resume
	};
};
