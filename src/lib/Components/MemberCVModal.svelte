<script lang="ts">
	import type { Member } from '$lib/types';
	import { membersList } from '$lib/data/team';

	let {
		member,
		onClose,
		onSelectMember
	}: {
		member: Member;
		onClose: () => void;
		onSelectMember: (m: Member) => void;
	} = $props();

	let copied = $state(false);

	function copyEmail() {
		const email = member.email || member.contact?.email;
		if (email) {
			navigator.clipboard.writeText(email);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		}
	}

	function handlePrint() {
		window.print();
	}

	// Keyboard ESC to close
	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={onKeyDown} />

<!-- Backdrop -->
<div
	role="dialog"
	aria-modal="true"
	aria-labelledby="modal-member-name"
	class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-xs transition-opacity sm:p-6"
>
	<!-- Modal Box -->
	<div
		class="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-2xl"
	>
		<!-- Modal Header with Quick Member Switcher -->
		<header
			class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50/90 px-6 py-4"
		>
			<!-- Member Selector Tabs -->
			<div class="flex flex-wrap items-center gap-1.5 overflow-x-auto">
				{#each membersList as m}
					<button
						id="modal-switch-{m.id}"
						onclick={() => onSelectMember(m)}
						class="flex cursor-pointer items-center space-x-2 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all {m.id ===
						member.id
							? 'bg-slate-900 text-white shadow-xs'
							: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'}"
					>
						<img src={m.avatar} alt={m.name} class="h-4 w-4 rounded-full object-cover" />
						<span>{m.nickname || m.name.split(' ')[0]}</span>
					</button>
				{/each}
			</div>

			<!-- Actions & Close Button -->
			<div class="flex items-center space-x-2">
				<button
					id="btn-modal-print"
					onclick={handlePrint}
					aria-label="Cetak CV"
					class="inline-flex cursor-pointer items-center space-x-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
				>
					<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
						/>
					</svg>
					<span class="hidden sm:inline">Cetak / PDF</span>
				</button>

				<a
					id="btn-modal-open-full"
					href="/resume/{member.slug || member.id}"
					class="inline-flex items-center space-x-1 rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700"
				>
					<span>Halaman Penuh</span>
					<span>&rarr;</span>
				</a>

				<button
					id="btn-modal-close"
					onclick={onClose}
					aria-label="Tutup"
					class="rounded-xl border border-slate-200 bg-white p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
				>
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</header>

		<!-- Modal Body Scrollable -->
		<div class="overflow-y-auto p-6 sm:p-8">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
				<!-- Left Column: Identity, Contact, Key Details -->
				<aside class="space-y-6 md:col-span-4">
					<div class="space-y-4">
						<div
							class="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200"
						>
							<img src={member.avatar} alt={member.name} class="h-full w-full object-cover" />
						</div>

						<div>
							<h2 id="modal-member-name" class="text-xl font-bold tracking-tight text-slate-900">
								{member.name}
							</h2>
							<p class="text-xs font-semibold text-indigo-600">
								{member.role}
							</p>
							<p class="mt-1 text-xs text-slate-500">
								📍 {member.location}
								{#if member.yearsOfExperience}
									• {member.yearsOfExperience} Pengalaman
								{/if}
							</p>
						</div>

						<!-- Contact Channels -->
						<div class="space-y-2 border-t border-slate-100 pt-4 text-xs">
							<span class="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
								Kontak Langsung
							</span>
							{#if member.email || member.contact?.email}
								<button
									onclick={copyEmail}
									class="flex w-full cursor-pointer items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50 p-2.5 text-left text-slate-700 hover:border-slate-300"
								>
									<span class="truncate">{member.email || member.contact?.email}</span>
									<span class="text-[10px] font-bold text-indigo-600">
										{copied ? 'Tersalin!' : 'Salin'}
									</span>
								</button>
							{/if}

							<div class="flex flex-wrap gap-2 pt-1">
								{#if member.github || member.contact?.github}
									<a
										href={member.github || member.contact?.github}
										target="_blank"
										rel="noreferrer"
										class="inline-flex items-center space-x-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
									>
										<span>GitHub</span>
									</a>
								{/if}
								{#if member.linkedin || member.contact?.linkedin}
									<a
										href={member.linkedin || member.contact?.linkedin}
										target="_blank"
										rel="noreferrer"
										class="inline-flex items-center space-x-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
									>
										<span>LinkedIn</span>
									</a>
								{/if}
							</div>
						</div>
					</div>
				</aside>

				<!-- Right Column: Bio, Skills, Experience, Education, Projects -->
				<main class="space-y-6 md:col-span-8">
					<!-- Summary Bio -->
					<div class="space-y-2">
						<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">
							Profil & Ringkasan
						</h3>
						<p class="text-xs leading-relaxed font-normal text-slate-600 sm:text-sm">
							{member.aboutMe?.introduction || member.bio || member.shortIntro}
						</p>
						{#if member.aboutMe?.goals}
							<p
								class="rounded-lg border border-indigo-100 bg-indigo-50 p-2.5 text-xs text-indigo-900"
							>
								<span class="font-bold">Tujuan:</span>
								{member.aboutMe.goals}
							</p>
						{/if}
					</div>

					<!-- Skills Breakdown -->
					<div class="space-y-3 border-t border-slate-100 pt-5">
						<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">
							Keahlian & Teknologi
						</h3>
						<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
							{#if member.skills.frontend && member.skills.frontend.length > 0}
								<div class="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
									<p class="text-[11px] font-bold text-slate-800">Frontend</p>
									<div class="mt-2 flex flex-wrap gap-1">
										{#each member.skills.frontend as skill}
											<span
												class="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700"
											>
												{skill}
											</span>
										{/each}
									</div>
								</div>
							{/if}

							{#if member.skills.backend && member.skills.backend.length > 0}
								<div class="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
									<p class="text-[11px] font-bold text-slate-800">Backend & DB</p>
									<div class="mt-2 flex flex-wrap gap-1">
										{#each [...member.skills.backend, ...member.skills.database] as skill}
											<span
												class="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700"
											>
												{skill}
											</span>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</div>

					<!-- Career Experience -->
					<div class="space-y-3 border-t border-slate-100 pt-5">
						<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">
							Riwayat Pekerjaan & Magang
						</h3>
						<div class="space-y-4">
							{#each member.experience as exp}
								<div class="space-y-1 border-l-2 border-slate-200 pl-4">
									<div class="flex flex-wrap items-baseline justify-between gap-1">
										<p class="text-xs font-bold text-slate-900">{exp.position || exp.role}</p>
										<span class="text-[11px] text-slate-500">{exp.duration || exp.period}</span>
									</div>
									<p class="text-xs font-semibold text-indigo-600">{exp.company}</p>
									<p class="text-xs leading-relaxed text-slate-600">{exp.description}</p>
								</div>
							{/each}
						</div>
					</div>

					<!-- Education -->
					<div class="space-y-2 border-t border-slate-100 pt-5">
						<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">Pendidikan</h3>
						{#each member.education as edu}
							<div class="flex items-center justify-between text-xs">
								<div>
									<p class="font-bold text-slate-900">
										{edu.degree}
										{#if edu.major}— {edu.major}{/if}
									</p>
									<p class="text-slate-600">{edu.institution}</p>
								</div>
								<span class="font-medium text-slate-500">{edu.year}</span>
							</div>
						{/each}
					</div>

					<!-- Projects -->
					<div class="space-y-3 border-t border-slate-100 pt-5">
						<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">
							Proyek Unggulan
						</h3>
						<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
							{#each member.projects as proj}
								<div class="space-y-2 rounded-xl border border-slate-200 bg-slate-50/50 p-3">
									<div class="flex items-start justify-between gap-1">
										<p class="text-xs font-bold text-slate-900">{proj.name || proj.title}</p>
										{#if proj.status}
											<span class="text-[10px] font-bold text-emerald-600">{proj.status}</span>
										{/if}
									</div>
									<p class="text-[11px] leading-relaxed text-slate-600">
										{proj.shortDescription || proj.description}
									</p>
									{#if proj.sourceCodeUrl || proj.github}
										<a
											href={proj.sourceCodeUrl || proj.github}
											target="_blank"
											rel="noreferrer"
											class="inline-block text-[11px] font-semibold text-indigo-600 hover:underline"
										>
											Lihat Source Code &rarr;
										</a>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>
</div>
