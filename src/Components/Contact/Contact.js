import React,{ Component } from 'react';
import { FaMapMarkedAlt, FaPhone, FaInbox } from 'react-icons/fa';

import './Contact.css';

class Contact extends Component {
  render(){
  return (
    <div className="Contact">
      	<div className="top">
			<div className="fgreet">
				<h1>Reach Out</h1>
				<p>Give me a call any time during regular office hours or even after hours.</p>
			</div>
			<div className="sgreet">
				<h1>Send me a quick message!</h1>
			</div>
		</div>
		<div className="bottom">
			<div className="map">
				<iframe title="EulessMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53631.36934423532!2d-97.12955508398338!3d32.84629528377197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e794bbb480dff%3A0xcf93da011b356265!2sEuless%2C%20TX!5e0!3m2!1sen!2sus!4v1602293366859!5m2!1sen!2sus" aria-hidden="false" tabindex="0"></iframe>
				<ul className="lnks">
					<li><FaMapMarkedAlt /><p> Address: Euless, Tx.</p></li>
					<li><FaPhone /><p> Phone: &#40;323&#41;-926-6970</p></li>
					<li><FaInbox /><p> Email: Infinri@gmail.com</p></li>
				</ul>
			</div>
      	</div>
    </div>
  );
}
}

export default Contact;