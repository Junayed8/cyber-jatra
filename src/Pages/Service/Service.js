import React from 'react';

const Service = () => {
    return (
        <div>
            <section id="services" className="section-bg m-3">
                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h3>Services</h3>
                        <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                    </header>

                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
                            <div className="box">
                                <div className="icon"><i className="bi bi-briefcase" style={{color: '#ff689b'}}></i></div>
                                <h4 className="title"><a href="">IT Solutions</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
                            <div className="box">
                                <div className="icon"><i className="bi bi-card-checklist" style={{color: '#e9bf06'}}></i></div>
                                <h4 className="title"><a href="">Web Design</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
                            <div className="box">
                                <div className="icon"><i className="bi bi-bar-chart" style={{color: '#3fcdc7'}}></i></div>
                                <h4 className="title">
                                    <a href="">App Development</a>
                                </h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
                            <div className="box">
                                <div className="icon"><i className="bi bi-binoculars" style={{color:'#41cf2e'}}></i></div>
                                <h4 className="title"><a href="">Web Development</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Service;