import { json } from '@sveltejs/kit'

export async function GET() {
	const images = [...Array(12).keys()].map(x => ({
		id: x + 10,
		alt: 'Placeholder',
		src: `https://picsum.photos/id/${x + 10}/800`,
		heading: 'Lorem ipsum',
		subheading: 'Dolor sit amet.'
	}))

	return json(images)
}
