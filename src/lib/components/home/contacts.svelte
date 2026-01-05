<script lang="ts">
	import contacts from '$lib/contacts';
</script>

<div id="contacts">
	{#each contacts as contact (contact.name)}
		<a href={contact.link} title={contact.name} rel="external">
			<contact.icon size="2" />
			<span>{contact.display_name}</span>
		</a>
	{/each}
</div>

<style lang="postcss">
	@reference "$styles";

	#contacts a {
		@apply flex h-10 w-fit items-center justify-end gap-2 border-2 border-neutral-800 bg-[url('$lib/assets/backgrounds/contacts.png')] bg-cover px-2 py-1 no-underline grayscale transition-all hover:border-neutral-700 md:w-full md:justify-start;

		&:not(:first-child) {
			@apply mt-1;
		}

		span {
			@apply hidden md:block;
		}
	}
</style>
