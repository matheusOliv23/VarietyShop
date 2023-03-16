import React from "react"
import { render, screen } from "@testing-library/react"

import Footer from "./index"

import { navMock } from "../Header/mock"
import { footerMock } from "./mock"

const { getByText, getAllByTestId } = screen

describe("<Footer />", () => {
  it("should render by default", () => {
    render(<Footer {...footerMock} />)

    const footerElements = getAllByTestId("footer-item")

    footerElements.forEach((navItem, index) => {
      const item = navMock[index]
      expect(navItem.textContent).toBe(item.title)
    })

    const text = getByText(footerMock.text)
    const allRights = getByText(footerMock.allRights)

    expect(text).toBeInTheDocument()
    expect(allRights).toBeInTheDocument()
  })

  it("should social icons contain its right href and target=_blank", () => {
    render(<Footer {...footerMock} />)

    const socialIcons = getAllByTestId("social-item")
    socialIcons.forEach((socialItem, index) => {
      const item = footerMock.socialIcons[index]
      expect(socialItem.getAttribute("href")).toBe(item.href)
    })
  })
})
