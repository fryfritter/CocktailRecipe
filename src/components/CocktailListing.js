import React, { useState } from "react";
import Loader from "./Loader";
import axiosInstance from "../utils/axios";
import "./CocktailListing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "react-bootstrap";
import CocktailListCard from "./CocktailListCard";
import { withRouter } from "react-router-dom";

const CocktailListing = (props) => {
  console.log(props.location);
  // const [paramValue, setParamVaue] = useState("a");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const aToZ = "ABCDEFGHIJKLMNOPQRSTUVYZ";
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
        console.log("is loading " + isLoading);

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
        key={char}
        data-testid={"search-by-" + char}
        className="btn-group__style btn-dark btn-sm rounded-top border"
        onClick={() => searchRecipes(char)}
      >
        {char}
      </button>
    ));
  };
  return (
    <div className="container bg-dark">
      <div className="header">Pick your poison :)</div>
      <div>
        <ButtonGroup>{printButtonAtoZ()}</ButtonGroup>
      </div>
      Show Recipe <br />
      {isLoading && <Loader />}
      <div className="cocktail-list">
        {!isLoading &&
          recipes !== null &&
          recipes.map((recipe) => (
            <CocktailListCard
              id={recipe.idDrink}
              imageUrl={recipe.strDrinkThumb}
              key={recipe.idDrink}
              cocktailName={recipe.strDrink}
            ></CocktailListCard>
          ))}
      </div>
    </div>
  );
};
const CocktailListingWithRouter = withRouter(CocktailListing);

export default CocktailListingWithRouter;
