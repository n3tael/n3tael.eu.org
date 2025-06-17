<script lang="ts">
	import Logo from '$lib/Logo.svelte';

	const NUMBER_OF_BACKGROUNDS = 5;
	let randomBackground = Math.floor(Math.random() * NUMBER_OF_BACKGROUNDS + 1);
</script>

<header style="background-image:url('/assets/banners/{randomBackground}.png')">
	<Logo class="mx-auto drop-shadow-logo" size="4" />
</header>

<style lang="postcss">
	@reference "../app.css";

	header {
		@apply mx-auto w-full max-w-2xl border-2 border-neutral-800 bg-cover py-8;
	}
</style>
