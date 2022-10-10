import { useSelector } from 'react-redux'

const PodcastList = () => {
	const { podcast } = useSelector((state) => state.podcastList)

	return <div>Podcast</div>
}
export default PodcastList
