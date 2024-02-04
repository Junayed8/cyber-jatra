import React from 'react';
import image1 from '../../images/partners/BARC-Logo.png';
import image2 from '../../images/partners/GIFS_Logo.png';
import image3 from '../../images/partners/PIFDC.png';
import image4 from '../../images/partners/WD_Logo.png';
import image5 from '../../images/partners/kfg_logo.png';

const Clients = () => {
    return (
        <div>
            <section id="clients" className="section-bg">

                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h3 >Our Trusted CLients</h3>
                        <p >“Becoming a trusted advisor isn’t about being the smartest person in the room; instead, it’s about demonstrating understanding, empathy, and making sure the client feels heard."</p>
                    </div>

                    <div className="row g-0 clients-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

                        <div className="col-lg-3 col-md-4 col-xs-6 m-3">
                            <div className="client-logo">
                                <img src={image1} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 m-3">
                            <div className="client-logo">
                                <img src={image2} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 m-3">
                            <div className="client-logo">
                                <img src={image3} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 m-3">
                            <div className="client-logo">
                                <img src={image4} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 m-3">
                            <div className="client-logo">
                                <img src={image5} className="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default Clients;