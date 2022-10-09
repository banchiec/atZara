import { Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/LogIn'
import Signup from '../pages/Signup'
import ProtectedPage from '../pages/ProtectedPage'
import Shopping from '../pages/shopping/Shopping'
import * as PATHS from '../utils/paths'
import Admin from '../layouts/Admin'
import Dashboard from '../pages/admin/Dashboard'

const routes = (props) => {
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