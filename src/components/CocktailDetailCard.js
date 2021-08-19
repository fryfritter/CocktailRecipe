import React from "react";
import { Image } from "react-bootstrap";

import "./RecipeDetails.css";

const CocktailDetailCard = ({ recipeDetail }) => {
  return (
    <div className="recipe-detail__container">
      {" "}
      <Image
        className="recipe-detail__image"
        src={recipeDetail.strDrinkThumb}
      />
      <div className="recipe-detail">
        <div className="recipe-detail__cocktail-name">
          {recipeDetail.strDrink}
        </div>{" "}
        Drink with : {recipeDetail.strGlass} <br />
        What you need :{" "}
        <ul>
          <li>{recipeDetail.strIngredient1}</li>
          <li>{recipeDetail.strIngredient2}</li>
          <li>{recipeDetail.strIngredient3}</li>
          <li>{recipeDetail.strIngredient4}</li>
        </ul>
        How to prepare :
        <br /> {recipeDetail.strInstructions} <br />
      </div>
    </div>
  );
};

export default CocktailDetailCard;
