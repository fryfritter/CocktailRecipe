import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { waitFor } from "./utils/CustomWaitFor";

/**
Testing
1. Possible to extend the 'waitfor' timeout (default 1 sec)
2. Not all component click accept fireEvent.click()
   e.g. it works for NavLink but not Nav.link

Blocker:
1. component based testing for component 'withRouter'
*/

test("1. should find 2 links from main page", () => {
  render(<App />);
  const linkElement_List = screen.getByText("Cocktails Selection");
  expect(linkElement_List).toBeInTheDocument();

  const linkElement_Recipe = screen.getByText("Cocktails Recipe");
  expect(linkElement_Recipe).toBeInTheDocument();
});

test("2. should display Pick when home clicked", () => {
  render(<App />);
  const navCocktailSelection = screen.getByTestId("ti_cocktailselection");
  expect(navCocktailSelection).toBeInTheDocument();

  fireEvent.click(navCocktailSelection);

  let cocktailsSelectionText = screen.getByText(/Pick/);

  expect(cocktailsSelectionText).toBeInTheDocument();
});

test("3. should display MYOB when recipe is clicked", () => {
  render(<App />);
  const navCocktailRecipe = screen.getByTestId("ti_RecipeDetails");

  fireEvent.click(navCocktailRecipe);
  expect(screen.getByText(/MYOB/i)).toBeInTheDocument();
});

test("4. should find 3 buttons in list cocktails", () => {
  render(<App />);
  const navCocktailSelection = screen.getByTestId("ti_cocktailselection");

  fireEvent.click(navCocktailSelection);

  const btn_A = screen.getByTestId("search-by-A");
  expect(btn_A).toBeInTheDocument();

  const btn_H = screen.getByTestId("search-by-H");
  expect(btn_H).toBeInTheDocument();

  const btn_Z = screen.getByTestId("search-by-Z");
  expect(btn_Z).toBeInTheDocument();
});

test("5. should fetch responses when Z button is clicked", async () => {
  render(<App />);
  const navCocktailSelection = screen.getByTestId("ti_cocktailselection");
  fireEvent.click(navCocktailSelection);

  const btn_Z = screen.getByTestId("search-by-Z");
  fireEvent.click(btn_Z);
  let cocktails = await waitFor(() =>
    screen.findAllByTestId("cocktail-list-items")
  );

  expect(cocktails.length).toBeGreaterThan(0);
});

test("6. should go to detail page when first cocktail is clicked", async () => {
  render(<App />);

  const navCocktailSelection = screen.getByTestId("ti_cocktailselection");

  fireEvent.click(navCocktailSelection);

  const btn_Z = screen.getByTestId("search-by-Z");
  fireEvent.click(btn_Z);
  let cocktails = await waitFor(() =>
    screen.findAllByTestId("cocktail-list-items")
  );
  let cocktail = cocktails[0];
  console.log(cocktail);
  fireEvent.click(cocktail);
  expect(screen.getByText(/MYOB/i)).toBeInTheDocument();
});
