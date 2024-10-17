import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { fireEvent, render, screen } from "@testing-library/react";

// Utility function to toggle navigation menu
const openMenu = () => {
  const hamburgerSvg = screen.getByLabelText("hamburger icon");
  fireEvent.click(hamburgerSvg);
};

describe("Navbar Component", () => {
  it("should render the logo and the hamburger icon", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("logo");
    const hamburgerSvg = screen.getByLabelText("hamburger icon");

    expect(logo).toBeInTheDocument();
    expect(hamburgerSvg).toBeInTheDocument();
  });

  it("should toggle the navigation menu when the hamburger icon is clicked", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    openMenu();

    const navContainer = screen.getByRole("navigation");
    expect(navContainer).toHaveClass("open");
  });

  it("should show navigation links and svgs when the menu is open", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    openMenu();

    const formacaoLink = screen.getByText("Formação");
    const empresasLink = screen.getByText("Empresas");
    const elearningLink = screen.getByText("Elearning");

    expect(formacaoLink).toBeInTheDocument();
    expect(empresasLink).toBeInTheDocument();
    expect(elearningLink).toBeInTheDocument();

    const formacaoSVG = screen.getByLabelText("formacao icon");
    const empresasSVG = screen.getByLabelText("empresas icon");
    const elearningSVG = screen.getByLabelText("elearning icon");

    expect(formacaoSVG).toBeInTheDocument();
    expect(empresasSVG).toBeInTheDocument();
    expect(elearningSVG).toBeInTheDocument();
  });

  it("should close the navigation menu when a link or the hamburger icon is clicked", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    openMenu();

    const formacaoLink = screen.getByText("Formação");
    fireEvent.click(formacaoLink);

    const navContainer = screen.getByRole("navigation");
    expect(navContainer).not.toHaveClass("open");
  });

  it("should close the navigation menu when the logo is clicked", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    openMenu();

    const logo = screen.getByAltText("logo");
    fireEvent.click(logo);

    expect(screen.queryByRole("navigation")).not.toHaveClass("open");
  });
});
