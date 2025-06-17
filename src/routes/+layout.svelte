<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	{#if page.url.pathname !== '/'}
		<title>n3tael{page.url.pathname}</title>
	{:else}
		<title>n3tael</title>
	{/if}
</svelte:head>

<Header />
<Navigation />
<main>
	{@render children()}
</main>
<Footer />
<div id="crt"></div>
