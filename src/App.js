import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import ScrollToTop from './components/ScrollToTop';
import parallax from './helpers/parallax';

import Index from './pages/Index';
import Wedding from './pages/Wedding';
import Location from './pages/Location';
import Itinerary from './pages/Itinerary';
import Photos from './pages/Photos';

parallax();

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route location={window.location} exact path="/" component={Index}/>
          <Route location={window.location} path="/wedding" component={Wedding}/>
          <Route location={window.location} path="/location" component={Location}/>
          <Route location={window.location} path="/itinerary" component={Itinerary}/>
          <Route location={window.location} path="/photos" component={Photos}/>
        </AnimatedSwitch>
      </ScrollToTop>
    </Router>
  );
};
