import { useSelector } from 'react-redux'

const PodcastList = () => {
	const {podcast} = useSelector((state) => state.PodcastList)

	return <div>Podcast</div>
}
export default PodcastList
