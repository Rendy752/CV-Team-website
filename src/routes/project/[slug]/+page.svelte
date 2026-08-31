<script lang="ts">
	import type { PageData } from './$types';
	import ProjectDetail from '$lib/components/ProjectDetail.svelte';

	// Hapus 'export let data: PageData;' dan gunakan ini:
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.project.title} | Portfolio</title>
</svelte:head>

<ProjectDetail project={data.project} />
