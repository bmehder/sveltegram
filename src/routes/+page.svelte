<script>
	import { goto, preloadData, pushState } from '$app/navigation'
	import { page } from '$app/stores'
	import Modal from '$lib/Modal.svelte'
	import Image from './photos/[id]/+page.svelte'

	export let data

	/** @type {HTMLDialogElement} */
	let modal

	/** @param {MouseEvent} evt */
	async function showModal(evt) {
		const { href } = /** @type {HTMLAnchorElement} */ (evt.currentTarget)

		const result = await preloadData(href)

		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data })
			modal.showModal()
		} else {
			goto(href)
		}
	}

	function disableScrolling() {
		var x = window.scrollX
		var y = window.scrollY
		window.onscroll = function () {
			window.scrollTo(x, y)
		}
	}

	function enableScrolling() {
		window.onscroll = function () {}
	}

	function closeModal() {
		disableScrolling()
		history.back()
		setTimeout(() => {
			enableScrolling()
		}, 300)
	}
</script>

<Modal bind:modal on:close={closeModal}>
	{#if $page.state.selected}
		<Image data={$page.state.selected} />
	{/if}
</Modal>

<div class="auto-grid">
	{#each data.thumbnails as thumbnail}
		<a on:click|preventDefault={showModal} href="/photos/{thumbnail.id}">
			<img alt={thumbnail.alt} src={thumbnail.src} />
		</a>
	{/each}
</div>
