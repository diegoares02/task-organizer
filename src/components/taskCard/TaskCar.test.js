import { render, screen } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("TaskCard", () => {
  it("Load Task Card", () => {
    render(<TaskCard />);
    const title = screen.getByText("Card Title");
    expect(title).toBeInTheDocument();
  });
});
