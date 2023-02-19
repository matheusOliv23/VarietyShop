import { render, screen } from "@testing-library/react"

import Hero from "./index"

const { getByRole, getByText } = screen

describe("<Hero />", () => {
  it("should render the hero by default", () => {
    render(<Hero />)

    const text = getByText("NEW PRODUCT")
    const title = getByText("XX99 Mark II HeadphoneS")
    const subtitle = getByText(
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
    )
    const button = getByRole("button", { name: "SEE PRODUCT" })
    const image = document.querySelector("img") as HTMLImageElement

    expect(button).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(image.src).toContain("/images/phone.svg")
  })
})
