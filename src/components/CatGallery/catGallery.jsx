import React from "react";
import "./catGallery.css";

const CatGallery = ({ cats }) => {
  return (
    <div className="row row-cols-2 row-cols-md-2 g-4">
      {cats.map((cat) => (
        <div className="col" key={cat.id}>
          <div className="card cats__card-container">
            <img
              src={cat.image_url}
              className="card-img-top cats cats__image"
              alt={cat.name}
            />
            <div className="card-body">
              <h5 className="card-title cats__names">{cat.name}</h5>
              <p className="card-text cats__details">Breed: {cat.breed}</p>
              <p className="card-text cats__details">Age: {cat.age} years</p>
              <div>
                {cat.status === "Available" ? (
                  <span className="badge rounded-pill text-bg-success  cats__details">
                    Available
                  </span>
                ) : (
                  <span className="badge rounded-pill text-bg-danger cats__details">
                    Adopted
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatGallery;
