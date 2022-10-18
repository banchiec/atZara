import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ContentHeader } from '../../components/Header/headerStyled'
import { getPodcastList } from '../../redux/reducers/PodcastListReducer'
import PodcastList from '../'

const HomeScreen = () => {
	const dispatch = useDispatch()
	const podcastList = useSelector((state) => state.podcastList)
	useEffect(() => {
		dispatch(getPodcastList())
	}, [])
	console.log(podcastList)
	return <ContentHeader><PodcastList></PodcastList></ContentHeader>
}
export default HomeScreen