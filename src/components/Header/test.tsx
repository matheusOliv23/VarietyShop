import { render, screen } from "@testing-library/react"

import Header from "./index"
import { navMock } from "./mock"

const { getByTestId, getAllByTestId, getByText } = screen

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

    const logo = getByText("audiophile")

    expect(logo).toBeInTheDocument()
  })
})
