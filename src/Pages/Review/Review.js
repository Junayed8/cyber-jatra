import React from 'react';
import image1 from '../../images/partners/BARC-Logo.png';
import image2 from '../../images/partners/GIFS_Logo.png';
import image3 from '../../images/partners/PIFDC.png';
import image4 from '../../images/partners/kfg_logo.png';
import image5 from '../../images/partners/WD_Logo.png';

const Review = () => {
    return (
        <div>
            <section id="testimonials" className="section-bg">
                <div className="container" data-aso="zoom-in">

                    <header className="section-header">
                        <h3 className='mt-4'>Testimonials</h3>
                    </header>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src={image1} className="testimonial-img" alt="" />
                                            <h3>BARC</h3>
                                            <h4>Website link:<a href="url">https://barc.gov.bd/</a> </h4>
                                            <p>
                                              Cyber Jata is very proffessional. Good service.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src={image2} className="testimonial-img" alt="" />
                                            <h3>Global Institute for Food Security</h3>
                                            <h4>Website link:<a href="url">https://gifs.ca/</a> </h4>
                                            <p>
                                              Cyber Jata is very proffessional. Good service.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src={image3} className="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                            <p>
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src={image4} className="testimonial-img" alt="" />
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                            <p>
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <img src={image5} className="testimonial-img" alt="" />
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                            <p>
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-pagination"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Review;