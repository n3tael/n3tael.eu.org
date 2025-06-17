<script>
	import Contacts from '$lib/home/Contacts.svelte';
	import Languages from '$lib/home/Languages.svelte';
</script>

<article>
	<div class="relative z-99 float-right md:w-56">
		<small class="mb-2">Contacts</small>
		<Contacts />
	</div>

	<small class="my-2">About me</small>
	<p>
		Developer and computer nerd. Love <a href="/music">music</a>, tea, cats OwO,
		programming and computers.
	</p>
	<p></p>
	<p>
		My acquaintance with programming starts in 2020, the first language that I
		learned was JavaScript, which I used to write bots for Discord and later
		bots for Telegram.
	</p>
	<p>Currently I writing web-apps, bots, sometimes cli apps.</p>

	<small class="my-2">Write in</small>
	<Languages languages={['Typescript', 'Python', 'Go', 'Rust']} />

	<small class="my-2">Speak</small>
	<Languages
		languages={[
			'Ukranian (advanced)',
			'Russian (native)',
			'English (intermediate)'
		]} />
</article>
