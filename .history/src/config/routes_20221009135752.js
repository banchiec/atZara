import HomeScreen from '../pages/HomeScreen/HomeScreen'
import * as PATHS from '../utils/paths'

const routes = () => {
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomeScreen />,
		},
		{
			path: PATHS.DETAILPOSTCAST,
			element: <HomeScreen />,
		},
	]
}

export default routes
