<script lang="ts">
	import { Menu, X, Users } from '@lucide/svelte';
	import { goto } from '$app/navigation';

	// Ganti value ini sesuai nama tim kamu
	const teamInfo = { name: 'NullSec45' };

	interface Props {
		currentTab?: 'home' | 'about' | 'contact';
		selectedMemberId?: string | null;
		selectedProjectId?: string | null;
		onNavigate?: (tab: 'home' | 'about' | 'contact') => void;
		onBackToProfile?: () => void;
		onBackToTeam?: () => void;
	}

	let {
		currentTab = 'home',
		selectedMemberId = null,
		selectedProjectId = null,
		onNavigate = (tab) => goto(tab === 'home' ? '/' : `/${tab}`),
		onBackToProfile = () => {},
		onBackToTeam = () => goto('/')
	}: Props = $props();

	let isOpen = $state(false);
	let showWorkspaceInfo = $state(false);

	function handleTabClick(tab: 'home' | 'about' | 'contact') {
		onNavigate(tab);
		isOpen = false;
	}
</script>

<header id="global-navbar" class="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">

			<!-- Left: Brand Name / Logo -->
			<div
				class="flex cursor-pointer items-center space-x-3"
				role="button"
				tabindex="0"
				onclick={() => handleTabClick('home')}
				onkeydown={(e) => e.key === 'Enter' && handleTabClick('home')}
			>
				<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xl font-bold text-white transition-transform hover:scale-105">
					N
				</div>
				<div class="flex flex-col">
					<span class="text-sm font-bold uppercase leading-none tracking-tight text-slate-800">
						{teamInfo.name}
					</span>
					<span class="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-400">
						Simultaneous Dev Pod
					</span>
				</div>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden items-center space-x-8 text-[10px] font-bold uppercase tracking-widest md:flex">
				<button
					onclick={() => handleTabClick('home')}
					class="cursor-pointer pb-1 transition-all hover:text-indigo-600 {currentTab === 'home' && !selectedMemberId && !selectedProjectId
						? 'border-b-2 border-indigo-600 text-indigo-600'
						: 'border-b-2 border-transparent text-slate-500 hover:border-slate-200'}"
				>
					Home
				</button>
				<button
					onclick={() => handleTabClick('about')}
					class="cursor-pointer pb-1 transition-all hover:text-indigo-600 {currentTab === 'about'
						? 'border-b-2 border-indigo-600 text-indigo-600'
						: 'border-b-2 border-transparent text-slate-500 hover:border-slate-200'}"
				>
					About Us
				</button>
				<button
					onclick={() => handleTabClick('contact')}
					class="cursor-pointer pb-1 transition-all hover:text-indigo-600 {currentTab === 'contact'
						? 'border-b-2 border-indigo-600 text-indigo-600'
						: 'border-b-2 border-transparent text-slate-500 hover:border-slate-200'}"
				>
					Contact
				</button>

				<!-- Simultaneous Sprint System Badge -->
				<button
					onclick={() => (showWorkspaceInfo = !showWorkspaceInfo)}
					class="flex cursor-pointer items-center space-x-1.5 rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
				>
					<div class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></div>
					<span>Workspace Sync</span>
				</button>
			</nav>

			<!-- Mobile hamburger menu trigger -->
			<div class="flex items-center space-x-3 md:hidden">
				<button
					onclick={() => (showWorkspaceInfo = !showWorkspaceInfo)}
					class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-100 bg-slate-50"
					title="Simultaneous Workspace Status"
				>
					<div class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></div>
				</button>
				<button
					onclick={() => (isOpen = !isOpen)}
					class="rounded-lg p-1.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
					aria-label="Toggle Menu"
				>
					{#if isOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>

		</div>
	</div>

	<!-- Dynamic Sub-header Navigation for Profiles & Projects -->
	{#if selectedMemberId || selectedProjectId}
		<div class="border-t border-slate-100 bg-slate-50/80 px-4 py-2.5">
			<div class="mx-auto flex max-w-7xl items-center justify-between text-xs font-medium text-slate-600">
				<div class="flex items-center space-x-2">
					{#if selectedProjectId}
						<button
							onclick={onBackToProfile}
							class="flex cursor-pointer items-center text-slate-500 transition-colors hover:text-indigo-600"
						>
							&larr; <span class="ml-1.5 underline underline-offset-4">Back to Member Profile</span>
						</button>
					{:else}
						<button
							onclick={onBackToTeam}
							class="flex cursor-pointer items-center text-slate-500 transition-colors hover:text-indigo-600"
						>
							&larr; <span class="ml-1.5 underline underline-offset-4">Back to Our Team</span>
						</button>
					{/if}
				</div>
				<div class="hidden font-mono text-[10px] text-slate-400 sm:block">
					{selectedProjectId ? 'route: team / profile / project' : 'route: team / profile'}
				</div>
			</div>
		</div>
	{/if}

	<!-- Simultaneous Sprint System Modal / Dropdown -->
	{#if showWorkspaceInfo}
		<div class="absolute right-4 top-16 z-50 w-80 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:right-8 md:w-96 lg:right-24">
			<div class="flex items-start justify-between">
				<div class="flex items-center space-x-2 text-slate-900">
					<Users class="h-5 w-5 text-indigo-600" />
					<h4 class="text-sm font-bold tracking-tight">Workspace Synchronization</h4>
				</div>
				<button
					onclick={() => (showWorkspaceInfo = false)}
					class="rounded p-1 text-slate-400 hover:bg-slate-50 hover:text-slate-900"
				>
					<X class="h-4 w-4" />
				</button>
			</div>
			<p class="mt-2.5 text-xs leading-relaxed text-slate-600">
				The UI of this team portfolio website is decoupled to let <strong>5 team members work on different sections/pages of the website simultaneously with zero Git merge conflicts</strong>.
			</p>

			<div class="mt-4 border-t border-slate-100 pt-3.5">
				<span class="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
					Assigned File Architectures
				</span>
				<div class="space-y-2">
					<div class="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-1.5 text-xs transition-colors hover:bg-slate-100/70">
						<div class="flex items-center space-x-1.5">
							<div class="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
							<span class="font-semibold text-slate-800">Najwan Zaky (Full Stack)</span>
						</div>
						<code class="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-500">/data/member1.ts</code>
					</div>
					<div class="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-1.5 text-xs transition-colors hover:bg-slate-100/70">
						<div class="flex items-center space-x-1.5">
							<div class="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
							<span class="font-semibold text-slate-800">Sarah Connor (Frontend)</span>
						</div>
						<code class="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-500">/data/member2.ts</code>
					</div>
					<div class="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-1.5 text-xs transition-colors hover:bg-slate-100/70">
						<div class="flex items-center space-x-1.5">
							<div class="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
							<span class="font-semibold text-slate-800">Alex Rivera (Backend)</span>
						</div>
						<code class="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-500">/data/member3.ts</code>
					</div>
					<div class="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-1.5 text-xs transition-colors hover:bg-slate-100/70">
						<div class="flex items-center space-x-1.5">
							<div class="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
							<span class="font-semibold text-slate-800">Chloe Tan (Mobile)</span>
						</div>
						<code class="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-500">/data/member4.ts</code>
					</div>
					<div class="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-1.5 text-xs transition-colors hover:bg-slate-100/70">
						<div class="flex items-center space-x-1.5">
							<div class="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
							<span class="font-semibold text-slate-800">David Kim (DevOps)</span>
						</div>
						<code class="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-500">/data/member5.ts</code>
					</div>
				</div>
				<p class="mt-3 border-t border-dashed border-slate-100 pt-2 text-center text-[10px] italic leading-normal text-slate-400">
					Unified runtime renders state seamlessly as soon as developers save changes to their dedicated structures.
				</p>
			</div>
		</div>
	{/if}

	<!-- Mobile Hamburger Navigation Panel -->
	{#if isOpen}
		<nav class="space-y-3 border-t border-slate-100 bg-white px-4 py-4 shadow-inner md:hidden">
			<button
				onclick={() => handleTabClick('home')}
				class="block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold {currentTab === 'home' && !selectedMemberId && !selectedProjectId
					? 'bg-slate-900 text-white'
					: 'text-slate-700 hover:bg-slate-50'}"
			>
				Home / Our Team
			</button>
			<button
				onclick={() => handleTabClick('about')}
				class="block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold {currentTab === 'about'
					? 'bg-slate-900 text-white'
					: 'text-slate-700 hover:bg-slate-50'}"
			>
				About Us
			</button>
			<button
				onclick={() => handleTabClick('contact')}
				class="block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold {currentTab === 'contact'
					? 'bg-slate-900 text-white'
					: 'text-slate-700 hover:bg-slate-50'}"
			>
				Contact
			</button>

			<div class="border-t border-slate-100 pt-3">
				<div class="flex items-center space-x-2 px-3 text-xs text-slate-500">
					<div class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
					<span>Simultaneous Sprint Sandbox Enabled</span>
				</div>
			</div>
		</nav>
	{/if}
</header>
