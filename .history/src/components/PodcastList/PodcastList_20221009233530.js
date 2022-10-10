import { useDispatch, useSelector } from 'react-redux'

const PodcastList = () => {
	const dispatch = useDispatch()

	const { podcastList } = useSelector((state) => state.podcast)

	return <div>Podcast</div>
}
export default PodcastList
