<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	import type { PageData } from './$types';
	import ProjectDetail from '$lib/components/ProjectDetail.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { data }: { data: PageData } = $props();
	let slug = $derived(page.params.slug);
</script>

<svelte:head>
	<title>{data.project.title} | Portfolio</title>
</svelte:head>

<Navbar currentTab="home" selectedMemberId={slug} onBackToTeam={() => goto('/')} />
<ProjectDetail project={data.project} />
