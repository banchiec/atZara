import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ContentHeader } from '../../components/Header/headerStyled'
import { getPodcastList } from '../../redux/reducers/PodcastListReducer'
import PodcastList from '../../components/PodcastList/PodcastList'
import Loader from '../../components/Loader/Loader'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const [podcasts, setPodcasts] = useState()
	const { loadingPodcastList, successPodcastList, podcastList } = useSelector(
		(state) => state.podcastList
	)

	useEffect(() => {
		dispatch(getPodcastList())
	}, [])

	useEffect(() => {
		if (successPodcastList) {
			try {
				setPodcasts(podcastList)
			} catch (error) {
				console.log(error.message)
			}
		}
	}, [podcastList, successPodcastList])

	return (
		<ContentHeader>
			{loadingPodcastList ? <Loader /> : <PodcastList podcasts={podcasts} />}
		</ContentHeader>
	)
}
export default HomeScreen
