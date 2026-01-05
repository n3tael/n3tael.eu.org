<script lang="ts">
	import { resolve } from '$app/paths';
	import CodeCopy from '$lib/components/code-copy.svelte';
</script>

<article>
	<p>If you liked my work, please consider a donation:</p>
	<small>
		PayPal (P2P)
		<a
			href="https://www.paypal.com/myaccount/transfer/homepage/pay"
			rel="external"
			target="_blank">
			-&gt;
		</a>
	</small>
	<CodeCopy>netael@proton.me</CodeCopy>

	<small>Bank transfer (Ukraine-only)</small>
	<a href={resolve('/')}>Text me for bank details.</a>
</article>
