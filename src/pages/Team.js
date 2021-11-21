import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import team1 from '../assets/images/team/team-1.jpg';
import SwiperCore, {Pagination, Navigation} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

const Team = () => {    
    return (
        <div>
            <section id={"team"} className={"team section-bg"}>
                <div className={"container-team"} data-aos={"fade-down"}>

                    <div className={"section-title"}>
                        <h2>Equipe-projet</h2>
                    </div>
                </div>

                <Swiper slidesPerView={3} effect={"cube"} slidePerGroup={1}
                loop={true} loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                }} navigation={true} className={"teamSwiper"}>

                        <SwiperSlide>
                            <div className={"member"} >
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"member"}>
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"member"}>
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"member"}>
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"member"}>
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"member"}>
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"member"}>
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"member"}>
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"member"}>
                                <div className={"member-img"}>
                                    <img src={team1} className={"img-fluid"} alt={""} />
                                    <div className={"social"}>
                                        <a href={"https://www.twitter.com"}>
                                            <i className={"bi bi-twitter"}></i>
                                        </a>
                                        <a href={"https://www.facebook.com"}>
                                            <i className={"bi bi-facebook"}></i>
                                        </a>
                                        <a href={"https://www.linkedin.com"}>
                                            <i className={"bi bi-linkedin"}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={"member-info"}>
                                    <h4>Nom et prenom</h4>
                                    <span>Poste</span>
                                </div>
                            </div>
                        </SwiperSlide>

                </Swiper>
                
            </section>
        </div>
    );
};

export default Team;