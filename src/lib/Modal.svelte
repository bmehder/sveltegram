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
		padding: 0;
		line-height: 0;
		border: none;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}
	
	dialog::backdrop {
		background-color: hsl(0 0% 0% / 40%);
	}
	
	button {
		all: unset;
		cursor: pointer;
	}
</style>
