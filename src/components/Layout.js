import React from 'react';
import Nav from './Nav';

import './Layout.css';
import animate from '../helpers/animate';

function scroll() {
  animate({time: 350, distance: 450}, progress => {
    window.scrollTo(0, progress);
  });
}

export default function Layout({theme, children}) {
  return (
    <div className="page-container">
      <div className="image-wrapper" style={{
        backgroundImage: `url('/img/${theme.image}.jpg')`,
        backgroundSize: `auto ${theme.height}px`
      }} data-speed={theme.speed} />
      <Nav theme={theme} />
      <div className="spacer">
        <div className="splash-footer">
          <div className="cta" onClick={scroll}></div>
        </div>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  );
}
