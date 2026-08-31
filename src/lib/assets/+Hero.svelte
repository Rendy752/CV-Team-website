<script lang="ts">
	import { teamInfo } from '$lib/data/team';

	export let onMeetTeamClick: () => void;
</script>

<section
	id="hero-section"
	aria-label="Hero"
	class="relative overflow-hidden border-b border-slate-100 bg-[#F8FAFC] py-16 lg:py-24"
>
	<div
		aria-hidden="true"
		class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40"
	/>
	<div
		aria-hidden="true"
		class="absolute top-1/4 left-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[100px]"
	/>
	<div
		aria-hidden="true"
		class="absolute right-1/4 bottom-1/4 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px]"
	/>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
			<div class="space-y-6 text-left lg:col-span-7">
				<p
					class="inline-flex items-center space-x-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 shadow-sm"
				>
					<span>DevFive Software Development Pod</span>
				</p>

				<h1
					class="text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
				>
					Meet Our <span class="text-indigo-600">Team.</span>
				</h1>

				<p class="max-w-xl text-sm leading-relaxed font-normal text-slate-600 sm:text-base">
					{teamInfo.description} We work concurrently across isolated modules, fusing high-fidelity design
					tokens, fast APIs, and zero-downtime server clusters.
				</p>

				<div class="flex flex-wrap items-center gap-4 pt-4">
					<button
						on:click={onMeetTeamClick}
						class="group relative inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-100"
					>
						Explore Our Projects
					</button>

					<p
						class="flex items-center space-x-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs text-slate-500 shadow-sm"
					>
						<span
							aria-hidden="true"
							class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
						/>
						<span class="font-mono text-[11px]">5 Sandbox Sprints Active</span>
					</p>
				</div>
			</div>

			<!-- Diagram tim: figure + figcaption, bukan div biasa -->
			<figure
				class="relative m-0 mx-auto flex aspect-square w-full max-w-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:max-w-[400px] lg:col-span-5"
			>
				<div aria-hidden="true" class="absolute inset-0 flex items-center justify-center">
					<svg viewBox="0 0 400 400" class="h-full w-full select-none">
						<circle cx="200" cy="200" r="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
						<circle cx="200" cy="200" r="4" fill="#10b981" />
					</svg>
				</div>
				<figcaption
					class="z-10 mt-auto w-full rounded-2xl border border-slate-200/85 bg-white/95 p-3.5 text-left shadow-sm backdrop-blur-sm"
				>
					<span class="block text-[9px] font-bold tracking-widest text-slate-400 uppercase"
						>PIPELINE MONITOR</span
					>
					<span class="mt-0.5 block text-xs font-bold text-slate-800"
						>DevFive Active Coordination Map</span
					>
				</figcaption>
			</figure>
		</div>
	</div>
</section>
