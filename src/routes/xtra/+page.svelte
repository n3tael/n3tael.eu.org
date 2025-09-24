<script lang="ts">
	const buttons: { href: string; image: { src: string; alt: string } }[] = [
		{
			href: '/',
			image: {
				src: '/assets/buttons/n3tael.gif',
				alt: 'my button!'
			}
		},
		{
			href: 'https://crytality.pw/',
			image: {
				src: '/assets/buttons/crytality.png',
				alt: 'crytality'
			}
		},
		{
			href: 'https://meex.lol/meow/',
			image: {
				src: '/assets/buttons/meexsite.gif',
				alt: 'MeexSite'
			}
		},
		{
			href: 'https://camp3rcraft.net/',
			image: {
				src: '/assets/buttons/camp3rcraft.gif',
				alt: 'camp3rcraft'
			}
		},
		{
			href: 'https://slonk.ing/',
			image: {
				src: '/assets/buttons/slonk.apng',
				alt: 'slonk'
			}
		},
		{
			href: 'https://int4.cc',
			image: {
				src: '/assets/buttons/int4_t.png',
				alt: 'int4_t'
			}
		},
		{
			href: 'https://doomzday.bandcamp.com/',
			image: {
				src: '/assets/buttons/doomzday.png',
				alt: 'Doömzday'
			}
		},
		{
			href: 'https://defenestracijaa.bandcamp.com/',
			image: {
				src: '/assets/buttons/defenestracijaa.png',
				alt: 'Дефенестрація'
			}
		},
		{
			href: 'https://houl.floof.company/',
			image: {
				src: '/assets/buttons/houl.png',
				alt: 'Houl'
			}
		},
		{
			href: 'https://hayden.moe/',
			image: {
				src: '/assets/buttons/hayden.png',
				alt: 'hayden'
			}
		},
		{
			href: 'https://sophari.org/',
			image: {
				src: '/assets/buttons/sophari.gif',
				alt: 'sophari'
			}
		},
		{
			href: 'https://patsore.org/',
			image: {
				src: '/assets/buttons/patsore.png',
				alt: 'patsore'
			}
		},
		{
			href: 'https://vendicated.dev/',
			image: {
				src: '/assets/buttons/ven.png',
				alt: 'Vendicated'
			}
		},
		{
			href: 'https://magmaus3.eu.org/',
			image: {
				src: '/assets/buttons/magmaus3.gif',
				alt: 'magmaus3'
			}
		},
		{
			href: 'https://lucida.to/',
			image: {
				src: '/assets/buttons/lucida.gif',
				alt: 'lucida.to'
			}
		},
		{
			href: 'https://eightyeightthirty.one',
			image: {
				src: '/assets/buttons/eightyeightthirtyone.png',
				alt: '883.1'
			}
		},
		{
			href: 'https://www.mozilla.org/firefox/',
			image: {
				src: '/assets/buttons/firefox.png',
				alt: 'Mozilla Firefox'
			}
		},
		{
			href: 'https://foobar2000.org/',
			image: {
				src: '/assets/buttons/foobar2000.png',
				alt: 'foobar2000'
			}
		},
		{
			href: 'https://imhex.werwolv.net/',
			image: {
				src: '/assets/buttons/imhex.png',
				alt: 'ImHex'
			}
		},
		{
			href: 'https://deltarune.com/',
			image: {
				src: '/assets/buttons/deltarune.gif',
				alt: 'DELTARUNE'
			}
		},
		{
			href: 'https://getpaint.net/',
			image: {
				src: '/assets/buttons/pdn.gif',
				alt: 'Made with PaintDotNet'
			}
		},
		{
			href: 'https://aseprite.org/',
			image: {
				src: '/assets/buttons/aseprite.png',
				alt: 'aseprite'
			}
		}
	];

	const webrings: {
		name: String;
		links: { previous: string; next: string; website: string; random?: string };
	}[] = [
		{
			name: 'fried webring',
			links: {
				previous: 'https://meex.lol/api/wr?p=n3tael.eu.org',
				next: 'https://meex.lol/api/wr?n=n3tael.eu.org',
				website: 'https://meex.lol/fried_webring'
			}
		}
	];
</script>

<article>
	<small>Buttons</small>
	<div id="buttons">
		{#each buttons as button}
			<a href={button.href}>
				<img
					src={button.image.src}
					alt={button.image.alt}
					width="88"
					height="31" />
			</a>
		{/each}
	</div>

	<small>Webrings</small>
	<div id="webrings">
		{#each webrings as webring, i}
			<a href={webring.links.previous}>←</a>
			<a href={webring.links.website}>{webring.name}</a>
			<a href={webring.links.next}>→</a>
			{#if webring.links.random}
				<a href={webring.links.random}>�</a>
			{/if}
			{#if webrings.length - 1 !== i}
				<span class="inline-block w-4 text-center text-neutral-500 grayscale"
					>|</span>
			{/if}
		{/each}
	</div>
</article>

<style lang="postcss">
	@reference "../../app.css";

	#buttons a {
		@apply mx-0.5 inline-block grayscale-0;
	}
</style>
