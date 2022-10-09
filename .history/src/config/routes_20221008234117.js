import HomePage from '../pages/HomePage'
import * as PATHS from '../utils/paths'

const routes = (props) => {
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage {...props} />,
		},
	]
}

export default routes
