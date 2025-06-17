<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src="data:image/gif;base64,R0lGODlhCgAKAHAAACH5BAEAAAEALAAAAAAKAAoAgXNzcwAAAAAAAAAAAAIUjA+pinkY3ANG1gkvfZp3Ty1iUAAAOw"
	width={10 * Number(size)}
	height={8 * Number(size)}
	alt="External Link Icon"
	{...restProps} />
