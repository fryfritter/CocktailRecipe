import React, { useState } from "react";
import Loader from "./Loader";
import axiosInstance from "../utils/axios";
import "./AppMain.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { container, Button, ButtonGroup } from "react-bootstrap";
import CocktailSummary from "./CocktailSummary";

const AppMain = () => {
  const [paramValue, setParamVaue] = useState("a");
  const [recipes, setRecipies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const aToZ = "ABCDEFGHIJKLMNOPQRSTUVYXYZ";

  const getData = () => {
    // don't call API if data already exists

    console.log("get data");
    axiosInstance
      .get("/search.php", {
        params: {
          f: paramValue,
        },
      })
      .then((response) => {
        console.log("gotten response");

        console.log(response.data.drinks);
        setIsLoading(false);
        setRecipies(response.data.drinks);
        console.log(recipes);
      });
  };

  const searchRecipes = () => {
    setIsLoading(true);
    getData();
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
      {/* <input onChange={handlePostIdChange}></input> */}
      <Button onClick={searchRecipes}> submit</Button>
      {isLoading && <Loader />}
      <br />
      <br />
      {!isLoading &&
        recipes.map((recipe) => (
          <div>
            <CocktailSummary
              imageUrl="test"
              cocktailName="dd"
            ></CocktailSummary>
            ID : this is where i change {recipe.strDrink} <br />
            Body : {recipe.strInstructions} <br />
            Body : {recipe.strDrinkThumb} <br />
            <br />
            <br />
          </div>
        ))}
      {/* {comments.length === 0
        ? `No comments available for postid: ${postId}`
        : ""} */}
    </div>
  );
};

export default AppMain;
