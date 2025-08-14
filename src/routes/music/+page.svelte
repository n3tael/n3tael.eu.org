<script lang="ts">
	import Spotify from '$lib/icons/Spotify.svelte';
	import AppleMusic from '$lib/icons/AppleMusic.svelte';
	import Deezer from '$lib/icons/Deezer.svelte';
	import Tidal from '$lib/icons/Tidal.svelte';

	const platforms = [
		{
			name: 'Spotify',
			href: 'https://open.spotify.com/artist/4lJCVNBXm8TuNwS3lTeX68',
			icon: Spotify
		},
		{
			name: 'Apple Music',
			href: 'https://music.apple.com/us/artist/novavif/1828710298',
			icon: AppleMusic
		},
		{
			name: 'Deezer',
			href: 'https://deezer.com/artist/337397331',
			icon: Deezer
		},
		{
			name: 'TIDAL',
			href: 'https://listen.tidal.com/artist/64130309',
			icon: Tidal
		}
	];
</script>

<article>
	<small class="my-2">What I listen to</small>
	<p>
		I listen to everything I like, but I can highlight certain genres that are
		in my library: drum & bass, jungle, hyperpop, digicore, breakcore, metal and
		rap.
	</p>

	<small class="my-2">What I produce</small>
	<p>
		I'm releasing my music under nickname 'novavif' in multipe genres. You can
		listen to it at:
	</p>
	<div class="platforms">
		{#each platforms as platform}
			<a href={platform.href}>
				<platform.icon size="2" />
				<span>{platform.name}</span>
			</a>
		{/each}
	</div>
</article>

<style lang="postcss">
	@reference "../../app.css";

	.platforms {
		@apply flex flex-col gap-1 md:flex-row;

		a {
			@apply flex h-10 w-full items-center gap-2 border-2 border-neutral-800 bg-[url('/assets/contacts-background.png')] bg-cover px-2 py-1 no-underline grayscale transition-all hover:border-neutral-700;
		}
	}
</style>
