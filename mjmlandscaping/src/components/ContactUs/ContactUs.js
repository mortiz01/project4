import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Header from '../Header/Header'
import './ContactUs.css'

class ContactUs extends Component {
	render() {
		return (
			<div className="block-container">
				<div className="left-block" />
				<Header />
				<div className="center-block">
					<div className="contactus-info">
						<h1>Contact Us!</h1>
						<h3>
							We're excited to hear how we can help your home look as
							comfortable as it feels. Below are a variety of methods to reach
							us.
						</h3>
					</div>
					<div className="services-list">
						<ul>
							<li>
								<em>By phone</em> : call <strong>609-672-7511</strong>, during
								business hours:{' '}
								<strong>
									MTWThF: 9:00am-2:30pm, Sat. & Sun.: 10:00am-5:00pm
								</strong>. If you get our voicemail, please leave your name,
								phone number, and best time to reach you so that we can dial you
								right back!
							</li>
							<li>
								<em>By email</em> : Email us directly at{' '}
								<strong>jortizlandscaping@gmail.com</strong> to schedule a visit
								for a quote. Please include your contact information so that we
								can communicate efficiently.
							</li>
							<li>
								Conversely, follow the link and fill out the Google form! We
								will respond to any form inquiries within 24hrs.{' '}
								<em>Note: form will open in a new window </em>:{' '}
								<a
									href="https://goo.gl/forms/S2dzNerhqO2U3Jwp1"
									target="_blank"
									className="go-on"
								>
									Interest Form
								</a>.
							</li>
						</ul>
					</div>
				</div>
				<div className="right-block" />
			</div>
		)
	}
}

export default ContactUs
