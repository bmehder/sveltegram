<script>
	import { goto, preloadData, pushState } from '$app/navigation'
	import { page } from '$app/stores'
	import Modal from '$lib/Modal.svelte'
	import Image from './photos/[id]/+page.svelte'

	export let data

	/**
	 * @type {HTMLDialogElement}
	 */
	let modal

	/**
	 * 
	 * @param {MouseEvent} e
	 */
	async function showModal(e) {
		// get URL
		const { href } = /** @type {HTMLAnchorElement} */ (e.currentTarget)

		// get result of `load` function
		const result = await preloadData(href)
		console.log(result)

		// create new history entry
		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data })
			modal.showModal()
		} else {
			goto(href)
		}
	}

	function closeModal() {
		history.back()
	}
</script>

<Modal bind:modal on:close={closeModal}>
	{#if $page.state.selected}
		<Image data={$page.state.selected} />
	{/if}
</Modal>

<div class="feed">
	{#each data.thumbnails as thumbnail}
		<a on:click|preventDefault={showModal} href="/photos/{thumbnail.id}">
			<img alt={thumbnail.alt} src={thumbnail.src} />
		</a>
	{/each}
</div>

<style>
	.feed {
		max-inline-size: 600px;
		display: grid;
		gap: 2rem;
		margin-inline: auto;
		padding-block: 2rem;
	}
</style>
