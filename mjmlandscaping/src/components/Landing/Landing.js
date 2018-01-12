import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Landing.css'

class Landing extends Component {
	render() {
		return (
			<div>
				<Logo />
				<div className="container">
					<div className="element">
						<h2>Who are we</h2>
						<h3>Learn more about our history and purpose</h3>
						<Link to="/about" className="landing-button">
							<button>About Us</button>
						</Link>
					</div>
					<div className="element">
						<h2>What we do</h2>
						<h3>Read up on what services we provide</h3>
						<Link to="/service" className="landing-button">
							<button>Services</button>
						</Link>
					</div>
					<div className="element">
						<h2>How to reach us</h2>
						<h3>Contact us with questions or for a quote</h3>
						<Link to="/contactus" className="landing-button">
							<button>Contact Us</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing
