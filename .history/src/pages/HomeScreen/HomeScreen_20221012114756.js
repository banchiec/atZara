import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ContentHeader } from '../../components/Header/headerStyled'
import { getPodcastList } from '../../redux/reducers/PodcastListReducer'

const HomeScreen = () => {
	const dispatch = useDispatch()
	// const { podcastList } = useSelector((state) => state.podcastList)
	// useEffect(() => {
	// 	dispatch(getPodcastList())
	// }, [])
	return <ContentHeader>Home</ContentHeader>
}
export default HomeScreen