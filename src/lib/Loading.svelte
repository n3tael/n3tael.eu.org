<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	let { ...props }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span class="loading-animation" {...props}>
	<i style="animation-delay:0s">•</i>
	<i style="animation-delay:0.1s">•</i>
	<i style="animation-delay:0.2s">•</i>
</span>

<style lang="postcss">
	@reference "../app.css";

	.loading-animation {
		@apply select-none;
		i {
			@apply animate-loadingDot text-neutral-500 not-italic text-shadow-[0px_0px_8px_var(--text-shadow-color)] text-shadow-neutral-500;
		}
	}
</style>
