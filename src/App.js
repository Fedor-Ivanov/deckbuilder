import React from 'react'
import './App.css'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import Builder from './components/Builder/Builder'


function App() {
	return (
		<>
			<Router>
				<div>
					<NavLink activeClassName='link_active' className='link' exact to='/'>Home</NavLink>
					<NavLink activeClassName='link_active' className='link' exact to='/builder'>Builder</NavLink>
				</div>
				<Switch>
					<Route path="/builder">
						<Builder></Builder>
					</Route>
					<Route path="/">
						<h1 className=''>welcome</h1>
					</Route>
				</Switch>
			</Router>

		</>
	)
}

export default App
