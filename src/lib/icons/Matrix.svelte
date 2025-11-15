<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src="data:image/gif;base64,R0lGODlhCgAKAHAAACH5BAEAAAEALAAAAAAKAAoAgXNzcwAAAAAAAAAAAAIUBIJocZnXHJurQYqvzlxiD0XKUQAAOw"
	width={10 * Number(size)}
	height={10 * Number(size)}
	alt="Matrix Icon"
	{...restProps} />
