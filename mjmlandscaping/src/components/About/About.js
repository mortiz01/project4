import React, { Component } from 'react'
import Header from '../Header/Header'
import './About.css'

class About extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<div className="about-info">
						<div className="who">
							<h1>Who we are</h1>
						</div>
						<h3 className="intro-blurb">
							For years, MJM Landscaping has been committed to providing
							excellent services to its clients in the Mercer County area and
							beyond!
						</h3>
					</div>
					<div className="paragraph-about">
						<p>
							As a local company, MJM Landscaping has the benefit of knowing the
							area, its climate, and native shrubbery. This way, we ensure
							excellent service which preserves the natural environment and
							helps it grow to the fullest extent.
						</p>
						<p>
							MJM Landscaping has, through direct personal contact and excellent
							work, cultivated and developed relationships with many families
							and businesses in the Mercer County area and surrounding counties.
							We are licensed in New Jersey and often do work in neighboring
							Pennsylvania, showing our commitment to reaching our customers and
							meeting their needs, no matter what.
						</p>
						<p>
							MJM Landscaping is fronted by one extraordinary man, Juan Ortiz,
							who has built, on his own, a company that strives to provide the
							best for its customers. In the end, MJM Landscaping (named after
							the initials of Mr. Ortiz's three children) is a family business,
							whose business is making ensure your family's home is the paradise
							you want it to be.
						</p>
						<div className="quick-facts">
							<h1>Quick Facts</h1>
							<ul>
								<li>Founded in: </li>
								<li>Operating in: </li>
								<li>Years of experience: </li>
								<li />
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About
