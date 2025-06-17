<script lang="ts">
	const { languages }: { languages: string[] } = $props();
</script>

<ul id="languages">
	{#each languages as language}
		<li>{language}</li>
	{/each}
</ul>

<style lang="postcss">
	@reference "../../app.css";

	#languages {
		@apply inline-flex flex-wrap gap-2;

		li {
			@apply inline-block w-fit border-2 border-neutral-800 px-2 py-1 grayscale;
		}
	}
</style>
