<script lang="ts">
	import icon from '$lib/assets/icons/external-link.gif?inline';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src={icon}
	width={10 * Number(size)}
	height={8 * Number(size)}
	alt="External Link Icon"
	{...restProps} />
