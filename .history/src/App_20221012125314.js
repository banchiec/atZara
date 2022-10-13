import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import routes from './config/routes'

function App() {
	return (
		<Provider>

		</Provider>
		<Router>
			<Header />
			<Routes>
				{routes().map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</Router>
	)
}

export default App
