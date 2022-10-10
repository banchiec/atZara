import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PodcastList = () => {
	const dispatch = useDispatch()

	const { podcastList } = useSelector((state) => state.podcast)

	useEffect(() => {
		
	}, [])

	return <div>Podcast</div>
}
export default PodcastList
