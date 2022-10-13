import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import routes from './config/routes'

function App() {
	return (
		<Provider store={setTimeout(() => {
			
		}, delayInmus);}>

		<Router>
			<Header />
			<Routes>
				{routes().map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</Router>
		</Provider>
	)
}

export default App
