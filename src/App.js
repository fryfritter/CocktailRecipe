import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import CocktailListingWithRouter from "./components/CocktailListing";
import RecipesDetails from "./components/RecipeDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/home">Homes</Nav.Link>
              <Nav.Link href="/list">Cocktails Selection</Nav.Link>
              <Nav.Link href="/recipes">Cocktails Recipe</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </div>
      <BrowserRouter>
        <header />

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
