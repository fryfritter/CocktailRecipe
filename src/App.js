import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import AppMainWithRouter from "./components/AppMain";
import AppMain from "./components/AppMain";
import RecipesDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/Recipe/abc">Recipe</NavLink>
          <Switch>
            <Route exact path="/home" component={AppMainWithRouter} />
            <Route exact path="/Recipe/:drinkId" component={RecipesDetails} />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
