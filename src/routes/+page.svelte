<script lang="ts">
	import { membersList, disciplinesList, allProjects } from '$lib/data/team';
	import type { Member, Discipline } from '$lib/types';
	import Hero from '$lib/components/Hero.svelte';
	import MemberCard from '$lib/components/MemberCard.svelte';
	import MemberCVModal from '$lib/components/MemberCVModal.svelte';

	let selectedDiscipline = $state<Discipline>('all');
	let searchQuery = $state<string>('');
	let viewMode = $state<'grid' | 'table'>('grid');

	// Active member for quick modal preview
	let activeModalMember = $state<Member | null>(null);

	let filteredMembers = $derived(
		membersList.filter((m) => {
			const matchesDiscipline =
				selectedDiscipline === 'all' || m.discipline === selectedDiscipline;
			const query = searchQuery.trim().toLowerCase();
			if (!query) return matchesDiscipline;

			const matchesName = m.name.toLowerCase().includes(query);
			const matchesRole = m.role.toLowerCase().includes(query);
			const matchesSkills = [
				...m.skills.frontend,
				...m.skills.backend,
				...m.skills.database,
				...m.skills.tools,
				...(m.skills.devops || [])
			].some((s) => s.toLowerCase().includes(query));

			return matchesDiscipline && (matchesName || matchesRole || matchesSkills);
		})
	);

	function openMemberModal(m: Member) {
		activeModalMember = m;
	}

	function closeMemberModal() {
		activeModalMember = null;
	}

	let featuredProjects = $derived(allProjects);
</script>

<svelte:head>
	<title>DevFive — Portfolio & CV Kolektif 5 Pengembang</title>
	<meta
		name="description"
		content="Portofolio resmi dan Curriculum Vitae kolektif 5 insinyur perangkat lunak: Full Stack, IoT & AI, Cybersecurity, Mobile, dan Machine Learning."
	/>
</svelte:head>

