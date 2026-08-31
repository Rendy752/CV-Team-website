import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getMemberBySlug } from '$lib/data/team';

export const load: PageLoad = async ({ params }) => {
	const member = getMemberBySlug(params.slug);

	if (!member) {
		throw error(404, `Anggota tim dengan slug '${params.slug}' tidak ditemukan.`);
	}

	return {
		member
	};
};
