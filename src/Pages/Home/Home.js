import React from 'react';
import './Home.css';
import About from '../About/About';
import Service from '../Service/Service';
import Choice from '../Choice/Choice';
import PortfolioDetails from '../PortfolioDetails/PortfolioDetails';
import Review from '../Review/Review';
import Team from '../Team/Team';
import Clients from '../Clients/Clients';
import image2 from '../../images/banner-right-image.png';
import Contact from '../Contact/Contact';

function Home() {
    return (
        <div>
            <section id="hero" className="clearfix">
                <div className="container" data-aos="fade-up">

                    <div className="hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src={image2} alt="" className="img-fluid" />
                    </div>

                    <div className="hero-info" data-aos="zoom-in" data-aos-delay="100">
                        <h2 id='meta-title' className='fade-in-text ' >We provide  digital platform <br/>for your business!</h2>
                        <div>
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                            <a href="#services" className="btn-services scrollto">Our Services</a>
                        </div>
                    </div>

                </div>
            </section>
            <About></About>
            <Service></Service>
            <Choice></Choice>
            <PortfolioDetails></PortfolioDetails>
            <Review></Review>
            <Team></Team>
            <Clients></Clients>
            <Contact></Contact>
        </div>
    );
}

export default Home;