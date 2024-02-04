import React from 'react';

const About = () => {
    return (
        <div>
            <main id="main" >

                <section id="about">
                    <div className="container" data-aos="fade-up">

                        <header className="section-header m-4">
                            <h3 className='mt-4'>About Us</h3>
                            <p>Developing Cutting-Edge Software Solutions And Services.</p>
                        </header>

                        <div className="row about-container">

                            <div className="col-lg-6 content order-lg-1 order-2">
                                <p>
                                We specialize in providing top-notch software development and IT services thanks to our enthusiasm for technology and five years of industry experience.
                                </p>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="bi bi-card-checklist"></i></div>
                                    <h4 className="title"><a href="">Misson</a></h4>
                                    <p className="description">Our Mission Offering cutting-edge IT and software solutions to organizations to empower them and stimulate transformation, efficiency, and growth.</p>
                                </div>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="bi bi-brightness-high"></i></div>
                                    <h4 className="title"><a href="">Vision</a></h4>
                                    <p className="description">Making our corporate sector more dynamic and enthusiastic</p>
                                </div>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                                    <h4 className="title"><a href="">Goal</a></h4>
                                    <p className="description">Its goal is to be a top provider, encouraging digital transformation and empowering businesses to realize their full potential by cooperating with them in enduring partnerships and leading-edge technology.</p>
                                </div>

                            </div>

                            <div className="col-lg-6 background order-lg-2" data-aos="zoom-in">
                                <img src="assets/img/about-img.svg" className="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;