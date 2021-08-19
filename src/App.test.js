import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElement,
} from "@testing-library/react";
import App from "./App";

// test("should find 2 links", () => {
//   render(<App />);
//   const linkElement_List = screen.getByText("List Cocktails");
//   expect(linkElement_List).toBeInTheDocument();

//   const linkElement_Recipe = screen.getByText("Cocktails Recipe");
//   expect(linkElement_Recipe).toBeInTheDocument();
// });

// test("should display home when home clicked", () => {
//   render(<App />);
//   const linkElement_List = screen.getByText("List Cocktails");

//   fireEvent.click(linkElement_List);
//   expect(screen.getByText(/Pick/)).toBeInTheDocument();
// });
// test("should display MYOB when recipe is clicked", () => {
//   render(<App />);
//   const linkElement_Recipe = screen.getByText("Cocktails Recipe");

//   fireEvent.click(linkElement_Recipe);
//   expect(screen.getByText(/MYOB/i)).toBeInTheDocument();
// });

// test("should find 3 buttons in list cocktails", () => {
//   render(<App />);
//   const linkElement_List = screen.getByText("List Cocktails");

//   fireEvent.click(linkElement_List);

//   const btn_A = screen.getByTestId("search-by-A");
//   expect(btn_A).toBeInTheDocument();

//   const btn_H = screen.getByTestId("search-by-H");
//   expect(btn_H).toBeInTheDocument();

//   const btn_Z = screen.getByTestId("search-by-Z");
//   expect(btn_Z).toBeInTheDocument();
// });

test("should fetch responses when Z button is clicked", async () => {
  render(<App />);
  const linkElement_List = screen.getByText("List Cocktails");

  fireEvent.click(linkElement_List);

  const btn_Z = screen.getByTestId("search-by-Z");
  fireEvent.click(btn_Z); //this would call API
  // await waitFor(() => fireEvent.click(btn_Z));
  // await waitFor(() => screen.getByTestId("cocktail-list-items"));cd ..
  // await screen.getByTestId("cocktail-list-items");

  // await waitFor(() =>
  //   expect(screen.getAllByTestId("cocktail-list-items").length).toBeGreaterThan(
  //     0
  //   )
  // );
  //   const cocktails = await waitFor(() =>
  //   screen.getAllByTestId("cocktail-list-items")
  // );
  let cocktails = await screen.findAllByTestId("cocktail-list-items");
  cocktails = await waitFor(() =>
    screen.findAllByTestId("cocktail-list-items")
  );

  expect(cocktails.length).toBeGreaterThan(0);

  // const responseCocktailItem = screen.getByTestId("cocktail-list-items");

  // expect(responseCocktailItem).toBeInTheDocument();
});
