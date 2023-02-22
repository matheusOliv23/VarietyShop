import { render, screen } from "@testing-library/react"
import { categories } from "./categories"

import Categories from "./index"

const { getAllByTestId } = screen

describe("<Categories />", () => {
  it("should render by default", () => {
    render(<Categories category={categories} />)

    const category = getAllByTestId("category-item")
    const image = document.querySelector("img") as HTMLImageElement

    expect(image).toHaveAttribute("alt")
    expect(image).toHaveAttribute("src")
    expect(category).toHaveLength(category.length)
  })
})
