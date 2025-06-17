<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src="data:image/gif;base64,R0lGODlhCgAHAHAAACH5BAEAAAEALAAAAAAKAAcAgXNzcwAAAAAAAAAAAAINjHGmuK3JHpQhxipZLAA7"
	width={10 * Number(size)}
	height={7 * Number(size)}
	alt="Code Icon"
	{...restProps} />
