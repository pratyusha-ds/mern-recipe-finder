import React, { useState } from "react";
import styled from "styled-components";

const Complexsearch = () => {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    fetch(
      `http://localhost:5000/api/complexSearch?query=${query}&cuisine=${cuisine}&diet=${diet}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching recipes:", error);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setResults(data.results);
        setError("");
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setError("Please try again after some time.");
      });
  };
  return (
    <RecipeContainer>
      <div className="content">
        <div className="container">
          <div>
            <div>
              <input
                type="text"
                placeholder="Recipe name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Cuisine type"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Dietary restrictions"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
              />
            </div>
          </div>
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="recipes">
          {results.length > 0 && <h2>Recipes:</h2>}
          <ul>
            {results.map(
              (recipe) =>
                recipe.image && (
                  <li key={recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h3>{recipe.title}</h3>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </RecipeContainer>
  );
};

const RecipeContainer = styled.div`
  overflow-x: hidden;

  .content {
    display: flex;
    align-items: start;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .container {
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }

  input {
    width: 300px;
    margin: 10px 0;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: #555;
    color: white;
    &:hover {
      border: 2px solid #000;
    }

    @media (max-width: 768px) {
      width: 200px;
    }
  }

  input::placeholder {
    color: #999;
    opacity: 1;
  }

  .button {
    margin: 0 20px;
    height: 40px;
    width: 100px;
    border: 2px solid #000;
    border-radius: 8px;
    font-weight: bold;
    font-size: 18px;

    &:hover {
      height: 45px;
      width: 105px;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  .recipes {
    margin-left: 80px;

    @media (max-width: 700px) {
      margin-top: 80px;
      margin-left: 0;
    }
  }

  .recipes ul li {
    border: 2px solid #000;
    margin: 20px 0;
    list-style-type: none;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    background: rgba(230, 230, 230, 0.8);
  }

  .recipes ul li img {
    border: 2px solid #000;
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;

    @media (max-width: 768px) {
      .recipes ul li img {
        max-width: 200px;
      }
    }
  }

  .recipes h2 {
    margin-bottom: 30px;
  }
`;

export default Complexsearch;
