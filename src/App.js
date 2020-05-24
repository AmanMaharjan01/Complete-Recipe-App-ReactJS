import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const ID = "8925be40";
  const KEY = "1117399b1227f02caad9c4692c8b04e0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    const api = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&calories=591-722&health=alcohol-free`
    );
    const tojson = await api.json();
    setRecipes(tojson.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <center>
        <h1> Food Recipe </h1>
      </center>
      <form onSubmit={getSearch}>
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Enter the name of food"
        />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </form>
      <div className="wrapper">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
