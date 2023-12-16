<script>
	export let data
</script>

<div class="center">
	{#if data.image}
		<img alt={data.image.alt} src={data.image.src} />
	{/if}
</div>
