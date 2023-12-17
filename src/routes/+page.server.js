import { offset } from '$lib/api-options'

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const response = await fetch(`/api/images?offset=${offset}`)
	const thumbnails = await response.json()

	return { thumbnails }
}
