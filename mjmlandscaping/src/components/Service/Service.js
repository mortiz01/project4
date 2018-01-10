import React, { Component } from 'react'
import Link from 'react-router-dom'
import Header from '../Header/Header'
import './Service.css'

class Service extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="services-writeup">
					<section className="services">
						<div className="services-welcome">
							<h2>
								Thank you for considering MJM Landscaping. Here, you can find a
								list of services we provide.
							</h2>
						</div>

						<div className="services-explain">
							<h3>
								Below is a (non-comprehensive) list of services we provide.
							</h3>

							<ul className="services-list">
								<li>
									Lawn mowing: We offer quality lawn mowing, keeping your lawn
									in check while keeping it healthy and vibrant. We use industry
									standard machines & practices to ensure your lawn is glowing &
									vibrant!
								</li>
								<li>
									Edging: We make sure your grass is growing in your property
									only. We can help make sure your grass stays within property
									lines, sidewalks, etc. for a clean, stylish landscape!
								</li>
								<li>
									Hedge trimming: Bushes & hedges are great additions for your
									lawn, but can be difficult to maintain. We use quality tools
									to keep those hedges & bushes in shape and in good health!
								</li>
								<li>
									Mulching: When the time is right, your lawn & landscape could
									dazzle with a bit of mulch! We use quality mulch to ensure
									your plants grow healthy and your lawn looks great the entire
									time!
								</li>
								<li>
									Planting: If you have an idea for what kind of greenery you
									want growing in your lawn, we can help realize your vision! We
									take care to seed lawns & plant shrubbery, flowers, etc. to
									ensure your inner vision becomes reality!
								</li>
								<li>
									Weed removal: Weeds can ruin any well-curated garden. We take
									care to ensure weeds aren't an issue. We pull weeds, root and
									all, to stop their growth, and have a variety of other tools
									at our disposal to ensure they're never a problem again!
								</li>
								<li>
									General clean-up: Whether there's a pile of leaves you want to
									get rid of, a bunch of branches that fell on your lawn, or
									whatever the case may be, we can effectively and thoroughly
									leave your lawn looking as pristine as ever!
								</li>
							</ul>
							<h4>
								We also offer other services; feel free to give us a call to see
								how we can help your dream come true!
							</h4>
						</div>
					</section>
				</div>
			</div>
		)
	}
}

export default Service
