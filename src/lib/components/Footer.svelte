<script lang="ts">
	import { teamInfo, membersList } from '$lib/data/team';
</script>

<footer id="main-footer" class="border-t border-slate-200 bg-white py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
			<!-- Brand Info -->
			<div class="space-y-4 text-left md:col-span-5">
				<div class="flex items-center space-x-3">
					<div
						class="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-xs font-extrabold tracking-wider text-white shadow-xs"
					>
						D5
					</div>
					<div>
						<h3 class="text-sm font-bold text-slate-900">DevFive Engineering Collective</h3>
						<p class="text-xs text-slate-500">
							Didirikan {teamInfo.foundedYear} • 5 Software Engineers
						</p>
					</div>
				</div>
				<p class="max-w-sm text-xs leading-relaxed text-slate-600">
					{teamInfo.description}
				</p>
				<div class="flex items-center space-x-2 pt-1 text-xs text-slate-500">
					<span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
					<span>Struktur data modular & kolaboratif</span>
				</div>
			</div>

			<!-- Individual CV Links -->
			<!-- <div class="space-y-3 text-left md:col-span-4">
				<h4 class="text-xs font-bold tracking-wider text-slate-900 uppercase">
					Curriculum Vitae Anggota
				</h4>
				<ul class="m-0 list-none space-y-2 p-0 text-xs text-slate-600">
					{#each membersList as member}
						<li>
							<a
								href="/resume/{member.slug || member.id}"
								class="group flex items-center justify-between transition-colors hover:text-indigo-600"
							>
								<span class="font-medium">{member.name}</span>
								<span class="text-[11px] text-slate-400">
									{member.role.split('&')[0].trim()}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</div> -->

			<!-- Quick Index -->
			<div class="space-y-3 text-left md:col-span-3">
				<h4 class="text-xs font-bold tracking-wider text-slate-900 uppercase">Tautan Navigasi</h4>
				<ul class="m-0 list-none space-y-2 p-0 text-xs text-slate-600">
					<li><a href="/" class="transition-colors hover:text-indigo-600">Beranda & Tim</a></li>
					<li>
						<a href="/#section-featured-projects" class="transition-colors hover:text-indigo-600"
							>Proyek Unggulan</a
						>
					</li>
					<li>
						<a
							href="https://github.com/haikalassegaf/CV-Team-website"
							target="_blank"
							rel="noreferrer"
							class="transition-colors hover:text-indigo-600"
						>
							GitHub Repository &rarr;
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row"
		>
			<p>
				© {new Date().getFullYear()} DevFive Collective. Dibuat dengan SvelteKit & Tailwind CSS.
			</p>
			<div class="flex items-center space-x-4">
				<a
					href="https://github.com/haikalassegaf/CV-Team-website"
					target="_blank"
					rel="noreferrer"
					class="font-medium text-slate-700 transition-colors hover:text-indigo-600"
				>
					GitHub Repository
				</a>
				<span class="text-slate-300">•</span>
				<span>Open Source Team CV Template</span>
			</div>
		</div>
	</div>
</footer>
