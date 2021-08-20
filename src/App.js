import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import CocktailListingWithRouter from "./components/CocktailListing";
import RecipesDetails from "./components/RecipeDetails";
import Home from "./components/Home";
import { Link } from "react-router-dom";

/**
 
Key Learning Points:
- React Router at the top of the hierachy
- NavLink (React Router) vs [Nav.Link](http://nav.Link) (React bootstrap)
- Reactbootstrap vs Bootstrap
- hook does not update immediately
- Good to group related component in separate function for reusability and clarity
- Alignment and sizing are still confusing

 For Sharing 

Top Nav Bar
blocker : Unable to replace [navlink] with [Nav.Link] within Router component
Solution : place [Nav.link] out of the router tag (it still work)

 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header />
        <Navbar bg="dark" variant="dark">
          <NavLink to="/list" data-testid="ti_cocktailselection"></NavLink>
          <NavLink to="/recipes" data-testid="ti_RecipeDetails"></NavLink>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              {" "}
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/list"
              data-testid="ti_nav_cocktailselection"
            >
              Cocktails Selection
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/recipes"
              data-testid="ti_nav_RecipeDetails"
            >
              Cocktails Recipe
            </Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/list" component={CocktailListingWithRouter} />
          <Route exact path="/recipes/:drinkId" component={RecipesDetails} />
          <Route exact path="/recipes" component={RecipesDetails} />

          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
