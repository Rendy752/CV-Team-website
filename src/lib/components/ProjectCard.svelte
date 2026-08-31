<script lang="ts">
  import type { ProjectItem } from '$lib/types/resume';

  let { project }: { project: ProjectItem } = $props();

  const statusStyles: Record<string, string> = {
    Completed: 'bg-slate-900/80 text-white',
    Beta: 'bg-slate-900/80 text-white',
    'In Progress': 'bg-blue-600 text-white'
  };
</script>

<article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
  <div>
    <!-- Gambar Thumbnail + Status Badge -->
    <div class="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
      <img 
        src={project.imageThumbnail} 
        alt={project.title} 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <span class="absolute top-3 right-3 px-3 py-0.5 rounded-full text-xs font-medium backdrop-blur-xs {statusStyles[project.status]}">
        {project.status}
      </span>
    </div>

    <!-- Konten Card -->
    <div class="p-5 sm:p-6 space-y-4">
      <div>
        <p class="text-[11px] font-bold tracking-wider text-indigo-600 uppercase">
          {project.category}
        </p>
        <h3 class="text-lg sm:text-xl font-bold text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      <!-- Role Container -->
      <div class="bg-slate-50 border border-slate-100 p-3 rounded-xl">
        <span class="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
          MY PROJECT ROLE:
        </span>
        <p class="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
          {project.role}
        </p>
      </div>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-1.5 pt-1">
        {#each project.techStack as tech (tech)}
          <span class="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded-md">
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