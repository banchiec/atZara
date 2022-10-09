import HomePage from '../pages/HomeScreen'
import * as PATHS from '../utils/paths'

const routes = () => {
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage {...props} />,
		},
		{
			path: PATHS.DETAILPOSTCAST,
			element: <HomePage {...props} />
		}
	]
}

export default routes
