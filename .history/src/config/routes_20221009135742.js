import HomeScreen from '../pages/HomeScreen/HomeScreen'
import * as PATHS from '../utils/paths'

const routes = () => {
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage />,
		},
		{
			path: PATHS.DETAILPOSTCAST,
			element: <HomePage />,
		},
	]
}

export default routes
