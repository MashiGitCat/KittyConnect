import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./main.css";

const Main = () => {
  
  return (
    <div>
      <main className="main">
        <section className="main__hero">
          <div className="card  main__hero__text-container">
            <div className="card-body">
              <h1 className="card-title main__hero__main-header-style">
                KittyConnect <br></br> to Connect Kitties With Owners.
              </h1>
              <h5 className="card-text main__hero__sub-header-style">
                Where Every Meow Leads to a Forever Home.
              </h5>
              <div className="main__hero__button-container">
                <div className="d-grid gap-2">
                  <button className="btn btn-dark" type="button">
                    Find Cats
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card main__hero__image-container">
            <h3 className="main__hero__carousel-heading ">
              {" "}
              Happy Tails: Kitties Finding Homes This Week
            </h3>
            <div
              id="heroCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="7000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    className="main__hero__images"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/maheshidevelopments/image/upload/c_fill,w_320,h_320,ar_1:1/v1724312738/kittyconnect-heroimage1.jpg")`,
                    }}
                  ></div>
                  <div>
                    {" "}
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Breed:</li>
                      <li className="list-group-item">Name:</li>
                      <li className="list-group-item">Age:</li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="main__hero__images"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/maheshidevelopments/image/upload/c_fill,w_320,h_320,ar_1:1/v1724631814/kitty-connect-image2.jpg")`,
                    }}
                  ></div>
                  <div>
                    {" "}
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Breed:</li>
                      <li className="list-group-item">Name:</li>
                      <li className="list-group-item">Age:</li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="main__hero__images"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/maheshidevelopments/image/upload/c_fill,w_320,h_320,ar_1:1/v1724631980/kitty-connect-image3.jpg")`,
                    }}
                  ></div>
                  <div>
                    {" "}
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Breed:</li>
                      <li className="list-group-item">Name:</li>
                      <li className="list-group-item">Age:</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Main;
