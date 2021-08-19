import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Loader } from "react-loader-spinner";
import useStateWithPromise from "../utils/useStateWithPromise";
import "./RecipeDetails.css";
import { Button, Container, Grid, Image } from "react-bootstrap";
import RecipeDetailsCard from "./RecipeDetailsCard";
import { Carousel } from "bootstrap";

const RecipesDetails = (props) => {
  const [cocktailRecipe, setCocktailRecipe] = useStateWithPromise([]);
  const [cocktailNameToSearch, setCocktailNameToSearch] =
    useStateWithPromise("");
  const [isLoading, setIsLoading] = useStateWithPromise(false);
  const {
    match: { params },
  } = props;

  const loadData = () => {
    console.log("i am in recipe details " + params.drinkId);
    setIsLoading(true);
    console.log("is loading " + isLoading);
    console.log("param id is" + params.drinkId);

    if (params.drinkId !== undefined) {
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
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChangeCocktailSearchInput = (e) => {
    console.log(e.target.value);
    setCocktailNameToSearch(e.target.value);
  };
  const searchCocktailByName = () => {
    console.log("search by name" + cocktailNameToSearch);
    setIsLoading(true);

    axiosInstance
      .get("/search.php", {
        params: {
          s: cocktailNameToSearch,
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

  return (
    <div className="bg-dark">
      <div className="header">MYOB - Make Your Own Booze</div>

      <div className="recipe-detail__cocktail-name">
        {" "}
        <input
          name="cocktailName"
          onChange={handleChangeCocktailSearchInput}
        />{" "}
        <br />
        <Button onClick={() => searchCocktailByName()}> Search </Button>
      </div>

      {!isLoading &&
        cocktailRecipe !== undefined &&
        cocktailRecipe.map((recipe) => (
          <div>
            <RecipeDetailsCard recipeDetail={recipe} />
          </div>
        ))}
    </div>
  );
};

export default RecipesDetails;
