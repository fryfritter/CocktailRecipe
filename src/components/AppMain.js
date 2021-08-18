import React, { useState } from "react";
import Loader from "./Loader";
import axiosInstance from "../utils/axios";
import "./AppMain.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "react-bootstrap";
import CocktailSummary from "./CocktailSummary";
import {
  withRouter
} from "react-router-dom";
import RecipesDetails from "./RecipeDetails";
import { propTypes } from "react-bootstrap/esm/Image";

const AppMain = (props) => {
  console.log(props.location);
  // const [paramValue, setParamVaue] = useState("a");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const aToZ = "ABCDEFGHIJKLMNOPQRSTUVYXYZ";
  const getData = (firstLetterToSearch) => {
    // don't call API if data already exists ** next version
    // const cocktailList = recipes.find( ({ firstChar }) => firstChar === paramValue );

    //no record for this cocktail, just store first
    console.log("get data" + firstLetterToSearch);
    axiosInstance
      .get("/search.php", {
        params: {
          f: firstLetterToSearch,
        },
      })
      .then((response) => {
        console.log("gotten response");

        setIsLoading(false);
        setRecipes(response.data.drinks);
      });
  };

  const searchRecipes = (firstLetterToSearch) => {
    setIsLoading(true);
    getData(firstLetterToSearch);
  };

  const printButtonAtoZ = () => {
    // let currentCharCode = 65;
    // while (currentCharCode < 95) {
    //   <button type="button" value={String.fromCharCode(currentCharCode)}>
    //     {String.fromCharCode(currentCharCode)}
    //   </button>;
    //   currentCharCode++;
    // }
    return aToZ.split("").map((char) => (
      <button
        type="button"
        class="btn-group__style btn-dark btn-sm rounded-top border"
        onClick={() => searchRecipes(char)}
      >
        {char}
      </button>
    ));
  };
  return (
    <div class="container bg-dark">
      <div>
        <ButtonGroup>{printButtonAtoZ()}</ButtonGroup>
      </div>
      Show Recipe <br />
      <Button onClick={() => console.log("clicking the summary")}>
        {" "}
        submit
      </Button>
      {isLoading && <Loader />}
      <div class="cocktail-list">
        {!isLoading &&
          recipes.map((recipe) => (
            <CocktailSummary
              id={recipe.idDrink}
              imageUrl={recipe.strDrinkThumb}
              cocktailName={recipe.strDrink}
            ></CocktailSummary>
          ))}
      </div>
    </div>
  );
};
const AppMainWithRouter = withRouter(AppMain);

export default AppMainWithRouter;
