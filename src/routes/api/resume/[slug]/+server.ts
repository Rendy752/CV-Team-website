import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { resumes } from '$lib/data/resumes';

export const GET: RequestHandler = async ({ params }) => {
    const resumeSlug = params.slug;

    const resumeData = resumes.find((resume) => resume.slug === resumeSlug);

    if (resumeData) {
        return json(resumeData);
    }

    throw error(404, 'Resume not found');
};
