import {
  fireEvent,
  render,
  screen,
  waitForElement,
} from "@testing-library/react";
import App from "./App";
import { waitFor } from "./utils/CustomWaitFor";

test("1. should find 2 links from main page", () => {
  render(<App />);
  const linkElement_List = screen.getByText("List Cocktails");
  expect(linkElement_List).toBeInTheDocument();

  const linkElement_Recipe = screen.getByText("Cocktails Recipe");
  expect(linkElement_Recipe).toBeInTheDocument();
});

test("2. should display home when home clicked", () => {
  render(<App />);
  const linkElement_List = screen.getByText("List Cocktails");

  fireEvent.click(linkElement_List);
  expect(screen.getByText(/Pick/)).toBeInTheDocument();
});

test("3. should display MYOB when recipe is clicked", () => {
  render(<App />);
  const linkElement_Recipe = screen.getByText("Cocktails Recipe");

  fireEvent.click(linkElement_Recipe);
  expect(screen.getByText(/MYOB/i)).toBeInTheDocument();
});

test("4. should find 3 buttons in list cocktails", () => {
  render(<App />);
  const linkElement_List = screen.getByText("List Cocktails");

  fireEvent.click(linkElement_List);

  const btn_A = screen.getByTestId("search-by-A");
  expect(btn_A).toBeInTheDocument();

  const btn_H = screen.getByTestId("search-by-H");
  expect(btn_H).toBeInTheDocument();

  const btn_Z = screen.getByTestId("search-by-Z");
  expect(btn_Z).toBeInTheDocument();
});

test("5. should fetch responses when Z button is clicked", async () => {
  render(<App />);
  const linkElement_List = screen.getByText("List Cocktails");

  fireEvent.click(linkElement_List);

  const btn_Z = screen.getByTestId("search-by-Z");
  fireEvent.click(btn_Z);
  let cocktails = await waitFor(() =>
    screen.findAllByTestId("cocktail-list-items")
  );

  expect(cocktails.length).toBeGreaterThan(0);
});

test("6. should go to detail page when first cocktail is clicked", async () => {
  render(<App />);
  const linkElement_List = screen.getByText("List Cocktails");

  fireEvent.click(linkElement_List);

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
