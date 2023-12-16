<script>
	import '$lib/app.css'
</script>

<svelte:head>
	<title>Sveltegram</title>
</svelte:head>

<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		max-width: 48rem;
		padding: 2rem;
		margin-inline: auto;
	}
</style>