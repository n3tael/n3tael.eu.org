<script lang="ts">
	import brokenbeats_sv_preview from '$lib/projects/assets/brokenbeats-sv.png';
	import diary_preview from '$lib/projects/assets/diary.png';
	import gold_epmakob_preview from '$lib/projects/assets/gold-epmakob.png';
	import lucida_midnight_preview from '$lib/projects/assets/lucida-midnight.png';
	import labashki_preview from '$lib/projects/assets/labashki.png';

	import Project from '$lib/projects/Project.svelte';
	import { type TProject } from '$lib/projects/types';

	const projects: TProject[] = [
		{
			name: 'brokenbeats-sv',
			description:
				'Modern frontend for internet-radio «brokenbeats.net» in Svelte',
			preview_url: brokenbeats_sv_preview,
			try_url: 'https://bb.n3tael.eu.org',
			source_url: 'https://github.com/n3tael/brokenbeats-sv',
			start_year: 2025
		},
		{
			name: 'diary',
			description:
				'Web-app for tracking your homework. Yet another To-Do list.',
			preview_url: diary_preview,
			try_url: 'https://diary.n3tael.eu.org',
			source_url: 'https://github.com/n3tael/diary',
			start_year: 2024
		},
		{
			name: 'artwork-uploader',
			description:
				'Artwork uploader for foobar2000 plugin which adds Discord RPC',
			source_url: 'https://github.com/n3tael/artwork-uploader',
			start_year: 2024
		},
		{
			name: 'lucida-midnight',
			description:
				'Custom theme for Lucida.su - music downloader (currently on hold, because lucida.su inactive)',
			preview_url: lucida_midnight_preview,
			source_url: 'https://github.com/n3tael/lucida-midnight',
			start_year: 2024
		},
		{
			name: 'gold-epmakob',
			description:
				"EPMAKOB's Golden Gallery - simple gallery of funny, blurry pictures from EPMAKOB chat in Telegram",
			preview_url: gold_epmakob_preview,
			try_url: 'https://gallery.n3tael.eu.org',
			source_url: 'https://github.com/n3tael/gold-epmakob',
			start_year: 2024,
			end_year: 2025
		},
		{
			name: 'labast',
			description: 'Interpreter of Labashki - esoteric programming language',
			preview_url: labashki_preview,
			source_url: 'https://github.com/n3tael/labast',
			start_year: 2024,
			end_year: 2024
		},
		{
			name: 'ramznbot',
			description:
				"Telegram inline-bot for sending funny Ramazan's videomessages",
			start_year: 2023,
			end_year: 2024
		}
	];
</script>

<article>
	<small>Projects</small>
	<div id="projects">
		<section>
			{#each projects.filter((p) => projects.indexOf(p) % 2 === 0) as project}
				<Project {project} />
			{/each}
		</section>
		<section>
			{#each projects.filter((p) => projects.indexOf(p) % 2 !== 0) as project}
				<Project {project} />
			{/each}
		</section>
	</div>
	<small class="mt-3 md:text-right"
		>and other projects that i dont want to show...</small>
</article>

<style lang="postcss">
	@reference "../../app.css";

	#projects {
		@apply grid grid-cols-1 gap-2 md:grid-cols-2;

		section {
			@apply flex flex-col gap-2;
		}
	}
</style>
