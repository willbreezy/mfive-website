import React from 'react';
import h1 from "../assets/images/mode-homme/hom1_compressed.jpg";
import r1 from "../assets/images/robes/fem1_compressed.jpg";


const Portfolio = () => {

    return (
        <div>
           <section id={"portfolio"} className={"portfolio"}>
               <div className={"container"} data-aos={"fade-up"}>

                   <div className={"section-title"}>
                       <h2>Nos Créations</h2>
                       <p>Des Créations dignes des oeuvres de l'esprit...</p>
                   </div>

                   <div className={"row"} data-aos={"fade-up"} data-aos-delay={"150"}>
                       <div className={"col-lg-12 d-flex justify-content-center"}>
                           <ul className={"portfolio-filters"}>
                               <li data-filter={"*"} className={"filter-active"}>All</li>
                               <li data-filter={".filter-hom"}>Collection Homme</li>
                               <li data-filter={".filter-fem"}>Collection Femme</li>
                               <li data-filter={".fitler-toy"}>Bijoux et accessoires</li>
                               <li data-filter={".filter-jeune"}>Collection Jeune</li>
                               <li data-filter={".filter-art"}>Art</li>
                               <li data-filter={".filter-meuble"}>Ameublement</li>
                           </ul>
                       </div>
                   </div>

                   <div className={"row portfolio-container"} data-aos={"fade-up"} 
                   data-aos-delay={"300"}>

                       <div className={"col-lg-4 col-md-6 portfolio-item filter-hom"}>
                           <div className={"portfolio-wrap"}>
                               <img src={h1} className={"img-fluid"} alt={""} />
                               <div className={"portfolio-info"}>
                                   <div className={"portfolio-links"}>
                                       <a href={h1} data-gallery={"portfolioGallery"}
                                       className={"portfolio-lightbox"} title={"Pour les hommes"}>
                                           <i className={"bx bx-plus"}></i>
                                       </a>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className={"col-lg-4 col-md-6 portfolio-item filter-fem"}>
                           <div className={"portfolio-wrap"}>
                               <img src={r1} className={"img-fluid"} alt={""} />
                               <div className={"portfolio-info"}>
                                   <div className={"portfolio-links"}>
                                       <a href={r1} data-gallery={"portfolioGallery"} 
                                       className={"portfolio-lightbox"} title={"Pour les femmes"}>
                                           <i className={"bx bx-plus"}></i>
                                       </a>
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

export default Portfolio;