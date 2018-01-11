import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import AboutLanding from '../About/AboutLanding'

class Landing extends Component {
	constructor() {
		super()
		this.state = {
			className: 'hidden'
		}
	}

	handleScroll() {
		if (document.documentElement.scrollTop > 420) {
			this.setState({
				className: 'show'
			})
		}
	}

	componentDidMount() {
		window.onscroll = () => this.handleScroll()
	}

	render() {
		return (
			<div>
				<Logo />
				<AboutLanding className={this.state.className} />
			</div>
		)
	}
}

export default Landing
