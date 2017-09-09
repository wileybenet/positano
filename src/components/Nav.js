import React from 'react';
import { Link } from 'react-router-dom';
import {SITE_NAME} from '../copy.js';
import './Nav.css';

export default function Nav({children}) {
  return (
    <div className="nav">
      <div className="title">
        <Link to="/">{SITE_NAME}</Link>
      </div>
      <div className="nav-left">
        <Link className="nav-el" to="/wedding">Wedding</Link>
        <Link className="nav-el" to="/location">Location</Link>
      </div>
      <div className="nav-right">
        <Link className="nav-el" to="/itinerary">Itinerary</Link>
        <Link className="nav-el" to="/photos">Photos</Link>
      </div>
    </div>
  );
}
