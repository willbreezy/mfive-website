import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import js files 
import Aos from 'aos';

// import css files
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './style/index.scss';

import Home from "./pages/Home";
import About from "./pages/About";
import Poles from "./pages/Poles";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const App = () => {
    useEffect(() => {
            Aos.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
            Aos.refresh();
            
      }, []);

    return (
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/poles"} component={Poles} />
            <Route exact path={"/portfolio"} component={Portfolio} />
            <Route exact path={"/team"} component={Team} />
            <Route exact path={"/contact"} component={Contact} />
            <Redirect to={"/"} />
        </Switch>
    );
};

export default App;