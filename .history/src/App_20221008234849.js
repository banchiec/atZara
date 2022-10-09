import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => {
            <Route key={route.path} path={route.path} element=/>
          })}
          <Route/>
        </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
