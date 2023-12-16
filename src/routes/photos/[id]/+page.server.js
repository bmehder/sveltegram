/**
 * @typedef {Object[]} Images
 * @property {number} id
 * @property {string} alt
 * @property {string} src
 */

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const id = +params.id
	const response = await fetch('/api/images')
	/** @type {Images} */
	const images = await response.json()
	return {
		image: images.find(img => img.id === id)
	}
}