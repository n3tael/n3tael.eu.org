<script>
	import EmailArt from "$lib/ascii/email.svelte";
	import Discord from "$lib/icons/discord.svelte";
	import Telegram from "$lib/icons/telegram.svelte";
    import Email from "$lib/icons/email.svelte";
</script>

<svelte:head>
    <title>Contacts • n3tael</title>
</svelte:head>

<EmailArt />
<h2>Contacts</h2>
<p>You can contact me at:</p>
<ul class="contacts-list">
    <li><Telegram /><a href="https://n3tael.t.me/">@n3tael</a></li>
    <li><Discord /><a href="https://discord.com/users/484382663097057290">n3tael</a></li>
    <li><Email /><span>netael @&gt;~ pm.me</span> (<a href="https://useplaintext.email">use plain text email</a>)</li>
</ul>

<style lang="postcss">
    ul.contacts-list li {
        @apply flex items-center gap-1.5;
    }
</style>