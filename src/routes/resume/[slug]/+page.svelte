<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve, resolveRoute } from '$app/paths';
	import { page } from '$app/state';
	import { fade, fly } from 'svelte/transition';
	import {
		MapPin,
		Mail,
		ArrowLeft,
		Briefcase,
		GraduationCap,
		Code,
		Layout,
		Database,
		Wrench
	} from '@lucide/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let resume = $derived(data.resume);
	let slug = $derived(page.params.slug);
</script>

<svelte:head>
	<title>{resume.name} — Resume</title>
	<meta name="description" content={resume.shortIntro} />
</svelte:head>

<Navbar currentTab="home" selectedMemberId={slug} onBackToTeam={() => goto('/')} />

<div
	id="member-profile-page"
	class="min-h-screen space-y-16 bg-slate-50 py-8 lg:py-12"
	in:fade={{ duration: 200 }}
>
	<!-- 1. Header / Profile Block -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Back Button -->
		<div class="mb-6">
			<button
				onclick={() => goto(resolve('/'))}
				class="group inline-flex cursor-pointer items-center text-xs font-bold text-slate-500 transition-colors hover:text-slate-900"
			>
				<ArrowLeft class="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-1" />
				<span>← Back to Our Team</span>
			</button>
		</div>

		<!-- Profile Card Header -->
		<div
			class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10"
			in:fly={{ y: 20, duration: 300, delay: 100 }}
		>
			<div class="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
				<!-- Avatar -->
				<div
					class="h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm sm:h-44 sm:w-44"
				>
					<img
						src={resume.avatar}
						alt={resume.name}
						referrerpolicy="no-referrer"
						class="h-full w-full object-cover"
						loading="eager"
					/>
				</div>

				<!-- Core Details -->
				<div class="flex-1 space-y-4 text-center md:text-left">
					<div class="space-y-1">
						<h1 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
							{resume.name}
						</h1>
						<span class="block text-xs font-bold tracking-widest text-indigo-600 uppercase">
							{resume.role}
						</span>
					</div>

					<p class="max-w-2xl text-xs leading-relaxed font-normal text-slate-600 sm:text-sm">
						{resume.shortIntro}
					</p>

					<!-- Location & Email -->
					<div
						class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-slate-100 pt-3 text-xs text-slate-500 md:justify-start"
					>
						<span class="flex items-center space-x-1">
							<MapPin class="h-3.5 w-3.5 text-slate-400" />
							<span>{resume.location}</span>
						</span>
						<span class="hidden text-slate-300 sm:inline">|</span>
						<a
							href={`mailto:${resume.email}`}
							class="flex items-center space-x-1 transition-colors hover:text-slate-900"
						>
							<Mail class="h-3.5 w-3.5 text-slate-400" />
							<span>{resume.email}</span>
						</a>
					</div>

					<!-- Social Links -->
					<div class="flex items-center justify-center space-x-3 pt-2 md:justify-start">
						<a
							href={resume.github}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center space-x-1.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all hover:bg-white hover:text-slate-900 hover:shadow-sm"
						>
							<!-- GitHub SVG -->
							<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path
									d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
								/>
							</svg>
							<span>GitHub</span>
						</a>
						<a
							href={resume.linkedin}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center space-x-1.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all hover:bg-white hover:text-slate-900 hover:shadow-sm"
						>
							<!-- LinkedIn SVG -->
							<svg
								class="h-3.5 w-3.5 text-blue-600"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
							<span>LinkedIn</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 2. Main Content: Left (About/Exp/Edu) + Right (Skills) -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
			<!-- Left Panel -->
			<div class="space-y-12 lg:col-span-8">
				<!-- About Me -->
				<section class="space-y-4 border-b border-slate-100 pb-10 text-left">
					<h2 class="text-xl font-bold tracking-tight text-slate-900">About Me</h2>
					<div class="space-y-4 text-xs leading-relaxed font-normal text-slate-600">
						<p>{resume.aboutMe.introduction}</p>
						<p>{resume.aboutMe.background}</p>

						<div class="pt-2">
							<span class="mb-2 block font-bold text-slate-800">My Top Core Interests:</span>
							<div class="flex flex-wrap gap-2">
								{#each resume.aboutMe.interests as interest}
									<span
										class="rounded-full border border-slate-100 bg-white px-2.5 py-1 font-semibold text-slate-600 shadow-sm"
									>
										{interest}
									</span>
								{/each}
							</div>
						</div>

						<div class="pt-2">
							<span class="mb-1 block font-bold text-slate-800">Professional Goal:</span>
							<p class="text-slate-500 italic">"{resume.aboutMe.goals}"</p>
						</div>
					</div>
				</section>

				<!-- Experience -->
				<section class="space-y-6 border-b border-slate-100 pb-10 text-left">
					<div class="flex items-center space-x-2 text-slate-900">
						<Briefcase class="h-5 w-5 text-indigo-600" />
						<h2 class="text-xl font-bold tracking-tight">Professional Experience</h2>
					</div>
					<div class="relative space-y-8 border-l-2 border-slate-200 pl-6">
						{#each resume.experience as exp (exp)}
							<div class="relative">
								<div
									class="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-slate-50 bg-indigo-600 shadow-sm"
								></div>
								<div class="space-y-1.5">
									<div class="flex flex-col gap-y-1 sm:flex-row sm:items-center sm:justify-between">
										<h3 class="text-sm font-bold text-slate-900">{exp.position}</h3>
										<span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase"
											>{exp.duration}</span
										>
									</div>
									<span class="text-xs font-semibold text-indigo-600">{exp.company}</span>
									<p class="text-xs leading-relaxed font-normal text-slate-600">
										{exp.description}
									</p>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Education -->
				<section class="space-y-6 text-left">
					<div class="flex items-center space-x-2 text-slate-900">
						<GraduationCap class="h-5 w-5 text-indigo-600" />
						<h2 class="text-xl font-bold tracking-tight">Education Background</h2>
					</div>
					<div class="relative space-y-8 border-l-2 border-slate-200 pl-6">
						{#each resume.education as edu (edu)}
							<div class="relative">
								<div
									class="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-slate-50 bg-emerald-500 shadow-sm"
								></div>
								<div class="space-y-1.5">
									<div class="flex flex-col gap-y-1 sm:flex-row sm:items-center sm:justify-between">
										<h3 class="text-sm font-bold text-slate-900">{edu.institution}</h3>
										<span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase"
											>{edu.year}</span
										>
									</div>
									<span class="text-xs font-semibold text-slate-500">
										{edu.degree} &middot; {edu.major}
									</span>
								</div>
							</div>
						{/each}
					</div>
				</section>
			</div>

			<!-- Right Panel: Skills Sidebar -->
			<div class="space-y-6 lg:col-span-4">
				<div class="space-y-6 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm">
					<div class="flex items-center space-x-2 border-b border-slate-100 pb-3">
						<Code class="h-5 w-5 text-indigo-600" />
						<h2 class="text-base font-bold tracking-tight text-slate-900">Technical Skillset</h2>
					</div>

					<!-- Frontend -->
					{#if resume.skills.frontend?.length}
						<div class="space-y-2">
							<span class="flex items-center text-xs font-bold text-slate-700">
								<Layout class="mr-1.5 h-3.5 w-3.5 text-pink-500" />
								Frontend
							</span>
							<div class="flex flex-wrap gap-1.5">
								{#each resume.skills.frontend as s}
									<span
										class="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
										>{s}</span
									>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Backend -->
					{#if resume.skills.backend?.length}
						<div class="space-y-2">
							<span class="flex items-center text-xs font-bold text-slate-700">
								<Briefcase class="mr-1.5 h-3.5 w-3.5 text-blue-500" />
								Backend
							</span>
							<div class="flex flex-wrap gap-1.5">
								{#each resume.skills.backend as s}
									<span
										class="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
										>{s}</span
									>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Database -->
					{#if resume.skills.database?.length}
						<div class="space-y-2">
							<span class="flex items-center text-xs font-bold text-slate-700">
								<Database class="mr-1.5 h-3.5 w-3.5 text-violet-500" />
								Database
							</span>
							<div class="flex flex-wrap gap-1.5">
								{#each resume.skills.database as s}
									<span
										class="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
										>{s}</span
									>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Tools -->
					{#if resume.skills.tools?.length}
						<div class="space-y-2">
							<span class="flex items-center text-xs font-bold text-slate-700">
								<Wrench class="mr-1.5 h-3.5 w-3.5 text-amber-500" />
								Tools & Services
							</span>
							<div class="flex flex-wrap gap-1.5">
								{#each resume.skills.tools as s}
									<span
										class="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
										>{s}</span
									>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<!-- Workspace File Info -->
				<div
					class="space-y-1 rounded-2xl border border-dashed border-slate-200 bg-white p-4 text-left text-xs leading-normal text-slate-500 shadow-sm"
				>
					<span class="block font-bold text-slate-700">Workspace Code Location:</span>
					<p>Data CV developer ini tersimpan dan dapat diedit di file:</p>
					<code
						class="mt-1 block truncate rounded border border-slate-100 bg-slate-50 p-1 font-mono text-[10px] text-slate-600"
					>
						static/data/{slug}.json
					</code>
				</div>
			</div>
		</div>
	</div>

	<!-- 3. Projects Grid -->
	<div class="mx-auto max-w-7xl border-t border-slate-100 px-4 pt-16 sm:px-6 lg:px-8">
		<div class="mb-10 space-y-1.5 text-left">
			<span class="block text-[10px] font-bold tracking-widest text-indigo-600 uppercase">
				Portfolio Contributions
			</span>
			<h2 class="text-2xl font-extrabold tracking-tight text-slate-900">Projects I've Worked On</h2>
			<p class="text-xs leading-relaxed font-normal text-slate-500">
				Below are select professional projects delivered or contributed to by {resume.name.split(
					' '
				)[0]}. Click any card to explore a thorough case study, the specific challenge faced, and
				our solution.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each resume.projects as project (project.slug)}
				<div
					class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white text-left shadow-sm transition-all hover:border-indigo-200 hover:shadow-xl"
				>
					<!-- Cover Image -->
					<div class="relative h-56 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
						<img
							src={project.coverImage}
							alt={project.name}
							referrerpolicy="no-referrer"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<div
							class="absolute top-4 right-4 rounded-full border border-white/10 bg-slate-900/90 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm"
						>
							{project.status}
						</div>
					</div>

					<!-- Card Body -->
					<div class="space-y-4 p-6">
						<div class="space-y-1">
							<span class="block text-[10px] font-bold tracking-widest text-indigo-600 uppercase">
								{project.category}
							</span>
							<h3 class="text-xl leading-tight font-bold tracking-tight text-slate-900">
								{project.name}
							</h3>
						</div>

						<p class="line-clamp-2 text-xs leading-relaxed font-normal text-slate-600">
							{project.shortDescription}
						</p>

						<div
							class="flex flex-col space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-3.5"
						>
							<span class="text-[9px] font-bold tracking-wider text-slate-400 uppercase"
								>My Project Role:</span
							>
							<span class="text-xs font-semibold text-slate-800">{project.role}</span>
						</div>

						<div class="flex flex-wrap gap-1.5 pt-1">
							{#each project.technologies as tech}
								<span
									class="rounded border border-slate-100 bg-white px-2 py-0.5 text-[9px] font-semibold text-slate-600 shadow-sm"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>

					<!-- Card Footer -->
					<div
						class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-6 py-4"
					>
						<span class="font-mono text-[10px] text-slate-400">
							Duration: {project.duration}
						</span>

						<a
							href={`/project/${project.slug}`}
							class="cursor-pointer text-xs font-bold text-slate-900 transition-colors group-hover:text-indigo-600"
						>
							View Detail &rarr;
						</a>
					</div>
				</a>
			{:else}
				<div
					class="col-span-2 rounded-2xl border-2 border-dashed border-slate-200 py-12 text-center"
				>
					<p class="text-sm text-slate-400">Belum ada project yang ditambahkan.</p>
				</div>
			{/each}
		</div>
	</div>
</div>
