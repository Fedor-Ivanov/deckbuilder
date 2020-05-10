import React from 'react'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import Builder from './components/Builder'


function App() {
	return (
		<>
			<Router>
				<div>
					<NavLink activeClassName='' className='' exact to='/'>Home</NavLink>
					<NavLink activeClassName='' className='' exact to='/builder'>Builder</NavLink>


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
