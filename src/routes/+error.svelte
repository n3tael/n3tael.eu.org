<script lang="ts">
	import { page } from '$app/state';
</script>

<div id="error">
	<h1>{page.status}</h1>
	<p>{page.error!.message}</p>
</div>

<style lang="postcss">
	@reference "../app.css";

	#error {
		@apply my-16 text-center;
		h1 {
			@apply my-8 text-7xl;
		}
		p {
			@apply text-4xl;
		}
	}
</style>
