import React from "react";
// import Home from "./Home";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Meals DB App
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/favourites" className="nav-link">
                  Favourites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
