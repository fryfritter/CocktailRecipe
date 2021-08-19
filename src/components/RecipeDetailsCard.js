import React from "react";
import { Image } from "react-bootstrap";

import "./RecipeDetails.css";

const CocktailDetailsCard = ({ recipeDetail }) => {
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
        </div>
        Drink with what : <br /> {recipeDetail.strGlass} <br /> <br />
        What you need :{" "}
        <ul>
          {checkIngredient(recipeDetail).map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
        How to prepare :
        <br /> {recipeDetail.strInstructions}
        <br />
      </div>
    </div>
  );
};

const checkIngredient = (recipeDetail) => {
  let arrIngredient = [];
  if (recipeDetail.strIngredient1 !== null)
    arrIngredient.push(recipeDetail.strIngredient1);
  if (recipeDetail.strIngredient2 !== null)
    arrIngredient.push(recipeDetail.strIngredient2);
  if (recipeDetail.strIngredient3 !== null)
    arrIngredient.push(recipeDetail.strIngredient3);
  if (recipeDetail.strIngredient4 !== null)
    arrIngredient.push(recipeDetail.strIngredient4);
  if (recipeDetail.strIngredient5 !== null)
    arrIngredient.push(recipeDetail.strIngredient5);
  if (recipeDetail.strIngredient6 !== null)
    arrIngredient.push(recipeDetail.strIngredient6);
  if (recipeDetail.strIngredient7 !== null)
    arrIngredient.push(recipeDetail.strIngredient7);
  if (recipeDetail.strIngredient8 !== null)
    arrIngredient.push(recipeDetail.strIngredient8);
  if (recipeDetail.strIngredient9 !== null)
    arrIngredient.push(recipeDetail.strIngredient9);

  return arrIngredient;
};
export default CocktailDetailsCard;
