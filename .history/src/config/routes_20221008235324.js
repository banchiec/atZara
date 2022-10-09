import HomePage from '../pages/HomeScreen'
import * as PATHS from '../utils/paths'

const routes = () => {
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage />,
		},
		{
			path: PATHS.DETAILPOSTCAST,
			element: <HomePage{...props} />
		}
	]
}

export default routes
