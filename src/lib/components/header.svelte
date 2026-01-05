<script lang="ts">
	import b1 from '$lib/assets/banners/1.png';
	import b2 from '$lib/assets/banners/2.png';
	import b3 from '$lib/assets/banners/3.png';
	import b4 from '$lib/assets/banners/4.png';
	import b5 from '$lib/assets/banners/5.png';
	import b6 from '$lib/assets/banners/6.png';
	import b7 from '$lib/assets/banners/7.png';
	import b8 from '$lib/assets/banners/8.png';
	import b9 from '$lib/assets/banners/9.png';
	import b10 from '$lib/assets/banners/10.png';

	import Logo from '$lib/components/logo.svelte';
	import { onMount } from 'svelte';

	const banners = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];

	let banner_index = 2;

	onMount(() => {
		banner_index = Math.floor(Math.random() * banners.length);
	});
</script>

<header>
	<img src={banners[banner_index]} alt="header background" />
	<Logo class="mx-auto animate-blink drop-shadow-logo" size="4" />
</header>

<style lang="postcss">
	@reference "$styles";

	header {
		@apply relative mx-auto w-full max-w-2xl overflow-clip border-2 border-neutral-800 py-8 shadow-xl;

		img {
			@apply absolute bottom-0 left-0 w-full animate-headerMove;
		}
	}
</style>
