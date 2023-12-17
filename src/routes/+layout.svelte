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
		
		& main {
			max-width: 64rem;
			margin-inline: auto;
			padding-inline: 2rem;
		}
		
		& header {
			padding-block: 1rem;
			padding-inline: 2rem;
			background-color: #323232;
			text-align: center;
			
			& h1 {
				font-weight: 500;
			}
		}
	}
</style>