<script>
	import { onNavigate, replaceState } from '$app/navigation'

	export let data
	
	onNavigate(() => {
		replaceState('/', {selected: undefined})
	})
</script>

<div class="center">
	{#if data.image}
		<img alt={data.image.alt} src={data.image.src} />
		<div class="text">
			<div class="heading">{data.image.heading}</div>
			<div class="sub-heading">{data.image.subheading}</div>
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
			font-size: calc(3rem + 2vw);
			font-weight: 500;
		}
	}
</style>
