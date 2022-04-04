import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders Manage All Employees link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Manage All Employees/i);
  expect(linkElement).toBeInTheDocument();
});

describe("<App />", () => {
  it("Renders App component correctly", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Manage All Employees/i);
    expect(linkElement).toBeInTheDocument();
  });
});
