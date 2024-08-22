import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/main.css";

const Main = () => {
  return (
    <div>
      <header>
        <nav className="navbar bg-body-tertiary main__navbar">
          <section className="container-fluid main__navbar__items">
            <a href="/" className="navbar-brand main__logo">
            </a>
            <ul className="nav">
              <li className="nav-item">
                <a href="/" className="main__navbar__links" aria-current="page">
                  Cat listings
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      <main>
        <section className="main__hero">
          <section className="main__hero__container">
            <section className="main__hero__images"></section>
          </section>
      </section>
      </main>
    </div>
  );
};
export default Main;
