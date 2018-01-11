import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AboutLanding.css'

class AboutLanding extends Component {
	render() {
		return (
			<div className="aboutlanding-wrapper">
				<div className="aboutlanding-text">
					<div className={this.props.className}>
						<h2>Who are we</h2>
						<h3>
							Click the button below to learn more about our history and purpose
						</h3>
						<Link to="/about">
							<button>About Us</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutLanding
