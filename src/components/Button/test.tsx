import { render, screen, fireEvent } from "@testing-library/react"

import Button from "./index"

const { getByText } = screen

describe("<Button />", () => {
  it("should render by default", () => {
    render(<Button variant="PRIMARY">See Product</Button>)

    const button = getByText("See Product")

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      "w-40 h-12 px-6 bg-orange-100 text-white hover:bg-orange-50 transition-all font-bold text-xs uppercase"
    )
  })

  it("should render with secondary variant", () => {
    render(<Button variant="SECONDARY">See Product</Button>)

    const button = getByText("See Product")

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      "w-40 h-12 px-6 text-black border border-black hover:bg-black hover:text-white bg-transparent transition-all font-bold text-xs uppercase"
    )
  })

  it("should render with black variant", () => {
    render(<Button variant="BLACK">See Product</Button>)

    const button = getByText("See Product")

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      "w-40 h-12 px-6 text-white border border-black hover:bg-white hover:text-black bg-black transition-all font-bold text-xs uppercase"
    )
  })

  it("should call onClick function when button is clicked", () => {
    const handleClick = jest.fn()
    render(
      <Button onClick={handleClick} variant="PRIMARY">
        See Product
      </Button>
    )
    const button = getByText("See Product")
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})
