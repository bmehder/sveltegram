<script>
	/**
	 * @type {HTMLDialogElement}
	 */
	export let modal
</script>

<dialog bind:this={modal} on:close>
	<button on:click={() => modal.close()}>X</button>
	<slot />
</dialog>

<style>
	dialog {
		padding: 0;
		line-height: 0;
		border: none;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	dialog::backdrop {
		background-color: hsl(0 0% 0% / 60%);
	}

	button {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
		width: 3rem;
		height: 3rem;
		background-color: white;
		color: #525252;
		font-size: 1.5rem;
		font-weight: bold;
		border: 2px solid rgba(0, 0, 0, 0.6);
		border-radius: 50%;
		box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
		transition: 100ms scale;

		&:hover {
			scale: 0.95;
		}
	}
</style>
