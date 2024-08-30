import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar bg-body-tertiary main__navbar">
          <section className="container-fluid navbar__items">
            <NavLink to="/" className="navbar-brand navbar__logo"></NavLink>
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  to="/catlistingspage"
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__links link-underline-light navbar__links--active"
                      : "navbar__links link-underline-light"
                  }
                  aria-current="page"
                >
                  Cat Listings
                </NavLink>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
