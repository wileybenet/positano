import React from 'react';
import Nav from './Nav';

import './Layout.css';

export default function Layout({theme, children}) {
  return (
    <div className="page-container">
      <Nav theme={theme} />
      {children}
    </div>
  );
}
