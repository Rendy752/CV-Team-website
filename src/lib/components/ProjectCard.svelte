<script lang="ts">
	import type { ProjectItem } from '$lib/types/resume';

	let { project }: { project: ProjectItem } = $props();

	const statusStyles: Record<string, string> = {
		Completed: 'bg-slate-900/80 text-white',
		Beta: 'bg-slate-900/80 text-white',
		'In Progress': 'bg-blue-600 text-white'
	};
</script>

<article
	class="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-md"
>
	<div>
		<!-- Gambar Thumbnail + Status Badge -->
		<div class="relative h-48 w-full overflow-hidden bg-slate-100 sm:h-56">
			<img
				src={project.imageThumbnail}
				alt={project.title}
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
			<span
				class="absolute top-3 right-3 rounded-full px-3 py-0.5 text-xs font-medium backdrop-blur-xs {statusStyles[
					project.status
				]}"
			>
				{project.status}
			</span>
		</div>

		<!-- Konten Card -->
		<div class="space-y-4 p-5 sm:p-6">
			<div>
				<p class="text-[11px] font-bold tracking-wider text-indigo-600 uppercase">
					{project.category}
				</p>
				<h3
					class="mt-1 text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-xl"
				>
					{project.title}
				</h3>
				<p class="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
					{project.description}
				</p>
			</div>

			<!-- Role Container -->
			<div class="rounded-xl border border-slate-100 bg-slate-50 p-3">
				<span class="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
					MY PROJECT ROLE:
				</span>
				<p class="mt-0.5 text-xs font-semibold text-slate-800 sm:text-sm">
					{project.role}
				</p>
			</div>

			<!-- Tech Stack Tags -->
			<div class="flex flex-wrap gap-1.5 pt-1">
				{#each project.techStack as tech (tech)}
					<span
						class="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600"
					>
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</div>

  <!-- Footer Link & Duration -->
  <div class="px-5 sm:px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50 text-xs">
    <span class="text-slate-400">Duration: {project.duration}</span>
    <a 
      href={project.slug || '#'} 
      class="font-bold text-slate-900 hover:text-indigo-600 flex items-center gap-1 transition-colors"
    >
      View Case Study <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</article>
