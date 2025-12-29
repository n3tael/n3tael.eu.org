<script lang="ts">
	import Loading from '$lib/Loading.svelte';
	import Turnstile from '$lib/Turnstile.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	type Question = {
		name: string;
		content: string;
		answer: string | null;
		created_at: string;
	};

	let form: HTMLFormElement;
	let turnstile_solved = $state(false);
	let form_loading = $state(false);
	let questions_loaded = $state(false);
	let questions: Question[] = $state([]);
	let content = $state('');

	const random_questions = [
		'What is your favorite color?',
		'Meow meow?',
		'Does it work?',
		'What OS are you using?',
		'日本語を話せますか？',
		'???!?!??!'
	];

	async function getMessages() {
		questions_loaded = false;

		questions = await fetch(
			`${import.meta.env.VITE_QNA_API_SERVER}/questions`
		).then((r) => r.json());

		questions_loaded = true;
	}

	async function postMessage(
		e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
	) {
		e.preventDefault();

		form_loading = true;

		await fetch(`${import.meta.env.VITE_QNA_API_SERVER}/questions`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				content,
				token: window.turnstile.getResponse()
			})
		});

		form.reset();

		form_loading = false;
	}

	onMount(getMessages);
</script>

<article>
	<small class="my-2">Questions & Answers</small>
	<p>Here you can ask me questions or view answered questions</p>
	<noscript
		>It looks like you have Javascript disabled. Please enable it if you want to
		view this page.</noscript>

	<form bind:this={form} id="question-form" onsubmit={postMessage}>
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
		{#if questions_loaded}
			{#each questions as question, i}
				<div class="question" in:fly|global={{ y: 25, delay: 40 * i }}>
					<small style="color:#{question.name};filter:none">
						#{question.name}
						<span class="text-neutral-500" title={question.created_at}
							>{new Date(question.created_at).toDateString()}</span>
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
		{:else}
			<div class="my-8 text-center">
				<Loading />
			</div>
		{/if}
	</div>
</article>

<style lang="postcss">
	@reference "../../app.css";

	#question-form {
		@apply relative border-2 border-neutral-800 p-2;

		#loading-container {
			@apply absolute top-0 right-0 bottom-0 left-0 z-99 flex items-center justify-center bg-neutral-800/25 backdrop-blur-md;
		}
	}

	#questions {
		@apply my-2 flex flex-col gap-2;

		.question {
			@apply border-2 border-neutral-800 px-3 py-2;

			p {
				@apply break-all;
			}
		}
	}
</style>
