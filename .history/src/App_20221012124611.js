import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import routes from './config/routes'
import { store } from './redux/store'

function App() {
	return (
		<frag>
			<Provider store={store}>
				<Router>
					<Header />
					<Routes>
						{routes().map((route) => (
							<Route key={route.path} path={route.path} element={route.element} />
						))}
					</Routes>
				</Router>
			</Provider>
		</Fragment>
	)
}

export default App
