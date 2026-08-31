import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { projects } from '$lib/data/projects'; // Import sumber data

export const GET: RequestHandler = async ({ params }) => {
	const projectSlug = params.slug;

	// Mencari project di dalam array yang slug-nya sama dengan parameter URL
	const projectData = projects.find((project) => project.slug === projectSlug);

	if (projectData) {
		return json(projectData);
	}

	// Lempar error 404 jika project tidak ditemukan di dalam array
	throw error(404, 'Project not found');
};
