import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css"; // Move styles here

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">
        <span className="highlight1">A</span>nti-
        <span className="highlight1">R</span>agging
        Committee
      </h1>

      <nav className="nav-links">
        <Link to="/" className="nav-item">
          <i className="fas fa-home" aria-label="Home"></i>
          <span>Home</span>
        </Link>

        <Link to="/Studreg" className="nav-item">
          <i className="fas fa-user-plus" aria-label="Register Student"></i>
          <span >Register-Student</span>
        </Link>

        <Link to="/Login" className="nav-item">
          <i className="fas fa-sign-in-alt" aria-label="Login"></i>
          <span >Login</span>
        </Link>

        <Link to="/About" className="nav-item">
          <i className="fas fa-info-circle" aria-label="About"></i>
          <span >About</span>
        </Link>

        <Link to="/Contact" className="nav-item">
          <i className="fas fa-phone" aria-label="Contact"></i>
          <span >Contact</span>
        </Link>
      </nav>
    </div>
  );
}
