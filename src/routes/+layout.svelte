<script>
	import '$lib/app.css'
</script>

<svelte:head>
	<title>Sveltegram</title>
</svelte:head>

<div class="wrapper">
	<header>
		<h1>Shallow Routing with SvelteKit 2.0</h1>
	</header>
	
	<main>
		<slot />
	</main>
</div>

<style>
	.wrapper {
		display: grid;
		gap: 2rem;
		max-width: 64rem;
		padding: 2rem;
		margin-inline: auto;

		& header {
			text-align: center;
		}
	}
</style>