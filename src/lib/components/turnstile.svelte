<script lang="ts">
	import { onMount } from 'svelte';

	let turnstileElement: HTMLElement;
	let { solved = $bindable() }: { solved: boolean } = $props();

	onMount(() => {
		if (window.turnstile) {
			window.turnstile.render(turnstileElement, {
				sitekey: import.meta.env.VITE_TURNSTILE_SITEKEY,
				callback: () => (solved = true)
			});
		}
	});
</script>

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js"></script>
</svelte:head>

<div bind:this={turnstileElement} id="turnstile-widget"></div>
