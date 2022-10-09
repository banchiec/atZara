import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import routes from './config/routes'

function App() {
	return (
			<Router>
				<Routes>
					{routes().map((route) => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</Router>
		</div>
	)
}

export default App
