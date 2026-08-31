<script lang="ts">
	import { teamInfo, membersList } from '$lib/data/team';
	import type { Member } from '$lib/types';

	let {
		onSelectMember
	}: {
		onSelectMember?: (m: Member) => void;
	} = $props();
</script>

<section id="hero-section" class="border-b border-slate-200/80 bg-white py-12 text-left sm:py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="space-y-8">
			<!-- Tagline Badge -->
			<div
				class="inline-flex items-center space-x-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
			>
				<span class="h-2 w-2 rounded-full bg-emerald-500"></span>
				<span class="font-medium">5 Rekan Pengembang • CV & Portofolio Bersama</span>
			</div>

			<!-- Main Title -->
			<div class="max-w-3xl space-y-3">
				<h1
					class="text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
				>
					Profil & Curriculum Vitae <br class="hidden sm:inline" />
					<span class="text-indigo-600">Tim DevFive</span>
				</h1>
				<p class="text-sm leading-relaxed font-normal text-slate-600 sm:text-base">
					{teamInfo.description}
				</p>
			</div>

			<!-- Quick Member Faces Bar: Click to inspect CV directly -->
			<div class="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5">
				<div class="mb-3 flex items-center justify-between">
					<span class="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
						Pilih Anggota untuk Pratinjau Cepat:
					</span>
					<span class="text-xs text-slate-400">Klik nama atau foto</span>
				</div>

				<div class="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
					{#each membersList as member}
						<button
							id="hero-member-pill-{member.id}"
							onclick={() => onSelectMember && onSelectMember(member)}
							class="group flex cursor-pointer items-center space-x-2.5 rounded-xl border border-slate-200 bg-white p-2 text-left shadow-2xs transition-all hover:border-indigo-400 hover:shadow-xs"
						>
							<img
								src={member.avatar}
								alt={member.name}
								class="h-9 w-9 rounded-lg object-cover ring-1 ring-slate-200 transition-transform group-hover:scale-105"
							/>
							<div class="min-w-0 flex-1">
								<p class="truncate text-xs font-bold text-slate-900 group-hover:text-indigo-600">
									{member.nickname || member.name.split(' ')[0]}
								</p>
								<p class="truncate text-[10px] font-medium text-slate-500">
									{member.role.split('&')[0].trim()}
								</p>
							</div>
						</button>
					{/each}
				</div>
			</div>

			<!-- Simple Quick Facts -->
			<div class="grid grid-cols-2 gap-4 border-t border-slate-100 pt-2 sm:grid-cols-4">
				{#each teamInfo.stats as stat}
					<div class="space-y-0.5">
						<p class="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{stat.value}</p>
						<p class="text-xs font-medium text-slate-500">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
