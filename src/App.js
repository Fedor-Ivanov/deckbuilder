import React from 'react'
import './App.css'
import { connect } from 'react-redux';
import Modal from './components/Modal/Modal'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import Builder from './components/Builder/Builder'
import Library from './components/Library/Library'


function App({ isVisible }) {
	return (
		<>
			<Router>
				<div>
					<NavLink activeClassName='link_active' className='link' exact to='/'>Home</NavLink>
					<NavLink activeClassName='link_active' className='link' exact to='/builder'>Builder</NavLink>
					<NavLink activeClassName='link_active' className='link' exact to='/library'>Library</NavLink>
				</div>
				<Switch>
					<Route path="/builder">
						<Builder></Builder>
					</Route>
					<Route path="/library">
						<Library></Library>
					</Route>
					<Route path="/">
						<h1>welcome</h1>
					</Route>
				</Switch>
			</Router>

			{
				isVisible && <Modal />
			}

		</>
	)
}

function mapStateToProps({ modal }) {

	return {
		isVisible: modal.isVisible,

	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App)