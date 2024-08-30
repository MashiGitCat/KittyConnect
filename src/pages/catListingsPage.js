import React, { useState, useEffect } from "react";
import CatListings from "../components/CatListings/catListings";
import CatGallery from "../components/CatGallery/catGallery";

const CatListingsPage = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/cats");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error("Error fetching cat data:", error);
        setError(error.message);
      }
    };

    fetchCats();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <CatListings />
          <CatGallery cats={cats} />
        </>
      )}
    </div>
  );
};

export default CatListingsPage;
