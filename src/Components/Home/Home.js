import React,{ Component } from 'react';
import webDev from "../../Img/webDevelopment.jpg";
import ecomm from "../../Img/ecommerce.jpg";
import work from "../../Img/work.jpg";
import './Home.css';

export default class Home extends Component {
    render(){
        return (
            <div className="Home">
                <div className="Home-Title">
                    <h1>Welcome</h1>
                    <p className="moto">I love to Create &amp; Design Websites</p>
                    <p className="quote">"Programming is not about what you know. It's about what you can figure out."</p>
		            <p className="credit">Socrates, <cite>The Apology of Socrates</cite></p>
                </div>

                <div className="Home-Content">
                    <div className="Home-Bio"></div>
                    <div className="Home-Info"></div>
                    <div className="card">
                        <h2>Web Design &amp; Development</h2>
					    <p>May it be big or small I design modern and professional websites. Offering you the same platform that big companies use to create a great website that you will love.</p>
                        <img src={webDev} alt="WebDevelopment"></img>
                    </div>

                    <div className="card">
                        <h2>E-Commerce</h2>
					    <p>For businesses that sell products or offer services. I create websites that give you everything you need to succeed, rather if you need a basic, pro, or advanced level website.</p>
                        <img src={ecomm} alt="eCommerce"></img>
                    </div>

                    <div className="card">
                        <h2>Web Maintenance</h2>
					    <p>Are you unsatisfied with your current website? A new look maybe? I will take your website and give it a newer look that you will be happy to refer customers to.</p>
                        <img src={work} alt="maintenance"></img>
                    </div>
                </div>
            </div>
        );
    }
}