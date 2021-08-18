import React, { useState } from "react";
import axiosInstance from "../utils/axios";
import { Loader } from "react-loader-spinner";

const RecipesDetails = ({ drinkId }) => {
  const [cocktailRecipe, setCocktailRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("i am in recipe details " + drinkId);

  axiosInstance
    .get("/lookup.php", {
      params: {
        i: drinkId,
      },
    })
    .then((response) => {
      console.log("gotten response");
      console.log(response.drinks);
      setIsLoading(false);
      setCocktailRecipe(response.drinks);
      console.log(cocktailRecipe);
    });

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && console.log(cocktailRecipe[0])}
    </div>
  );
};

export default RecipesDetails;
