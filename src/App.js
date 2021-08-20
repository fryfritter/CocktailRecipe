import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import CocktailListingWithRouter from "./components/CocktailListing";
import RecipesDetails from "./components/RecipeDetails";
import Home from "./components/Home";
/**
 For Sharing 

Top Nav Bar
blocker : Unable to replace [navlink] with [Nav.Link] within Router component
Solution : place [Nav.link] out of the router tag (it still work)

 */

function App() {
  return (
    <div className="App">
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/list" data-testid="ti_nav_cocktailselection">
                Cocktails Selection
              </Nav.Link>
              <Nav.Link href="/recipes">Cocktails Recipe</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </div>
      <BrowserRouter>
        <header />
        <NavLink to="/list" data-testid="ti_cocktailselection"></NavLink>
        <NavLink to="/recipes" data-testid="ti_RecipeDetails"></NavLink>

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
