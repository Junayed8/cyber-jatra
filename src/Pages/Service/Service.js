import React from 'react';

const Service = () => {
    return (
        <div>
            <section id="services" className="section-bg m-3">
                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h3 className='mt-3'>Services</h3>
                        <p>Our top services for your digital journey.</p>
                    </header>

                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
                            <div className="box">
                                <div className="icon"><i className="bi bi-briefcase" style={{color: '#ff689b'}}></i></div>
                                <h4 className="title"><a href="">IT Solutions</a></h4>
                                <p className="description">We provide the best IT solution and consultancy for your tech support.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
                            <div className="box">
                                <div className="icon"><i className="bi bi-card-checklist" style={{color: '#e9bf06'}}></i></div>
                                <h4 className="title"><a href="">Web Design</a></h4>
                                <p className="description">Web design is the art of planning and arranging content on a website so that it can be shared and accessed online with the world. </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
                            <div className="box">
                                <div className="icon"><i className="bi bi-bar-chart" style={{color: '#3fcdc7'}}></i></div>
                                <h4 className="title">
                                    <a href="">App Development</a>
                                </h4>
                                <p className="description">App is the shortest and easiest way to promote service in digital platform. We offer the best creative and dynamic solution for our customers.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
                            <div className="box">
                                <div className="icon"><i className="bi bi-binoculars" style={{color:'#41cf2e'}}></i></div>
                                <h4 className="title"><a href="">Web Development</a></h4>
                                <p className="description">Complete full stack web development solution.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Service;