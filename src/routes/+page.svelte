<script lang="ts">
	import { goto } from '$app/navigation';
	import Hero from '$lib/assets/Hero.svelte';
	import MemberCard from '$lib/assets/MemberCard.svelte';
	import { membersList } from '$lib/data/team';

	function handleMeetTeamClick() {
		document.getElementById('members-grid-section')?.scrollIntoView({ behavior: 'smooth' });
	}

	function goToMember(id: string) {
		goto(`/team/${id}`);
	}
</script>

<svelte:head>
	<title>Tim Kami — CV Team</title>
</svelte:head>

<div class="space-y-16 pb-16">
	<Hero onMeetTeamClick={handleMeetTeamClick} />

	<section
		id="members-grid-section"
		aria-labelledby="members-heading"
		class="mx-auto max-w-7xl px-4 pt-12 text-center sm:px-6 lg:px-8"
	>
		<div class="mb-12 flex shrink-0 items-center justify-between">
			<h2
				id="members-heading"
				class="text-left text-xs font-bold tracking-[0.2em] text-slate-400 uppercase"
			>
				Engineering Collective — Core Members
			</h2>
			<hr aria-hidden="true" class="mx-6 h-px flex-1 border-0 bg-slate-200/80" />
		</div>

		<ul class="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-5">
			{#each membersList as member (member.id)}
				<li>
					<MemberCard {member} onSelect={() => goToMember(member.id)} />
				</li>
			{/each}
		</ul>

		<aside
			class="mx-auto mt-12 flex max-w-4xl flex-col items-start justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm sm:flex-row sm:items-center"
		>
			<div class="space-y-1">
				<header class="flex items-center space-x-1.5 text-slate-900">
					<h3 class="text-sm font-bold">Git-Conflict Isolation Blueprint Active</h3>
				</header>
				<p class="max-w-xl text-xs leading-relaxed text-slate-600">
					Situs ini dirancang supaya tidak terjadi konflik git saat kerja bareng. Profil dan project
					tiap developer dipisah di modul independen <code
						class="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px]"
						>src/lib/data/memberX.ts</code
					>.
				</p>
			</div>
			<a
				href="/about"
				class="shrink-0 text-xs font-bold text-indigo-600 underline underline-offset-4 hover:text-indigo-800"
			>
				Learn how we collaborate &rarr;
			</a>
		</aside>
	</section>
</div>
