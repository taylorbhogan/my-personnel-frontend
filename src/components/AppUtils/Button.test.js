import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("it renders a button", () => {
  render(<Button />)
  expect(screen.getByRole("button")).toBeInTheDocument();
})

test("it renders the prop text", () => {
  render(<Button text="sassafrass"/>)
  expect(screen.getByRole("button")).toHaveTextContent("sassafrass")
})
