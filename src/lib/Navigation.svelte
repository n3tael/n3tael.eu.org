<script lang="ts">
	import { page } from '$app/state';

	const paths = [
		{
			path: '/',
			name: 'home'
		},
		{
			path: '/projects',
			name: 'projects'
		},
		{
			path: '/music',
			name: 'music'
		},
		{
			path: '/identity',
			name: 'identity'
		},
		{
			path: '/xtra',
			name: 'extra'
		}
	];
</script>

<nav>
	<ul>
		{#each paths as path}
			<a href={path.path}>
				<li aria-current={page.url.pathname === path.path}>{path.name}</li>
			</a>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	@reference "../app.css";

	nav {
		@apply my-2 border-2 border-neutral-800 bg-[url('/assets/navigation-background.png')] bg-cover p-2 text-[18px];

		ul {
			@apply flex flex-wrap justify-center gap-2;

			a {
				@apply no-underline;

				li {
					@apply cursor-pointer border-2 border-neutral-700 border-r-neutral-900 border-b-neutral-900 bg-neutral-800 px-4 grayscale select-none;
				}

				&:active li,
				li[aria-current='true'] {
					@apply cursor-default border-t-neutral-900 border-r-neutral-700 border-b-neutral-700 border-l-neutral-900;
				}
			}
		}
	}
</style>
