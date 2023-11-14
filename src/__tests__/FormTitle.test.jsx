import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormTitle from "../components/FormTitle";

describe("FormTitle", () => {
  it("renders correctly with the provided title prop", () => {
    const { getByText } = render(<FormTitle title="Sample Title" />);
    expect(getByText("Sample Title")).toBeInTheDocument();
  });

  it("renders correctly with the provided text prop", () => {
    const { getByText } = render(<FormTitle title="Sample Text" />);
    expect(getByText("Sample Text")).toBeInTheDocument();
  });
});
