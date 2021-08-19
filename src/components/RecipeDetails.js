import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Loader } from "react-loader-spinner";
import useStateWithPromise from "../utils/useStateWithPromise";
import "./RecipeDetails.css";
import { Container, Image } from "react-bootstrap";

const RecipesDetails = (props) => {
  const [cocktailRecipe, setCocktailRecipe] = useStateWithPromise([]);
  const [isLoading, setIsLoading] = useStateWithPromise(false);
  const {
    match: { params },
  } = props;

  const loadData = () => {
    console.log("i am in recipe details " + params.drinkId);
    setIsLoading(true);
    console.log("is loading " + isLoading);

    axiosInstance
      .get("/lookup.php", {
        params: {
          i: params.drinkId,
        },
      })
      //   .then((response) => response.json()) // convert data to json
      .then((response) => {
        console.log("gotten response");
        console.log(response.data.drinks);
        setIsLoading(false);

        console.log("is loading " + isLoading);

        setCocktailRecipe(response.data.drinks);
        console.log("printing recipe" + cocktailRecipe);
      });
  };

  useEffect(async () => {
    loadData();
  }, []);

  return (
    <Container className="bg-dark">
      {!isLoading &&
        cocktailRecipe.map((recipe) => (
          // <div>{recipe.idDrink + recipe.strDrinkThumb + recipe.strDrink}</div>
          <div border="primary" className="recipe-detail__container ">
            <row>
              <column>
                <Image
                  className="recipe-detail__image"
                  src={recipe.strDrinkThumb}
                />
              </column>
              <column>
                <row>{recipe.strDrink}</row>
                <br />
                <row>
                  {" "}
                  Drink with : {recipe.strGlass} <br />
                </row>
                What you need :{" "}
                <ul>
                  <li>{recipe.strIngredient1}</li>
                  <li>{recipe.strIngredient2}</li>
                  <li>{recipe.strIngredient3}</li>
                  <li>{recipe.strIngredient4}</li>
                </ul>
                How to prepare : {recipe.strInstructions} <br />
              </column>
            </row>
          </div>
        ))}
    </Container>
  );
};

export default RecipesDetails;
