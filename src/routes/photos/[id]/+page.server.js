/**
 * @typedef {Object[]} Images
 * @property {number} id
 * @property {string} alt
 * @property {string} src
 */

/** @param {number} x */
const isEq = x => /** @param {number} y */ y => x === y

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const id = +params.id
	const isIdsEq = isEq(id)

	const response = await fetch('/api/images')
	/** @type {Images} */
	const images = await response.json()
	
	return {
		image: images.find(x => isIdsEq(x.id)),
	}
}