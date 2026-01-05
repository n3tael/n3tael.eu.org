<script lang="ts">
	import Clipboard from '$lib/icons/clipboard.svelte';
	import { toast } from 'svelte-sonner';

	async function copy(
		e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		// i know it is not best solution
		await navigator.clipboard
			.writeText(e.currentTarget.parentElement!.innerText)
			.then(() => toast('copied!'));
	}

	let { children } = $props();
</script>

<span>
	<pre>{@render children?.()}</pre>
	<button onclick={copy}><Clipboard size="2" /></button>
</span>

<style lang="postcss">
	@reference '$styles';

	span {
		@apply my-2 flex gap-2;

		button {
			@apply shrink-0;
		}
	}
</style>
