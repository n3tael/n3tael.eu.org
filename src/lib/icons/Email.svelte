<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src="data:image/gif;base64,R0lGODlhCgAIAHAAACH5BAEAAAEALAAAAAAKAAgAgXNzcwAAAAAAAAAAAAIRhI8Qy2uhmHrQuQgxbZfLlBQAOw"
	width={10 * Number(size)}
	height={8 * Number(size)}
	alt="Email Icon"
	{...restProps} />
