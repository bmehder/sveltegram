import { json } from '@sveltejs/kit'

export async function GET() {
	const OFFSET = 110
	const images = [...Array(12).keys()].map(x => ({
		id: x + OFFSET,
		alt: 'Placeholder',
		src: `https://picsum.photos/id/${x + OFFSET}/800`,
		heading: 'Lorem ipsum',
		subheading: 'Dolor sit amet.',
	}))

	return json(images)
}
