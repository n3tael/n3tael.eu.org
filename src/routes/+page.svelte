<script lang="ts">
    const date = new Date();
    const time = date.toLocaleString('uk-UA', {hour: '2-digit', hour12: false, minute: '2-digit', timeZone: 'Europe/Kyiv' });
</script>

<svelte:head>
    <title>n3tael</title>
</svelte:head>

<h2>Welcome!</h2>
<p>Hello, i'm n3tael, a developer from Ukraine. I love tea, cats, programming and computers. My timezone is <abbr title="Easter Europe Time">EET</abbr> (in summer <abbr title="Easter Europe Summer Time">EEST</abbr>), and <abbr title="right now">rn</abbr> my time is <span id="time">{time}</span>.</p>
<h2>What i do?</h2>
<p>Usually i write telegram bots <span class="muted">(early discord bots)</span>, websites, some personal utilities. Most often i use <abbr title="javascript">js</abbr> (<abbr title="typescript">ts</abbr>), but also i know python, and little bit of rust. Check out <a href="/p">my projects page</a>!</p>
<br>
<p>Did you know that there is ASCII-arts on other pages?</p>