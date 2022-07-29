import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button/>", () => {
  it("should render", () => {
    const label = "Button";
    render(<Button>{label}</Button>);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
