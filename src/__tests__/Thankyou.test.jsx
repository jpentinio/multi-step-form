import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { FormContext } from "../context";
import Thankyou from "../components/Thankyou";

const MockFormContextProvider = ({ children, value }) => (
  <FormContext.Provider value={value}>{children}</FormContext.Provider>
);

test("Thankyou Component renders successfully", () => {
  const isMobile = false;

  render(
    <Router>
      <MockFormContextProvider value={{ isMobile }}>
        <Thankyou />
      </MockFormContextProvider>
    </Router>
  );

  const title = screen.getByText("Thank you!");
  const text = screen.getByText(
    "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
  );
  expect(title).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
