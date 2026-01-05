<script lang="ts">
	import buttons from '$lib/buttons';

	const webrings: {
		name: string;
		links: { previous: string; next: string; website: string; random?: string };
	}[] = [];
</script>

<article>
	<small>Buttons</small>
	<div id="buttons">
		{#each buttons as button (button.href)}
			<a href={button.href} rel="external">
				<img
					src={button.image.image}
					alt={button.image.alt}
					width="88"
					height="31" />
			</a>
		{/each}
	</div>

	<small>Webrings</small>
	<div id="webrings">
		{#each webrings as webring, i (i)}
			<a href={webring.links.previous} rel="external">←</a>
			<a href={webring.links.website} rel="external">{webring.name}</a>
			<a href={webring.links.next} rel="external">→</a>
			{#if webring.links.random}
				<a href={webring.links.random} rel="external">�</a>
			{/if}
			{#if webrings.length - 1 !== i}
				<span class="inline-block w-4 text-center text-neutral-500 grayscale"
					>|</span>
			{/if}
		{:else}
			<small>(v_ v. )</small>
		{/each}
	</div>
</article>

<style lang="postcss">
	@reference "$styles";

	#buttons a {
		@apply mx-0.5 inline-block grayscale-0;
	}
</style>
