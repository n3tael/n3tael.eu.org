<script lang="ts">
	import projects from '$lib/projects';
	import Project from '$lib/components/project.svelte';
</script>

<article>
	<small>Projects</small>
	<div id="projects">
		<section>
			{#each projects.filter((p) => projects.indexOf(p) % 2 === 0) as project (project.name)}
				<Project {project} />
			{/each}
		</section>
		<section>
			{#each projects.filter((p) => projects.indexOf(p) % 2 !== 0) as project (project.name)}
				<Project {project} />
			{/each}
		</section>
	</div>
</article>

<style lang="postcss">
	@reference "$styles";

	#projects {
		@apply grid grid-cols-1 gap-2 md:grid-cols-2;

		section {
			@apply flex flex-col gap-2;
		}
	}
</style>