<div class="space-y-12">
	<!-- Hero Header with Direct Face Selection -->
	<Hero onSelectMember={openMemberModal} />

	<!-- Main Team Section -->
	<section id="section-team-directory" class="mx-auto max-w-6xl px-4 sm:px-6 text-left space-y-6">
		<!-- Section Header & Filter Controls -->
		<div
			class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end border-b border-slate-200/80 pb-5"
		>
			<div>
				<div
					class="inline-flex items-center space-x-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1"
				>
					<span class="h-2 w-2 rounded-full bg-indigo-600"></span>
					<span>Direktori Tim</span>
				</div>
				<h2 class="text-2xl font-bold tracking-tight text-slate-900">
					5 Anggota & Spesialisasi
				</h2>
			</div>

			<!-- Search & View Mode Switcher -->
			<div class="flex flex-wrap items-center gap-3">
				<!-- Search -->
				<div class="relative min-w-[220px]">
					<input
						id="input-search-member"
						type="text"
						bind:value={searchQuery}
						placeholder="Cari nama, role, atau skill..."
						class="w-full rounded-xl border border-slate-200 bg-white py-2 pr-3 pl-8 text-xs text-slate-800 placeholder-slate-400 shadow-2xs focus:border-indigo-500 focus:outline-none"
					/>
					<svg
						class="absolute top-2.5 left-2.5 h-3.5 w-3.5 text-slate-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>

				<!-- Grid / Table View Toggle -->
				<div class="flex items-center rounded-xl border border-slate-200 bg-white p-1 shadow-2xs">
					<button
						id="btn-view-grid"
						onclick={() => (viewMode = 'grid')}
						aria-label="Tampilan Kartu"
						class="cursor-pointer rounded-lg p-1.5 transition-colors {viewMode === 'grid'
							? 'bg-slate-900 text-white'
							: 'text-slate-500 hover:text-slate-900'}"
					>
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
							/>
						</svg>
					</button>
					<button
						id="btn-view-table"
						onclick={() => (viewMode = 'table')}
						aria-label="Tampilan Tabel"
						class="cursor-pointer rounded-lg p-1.5 transition-colors {viewMode === 'table'
							? 'bg-slate-900 text-white'
							: 'text-slate-500 hover:text-slate-900'}"
					>
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 10h16M4 14h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Discipline Filter Buttons -->
		<div class="flex flex-wrap gap-2 overflow-x-auto pb-1">
			{#each disciplinesList as disc}
				<button
					id="filter-disc-{disc.id}"
					onclick={() => (selectedDiscipline = disc.id as Discipline)}
					class="cursor-pointer rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all {selectedDiscipline ===
					disc.id
						? 'bg-slate-900 text-white shadow-xs'
						: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}"
				>
					{disc.label}
				</button>
			{/each}
		</div>

		<!-- Members Display: Grid View -->
		{#if viewMode === 'grid'}
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredMembers as member (member.id)}
					<MemberCard {member} onSelect={() => openMemberModal(member)} />
				{/each}
			</div>
		{:else}
			<!-- Table View -->
			<div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
				<table class="w-full text-left text-xs">
					<thead
						class="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500"
					>
						<tr>
							<th class="px-5 py-3.5">Nama & Profil</th>
							<th class="px-5 py-3.5">Peran</th>
							<th class="px-5 py-3.5">Keahlian Kunci</th>
							<th class="px-5 py-3.5">Lokasi</th>
							<th class="px-5 py-3.5 text-right">Aksi</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-slate-100">
						{#each filteredMembers as member}
							<tr class="hover:bg-slate-50/80 transition-colors">
								<td class="px-5 py-4">
									<div class="flex items-center space-x-3">
										<img
											src={member.avatar}
											alt={member.name}
											class="h-9 w-9 rounded-lg object-cover ring-1 ring-slate-200"
										/>
										<div>
											<p class="font-bold text-slate-900">{member.name}</p>
											<p class="text-[11px] text-slate-500">
												{member.yearsOfExperience} Pengalaman
											</p>
										</div>
									</div>
								</td>
								<td class="px-5 py-4 font-medium text-slate-800">{member.role}</td>
								<td class="px-5 py-4">
									<div class="flex flex-wrap gap-1">
										{#each member.skills.frontend.slice(0, 2) as skill}
											<span
												class="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
											>
												{skill}
											</span>
										{/each}
										{#each member.skills.backend.slice(0, 1) as skill}
											<span
												class="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
											>
												{skill}
											</span>
										{/each}
									</div>
								</td>
								<td class="px-5 py-4 text-slate-600">{member.location}</td>
								<td class="px-5 py-4 text-right">
									<div class="inline-flex items-center space-x-2">
										<button
											onclick={() => openMemberModal(member)}
											class="cursor-pointer rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-600"
										>
											Lihat CV
										</button>
										<a
											href="/resume/{member.slug || member.id}"
											class="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
										>
											Penuh &rarr;
										</a>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</section>

	<!-- Featured Projects Section -->
	<section id="section-featured-projects" class="mx-auto max-w-6xl px-4 sm:px-6 text-left space-y-6 pt-6">
		<div class="flex items-center justify-between border-b border-slate-200/80 pb-4">
			<div>
				<div
					class="inline-flex items-center space-x-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1"
				>
					<span class="h-2 w-2 rounded-full bg-indigo-600"></span>
					<span>Portofolio Proyek</span>
				</div>
				<h2 class="text-2xl font-bold tracking-tight text-slate-900">
					Karya & Proyek Teruji Anggota Tim
				</h2>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuredProjects as proj}
				{@const author = membersList.find((m) => m.id === proj.authorId)}
				<div
					class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-slate-300 transition-all"
				>
					<div class="space-y-3">
						<div class="flex items-center justify-between gap-2">
							{#if author}
								<a
									href="/resume/{author.slug || author.id}"
									class="flex cursor-pointer items-center space-x-2 text-xs font-semibold text-slate-700 hover:text-indigo-600"
								>
									<img
										src={author.avatar}
										alt={author.name}
										class="h-5 w-5 rounded-full object-cover"
									/>
									<span>{author.nickname || author.name.split(' ')[0]}</span>
								</a>
							{/if}
							{#if proj.category}
								<span
									class="rounded bg-indigo-50 border border-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-700"
								>
									{proj.category}
								</span>
							{/if}
						</div>

						<h3 class="text-sm font-bold text-slate-900">{proj.name || proj.title}</h3>
						<p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
							{proj.shortDescription || proj.description}
						</p>
					</div>

					<div
						class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs"
					>
						<div class="flex flex-wrap gap-1">
							{#each (proj.technologies || proj.tags || []).slice(0, 3) as tag}
								<span
									class="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 font-medium"
								>
									{tag}
								</span>
							{/each}
						</div>
						{#if proj.sourceCodeUrl || proj.github}
							<a
								href={proj.sourceCodeUrl || proj.github}
								target="_blank"
								rel="noreferrer"
								class="font-semibold text-slate-900 hover:text-indigo-600"
							>
								Source &rarr;
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Simple Callout / About Collective -->
	<section class="mx-auto max-w-6xl px-4 sm:px-6 pb-12 text-left">
		<div
			class="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
		>
			<div class="space-y-2 max-w-xl">
				<h3 class="text-lg font-bold text-slate-900">
					Tertarik Berkolaborasi dengan Tim Kami?
				</h3>
				<p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
					Tim DevFive siap membantu pengembangan aplikasi web berskala tinggi,
					perancangan sistem IoT, backend arsitektur cloud, aplikasi mobile, serta
					integrasi model machine learning dan computer vision.
				</p>
			</div>
			<div class="flex flex-wrap items-center gap-3">
				<a
					href="mailto:arimbidwisyabillah1304@gmail.com"
					class="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-2xs hover:bg-indigo-600 transition-colors"
				>
					Kirim Pesan / Tawaran
				</a>
			</div>
		</div>
	</section>
</div>

<!-- Interactive CV Quick View Modal -->
{#if activeModalMember}
	<MemberCVModal
		member={activeModalMember}
		onClose={closeMemberModal}
		onSelectMember={(m) => (activeModalMember = m)}
	/>
{/if}
