<script lang="ts">
	import type { PageData } from './$types';
	import { membersList } from '$lib/data/team';

	let { data }: { data: PageData } = $props();
	let member = $derived(data.member);

	let copiedEmail = $state(false);
	let otherMembers = $derived(
		membersList.filter((m) => m.id !== member.id && m.slug !== member.slug)
	);

	function copyEmailToClipboard() {
		const email = member.email || member.contact?.email;
		if (email) {
			navigator.clipboard.writeText(email);
			copiedEmail = true;
			setTimeout(() => {
				copiedEmail = false;
			}, 2500);
		}
	}

	function handlePrint() {
		window.print();
	}
</script>

<svelte:head>
	<title>{member.name} — Curriculum Vitae | DevFive</title>
	<meta
		name="description"
		content="Curriculum Vitae profesional {member.name}, {member.role}. {member.shortIntro}"
	/>
</svelte:head>

<div class="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 sm:py-10 text-left">
	<!-- Top Bar -->
	<div
		class="flex flex-col justify-between gap-4 border-b border-slate-200/90 pb-5 sm:flex-row sm:items-center print:hidden"
	>
		<a
			id="btn-back-team-overview"
			href="/"
			class="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-slate-600 hover:text-slate-900 transition-colors"
		>
			<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
			<span>Kembali ke Beranda Tim</span>
		</a>

		<div class="flex items-center space-x-2.5">
			<button
				id="btn-print-cv"
				onclick={handlePrint}
				class="inline-flex cursor-pointer items-center space-x-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50"
			>
				<svg
					class="h-4 w-4 text-slate-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
					/>
				</svg>
				<span>Cetak / Simpan PDF</span>
			</button>

			{#if member.email || member.contact?.email}
				<button
					id="btn-copy-email"
					onclick={copyEmailToClipboard}
					class="inline-flex cursor-pointer items-center space-x-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-indigo-600 transition-colors"
				>
					<span>{copiedEmail ? 'Email Tersalin!' : 'Salin Email'}</span>
				</button>
			{/if}
		</div>
	</div>

	<!-- Printable Resume Container -->
	<article
		class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-2xs space-y-8"
	>
		<!-- Header / Bio info -->
		<header
			class="flex flex-col sm:flex-row items-start gap-6 border-b border-slate-200 pb-8"
		>
			<img
				src={member.avatar}
				alt={member.name}
				class="h-28 w-28 rounded-2xl object-cover ring-1 ring-slate-200 shrink-0"
			/>
			<div class="space-y-2 flex-1">
				<div class="flex flex-wrap items-center justify-between gap-2">
					<h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
						{member.name}
					</h1>
					{#if member.yearsOfExperience}
						<span
							class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
						>
							{member.yearsOfExperience} Pengalaman
						</span>
					{/if}
				</div>
				<p class="text-sm font-semibold text-indigo-600">
					{member.role}
				</p>
				<p class="text-xs text-slate-500">
					📍 {member.location}
					{#if member.availability}
						• Status: <span class="font-medium text-emerald-700">{member.availability}</span>
					{/if}
				</p>

				<!-- Links / Contacts in Header -->
				<div class="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium">
					{#if member.email || member.contact?.email}
						<a
							href="mailto:{member.email || member.contact?.email}"
							class="text-slate-700 hover:text-indigo-600"
						>
							✉️ {member.email || member.contact?.email}
						</a>
					{/if}
					{#if member.github || member.contact?.github}
						<span class="text-slate-300">•</span>
						<a
							href={member.github || member.contact?.github}
							target="_blank"
							rel="noreferrer"
							class="text-slate-700 hover:text-indigo-600"
						>
							GitHub Profil
						</a>
					{/if}
					{#if member.linkedin || member.contact?.linkedin}
						<span class="text-slate-300">•</span>
						<a
							href={member.linkedin || member.contact?.linkedin}
							target="_blank"
							rel="noreferrer"
							class="text-slate-700 hover:text-indigo-600"
						>
							LinkedIn Profil
						</a>
					{/if}
				</div>
			</div>
		</header>

		<!-- About Me / Ringkasan Profil -->
		<section class="space-y-3">
			<h2 class="text-xs font-bold uppercase tracking-wider text-slate-400">
				Tentang Saya & Ringkasan Profil
			</h2>
			<p class="text-sm text-slate-700 leading-relaxed font-normal">
				{member.aboutMe?.introduction || member.bio || member.shortIntro}
			</p>
			{#if member.aboutMe?.background}
				<p class="text-sm text-slate-600 leading-relaxed font-normal">
					{member.aboutMe.background}
				</p>
			{/if}
			{#if member.aboutMe?.goals}
				<div class="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3.5 text-xs text-indigo-900 leading-relaxed">
					<span class="font-bold">Tujuan & Fokus Karir:</span> {member.aboutMe.goals}
				</div>
			{/if}
		</section>

		<!-- Technical Skills Matrix -->
		<section class="space-y-4 border-t border-slate-100 pt-6">
			<h2 class="text-xs font-bold uppercase tracking-wider text-slate-400">
				Keahlian & Penguasaan Teknologi
			</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{#if member.skills.frontend && member.skills.frontend.length > 0}
					<div class="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 space-y-2">
						<h3 class="text-xs font-bold text-slate-900">Frontend & Antarmuka</h3>
						<div class="flex flex-wrap gap-1.5">
							{#each member.skills.frontend as s}
								<span
									class="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
								>
									{s}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				{#if member.skills.backend && member.skills.backend.length > 0}
					<div class="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 space-y-2">
						<h3 class="text-xs font-bold text-slate-900">Backend & Server</h3>
						<div class="flex flex-wrap gap-1.5">
							{#each member.skills.backend as s}
								<span
									class="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
								>
									{s}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				{#if member.skills.database && member.skills.database.length > 0}
					<div class="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 space-y-2">
						<h3 class="text-xs font-bold text-slate-900">Basis Data & Penyimpanan</h3>
						<div class="flex flex-wrap gap-1.5">
							{#each member.skills.database as s}
								<span
									class="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
								>
									{s}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				{#if member.skills.tools && member.skills.tools.length > 0}
					<div class="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 space-y-2">
						<h3 class="text-xs font-bold text-slate-900">Alat, Hardware, DevOps & AI</h3>
						<div class="flex flex-wrap gap-1.5">
							{#each member.skills.tools as s}
								<span
									class="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
								>
									{s}
								</span>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>

		<!-- Work / Internship Experience -->
		<section class="space-y-6 border-t border-slate-100 pt-6">
			<h2 class="text-xs font-bold uppercase tracking-wider text-slate-400">
				Pengalaman Kerja & Magang
			</h2>
			<div class="space-y-6">
				{#each member.experience as exp}
					<div class="border-l-2 border-slate-200 pl-5 space-y-2">
						<div
							class="flex flex-col sm:flex-row sm:items-center justify-between gap-1"
						>
							<h3 class="text-sm sm:text-base font-bold text-slate-900">
								{exp.position || exp.role}
							</h3>
							<span class="text-xs font-semibold text-slate-500">{exp.duration || exp.period}</span>
						</div>
						<p class="text-xs font-semibold text-indigo-600">
							{exp.company}
							{#if exp.location}• <span class="font-normal text-slate-500">{exp.location}</span>{/if}
						</p>
						<p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
							{exp.description}
						</p>
						{#if exp.highlights && exp.highlights.length > 0}
							<ul class="list-disc list-inside text-xs text-slate-600 space-y-1 pt-1">
								{#each exp.highlights as h}
									<li>{h}</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- Education -->
		<section class="space-y-4 border-t border-slate-100 pt-6">
			<h2 class="text-xs font-bold uppercase tracking-wider text-slate-400">
				Pendidikan
			</h2>
			<div class="space-y-3">
				{#each member.education as edu}
					<div
						class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4"
					>
						<div>
							<h3 class="text-sm font-bold text-slate-900">
								{edu.degree} {#if edu.major}— <span class="font-medium text-slate-700">{edu.major}</span>{/if}
							</h3>
							<p class="text-xs text-slate-600 font-medium">{edu.institution}</p>
							{#if edu.notes}
								<p class="text-xs text-slate-500 mt-0.5">{edu.notes}</p>
							{/if}
						</div>
						<div class="text-left sm:text-right">
							<span class="text-xs font-bold text-slate-800">{edu.year}</span>
							{#if edu.gpa}
								<p class="text-xs text-indigo-600 font-semibold">
									IPK: {edu.gpa}
								</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Key Projects -->
		<section class="space-y-6 border-t border-slate-100 pt-6">
			<h2 class="text-xs font-bold uppercase tracking-wider text-slate-400">
				Proyek Unggulan & Hasil Karya
			</h2>
			<div class="grid grid-cols-1 gap-5">
				{#each member.projects as proj}
					<div
						class="rounded-2xl border border-slate-200 bg-slate-50/40 p-5 sm:p-6 space-y-4 text-left"
					>
						<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-200/70 pb-3">
							<div>
								<div class="flex items-center gap-2">
									<h3 class="text-base font-bold text-slate-900">{proj.name || proj.title}</h3>
									{#if proj.status}
										<span class="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5">
											{proj.status}
										</span>
									{/if}
								</div>
								<p class="text-xs font-medium text-indigo-600 mt-0.5">
									{proj.role || 'Developer'} {#if proj.category}• <span class="text-slate-500">{proj.category}</span>{/if} {#if proj.duration}• <span class="text-slate-400">{proj.duration}</span>{/if}
								</p>
							</div>

							<div class="flex items-center gap-2">
								{#if proj.liveDemoUrl}
									<a
										href={proj.liveDemoUrl}
										target="_blank"
										rel="noreferrer"
										class="inline-flex items-center space-x-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-600 transition-colors"
									>
										<span>Demo</span>
										<span>&rarr;</span>
									</a>
								{/if}
								{#if proj.sourceCodeUrl || proj.github}
									<a
										href={proj.sourceCodeUrl || proj.github}
										target="_blank"
										rel="noreferrer"
										class="inline-flex items-center space-x-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
									>
										<span>GitHub</span>
									</a>
								{/if}
							</div>
						</div>

						<p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
							{proj.shortDescription || proj.description}
						</p>

						<!-- Contributions -->
						{#if proj.contribution && proj.contribution.length > 0}
							<div class="space-y-1.5">
								<h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Kontribusi Kunci:</h4>
								<ul class="list-disc list-inside text-xs text-slate-600 space-y-1">
									{#each proj.contribution as cont}
										<li>{cont}</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- Challenges & Solution -->
						{#if proj.challenges && proj.challenges.length > 0}
							<div class="space-y-2 rounded-xl bg-white border border-slate-200/80 p-3.5">
								{#each proj.challenges as item}
									<div class="text-xs space-y-1">
										<p><span class="font-bold text-amber-800">Tantangan:</span> <span class="text-slate-700">{item.challenge}</span></p>
										<p><span class="font-bold text-emerald-800">Solusi:</span> <span class="text-slate-700">{item.solution}</span></p>
									</div>
								{/each}
							</div>
						{/if}

						<!-- Result -->
						{#if proj.result}
							<div class="text-xs text-slate-700 bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-3">
								<span class="font-bold text-emerald-900">Hasil:</span> {proj.result}
							</div>
						{/if}

						<!-- Tech Tags -->
						<div class="flex flex-wrap gap-1 pt-1">
							{#each (proj.technologies || proj.tags || []) as t}
								<span class="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600">
									{t}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>
	</article>

	<!-- Quick Switch to Other Members -->
	<section class="rounded-2xl border border-slate-200 bg-white p-6 print:hidden space-y-4">
		<h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">
			Lihat Resume Rekan Tim Lainnya
		</h3>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
			{#each otherMembers as other}
				<a
					href="/resume/{other.slug || other.id}"
					class="group flex items-center space-x-3 rounded-xl border border-slate-200/80 p-3 hover:border-slate-400 hover:bg-slate-50 transition-all"
				>
					<img
						src={other.avatar}
						alt={other.name}
						class="h-9 w-9 rounded-lg object-cover ring-1 ring-slate-200"
					/>
					<div class="min-w-0 flex-1">
						<p
							class="truncate text-xs font-bold text-slate-900 group-hover:text-indigo-600"
						>
							{other.name}
						</p>
						<p class="truncate text-[11px] text-slate-500">
							{other.role.split('/')[0].split('&')[0].trim()}
						</p>
					</div>
					<span class="text-xs text-slate-400 group-hover:text-indigo-600">&rarr;</span>
				</a>
			{/each}
		</div>
	</section>
</div>
