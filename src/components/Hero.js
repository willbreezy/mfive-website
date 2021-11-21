import React from 'react';
import logom5services from '../assets/logos/mfs.jpg';
import logom5humans from '../assets/logos/m5hx.png';
import logom5productions from '../assets/logos/m5px.png';
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div id="hero">
            <section className={"hero"}>
                <div className={"container position-relative"} data-aos={"fade-up"} data-aos-delay={"100"}>
                    <div className={"row text-center"}>
                        <h1>M<em>five</em> <strong>Corporation SARL</strong></h1>
                        <h2>Écosystème construit autour des concepts BIO, NATUREL, CULTUREL et des VALEURS HUMAINES</h2>
                        <br />
                    </div>

                    
                    <div className={"row justify-content-around icon-boxes"}>
                        <div className={"col-lg-4 col-md-4 col-sm-3 d-flex align-items-stretch mb-5 mb-lg-0"} data-aos={"zoom-in"} data-aos-delay={"300"}>
                            <div className={"icon-box"}>
                                <Link to={"/poles"}>
                                    <img src={logom5productions} alt={"productions"} title={"M Five Productions"} />
                                </Link>
                            </div>
                        </div>

                        <div className={"col-lg-4 col-md-4 col-sm-3 d-flex align-items-stretch mb-5 mb-lg-0"} data-aos={"zoom-in"} data-aos-delay={"300"}>
                            <div className={"icon-box"}>
                                <Link to={"/poles"}>
                                    <img src={logom5services} alt={"services"} title={"M Five Services"}/>
                                </Link>
                            </div>
                        </div>

                        <div className={"col-lg-4 col-md-4 col-sm-3 d-flex align-items-stretch mb-5 mb-lg-0"} data-aos={"zoom-in"} data-aos-delay={"300"}>
                            <div className={"icon-box"}>
                                <Link to={"/poles"}>
                                    <img src={logom5humans} alt={"M Five Services"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Hero;