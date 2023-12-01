import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 footer-info">
                                <h3>CyberJatra</h3>
                                <p>We offer simple solutions for all types of Web Design, Development & IT needs. We provide thorough management solutions crafted to meet your unique requirements ..</p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Office</h4>
                                <p>
                                  Kafrul, Dhaka<br />
                                 
                                  <strong>Phone:</strong>+8801813119559<br />
                                    <strong>Email:</strong> info@cyberjatra.com<br />
                                </p>

                                <div className="social-links">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-newsletter">
                                <h4>Contact Us</h4>
                                <p>We have 2 Years Of Experience In Related Fields</p>
                                <form action="" method="post">
                                    <input className='m-2' type="email" name="email" placeholder='your email' required/>
                                    <input className='mb-2' type="password" name="password" placeholder='
                                    password' required/> <br/>
                                    <input className='mb-2' type="text" name="text" placeholder='
                                    Message' required/> <br/>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong>CyberJatra</strong>. All Rights Reserved
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        </div>
    );
};

export default Footer;