import axios from 'axios'
jest.mock('axios')

test('should fecht podcast', () => {
	const podcast = [
		{
			'im:name': 'Song Exploder',
		},
	]
	const resp = {data: podcast}
	axios.get.mockResolved
})
