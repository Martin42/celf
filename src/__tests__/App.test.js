import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders CELF link", () => {
  render(<App />);
  const linkElement = screen.getByText(/WIP for CELF/i);
  expect(linkElement).toBeInTheDocument();
});
