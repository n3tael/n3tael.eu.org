<footer>
	<a href="/licenses">Licensing</a>
	<span class="delimiter"></span>
	<a href="https://github.com/n3tael/n3tael.eu.org">Source Code</a>
	<span class="delimiter"></span>
	<a href="/support">Donate</a>
	<span class="delimiter"></span>
	<a
		id="crt-tumbler"
		href="#crt"
		onclick={() => document.documentElement.classList.toggle('crt')}>CRT</a>
	<p>
		Except where otherwise noted, content on this site is licensed under a
		<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
			CC BY-SA 4.0
		</a>
		license. n3tael 🄯 {new Date().getFullYear()}.
	</p>
</footer>

<style lang="postcss">
	@reference "../app.css";

	footer {
		@apply mt-4 w-full border-t-2 border-t-neutral-800 py-4 text-center text-neutral-500 grayscale;

		span.delimiter {
			@apply inline-block w-4;

			&::after {
				content: '•';
			}
		}
	}
</style>
