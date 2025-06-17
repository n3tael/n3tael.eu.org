<script lang="ts">
	import Email from '$lib/icons/Email.svelte';
	import Telegram from '$lib/icons/Telegram.svelte';
	import Discord from '$lib/icons/Discord.svelte';
</script>

<div id="contacts">
	<a href="mailto:netael@pm.me" title="Email">
		<Email size="2" />
		<span>netael @&gt;~ pm.me</span>
	</a>
	<a href="https://n3tael.t.me">
		<Telegram size="2" />
		<span>@n3tael</span>
	</a>
	<a href="https://discord.com/users/484382663097057290">
		<Discord size="2" />
		<span>n3tael</span>
	</a>
</div>

<style lang="postcss">
	@reference "../../app.css";

	#contacts a :global {
		@apply ml-auto flex h-10 w-fit items-center justify-end gap-1 border-2 border-neutral-800 bg-[url('/assets/contacts-background.png')] bg-cover px-2 py-1 grayscale transition-all hover:border-neutral-700 md:w-full md:justify-start;

		&:not(:first-child) {
			@apply mt-1;
		}

		img {
			@apply md:mr-1;
		}

		span {
			@apply hidden md:block;
		}
	}
</style>
