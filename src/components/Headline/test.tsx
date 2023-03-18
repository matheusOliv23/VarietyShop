import { render, screen } from "@testing-library/react"

import Headline from "./index"
import { headlineMock } from "./mock"

const { getByRole, getByText } = screen

describe("<Headline />", () => {
  it("should render the headline", () => {
    render(<Headline {...headlineMock} />)

    const text = getByText(headlineMock.text)
    const title = getByText(headlineMock.title)
    const subtitle = getByText(headlineMock.subtitle)
    const button = getByRole("link", { name: "SEE PRODUCT" })

    expect(button).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  it("should render with dark variation", () => {
    render(<Headline variation="dark" {...headlineMock} />)

    const text = getByText(headlineMock.text)
    const title = getByText(headlineMock.title)
    const subtitle = getByText(headlineMock.subtitle)

    expect(text).toHaveClass("text-orange-100")
    expect(title).toHaveClass("text-black")
    expect(subtitle).toHaveClass("text-black")
  })

  it("should render with light variation", () => {
    render(<Headline variation="light" {...headlineMock} />)

    const text = getByText(headlineMock.text)
    const title = getByText(headlineMock.title)
    const subtitle = getByText(headlineMock.subtitle)

    expect(text).toHaveClass("text-white")
    expect(title).toHaveClass("text-white")
    expect(subtitle).toHaveClass("text-white")
  })
})
