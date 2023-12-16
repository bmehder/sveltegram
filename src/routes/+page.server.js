/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const response = await fetch('/api/images')
	const thumbnails = await response.json()
	
	return { thumbnails }
}
