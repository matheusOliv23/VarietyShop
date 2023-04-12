import { render, screen, fireEvent } from "@testing-library/react"
import Image from "next/image"

import Header from "./index"
import { navMock } from "./mock"

const { getByTestId, getAllByTestId, getByRole, getByAltText } = screen

describe("<Header />", () => {
  it("should render by default", () => {
    render(<Header nav={navMock} />)

    const navbarElement = getByTestId("navbar")

    expect(navbarElement).toBeInTheDocument()
  })

  it("should render all navbar items with correct text and route", () => {
    render(<Header nav={navMock} />)

    const navElements = getAllByTestId("nav-item")

    navElements.forEach((navItem, index) => {
      const item = navMock[index]
      expect(navItem.textContent).toBe(item.title)
      expect(navItem.getAttribute("href")).toBe(item.route)
    })
  })

  it("should render the logo text", () => {
    render(<Header nav={navMock} />)

    const logo = document.querySelector("img") as HTMLImageElement

    expect(logo.src).toContain("http://localhost/icons/menu.svg")
  })

  test("renders shop cart button with correct attributes", () => {
    const mockOnClick = jest.fn()
    render(
      <Image
        onClick={mockOnClick}
        alt="Card icon"
        width={24}
        height={23}
        className="cursor-pointer"
        src="/icons/cart.svg"
      />
    )

    const image = getByAltText("Card icon")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "/icons/cart.svg")
    expect(image).toHaveAttribute("width", "24")
    expect(image).toHaveAttribute("height", "23")

    const button = getByRole("img")
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
