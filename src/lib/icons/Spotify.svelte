<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src="data:image/gif;base64,R0lGODlhCgAKAHAAACH5BAEAAAEALAAAAAAKAAoAgXNzcwAAAAAAAAAAAAITTIBpl827mgSMwulkxKhWbUxGAQA7"
	width={10 * Number(size)}
	height={10 * Number(size)}
	alt="Spotify Icon"
	{...restProps} />
