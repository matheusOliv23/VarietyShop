import { render } from "@testing-library/react"
import Headline from "../Headline"
import { headlineMock } from "../Headline/mock"

import ProductHeadline from "./index"

describe("<ProductHeadline />", () => {
  it("should render the component", () => {
    render(<ProductHeadline {...headlineMock} />)
    const { container } = render(<Headline {...headlineMock} />)

    const image = document.querySelector("img") as HTMLImageElement

    expect(image.src).toContain(headlineMock.product.image)
    expect(image.alt).toContain(headlineMock.product.name)
    expect(container).toBeInTheDocument()
  })
})
