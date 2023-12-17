import { json } from '@sveltejs/kit'
import { offset } from '$lib/api-options'

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const numberOfImages = Array(12).keys()

	const images = [...numberOfImages].map(x => ({
		id: x + offset,
		alt: 'Placeholder',
		src: `https://picsum.photos/id/${x + offset}/800`,
		heading: 'Lorem ipsum',
		subheading: 'Dolor sit amet.',
	}))

	return json(images)
}
