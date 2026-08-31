<script lang="ts">
	import { page } from '$app/state';
	import { membersList } from '$lib/data/team';

	let mobileMenuOpen = $state(false);
	let resumeDropdownOpen = $state(false);
</script>

<header
	id="main-navbar"
	class="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
		<!-- Brand & Logo -->
		<a id="nav-brand" href="/" class="group flex items-center space-x-2.5">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white transition-transform group-hover:scale-105"
			>
				5
			</div>
			<div class="flex flex-col text-left">
				<span class="text-sm font-bold tracking-tight text-slate-900">DevFive</span>
				<span class="text-[10px] font-medium text-slate-500">Kolektif 5 Pengembang</span>
			</div>
		</a>

		<!-- Navigation Links Desktop -->
		<nav id="nav-links" class="hidden items-center space-x-1 sm:flex">
			<a
				id="nav-link-home"
				href="/"
				class="rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors {page.url.pathname ===
				'/'
					? 'bg-slate-900 text-white'
					: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}"
			>
				Home
			</a>

			<a
				id="nav-link-home"
				href="/"
				class="rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors {page.url.pathname ===
				'/'
					? 'bg-slate-900 text-white'
					: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}"
			>
				Tim
			</a>

			<!-- Resume Quick Dropdown -->
			<!-- <div class="relative">
				<button
					id="nav-link-resumes-dropdown"
					onclick={() => (resumeDropdownOpen = !resumeDropdownOpen)}
					onblur={() => setTimeout(() => (resumeDropdownOpen = false), 200)}
					class="flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors {page.url.pathname.startsWith(
						'/resume'
					)
						? 'bg-slate-900 text-white'
						: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}"
				>
					<span>Detail Resume (5)</span>
					<svg
						class="h-3.5 w-3.5 transition-transform {resumeDropdownOpen ? 'rotate-180' : ''}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>

				{#if resumeDropdownOpen}
					<div
						class="animate-in fade-in slide-in-from-top-1 absolute top-full left-0 z-50 mt-1.5 w-56 rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-xl duration-150"
					>
						<div class="px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
							Pilih CV Anggota:
						</div>
						{#each membersList as m}
							<a
								href="/resume/{m.slug || m.id}"
								class="flex items-center space-x-2 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
							>
								<img
									src={m.avatar}
									alt={m.name}
									class="h-5 w-5 rounded-full object-cover ring-1 ring-slate-200"
								/>
								<span class="truncate">{m.name}</span>
							</a>
						{/each}
					</div>
				{/if}
			</div> -->

			<a
				id="nav-link-projects"
				href="/#section-featured-projects"
				class="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
			>
				Proyek
			</a>


			<a
				id="nav-link-projects"
				href="/#section-featured-projects"
				class="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
			>
				Contact Us
			</a>
		</nav>

		<!-- Right Action -->
		<div class="hidden items-center space-x-2 sm:flex">
			<a
				id="nav-contact-btn"
				href="mailto:contact@devfive.collective"
				class="inline-flex items-center space-x-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
				<span>Hubungi Kami</span>
			</a>

			<a
				id="nav-github-link"
				href="https://github.com/haikalassegaf/CV-Team-website"
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub Repository"
				class="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900"
			>
				<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					/>
				</svg>
			</a>
		</div>

		<!-- Mobile Menu Toggle Button -->
		<div class="flex items-center sm:hidden">
			<button
				id="btn-toggle-mobile-menu"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Menu"
				class="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
			>
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Dropdown -->
	{#if mobileMenuOpen}
		<div class="space-y-2 border-t border-slate-100 bg-white px-4 py-3 text-left sm:hidden">
			<a
				href="/"
				onclick={() => (mobileMenuOpen = false)}
				class="block rounded-lg px-3 py-2 text-xs font-semibold {page.url.pathname === '/'
					? 'bg-slate-900 text-white'
					: 'text-slate-700 hover:bg-slate-100'}"
			>
				Beranda Tim
			</a>

			<div class="pt-1">
				<p class="px-3 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
					Resume Anggota:
				</p>
				<div class="mt-1 grid grid-cols-1 gap-1">
					{#each membersList as m}
						<a
							href="/resume/{m.slug || m.id}"
							onclick={() => (mobileMenuOpen = false)}
							class="flex items-center space-x-2 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
						>
							<img
								src={m.avatar}
								alt={m.name}
								class="h-4 w-4 rounded-full object-cover ring-1 ring-slate-200"
							/>
							<span>{m.name}</span>
						</a>
					{/each}
				</div>
			</div>

			<div class="border-t border-slate-100 pt-2">
				<a
					href="mailto:contact@devfive.collective"
					class="block px-3 py-1.5 text-xs font-semibold text-indigo-600"
				>
					Hubungi: contact@devfive.collective
				</a>
			</div>
		</div>
	{/if}
</header>
