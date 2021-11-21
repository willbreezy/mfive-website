import React from 'react';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Hero from '../components/Hero';
import About from "./About";
import Contact from './Contact';
import Poles from "./Poles";
import Portfolio from "./Portfolio";
import Team from './Team';

const Home = () => {

    return (
        <div id="home">
            <Header />
            <Hero />
            <About />
            <Poles />
            <Portfolio />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;