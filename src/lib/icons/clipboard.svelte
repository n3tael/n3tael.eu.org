<script lang="ts">
	import icon from '$lib/assets/icons/clipboard.gif?inline';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src={icon}
	width={7 * Number(size)}
	height={9 * Number(size)}
	alt="Clipboard Icon"
	{...restProps} />
