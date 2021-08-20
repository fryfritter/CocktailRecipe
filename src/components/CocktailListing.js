import React, { useState } from "react";
import Loader from "./Loader";
import axiosInstance from "../utils/axios";
import "./CocktailListing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "react-bootstrap";
import CocktailListCard from "./CocktailListCard";
import { withRouter } from "react-router-dom";

/**
 For Sharing  
Screen 1: Cocktail Listing
1. Dynamic A-Z button with testid
2. Each button click will call API and load the result
3  Uses a separate component for summary card
4. Always remember to handle 'empty' array for map

Blocker:
1. Rendering of A-Z button using while loop doesnt work. Solved by using map function
2. button colour on hover not obvious. solved by using outline button style
2. The background color doesnt cover fully (unresolved)
3. Still can't understand how the passing of drink ID to next page work
4. css to change the rounder corner for button doesnt work
 */

const CocktailListing = (props) => {
  console.log(props.location);
  // const [paramValue, setParamVaue] = useState("a");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const aToZ = "ABCDEFGHIJKLMNOPQRSTUVYZ";
  const getData = (firstLetterToSearch) => {
    // don't call API if data already exists ** next version
    // const cocktailList = recipes.find( ({ firstChar }) => firstChar === paramValue );
    //no record for this cocktails, retrieve and store in state

    console.log("get data" + firstLetterToSearch);
    axiosInstance
      .get("/search.php", {
        params: {
          f: firstLetterToSearch,
        },
      })
      .then((response) => {
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
      <Button
        variant="outline-light"
        size="sm"
        key={char}
        data-testid={"search-by-" + char}
        className="btn-group__style  rounded-top border"
        onClick={() => searchRecipes(char)}
      >
        {char}
      </Button>
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
