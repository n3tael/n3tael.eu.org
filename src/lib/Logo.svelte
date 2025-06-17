<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { size = '1', ...restProps }: { size: string } & HTMLImgAttributes =
		$props();
</script>

<img
	src="data:image/gif;base64,R0lGODdhKwAQAHcAACH5BAkKAAAALAAAAAArABAAgAAAAP///wJOhA+hyOoPo2MG0iSzbpHrbyGSB5ZidpRqQIbYQ63n1sXmjNb2hy/gVeH1WD/ga5RybYxHVxD21K0mSWjVOl0MW9rm7cradb1Cj5E6RFEKADs"
	width={43 * Number(size)}
	height={16 * Number(size)}
	alt="Logo"
	{...restProps} />
