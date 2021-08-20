import React, { useEffect } from "react";
import axiosInstance from "../utils/axios";
import useStateWithPromise from "../utils/useStateWithPromise";
import "./RecipeDetails.css";
import { Button, Carousel, InputGroup } from "react-bootstrap";
import RecipeDetailsCard from "./RecipeDetailsCard";
import Loader from "./Loader";

const RecipesDetails = (props) => {
  const [cocktailRecipe, setCocktailRecipe] = useStateWithPromise([]);
  const [cocktailNameToSearch, setCocktailNameToSearch] =
    useStateWithPromise("");
  const [isLoading, setIsLoading] = useStateWithPromise(false);
  const {
    match: { params },
  } = props;

  useEffect(() => {
    loadData(); //automatically load data 'once' when the component is rendered
  }, []);

  const loadData = () => {
    //**retain the console log for sharing */

    console.log("i am in recipe details " + params.drinkId);

    if (params.drinkId !== undefined) {
      setIsLoading(true);
      console.log("is loading " + isLoading);
      axiosInstance
        .get("/lookup.php", {
          params: {
            i: params.drinkId,
          },
        })
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
      .then((response) => {
        console.log("gotten response");
        console.log(response.data.drinks);
        setIsLoading(false);

        console.log("is loading " + isLoading);

        setCocktailRecipe(response.data.drinks);
        console.log("printing recipe" + cocktailRecipe);
      });
  };

  const searchComponent = () => {
    return (
      <InputGroup className="recipe-detail__header">
        <input
          name="cocktailName"
          onChange={handleChangeCocktailSearchInput}
          placeholder="cocktail name here"
          size="50"
        />
        <Button
          variant="outline-secondary"
          onClick={() => searchCocktailByName()}
          id="button-addon2"
        >
          show me the recipe
        </Button>
      </InputGroup>
    );
  };

  const renderRecipeCards = () => {
    return (
      <Carousel fade>
        {cocktailRecipe.map((recipe) => (
          <Carousel.Item interval={3000}>
            <div>
              <RecipeDetailsCard recipeDetail={recipe} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  return (
    <div className="bg-dark">
      <div className="header">MYOB - Make Your Own Booze</div>
      {isLoading && <Loader />}

      <div>{params.drinkId === undefined && searchComponent()}</div>
      {!isLoading &&
        cocktailRecipe !== null &&
        cocktailRecipe.length !== 0 &&
        renderRecipeCards()}
    </div>
  );
};

export default RecipesDetails;
