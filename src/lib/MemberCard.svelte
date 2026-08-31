<script lang="ts">
	import type { Member } from '$lib/types';

	export let member: Member;
	export let onSelect: () => void;

	$: topSkills = [
		...member.skills.frontend.slice(0, 2),
		...member.skills.backend.slice(0, 1),
		...member.skills.database.slice(0, 1)
	].slice(0, 4);
</script>

<article
	class="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-lg"
>
	<div>
		<figure class="relative m-0 mb-5 aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
			<img
				src={member.avatar}
				alt={member.name}
				referrerpolicy="no-referrer"
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				loading="lazy"
			/>
			<figcaption
				class="absolute bottom-3 left-3 flex items-center space-x-1 rounded-full border border-slate-100 bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-slate-800 shadow-sm backdrop-blur-sm"
			>
				<span>{member.location.split(',')[0]}</span>
			</figcaption>
		</figure>

		<header class="space-y-1 text-left">
			<h3
				class="text-sm leading-none font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600"
			>
				{member.name}
			</h3>
			<p class="mt-1 text-[10px] font-bold tracking-wider text-indigo-600 uppercase">
				{member.role}
			</p>
		</header>

		<p class="mt-3 min-h-[48px] text-left text-[11px] leading-snug text-slate-500">
			{member.shortIntro}
		</p>

		<ul class="m-0 mt-5 mb-5 flex list-none flex-wrap justify-start gap-1 p-0">
			{#each topSkills as skill}
				<li class="rounded bg-slate-50 px-2 py-0.5 text-[9px] font-medium text-slate-500">
					{skill}
				</li>
			{/each}
		</ul>
	</div>

	<footer class="mt-6 space-y-3 border-t border-slate-50 pt-4 text-left">
		<button
			on:click={onSelect}
			class="w-full cursor-pointer rounded-xl bg-slate-50 py-2.5 text-[10px] font-bold tracking-widest text-slate-700 uppercase transition-all duration-200 group-hover:bg-indigo-600 group-hover:text-white"
		>
			View Profile
		</button>
	</footer>
</article>
