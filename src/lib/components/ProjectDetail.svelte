<script lang="ts">
	import type { ProjectData } from '$lib/types';

	let { project }: { project: ProjectData } = $props();
</script>

<main class="min-h-screen bg-[#fafbfc] p-6 font-sans text-gray-800 md:p-12 lg:px-24">
		<header class="mx-auto max-w-7xl space-y-6">
		<div class="flex flex-wrap items-center justify-between text-sm font-medium text-gray-500">
			<a href="#" class="border-b border-gray-400 pb-0.5 transition-colors hover:text-gray-800">
				&larr; Back to Member Profile
			</a>
			<span class="text-xs tracking-wider uppercase opacity-70"
				>route: team / profile / project</span
			>
		</div>

		<div class="flex flex-wrap items-center justify-between text-sm font-medium text-gray-500">
			<a href="#" class="transition-colors hover:text-gray-800">
				&larr; Back to {project.owner.split(' ')[0]}'s Profile
			</a>
			<span class="text-xs tracking-wider uppercase opacity-70"
				>case: {project.title.toLowerCase().replace(/ /g, '-')}</span
			>
		</div>
	</header>

	<!-- Hero Section -->
	<section class="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
		<!-- Left: Content -->
		<div>
			<div
				class="mb-6 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-wide text-blue-600"
			>
				{project.type}
			</div>

			<h1 class="mb-4 text-4xl leading-tight font-black tracking-tight text-gray-900 md:text-5xl">
				{project.title}
			</h1>

			<p class="mb-8 text-lg leading-relaxed text-gray-600">
				{project.description}
			</p>

			<!-- Info Stats Card -->
			<div
				class="mb-8 flex flex-wrap gap-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
			>
				<div>
					<p class="mb-1 text-[10px] font-bold tracking-wider text-gray-400 uppercase">Duration</p>
					<p class="text-sm font-semibold text-gray-800">{project.duration}</p>
				</div>
				<div>
					<p class="mb-1 text-[10px] font-bold tracking-wider text-gray-400 uppercase">Status</p>
					<p class="flex items-center gap-2 text-sm font-semibold text-gray-800">
						<span class="h-2 w-2 rounded-full bg-emerald-500"></span>
						{project.status}
					</p>
				</div>
				<div>
					<p class="mb-1 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
						Contributor / Owner
					</p>
					<p class="text-sm font-semibold text-gray-800">{project.owner}</p>
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-wrap gap-4">
				<button
					class="flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-gray-200 transition-colors hover:bg-black"
				>
					<svg class="h-4 w-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path></svg
					>
					LAUNCH LIVE DEMO
					<svg class="ml-1 h-4 w-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						></path></svg
					>
				</button>
				<button
					class="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-800 shadow-sm transition-colors hover:border-gray-300"
				>
					<svg class="h-4 w-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path></svg
					>
					VIEW SOURCE CODE
				</button>
			</div>
		</div>

		<!-- Right: Image -->
		<div class="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
			<img
				src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
				alt="Team working on project"
				class="h-full w-full object-cover"
			/>
			<div class="absolute right-4 bottom-4 rounded-xl bg-black/60 p-2 text-white backdrop-blur-sm">
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					></path></svg
				>
			</div>
		</div>
	</section>

	<!-- Body Section -->
	<section class="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-12 lg:mt-32 lg:grid-cols-3">
		<!-- Left Column -->
		<div class="lg:col-span-2">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">Project Background</h2>
			<p class="mb-10 leading-relaxed text-gray-600">
				{project.background}
			</p>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<!-- Challenge Card -->
				<div
					class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
				>
					<div
						class="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-orange-500 uppercase"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							></path></svg
						>
						The Challenge
					</div>
					<h3 class="mb-3 text-lg font-bold text-gray-900">{project.challenge.title}</h3>
					<p class="text-sm leading-relaxed text-gray-600">{project.challenge.desc}</p>
				</div>

				<!-- Solution Card -->
				<div
					class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
				>
					<div
						class="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-500 uppercase"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							></path></svg
						>
						The Solution
					</div>
					<h3 class="mb-3 text-lg font-bold text-gray-900">{project.solution.title}</h3>
					<p class="text-sm leading-relaxed text-gray-600">{project.solution.desc}</p>
				</div>
			</div>
		</div>

		<!-- Right Column -->
		<div class="lg:col-span-1">
			<div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
				<h2 class="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900">
					<svg class="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						></path></svg
					>
					Technology Stack
				</h2>

				<hr class="mb-6 border-gray-100" />

				<div class="mb-8">
					<h4 class="mb-4 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
						Architecture Stack
					</h4>
					<div class="flex flex-wrap gap-2">
						{#each project.techStack as tech}
							<span
								class="rounded-md border border-gray-100 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>

				<div>
					<h4 class="mb-2 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
						Deployment Target
					</h4>
					<p class="text-sm font-medium text-gray-800">{project.deployment}</p>
				</div>
			</div>
		</div>
	</section>
</main>
