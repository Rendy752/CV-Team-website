<script lang="ts">
	import type { Member } from '$lib/types';

	let { member, onSelect }: { member: Member; onSelect: () => void } = $props();

	// Primary 3 skills for clean presentation
	let topSkills = $derived(
		[
			...member.skills.frontend.slice(0, 2),
			...member.skills.backend.slice(0, 1),
			...member.skills.database.slice(0, 1)
		].slice(0, 3)
	);
</script>

<article
	id="member-card-{member.id}"
	class="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md sm:p-6"
>
	<div class="space-y-4">
		<!-- Card Top: Avatar & Location Badge -->
		<div class="flex items-start justify-between gap-3">
			<img
				src={member.avatar}
				alt={member.name}
				class="h-16 w-16 rounded-xl object-cover ring-1 ring-slate-200 transition-transform group-hover:scale-105"
				loading="lazy"
			/>
			<span
				class="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
			>
				{member.yearsOfExperience} Thn Pengalaman
			</span>
		</div>

		<!-- Identity & Title -->
		<div>
			<h3
				class="text-base font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-lg"
			>
				{member.name}
			</h3>
			<p class="mt-0.5 text-xs font-semibold text-indigo-600">
				{member.role}
			</p>
			<p class="mt-1 text-xs text-slate-500">
				📍 {member.location}
			</p>
		</div>

		<!-- Short Bio -->
		<p class="line-clamp-3 text-xs leading-relaxed text-slate-600">
			{member.shortIntro}
		</p>

		<!-- Key Tech Badges -->
		<div class="space-y-1.5 border-t border-slate-100 pt-2">
			<span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase"
				>Teknologi Utama</span
			>
			<div class="flex flex-wrap gap-1">
				{#each topSkills as skill}
					<span
						class="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
					>
						{skill}
					</span>
				{/each}
			</div>
		</div>
	</div>

	<!-- Footer Action -->
	<div class="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
		<a
			href="/resume/{member.slug || member.id}"
			class="text-xs font-semibold text-slate-500 transition-colors hover:text-slate-900"
		>
			Buka Resume &rarr;
		</a>

		<button
			id="btn-view-cv-{member.id}"
			onclick={onSelect}
			class="inline-flex cursor-pointer items-center space-x-1.5 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white shadow-2xs transition-colors hover:bg-indigo-600"
		>
			<span>Lihat CV</span>
			<span>&rarr;</span>
		</button>
	</div>
</article>
