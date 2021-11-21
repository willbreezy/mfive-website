/*Entete de page*/

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logom5 from "../assets/logos/mfc.png";

const Header = () => {

    const [click, setclick] = useState(false); /* Initialisation du bouton de menu de navigation*/

    return (

        /*Logo*/
        <div className={"header sticky"}>
            <header id={"header"} className={"fixed-center"}>
                <div className={"container d-flex justify-content-between align-items-center"}>
                    <div className={"logo"}>
                        <NavLink to="/">
                            <img src={logom5} alt={"mfc"} className={"img-fluid"} />
                        </NavLink>
                    </div>

                    <nav id={"navbar"} className={"navbar"} onClick={() => setclick(!click)}> {/*evenement de click*/}

                        <div className={click ? "navbar-mobile" : "nav-link"} onClick={() => setclick(false)}> {/*activation de l'evenement si click*/}
                            <ul> {/*Les onglets de navigation*/}
                                <NavLink className={"nav-link active"} to={"/"}>
                                    <li>Accueil</li>
                                </NavLink>
                                <NavLink className={"nav-link"} to={"/about"}>
                                    <li>À propos</li>
                                </NavLink>
                                <NavLink className={"nav-link"} to={"/poles"}>
                                    <li>Nos Services</li>
                                </NavLink>
                                <NavLink className={"nav-link"} to={"/portfolio"}>
                                    <li>Portfolio</li>
                                </NavLink>
                                <NavLink className={"nav-link"} to={"/team"}>
                                    <li>Equipe-projet</li>
                                </NavLink>
                                <NavLink className={"nav-link"} to={"/contact"}>
                                    <li>Nous Contacter</li>
                                </NavLink>
                            </ul>
                            {click ? (
                                <i className={"bi bi-x mobile-nav-toggle"}></i> //bouton en forme de croix
                            )
                            : (
                                <i className={"bi bi-list mobile-nav-toggle"}></i> // bouton en forme de liste
                            )
                            }
                        </div>
                    </nav>
                </div>
            </header>
            
        </div>
    );
};

export default Header;