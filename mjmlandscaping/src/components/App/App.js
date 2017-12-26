import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Welcome from '../Welcome/Welcome'
import ContactUs from '../ContactUs/ContactUs'
import Header from '../Header/Header'
import About from '../About/About'
import Service from '../Service/Service'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Switch>
						<Route
							exact
							path="/welcome"
							render={props => <Welcome {...props} />}
						/>
						<Route exact path="/about" render={props => <About {...props} />} />
						<Route
							exact
							path="/contact"
							render={props => <ContactUs {...props} />}
						/>
						<Route
							exact
							path="/service"
							render={props => <Service {...props} />}
						/>
					</Switch>
				</main>
			</div>
		)
	}
}

export default App
