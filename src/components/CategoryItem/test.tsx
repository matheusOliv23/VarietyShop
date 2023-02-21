import { render, screen } from "@testing-library/react"

import CategoryItem from "./index"

const { getByRole, getByText } = screen

const category = {
  title: "HEADPHONES",
  route: "/headphones",
  img: "/images/phone_small.svg"
}

describe("<CategoryItem />", () => {
  it("should render by default", () => {
    render(<CategoryItem {...category} />)

    const title = getByText(category.title)
    const route = getByRole("link", { name: "SHOP" })
    const img = document.querySelector("img") as HTMLImageElement

    expect(title).toBeInTheDocument()
    expect(route.getAttribute("href")).toBe(category.route)
    expect(img.src).toContain(category.img)
  })
})
