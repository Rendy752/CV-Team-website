<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let resume = $derived(data.resume);
</script>

<div class="space-y-12">
	<!-- Section Projects I've Worked On -->
	<section class="space-y-6">
		<!-- Header Section Sesuai Desain -->
		<div class="space-y-1">
			<span class="text-xs font-bold tracking-widest text-indigo-600 uppercase">
				PORTFOLIO CONTRIBUTIONS
			</span>
			<h2 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
				Projects I've Worked On
			</h2>
			<p class="max-w-2xl text-xs text-slate-500 sm:text-sm">
				Below are select professional projects delivered or contributed to by {resume.name.split(
					' '
				)[0]}. Click any card to explore a thorough case study, the specific challenge faced, and
				our solution.
			</p>
		</div>

		<!-- 1 Blok Markup -> N Hasil (Mobile-First: 1 kolom di HP, 2 kolom di tablet/desktop) -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each resume.projects as project (project.id)}
				<ProjectCard {project} />
			{:else}
				<div
					class="col-span-2 rounded-2xl border-2 border-dashed border-slate-200 py-12 text-center"
				>
					<p class="text-sm text-slate-400">Belum ada project yang ditambahkan untuk profil ini.</p>
				</div>
			{/each}
		</div>
	</section>
</div>
