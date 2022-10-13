import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import routes from './config/routes'

function App() {
	return (
		<Router>
			<Provider>

			<Header />
			<Routes>
				{routes().map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
			</Provider>
		</Router>
	)
}

export default App
