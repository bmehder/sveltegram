<script>
	/**
	 * @type {HTMLDialogElement}
	 */
	export let modal
</script>

<dialog bind:this={modal} on:close>
	<button on:click={() => modal.close()}>
		<slot />
	</button>
</dialog>

<style>
	dialog {
		max-height: 95%;
		border: none;
		border-radius: 8px;
	}

	dialog::backdrop {
		background-color: hsl(0 0% 0% / 40%);
	}
	button {
		all: unset;
	}
</style>
