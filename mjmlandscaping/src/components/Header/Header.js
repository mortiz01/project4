import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
	<header>
		<Link to="/">
			<img className="logo" src="test-banner.jpg" alt="MJM Landscaping logo" />
		</Link>
		<nav>
			<Link to="/about">About Us </Link>
			<Link to="/service">Services </Link>
			<Link to="/contactus">Contact Us </Link>
		</nav>
	</header>
)

export default Header
