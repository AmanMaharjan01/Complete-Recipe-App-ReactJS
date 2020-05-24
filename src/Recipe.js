import React from "react";
import "./App.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="box">
      <div className="content">
        <img src={image} alt="food" />
        <hr />
        <br />
        <p>{title}</p>
        <br />
        <span>Calories : {Math.round(calories)}</span>
        <br />
        <br />
        <hr />
        <br />
        <h3> Ingredients:</h3>
        <ul typeof="sqaure">
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
