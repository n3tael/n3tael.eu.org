<script>
	import Contacts from '$lib/components/home/contacts.svelte';
	import Tags from '$lib/components/home/tags.svelte';
</script>

<article>
	<div class="relative z-99 float-right md:w-56">
		<small class="mb-2">Contacts</small>
		<Contacts />
	</div>

	<small class="my-2">About me</small>
	<p>
		Developer and computer nerd. Love computers, programming, tea, cats OwO,
		music and winter.
	</p>
	<p></p>
	<p>
		My acquaintance with programming starts in 2020, the first language that I
		learned was JavaScript, which I used to write bots for Discord and later
		bots for Telegram.
	</p>
	<p>Currently I writing web-apps, bots, sometimes cli apps.</p>

	<small class="my-2">Speak</small>
	<Tags
		tags={[
			'Ukranian (advanced)',
			'Russian (native)',
			'English (intermediate)'
		]} />

	<small class="my-2">Listen to</small>
	<Tags
		tags={[
			'Drum & Bass',
			'Jungle',
			'Hyperpop',
			'Digicore',
			'Breakcore',
			'Metal'
		]} />

	<small class="my-2">Write in</small>
	<Tags tags={['Typescript', 'Python', 'Go', 'Rust']} />
</article>
