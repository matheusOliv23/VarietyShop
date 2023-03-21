import { render, screen } from "@testing-library/react"
import InfoSection from "./index"
import { infoMock } from "./mock"
const { getByRole, getByText } = screen

describe("<InfoSection />", () => {
  it("should render the InfoSection", () => {
    render(<InfoSection {...infoMock} />)

    const title = getByRole("heading", { name: infoMock.title })
    const text = getByText(infoMock.text)
    const image = document.querySelector("img") as HTMLImageElement

    expect(title).toBeInTheDocument()
    expect(image.src).toContain(infoMock.image)
    expect(image.alt).toContain("Company Image")
    expect(text).toBeInTheDocument()
  })
})
