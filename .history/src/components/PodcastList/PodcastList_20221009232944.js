import { useSelector } from 'react-redux'

const PodcastList = () => {
	const { podcastList } = useSelector((state) => state.podcastList)

	return <div>Podcast</div>
}
export default PodcastList
