<script lang="ts">
	import { asset } from '$app/paths';
	import CodeCopy from '$lib/components/code-copy.svelte';
</script>

<article id="keys">
	<small
		>SSH <a class="text-neutral-400" href={asset('/id/ssh')}>Download</a
		></small>
	<!-- prettier-ignore -->
	<CodeCopy
		>ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFCEEiXBofYUp60m77wxYxVkwGNGEmTpBFJw0za8iSk5 n3tael</CodeCopy>
	<small
		>AGE <a class="text-neutral-400" href={asset('/id/age')}>Download</a
		></small>
	<CodeCopy
		>age16ejxlvjugf9kvlk9dcxcrkdk3rwcenmhkda0c579rkuzxel2za3sn38mkk</CodeCopy>
</article>
