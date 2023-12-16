<script>
	export let data
</script>

<div class="center">
	{#if data.image}
		<img alt={data.image.alt} src={data.image.src} />
		<div class="text">
			<div class="heading">Lorem ipsum</div>
			<div class="sub-heading">Dolor sit amet.</div>
		</div>
	{/if}
</div>

<style>
	div.center {
		line-height: initial;
	}
	img {
		border-radius: 0.5rem;
	}
	.text {
		position: absolute;
		text-align: center;
		text-shadow: 1px 1px 4px rgba(0, 0, 0, 1);

		& .heading {
			font-size: calc(3rem + 4vw);
			font-weight: 900;
		}

		& .sub-heading {
			font-size: calc(3rem + 2vw);;
			font-weight: 500;
		}
	}
</style>
