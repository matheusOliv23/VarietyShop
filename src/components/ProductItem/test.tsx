import { render, screen } from "@testing-library/react"
import { RouterContext } from "next/dist/shared/lib/router-context"
import { NextRouter } from "next/router"
import { createMockRouter } from "../../utils/createMockRouter"
import ProductItem from "./index"
const { getByRole, getByText } = screen

export const produtItem = {
  id: "1",
  name: "XX99 MARK II",
  image: "/images/ear_small.svg",
  price: 250
}

describe("<ProductItem />", () => {
  it("should render by default", () => {
    render(
      <ProductItem
        id={produtItem.id}
        name={produtItem.name}
        price={produtItem.price}
        image={produtItem.image}
      />
    )

    const name = getByText(produtItem.name)
    const price = getByText(String(`R$ ${produtItem.price}`))
    const img = document.querySelector("img") as HTMLImageElement
    const button = getByRole("button", { name: "SEE PRODUCT" })

    expect(name).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(img.src).toContain(produtItem.image)
    expect(img.alt).toContain(produtItem.name)
  })

  it("should have anchor tag width correct href", () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({ query: {} }) as NextRouter}
      >
        <ProductItem
          id={produtItem.id}
          name={produtItem.name}
          price={produtItem.price}
          image={produtItem.image}
        />
      </RouterContext.Provider>
    )
  })
})
