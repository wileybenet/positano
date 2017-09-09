import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';

import Index from './pages/Index';
// import Wedding from './pages/Wedding';
// import Location from './pages/Location';
// import Itinerary from './pages/Itinerary';
// import Photos from './pages/Photos';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index}/>
        {/* <Route path="/wedding" component={Wedding}/>
        <Route path="/location" component={Location}/>
        <Route path="/itinerary" component={Itinerary}/>
        <Route path="/photos" component={Photos}/> */}
      </div>
    </Router>
  );
};
