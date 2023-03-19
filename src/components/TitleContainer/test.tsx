import { render, screen } from "@testing-library/react"

import TitleContainer from "./index"

const { getByRole } = screen

describe("<TitleContainer />", () => {
  it("should render the heading", () => {
    render(<TitleContainer title="HEADPHONES" />)

    const heading = getByRole("heading", { name: "HEADPHONES" })

    expect(heading).toBeInTheDocument()
  })
})
