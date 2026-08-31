<script lang="ts">
	import { goto } from '$app/navigation';
	import Hero from '$lib/components/Hero.svelte';
	import MemberCard from '$lib/components/MemberCard.svelte';
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

	<section id="members-grid-section" aria-labelledby="members-heading" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 text-center">
		<div class="flex items-center justify-between shrink-0 mb-12">
			<h2 id="members-heading" class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 text-left">
				Engineering Collective — Core Members
			</h2>
			<hr aria-hidden="true" class="h-px flex-1 border-0 bg-slate-200/80 mx-6" />
		</div>

		<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 list-none p-0 m-0">
			{#each membersList as member (member.id)}
				<li>
					<MemberCard {member} onSelect={() => goToMember(member.id)} />
				</li>
			{/each}
		</ul>

		<aside class="mt-12 max-w-4xl mx-auto bg-white border border-slate-100 p-6 rounded-2xl text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
			<div class="space-y-1">
				<header class="flex items-center space-x-1.5 text-slate-900">
					<h3 class="font-bold text-sm">Git-Conflict Isolation Blueprint Active</h3>
				</header>
				<p class="text-xs text-slate-600 max-w-xl leading-relaxed">
					Situs ini dirancang supaya tidak terjadi konflik git saat kerja bareng. Profil dan project tiap developer dipisah di modul independen <code class="bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-mono">src/lib/data/memberX.ts</code>.
				</p>
			</div>
			<a href="/about" class="shrink-0 text-xs font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-4">
				Learn how we collaborate &rarr;
			</a>
		</aside>
	</section>
</div>
=======
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
>>>>>>> b32e87e6c4f150220267bfaaf0f1fd671c3498a1
