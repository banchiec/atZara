import { useSelector } from 'react-redux'

const PodcastList = () => {
	const { podcastList } = useSelector((state) => state.podcast)

	return <div>Podcast</div>
}
export default PodcastList
