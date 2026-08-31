<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-slate-50/70 text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
