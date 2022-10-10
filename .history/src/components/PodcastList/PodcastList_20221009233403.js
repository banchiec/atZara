import { useSelector } from 'react-redux'

const PodcastList = () => {
	const { podcastList } = useSelector((state) => state.podcas)

	return <div>Podcast</div>
}
export default PodcastList
