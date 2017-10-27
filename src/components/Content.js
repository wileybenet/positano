import React from 'react';

import './Content.css';

export default function Content({ children }) {
  return (
    <div className="content">
      {/* <img className="content-backdrop" src="/img/italy.svg" alt="Italy" /> */}
      {children}
    </div>
  );
}
