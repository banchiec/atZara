import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPodcastList } from '../../feature/Podcast/PodcastApi'

const PodcastList = () => {

	useEffect(() => {
		dispatch(fetchPodcastList())
	}, [])

	return <div>Podcast</div>
}
export default PodcastList
