import axios from 'axios'
import { fetchPodcastList } from '../../feature/Podcast/PodcastApi'
jest.mock('axios')

test('should fecht podcast', () => {
	const podcast = [
		{
			'im:name': 'Song Exploder',
		},
	]
	const resp = {data: podcast}
	axios.get.mockResolvedValue(resp)
	return  fetchPodcastList.get
})
