import React from 'react';
import Nav from './Nav';

import './Layout.css';
import animate from '../helpers/animate';

function scroll() {
  animate({time: 350, distance: 450}, progress => {
    window.scrollTo(0, progress);
  });
}

let over = false;
window.addEventListener('scroll', evt => {
  const currentScroll = window.pageYOffset;
  const pageHeight = window.innerHeight - 80;
  if (currentScroll > pageHeight) {
    if (!over) {
      document.getElementById('nav-bar').classList.add('over');
      over = true;
    }
  } else if (over) {
    document.getElementById('nav-bar').classList.remove('over');
    over = false;
  }
});

export default function Layout({title, theme, noPadding = false, children}) {
  return (
    <div className="page-container">
      <div className="image-wrapper" style={{
        backgroundImage: `url('/img/${theme.image}.jpg')`,
        backgroundSize: `auto ${theme.height}px`
      }} data-speed={theme.speed} />
      <Nav title={title} theme={theme} />
      <div className="spacer">
        <div className="splash-footer">
          <div className="cta" onClick={scroll}></div>
        </div>
      </div>
      <div className="container" style={noPadding ? { paddingBottom: '0' } : {}}>
        {children}
      </div>
    </div>
  );
}
