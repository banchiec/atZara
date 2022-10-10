import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPodcastList } from '../../feature/Podcast/PodcastApi'

const PodcastList = () => {
	const dispatch = useDispatch()

	const { podcastList } = useSelector((state) => state.podcast)

	console.log(pod);
	useEffect(() => {
		dispatch(fetchPodcastList())
	}, [])

	return <div>Podcast</div>
}
export default PodcastList
