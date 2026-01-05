<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Header from '$lib/components/header.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { page } from '$app/state';
	import { Toaster } from 'svelte-sonner';

	let { children } = $props();
</script>

<svelte:head>
	<title>n3tael{page.url.pathname !== '/' ? page.url.pathname : ''}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster
	position="top-center"
	toastOptions={{
		unstyled: true,
		classes: {
			toast:
				'bg-neutral-900 p-2 border-2 border-neutral-800 w-full flex gap-2 shadow-sm',
			title: 'font-small text-small text-neutral-500 grayscale',
			description: 'font-display grayscale'
		}
	}}>
	{#snippet errorIcon()}
		<span class="px-1 font-display grayscale">✕</span>
	{/snippet}
</Toaster>

<Header />
<Navigation />
<main>
	{@render children()}
</main>
<Footer />
<div id="crt"></div>
