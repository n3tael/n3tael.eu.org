<script lang="ts">
	import Code from "$lib/ascii/code.svelte";
</script>

<svelte:head>
    <title>Projects • n3tael</title>
</svelte:head>

<Code />
<h2>Projects</h2>
<p>List of all projects, not just the ones i'm proud of</p>
<ul>
    <li><b>gold-epmakob</b> – web-gallery written in python | <a href="https://gallery.n3tael.eu.org/">website</a> • <a href="https://github.com/n3tael/gold-epmakob">source code</a></li>
    <li><b>labast</b> – <span title="esoteric programming language">labashki</span> interpreter on rust | <a href="https://gitea.bedohswe.eu.org/n3tael/labast">source code</a></li>
    <li><b>n3tael.eu.org</b> – this website, made with sveltekit</li>
</ul>

<style lang="postcss">
    ul {
        @apply list-disc pl-5 my-2;
    }
</style>