import React, { useState } from "react";
import Loader from "./Loader";
import axiosInstance from "../utils/axios";
import "./AppMain.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { container, Button, ButtonGroup } from "react-bootstrap";
import CocktailSummary from "./CocktailSummary";

const AppMain = () => {
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
      .then(
        (response) => {
          console.log("gotten response");

          // console.log(response.data.drinks);
          setIsLoading(false);
          setRecipes(response.data.drinks);
          // console.log(recipes);
        }

        // console.log("get data");
        // axiosInstance
        //   .get("/search.php", {
        //     params: {
        //       f: paramValue,
        //     },
        //   })
        //   .then((response) => {
        //     console.log("gotten response");

        //     // console.log(response.data.drinks);
        //     setIsLoading(false);
        //     // setRecipes(response.data.drinks);
        //     // console.log(recipes);
        //   }
      );
  };

  const searchRecipes = (firstLetterToSearch) => {
    setIsLoading(true);
    getData(firstLetterToSearch);
  };

  // const handlePostIdChange = (e) => {
  //   setPostId(e.target.value);
  // };

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
      {/* <Button onClick={searchRecipes}> submit</Button> */}
      {isLoading && <Loader />}
      <div class="cocktail-list">
        {!isLoading &&
          recipes.map((recipe) => (
            <CocktailSummary
              imageUrl={recipe.strDrinkThumb}
              cocktailName={recipe.strDrink}
            ></CocktailSummary>
          ))}
      </div>
      {/* {comments.length === 0
        ? `No comments available for postid: ${postId}`
        : ""} */}
    </div>
  );
};

export default AppMain;
