import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ContentHeader } from '../../components/Header/headerStyled'
import { getPodcastList } from '../../redux/reducers/PodcastListReducer'
import PodcastList from '../../components/PodcastList/PodcastList'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const [podcasts, setPodcasts] = useState()
	const {loadingPodcastList, successPodcastList, podcastList } = useSelector((state) => state.podcastList)

	useEffect(() => {
		dispatch(getPodcastList())
	}, [])

	useEffect(() => {
		if (successPodcastList) {
			setPodcasts(podcastList)
		}
	}, [podcastList, successPodcastList])

	return (
		<ContentHeader>
			 {loadingPodcastList ? (

			 ): (

			 )
			}
			<PodcastList podcasts={podcasts} />
		</ContentHeader>
	)
}
export default HomeScreen
