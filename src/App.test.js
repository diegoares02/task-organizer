import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test", () => {
  it("Test1", () => {
    render(<App />);
    const text = screen.getByText("Card Title");
    expect(text).toBeInTheDocument();
  });
});
