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
        {/* <NavLink to="/home" className="header_link">
            Home
          </NavLink>{" "}
          //
          <NavLink to="/list" className="header_link">
            List Cocktails
          </NavLink>
          //
          <NavLink to="/recipes" className="header_link">
            Cocktails Recipe
          </NavLink> */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
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
