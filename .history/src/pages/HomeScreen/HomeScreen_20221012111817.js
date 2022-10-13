import { useSelector } from 'react-redux'
import { ContentHeader } from '../../components/Header/headerStyled'

const HomeScreen = () => {
	const { podcastList } = useSelector((state) => state.podcastList)
	useEffec(() => {}, [])
	return <ContentHeader></ContentHeader>
}
export default HomeScreen
