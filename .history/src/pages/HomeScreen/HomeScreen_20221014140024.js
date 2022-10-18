import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ContentHeader } from '../../components/Header/headerStyled'
import { getPodcastList } from '../../redux/reducers/PodcastListReducer'
import PodcastList from '../../components/PodcastList/PodcastList'

const HomeScreen = () => {
	const dispatch = useDispatch()
	const [podcasts, setPodcasts] = useState([])
	const { podcastList = useSelector((state) => state.podcastList)

	console.log(podcastList)
	useEffect(() => {
		dispatch(getPodcastList())
	}, [])

	// useEffect(() => {
	// 	if (successPodcastList) {
	// 		setPodcasts(podcastList)
	// 	}
	// }, [successPodcastList])

	return (
		<ContentHeader>
			<PodcastList podcasts={podcasts} />
		</ContentHeader>
	)
}
export default HomeScreen