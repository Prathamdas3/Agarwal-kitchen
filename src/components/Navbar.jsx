import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/logo.png';

import '../styles/navbar.css';

const Navbar = () => {
  return (
    <>
      <header className="header_section nav-color ">
        <div className="container ">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3 ">
            <Link to="/" className="navbar-brand logo-pointer">
              <img src={Logo} alt="logo" className="mr-2" />
              <span>Agarwal's Kitchen</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center flex ">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link to="/">
                      <button className="nav-link text-dark">Home</button>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/recipes">
                      <button className="nav-link text-dark" type="submit">
                        Recipes
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
