import React from 'react';

const Choice = () => {
    return (
        <div>
            <section id="why-us">
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h3>Why choose us?</h3>
                        <h4 className='text-center' style={{color:'#BADA22'}}>We Offer Simple Solutions For All Types Of Web Design, Development & IT Needs.</h4>
                        <h5 className='text-center' style={{color:'#0EE719'}}>2 years+ experience in this sector and go on...</h5>
                    </header>

                    <div className="row row-eq-height justify-content-center">

                        <div className="col-lg-4 mb-4">
                            <div className="card" data-aos="zoom-in" data-aos-delay="100">
                                <i className="bi bi-calendar4-week"></i>
                                <div className="card-body">
                                    <h5 className="card-title">IT Solutions</h5>
                                    <p className="card-text">Interactive Assistant: Your Trusted Guide for Instant Support and Helpful Information</p>
                                    <a href="#" className="readmore">Read more </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="card" data-aos="zoom-in" data-aos-delay="200">
                                <i className="bi bi-camera-reels"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Web Design & Development</h5>
                                    <p className="card-text">Efficient Code Conversion: Seamlessly Transforming Designs into Developer-Friendly Code</p>
                                    <a href="#" className="readmore">Read more </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="card" data-aos="zoom-in" data-aos-delay="300">
                                <i className="bi bi-chat-square-text"></i>
                                <div className="card-body">
                                    <h5 className="card-title">App Development</h5>
                                    <p className="card-text">Empowering Remote Work: Unlocking Productivity and Collaboration Anywhere, Anytime</p>
                                    <a href="#" className="readmore">Read more </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row counters" data-aos="fade-up" data-aos-delay="100">

                        {/* <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Clients</p>
                            <p></p>
                        </div> */}

                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Projects</p>
                              <p>10+</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="1364" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Hours Of Support</p>
                             <p >24/7 except Friday <br/>
                                From 12pm-6pm
                             </p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Hard Workers</p>
                            <p>8</p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Choice;