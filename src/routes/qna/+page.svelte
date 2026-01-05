<script lang="ts">
	import Loading from '$lib/components/loading.svelte';
	import Turnstile from '$lib/components/turnstile.svelte';
	import { fade, fly } from 'svelte/transition';
	import { toast } from 'svelte-sonner';
	import { browser } from '$app/environment';

	type Question = {
		name: string;
		content: string;
		answer: string | null;
		created_at: string;
	};

	let form: HTMLFormElement;
	let turnstile_solved = $state(false);
	let form_loading = $state(false);
	let content = $state('');

	const random_questions = [
		'What is your favorite color?',
		'Meow meow?',
		'Does it work?',
		'What OS are you using?',
		'日本語を話せますか？',
		'???!?!??!'
	];

	async function getQuestions(): Promise<Question[]> {
		return await fetch(`${import.meta.env.VITE_QNA_API_SERVER}/questions`).then(
			(r) => r.json()
		);
	}

	async function postQuestion(
		e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
	) {
		e.preventDefault();

		form_loading = true;

		const response = await fetch(
			`${import.meta.env.VITE_QNA_API_SERVER}/questions`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					content,
					token: window.turnstile.getResponse()
				})
			}
		);

		if (response.status === 201) {
			form.reset();
		} else {
			toast.error('Error!', {
				description:
					(await response.json())?.error ||
					'Unexcepted error occured while sending your question, view console for details'
			});
		}

		form_loading = false;
	}
</script>

<noscript
	class="my-2 block border-2 border-yellow-500/25 bg-yellow-500/10 px-2 py-1"
	>It looks like you have Javascript disabled. Please enable it if you want to
	view this page.</noscript>
<article>
	<small class="my-2">Questions & Answers</small>
	<p>Here you can ask me questions or view answered questions</p>

	<form bind:this={form} id="question-form" onsubmit={postQuestion}>
		{#if !turnstile_solved || form_loading}
			<div id="loading-container" transition:fade>
				<Loading
					title={!turnstile_solved
						? 'cloudflare turnstile checks if you are a human'
						: 'waiting for server response...'} />
			</div>
		{/if}
		<Turnstile bind:solved={turnstile_solved} />
		<textarea
			class="max-h-48 w-full resize-y"
			disabled={!turnstile_solved}
			id="content"
			name="content"
			placeholder={random_questions[
				Math.floor(Math.random() * random_questions.length)
			]}
			bind:value={content}
			minlength="1"
			maxlength="256"></textarea>
		<div class="mt-1 flex items-center justify-end gap-2">
			<small>{content.length}/256</small>
			<button disabled={!turnstile_solved} type="submit">Send</button>
		</div>
	</form>

	<div id="questions">
		{#await browser ? getQuestions() : Promise.resolve([])}
			<div class="my-16 text-center">
				<Loading />
			</div>
		{:then questions}
			{#each questions as question, i (i)}
				<div class="question" in:fly|global={{ y: 25, delay: 40 * i }}>
					<small class="inline! grayscale-0!" style="color:#{question.name}"
						>#{question.name}</small>
					<small class="inline!" title={question.created_at}
						>{new Date(question.created_at).toDateString()}
					</small>
					<p>{question.content}</p>
					{#if question.answer}
						<small class="border-t-2 border-neutral-800 pt-2">answer</small>
						<p>{question.answer}</p>
					{/if}
				</div>
			{:else}
				<small class="text-center my-8">nothing here yet</small>
			{/each}
		{:catch e}
			<small class="my-16 text-center">{e}</small>
		{/await}
	</div>
</article>

<style lang="postcss">
	@reference "$styles";

	#question-form {
		@apply relative border-2 border-neutral-800 p-2;

		#loading-container {
			@apply absolute top-0 right-0 bottom-0 left-0 z-99 flex items-center justify-center bg-neutral-800/25 backdrop-blur-md;
		}
	}

	#questions {
		@apply my-2 flex flex-col gap-2;

		.question {
			@apply border-2 border-neutral-800 px-3 py-2 shadow-xl;

			p {
				@apply break-all;
			}
		}
	}
</style>
