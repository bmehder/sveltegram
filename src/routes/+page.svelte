<script>
	import { goto, preloadData, pushState } from '$app/navigation'
	import { page } from '$app/stores'
	import { disableScrolling, enableScrolling } from '$lib/utils'
	import Modal from '$lib/Modal.svelte'
	import Image from './photos/[id]/+page.svelte'
	import { onMount } from 'svelte'

	export let data

	/** @type {HTMLDialogElement} */
	let modal

	/** @param {MouseEvent} evt */
	async function showModal(evt) {
		const { href } = /** @type {HTMLAnchorElement} */ (evt.currentTarget)

		const result = await preloadData(href)

		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data })
			modal?.showModal()
		} else {
			goto(href)
		}
	}

	function closeModal() {
		disableScrolling()
		$page.route.id !== '/' && history.back()
		setTimeout(() => {
			enableScrolling()
		}, 300)
	}

	$: if (!$page.state.selected) {
		modal?.close()
	}
</script>

<Modal bind:modal on:close={closeModal}>
	{#if $page.state.selected}
		<Image data={$page.state.selected} />
	{/if}
</Modal>

<div class="auto-grid">
	{#each data.thumbnails as { id, src, alt }}
		<a on:click|preventDefault={showModal} href="/photos/{id}">
			<img {src} {alt} />
		</a>
	{/each}
</div>
