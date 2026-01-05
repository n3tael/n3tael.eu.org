import bbsv from '$lib/assets/projects/brokenbeats-sv.png';
import diary from '$lib/assets/projects/diary.png';
import ge from '$lib/assets/projects/gold-epmakob.png';
import labashki from '$lib/assets/projects/labashki.png';
import lm from '$lib/assets/projects/lucida-midnight.png';

export default [
	{
		name: 'brokenbeats-sv',
		description:
			'Modern frontend for internet-radio «brokenbeats.net» in Svelte',
		preview_url: bbsv,
		try_url: 'https://bb.n3tael.eu.org',
		source_url: 'https://github.com/n3tael/brokenbeats-sv',
		start_year: 2025
	},
	{
		name: 'diary',
		description: 'Web-app for tracking your homework. Yet another To-Do list.',
		preview_url: diary,
		try_url: 'https://diary.n3tael.eu.org',
		source_url: 'https://github.com/n3tael/diary',
		start_year: 2024
	},
	{
		name: 'artwork-uploader',
		description:
			'Artwork uploader for foobar2000 plugin which adds Discord RPC',
		source_url: 'https://github.com/n3tael/artwork-uploader',
		start_year: 2024
	},
	{
		name: 'lucida-midnight',
		description: 'Custom theme for Lucida.su - music downloader',
		preview_url: lm,
		source_url: 'https://github.com/n3tael/lucida-midnight',
		start_year: 2024
	},
	{
		name: 'gold-epmakob',
		description:
			"EPMAKOB's Golden Gallery - simple gallery of funny, blurry pictures from EPMAKOB chat in Telegram",
		preview_url: ge,
		source_url: 'https://github.com/n3tael/gold-epmakob',
		start_year: 2024,
		end_year: 2025
	},
	{
		name: 'labast',
		description: 'Interpreter of Labashki - esoteric programming language',
		preview_url: labashki,
		source_url: 'https://github.com/n3tael/labast',
		start_year: 2024,
		end_year: 2024
	}
];
