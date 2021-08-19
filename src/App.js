import {
  Container,
  Nav,
  Navbar,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import CocktailListingWithRouter from "./components/CocktailListing";
import RecipesDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/home" className="header_link">
            List Cocktails
          </NavLink>
          //
          <NavLink to="/recipes" className="header_link">
            Cocktails Recipe
          </NavLink>
          <Switch>
            <Route exact path="/home" component={CocktailListingWithRouter} />
            <Route exact path="/recipes/:drinkId" component={RecipesDetails} />
            <Route exact path="/recipes" component={RecipesDetails} />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
