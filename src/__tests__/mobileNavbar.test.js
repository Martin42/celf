import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { mockMatchMedia, resetMatchMedia } from "../utils/testUtils";

// Utility function to toggle navigation menu
const openMenu = () => {
  const hamburgerSvg = screen.getByLabelText("hamburger icon");
  fireEvent.click(hamburgerSvg);
};

describe("Navbar Component", () => {
  beforeAll(() => {
    mockMatchMedia(768);
  });

  afterAll(() => {
    resetMatchMedia();
  });

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

  it("should show navigation links when the menu is open", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    openMenu();

    const inicioLink = screen.getByText("Ínicio");
    const financiadaLink = screen.getByText("Formação Financiada");
    const naoFinanciadaLink = screen.getByText("Formação Não Financiada");
    const SobreNosLink = screen.getByText("Sobre Nós");

    expect(inicioLink).toBeInTheDocument();
    expect(financiadaLink).toBeInTheDocument();
    expect(naoFinanciadaLink).toBeInTheDocument();
    expect(SobreNosLink).toBeInTheDocument();
  });

  it("should close the navigation menu when a link or the hamburger icon is clicked", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    openMenu();

    const financiadaLink = screen.getByText("Formação Financiada");
    fireEvent.click(financiadaLink);

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
