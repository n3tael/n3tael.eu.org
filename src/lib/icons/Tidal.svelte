<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src="data:image/gif;base64,R0lGODlhDQAJAHAAACH5BAEAAAEALAAAAAANAAkAgXNzcwAAAAAAAAAAAAIXTGCXaOD3HJK0zoiZait56YVV+D3kRxYAOw"
	width={13 * Number(size)}
	height={9 * Number(size)}
	alt="Tidal Icon"
	{...restProps} />
