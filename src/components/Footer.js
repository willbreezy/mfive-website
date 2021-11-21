import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div>
            <footer id={"footer"} className={"footer"}>

                <div className={"footer-top"}>
                    <div className={"container"}>
                        <div className={"row"}>

                            <div className={"col-lg-3 col-md-6 footer-contact"}>
                                <h3>M <em>Five </em>Corporation</h3>
                                <p>
                                    Résidence La Colombe <br/>
                                    Rue Dikoumé Bell <br/>
                                    Bali, Douala <br/>
                                    Cameroun <br/><br/>
                                    <strong>Phone:</strong>+237 233 420 564<br/>
                                    <strong>Email:</strong>info@mfive-corp.net<br/>
                                </p>
                            </div>

                            <div className={"col-lg-2 col-md-6 footer-links"}>
                                <h4>Liens utiles</h4>
                                <ul>
                                    <li>
                                        <i className={"bx bx-chevron-right"}></i>
                                        <Link to={"/"} className={"aaa"}>Accueil</Link>
                                    </li>
                                    <li>
                                        <i className={"bx bx-chevron-right"}></i>
                                        <Link to={"/about"} className={"aaa"}>A propos</Link>
                                    </li>
                                    <li>
                                        <i className={"bx bx-chevron-right"}></i>
                                        <Link to={"/poles"} className={"aaa"}>Nos Services</Link>
                                    </li>
                                    <li>
                                        <i className={"bx bx-chevron-right"}></i>
                                        <Link to={"/portfolio"} className={"aaa"}>Portfolio</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={"col-lg-2 col-md-6 footer-links"}>
                                <h4>Nos Services</h4>
                                <ul>
                                    <li>
                                        <i className={"bx bx-chevron-right"}></i>
                                        <Link to={"/poles/angara"} className={"aaa"}>Angara</Link>
                                    </li>
                                    <li>
                                        <i className={"bx bx-chevron-right"}></i>
                                        <Link to={"/poles/diaspoaid"} className={"aaa"}>Diaspo Aid</Link>
                                    </li>
                                    <li>
                                        <i className={"bx bx-chevron-right"}></i>
                                        <Link to={"/poles/distribution"} className={"aaa"}>Distribution</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={"col-lg-4 col-md-6 footer-newsletter"}>
                                <h4>Rejoindre la Newsletter de MFC</h4>
                                <p>Elle permet d'etre toujours au parfum des dernières actualités à M Five Corp</p>
                                <form className={"newsletter-form"}>
                                    <input type={"email"} name={"email"} /><input type={"submit"} value={"Souscrire"} />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={"container d-md-flex py-4"}>

                    <div className={"me-md-auto text-center text-md-start"}>
                        <div className={"copyright"}>
                            &copy; Copyright <strong><span>Les Cocréateurs</span></strong>. Tous droits réservés
                        </div>
                        <div className={"credits"}>
                            Réalisés par Mfive Cocréation
                        </div>
                    </div>
                    <div className={"social-links text-center text-md-right pt-3 pt-md-0"}>
                        <a href={"https://www.twitter.com"} className={"twitter"}><i className={"bx bxl-twitter"}></i></a>
                        <a href={"https://www.facebook.com"} className={"facebook"}><i className={"bx bxl-facebook"}></i></a>
                        <a href={"https://www.linkedin.com"} className={"twitter"}><i className={"bx bxl-linkedin"}></i></a>
                    </div>
                </div>
            </footer>

            <div id={"preloader"} className={"preloader"}></div>
            <a href={"../components/Header.js"} className={"back-to-top d-flex align-items-center justify-content-end"}>
                <i className={"bi bi-arrow-up-short"}></i>
            </a>

        </div>
    );
};

export default Footer;