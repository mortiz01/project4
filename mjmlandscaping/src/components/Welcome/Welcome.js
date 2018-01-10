import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Welcome.css'

const Welcome = () => (
	<div className="welcome">
		<div className="welcome-container">
			<img src="lawn-768316_1920.jpg" alt="Welcome" />
			<div class="centered">
				<h1 id="welcome-opener">Help your lawn look as good as it could</h1>
				<Link to="/about">
					<button id="starter-btn">Let's Get Started</button>
				</Link>
			</div>
		</div>
	</div>
)

export default Welcome
