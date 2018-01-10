import React, { Component } from 'react'
import Link from 'react-router-dom'
import Header from '../Header/Header'
import './ContactUs.css'

class ContactUs extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="contactus-info">
					<h1>Contact Us!</h1>
					<h3>
						We're excited to hear how we can help your home look as comfortable
						as it feels. Below are a variety of methods to contact us!
					</h3>
					<ul>
						<li>
							By phone: call 609-672-7511, during business hours:
							<li>Mon-Fri: 9:00am-2:30pm</li>
							<li>Sat & Sun: 10:00am-5:00pm</li>
						</li>
						<li>
							By email: Email us directly at jortizlandscaping@gmail.com to
							schedule a visit for a quote. Please include your contact
							information so that we can communicate efficiently.
						</li>
						<li>
							Fill out the form below! We will respond to any form inquiries
							within 24hrs.
						</li>
					</ul>

					<h3>MJM Landscaping Interest Form</h3>
					<div className="form-container">
						<form className="interest-form">
							<input type="text" placeholder="Name" />
							<textarea type="text" placeholder="Address" />
							<input type="text" placeholder="Name" />
							<input type="text" placeholder="Name" />
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactUs
