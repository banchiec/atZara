import HomePage from '../pages/HomePage'
import * as PATHS from '../utils/paths'
import Admin from '../layouts/Admin'

const routes = (props) => {
	const { user } = props
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage {...props} />,
		},
	]
}

export default routes
