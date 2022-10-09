import { Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/LogIn'
import Signup from '../pages/Signup'
import * as PATHS from '../utils/paths'
import Admin from '../layouts/Admin'

const routes = (props) => {
	const { user } = props
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage {...props} />,
		},
		{
			path: PATHS.SIGNUPPAGE,
			element: <Signup {...props} />,
		},
		{
			path: PATHS.LOGINPAGE,
			element: <Login {...props} />,
		},
		{
			path: PATHS.ADMINPAGE,
			element: <Admin {...props} />,
		},
	]
}

export default routes
