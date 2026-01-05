<script lang="ts">
	const { tags }: { tags: string[] } = $props();
</script>

<ul class="tags">
	{#each tags as tag (tag)}
		<li>{tag}</li>
	{/each}
</ul>

<style lang="postcss">
	@reference "$styles";

	.tags {
		@apply inline-flex flex-wrap gap-2;

		li {
			@apply inline-block w-fit border-2 border-neutral-800 px-2 py-0.5 grayscale;
		}
	}
</style>
