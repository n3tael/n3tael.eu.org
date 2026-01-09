import { asset, resolve } from '$app/paths';
import aseprite from '$lib/assets/buttons/aseprite.png';
import crytality from '$lib/assets/buttons/crytality.png';
import defenestracijaa from '$lib/assets/buttons/defenestracijaa.png';
import deltarune from '$lib/assets/buttons/deltarune.gif';
import doomzday from '$lib/assets/buttons/doomzday.png';
import n8831 from '$lib/assets/buttons/eightyeightthirtyone.png';
import firefox from '$lib/assets/buttons/firefox.png';
import foobar2000 from '$lib/assets/buttons/foobar2000.png';
import houl from '$lib/assets/buttons/houl.png';
import imhex from '$lib/assets/buttons/imhex.png';
import int4_t from '$lib/assets/buttons/int4_t.png';
import lucida from '$lib/assets/buttons/lucida.gif';
import pdn from '$lib/assets/buttons/pdn.gif';
import slonk from '$lib/assets/buttons/slonk.apng';

export default [
	{
		href: resolve('/xtra'),
		image: {
			image: asset('/88x31.gif'),
			alt: 'my button'
		}
	},
	{
		href: 'https://crytality.pw/',
		image: {
			image: crytality,
			alt: 'crytality'
		}
	},
	{
		href: 'https://slonk.ing/',
		image: {
			image: slonk,
			alt: 'slonk'
		}
	},
	{
		href: 'https://int4.cc',
		image: {
			image: int4_t,
			alt: 'int4_t'
		}
	},
	{
		href: 'https://doomzday.bandcamp.com/',
		image: {
			image: doomzday,
			alt: 'Doömzday'
		}
	},
	{
		href: 'https://defenestracijaa.bandcamp.com/',
		image: {
			image: defenestracijaa,
			alt: 'Дефенестрація'
		}
	},
	{
		href: 'https://houl.floof.company/',
		image: {
			image: houl,
			alt: 'Houl'
		}
	},
	{
		href: 'https://lucida.to/',
		image: {
			image: lucida,
			alt: 'lucida.to'
		}
	},
	{
		href: 'https://eightyeightthirty.one',
		image: {
			image: n8831,
			alt: '883.1'
		}
	},
	{
		href: 'https://www.mozilla.org/firefox/',
		image: {
			image: firefox,
			alt: 'Mozilla Firefox'
		}
	},
	{
		href: 'https://foobar2000.org/',
		image: {
			image: foobar2000,
			alt: 'foobar2000'
		}
	},
	{
		href: 'https://imhex.werwolv.net/',
		image: {
			image: imhex,
			alt: 'ImHex'
		}
	},
	{
		href: 'https://deltarune.com/',
		image: {
			image: deltarune,
			alt: 'DELTARUNE'
		}
	},
	{
		href: 'https://getpaint.net/',
		image: {
			image: pdn,
			alt: 'Made with PaintDotNet'
		}
	},
	{
		href: 'https://aseprite.org/',
		image: {
			image: aseprite,
			alt: 'aseprite'
		}
	}
] as { href: string; image: { image: string; alt: string } }[];
