import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import CocktailListingWithRouter from "./components/CocktailListing";
import RecipesDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/recipes">Recipe</NavLink>

          <NavLink
            to={{ pathname: "/recipes", aboutProps: { drinkId: 15933 } }}
          >
            Recipe 2
          </NavLink>
          <Switch>
            <Route exact path="/home" component={CocktailListingWithRouter} />
            <Route exact path="/recipes/:drinkId" component={RecipesDetails} />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
