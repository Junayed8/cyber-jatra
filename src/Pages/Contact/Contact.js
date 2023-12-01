import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact" className='m-4'>
                <div className="container-fluid" data-aos="fade-up">

                    <div className="section-header">
                        <h3>Contact Us</h3>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 m-5">
                            <div className="form">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group col-lg-6 mt-3 mt-lg-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row ">
                            <div className="col-md-5 info ">
                                <i className="bi bi-geo-alt"></i>
                                <p>Kafrul, Dhaka</p>
                            </div>
                            <div className="col-md-4 info">
                                <i className="bi bi-envelope"></i>
                                <p>info@cyberjatra.com</p>
                            </div>
                            <div className="col-md-3 info">
                                <i className="bi bi-phone"></i>
                                <p>+8801813119559</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;