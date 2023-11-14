import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { FormContext } from "../context";
import ButtonComponent from "../components/ButtonComponent";

// A simple mock context provider for testing
const MockFormContextProvider = ({ children, value }) => (
  <FormContext.Provider value={value}>{children}</FormContext.Provider>
);

test("ButtonComponent renders correctly and invokes handleNext on click", () => {
  const handleNextMock = jest.fn();
  const isMobile = false; // Set the desired value for isMobile
  const hideGoBackBtn = false; // Set the desired value for hideGoBackBtn

  render(
    <Router>
      <MockFormContextProvider value={{ isMobile }}>
        <ButtonComponent
          text="Next"
          handleNext={handleNextMock}
          hideGoBackBtn={hideGoBackBtn}
        />
      </MockFormContextProvider>
    </Router>
  );

  const goBackLink = screen.getByRole("link", { name: /go back/i });
  expect(goBackLink).toBeInTheDocument();
  expect(getComputedStyle(goBackLink).getPropertyValue("visibility")).toBe(
    "visible"
  );

  // Click the "Next" button and check that handleNext is invoked
  const nextButton = screen.getByTestId("button");
  fireEvent.click(nextButton);
  expect(handleNextMock).toHaveBeenCalledTimes(1);
});

test("ButtonComponent hides Go Back link when hideGoBackBtn is true", () => {
  const handleNextMock = jest.fn();
  const isMobile = false;
  const hideGoBackBtn = true;

  render(
    <Router>
      <MockFormContextProvider value={{ isMobile }}>
        <ButtonComponent
          text="Next"
          handleNext={handleNextMock}
          hideGoBackBtn={hideGoBackBtn}
        />
      </MockFormContextProvider>
    </Router>
  );

  const goBackLink = screen.queryByRole("link", { name: /go back/i });
  expect(goBackLink).toBeNull();

  const nextButton = screen.getByTestId("button");
  fireEvent.click(nextButton);
  expect(handleNextMock).toHaveBeenCalledTimes(1);
});
