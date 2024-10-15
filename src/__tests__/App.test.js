import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders a link with text 'WIP for CELF'", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /WIP for CELF/i });
  expect(linkElement).toBeInTheDocument();
});
