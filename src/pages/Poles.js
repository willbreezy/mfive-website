import React from 'react';
import logoangara from '../assets/logos/angara.jpg';
import logodiaspo from '../assets/logos/diaspoaid.jpg';
import logodistribution from '../assets/logos/distribution.jpg';

const Poles = () => {
    return (
        <div id="services">
            <section id={"services"} className={"services section-bg"}>
                <div className={"container"} data-aos={"fade-up"}>

                    <div className={"section-title"}>
                        <h2>Nos Services</h2>
                    </div>

                    <div className={"main_offer_content m-b-3 wow fadeInUp"}>
                        <div className={"row"}>
                            <div className={"col-md-6"}>
                                <div className={"single_offer m-t-3"}>
                                    <div className={"row"}>
                                        <div className={"col-sm-3"}>
                                            <div className={"single_offer_icon"}>
                                                <img src={logoangara} alt={""} />
                                            </div>
                                        </div>
                                        <div className={"col-sm-9"}>
                                            <div className={"single_offer_text"}>
                                                <h3>Angara</h3>
                                                <p>Le véritable centre commercial de l'entreprise à travers la vente en ligne
                                                de produits bio naturels. L'exposition et la vente d'articles artisanaux de 
                                                créateurs africains. L'exposition et la vente de nos créations et marques M <em>Five </em>Corporation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-6"}>
                                <div className={"single_offer m-t-3"}>
                                    <div className={"row"}>
                                        <div className={"col-sm-3"}>
                                            <div className={"single_offer_icon"}>
                                                <img src={logodiaspo} alt={""} />
                                            </div>
                                        </div>
                                        <div className={"col-sm-9"}>
                                            <div className={"single_offer_text"}>
                                                <h3>Diaspo Aid</h3>
                                                <p>La mise sur pied d'un programme d'aide à la diaspora, qui consiste à suivre et à faciliter les 
                                                investissements de personnes basées à l'extérieur du Cameroun. Tels que l'achat des terrains, le suivi de construction
                                                d'une maison, scolarisation des enfants vivant au Cameroun etc. Nous leur faisons un compte rendu judicieux de leurs
                                                différentes activités réalisées sur le territoire camerounais.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-6"}>
                                <div className={"single_offer m-t-3"}>
                                    <div className={"row"}>
                                        <div className={"col-sm-3"}>
                                            <div className={"single_offer_icon"}>
                                                <img src={logodistribution} alt={""} />
                                            </div>
                                        </div>
                                        <div className={"col-sm-9"}>
                                            <div className={"single_offer_text"}>
                                                <h3>Distribution</h3>
                                                <p>Le centre de liaison entre M <em>Five </em>Corporation et ses clients.</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Poles;