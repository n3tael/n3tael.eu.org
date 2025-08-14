<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src="data:image/gif;base64,R0lGODlhCQAJAHAAACH5BAEAAAEALAAAAAAJAAkAgXNzcwAAAAAAAAAAAAIRTGCXwNf8oJwUurlkMnbzXQAAOw"
	width={9 * Number(size)}
	height={9 * Number(size)}
	alt="Deezer Icon"
	{...restProps} />
