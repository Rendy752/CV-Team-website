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

<article class="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
	<div>
		<figure class="relative mb-5 aspect-square w-full overflow-hidden rounded-xl bg-slate-50 m-0">
			<img
				src={member.avatar}
				alt={member.name}
				referrerpolicy="no-referrer"
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				loading="lazy"
			/>
			<figcaption class="absolute bottom-3 left-3 flex items-center space-x-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-slate-800 shadow-sm border border-slate-100">
				<span>{member.location.split(',')[0]}</span>
			</figcaption>
		</figure>

		<header class="space-y-1 text-left">
			<h3 class="font-bold text-slate-900 text-sm tracking-tight leading-none group-hover:text-indigo-600 transition-colors">
				{member.name}
			</h3>
			<p class="text-[10px] text-indigo-600 font-bold uppercase tracking-wider mt-1">
				{member.role}
			</p>
		</header>

		<p class="mt-3 text-[11px] text-slate-500 leading-snug text-left min-h-[48px]">
			{member.shortIntro}
		</p>

		<ul class="mt-5 flex flex-wrap gap-1 mb-5 justify-start list-none p-0 m-0">
			{#each topSkills as skill}
				<li class="px-2 py-0.5 bg-slate-50 text-slate-500 text-[9px] rounded font-medium">
					{skill}
				</li>
			{/each}
		</ul>
	</div>

	<footer class="mt-6 pt-4 border-t border-slate-50 space-y-3 text-left">
		<button
			on:click={onSelect}
			class="w-full py-2.5 bg-slate-50 text-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200 cursor-pointer"
		>
			View Profile
		</button>
	</footer>
</article>