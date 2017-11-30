import React from 'react';
import { NavLink } from 'react-router-dom';
import {SITE_NAME} from '../copy.js';
import './Nav.css';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileNavOpen: false
    };
  }

  toggleMobileNav() {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  }

  render() {
    const {title, theme: {colorScheme = 'light'}} = this.props;
    const toggle = this.toggleMobileNav.bind(this);
    return (
      <div className={`nav ${colorScheme} ${this.state.mobileNavOpen ? 'force-over' : ''}`} id="nav-bar">
        <NavLink className="title" to="/" exact>{SITE_NAME}</NavLink>
        <div className={`mobile-menu ${this.state.mobileNavOpen ? 'open' : ''}`}>
          <button onClick={toggle}><div></div><div></div><div></div></button>
          <div className="nav-left">
            <NavLink className="nav-el" to="/wedding">Wedding</NavLink>
            <NavLink className="nav-el" to="/location">Location</NavLink>
          </div>
          <div className="nav-right">
            <NavLink className="nav-el" to="/itinerary">Itinerary</NavLink>
            <NavLink className="nav-el" to="/registry">Registry</NavLink>
          </div>
        </div>
        {title && <div className="mobile-title">{title}</div>}
        {this.state.mobileNavOpen && <div className="click-trap" onClick={toggle}></div>}
      </div>
    );
  }
}
