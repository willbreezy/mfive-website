import React from 'react';
//import { Link } from 'react-router-dom';
//import logomaje from '../assets/logos/maje.png';
//import logoakomdo from '../assets/logos/akomdo.jpg';
//import logoabengte from '../assets/logos/abengte.png';
//import logomangaland from '../assets/logos/mangaland.png';
//import logoangara from '../assets/logos/angara.jpg';
//import logodiaspoaid from '../assets/logos/diaspoaid.jpg';
//import logodistribution from '../assets/logos/distribution.jpg';

const About = () => {
    return (
        <main id={"main"}>
            <section id={"about"} className={"about"}>
                <div className={"container"} data-aos={"fade-up"}>
                    <div className={"section-title"}>
                        <h2>Nous à MFC</h2>
                        <p>MFC est construit autour des concepts de <em>BIO</em>, <em>NATUREL</em>, <em>CULTUREL </em>
                            et tends à intégrer tous les aspects de la vie.
                        </p>
                        <p>M <em>Five </em>Corporation s'inscrit dans une dynamique des nouvelles entreprises
                        africaines, qui tendent à valoriser notre identité culturelle africaine;
                        et ainsi mettre en avant des valeurs humaines nécessaires pour l'épanouissement des individus
                        dans la société. </p>
                        <br/>
                        <p>MFC est aussi un groupe ayant en son sein plusieurs services dans les domaines les  plus vues...</p>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default About;