import React from "react";
import "./catListings.css";

const CatListings = () => {
  return (
    <section className="catlistings">
      <div
        className="card mb-3 catlistings__card-outer"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="catlistings__card-container">
            
              {" "}
              <div className="col-md-4 catlistings__image img-fluid"></div>
           

            <div className="col-md-8 catlistings__card-text-container">
              <div className="catlistings__card-texts">
                <h2 className="card-title catlistings__card-title">
                  Take Us With You!
                </h2>
                <p className="card-text catlistings__card-text">
                  We are a bunch of kitties looking for lovely homes with lovely
                  humans... We all have different cat love to give you. Select
                  the one that is puurfect for you. Connect with your own Kitty
                  Today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatListings;
