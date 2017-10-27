import React from 'react';
import { NavLink } from 'react-router-dom';
import {SITE_NAME} from '../copy.js';
import './Nav.css';

export default function Nav({theme: {colorScheme = 'light'}, children}) {
  return (
    <div className={`nav ${colorScheme}`}>
      <NavLink className="title" to="/" exact>{SITE_NAME}</NavLink>
      <div className="nav-left">
        <NavLink className="nav-el" to="/wedding">Wedding</NavLink>
        <NavLink className="nav-el" to="/location">Location</NavLink>
      </div>
      <div className="nav-right">
        <NavLink className="nav-el" to="/itinerary">Itinerary</NavLink>
        <NavLink className="nav-el" to="/photos">Photos</NavLink>
      </div>
    </div>
  );
}
