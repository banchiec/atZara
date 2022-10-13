import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ContentHeader } from '../../components/Header/headerStyled'

const HomeScreen = () => {
	const dispatch = useDispatch()
	const { podcastList } = useSelector((state) => state.podcastList)
	useEffect(() => {
		dispatch(getPodcastL)
	}, [])
	return <ContentHeader></ContentHeader>
}
export default HomeScreen
