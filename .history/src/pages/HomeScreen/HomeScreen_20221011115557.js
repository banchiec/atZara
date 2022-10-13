import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ContentHeader } from '../../components/Header/headerStyled'

const HomeScreen = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fechtPodcastList())
	}, [])
	return <ContentHeader></ContentHeader>
}
export default HomeScreen
