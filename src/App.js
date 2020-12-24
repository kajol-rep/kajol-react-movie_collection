import React from "react";
import "./styles.css";
import { useState } from "react";

const movieList = {
  science_fiction: [
    { name: "The amazing spiderman", rating: "5/5" },
    { name: "Avengers", rating: "4.5/5" },
    { name: "The lord of the rings", rating: "5/5" }
  ],

  horror: [
    {
      name: "The grudge",
      rating: "4.5/5"
    },
    {
      name: "Insidious",
      rating: "4/5"
    },
    {
      name: "Bulbbul",
      rating: "4/5"
    }
  ],
  fantasy: [
    {
      name: "Maleficent",
      rating: "5/5"
    },
    {
      name: "Pirates of the Caribbean",
      rating: "5/5"
    },
    {
      name: "Avataar",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("science_fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        <span aria-label="movie_cam" role="img">
          🎦
        </span>
        movie collection
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Please select a genre of your choice to get
        started{" "}
      </p>
      <div>
        {Object.keys(movieList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#10B981",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              color: "white"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieList[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                background: "#D1FAE5"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>
                {" "}
                🎞️<strong>{movie.name}</strong>{" "}
              </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                ratings: {movie.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
