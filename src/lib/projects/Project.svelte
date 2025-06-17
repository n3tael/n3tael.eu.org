<script lang="ts">
	import Code from '$lib/icons/Code.svelte';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import type { TProject } from './types';

	const { project }: { project: TProject } = $props();
</script>

<div class="project">
	{#if project.preview_url}
		<img src={project.preview_url} alt="Preview of {project.name}" />
	{/if}
	<div class="info">
		<h3>{project.name}</h3>
		<small>
			{project.start_year}
			{#if project.end_year}
				— {project.end_year}
			{/if}
		</small>
		<p>{project.description}</p>
		{#if project.try_url || project.source_url}
			<div class="actions">
				{#if project.try_url}
					<a href={project.try_url}>
						<ExternalLink size="2" />
						<span>Try it</span>
					</a>
				{/if}
				{#if project.source_url}
					<a href={project.source_url}>
						<Code size="2" />
						<span>Source code</span>
					</a>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	@reference "../../app.css";

	.project {
		@apply border-2 border-neutral-800;

		img {
			image-rendering: auto;
		}

		.info {
			@apply flex flex-col px-4 pt-3 pb-4;

			h3 {
				@apply text-[27px];
			}

			p {
				@apply text-neutral-400;

				&:last-child {
					@apply mb-0;
				}
			}
		}

		.actions {
			@apply flex gap-2;

			a {
				@apply inline-flex h-10 items-center gap-2 border-2 border-neutral-800 px-2 py-1 transition-colors hover:cursor-pointer hover:border-neutral-700;
				@apply no-underline;
			}
		}
	}
</style>
