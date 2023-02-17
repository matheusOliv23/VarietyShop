import { render } from "@testing-library/react"
import Main from "./index"

describe("Main", () => {
  it("should render heading", () => {
    const { container } = render(
      <Main
        title="Boilerplate"
        description="Typescript, Reactjs, Nextjs, Styled Components"
      />
    )
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it("should render colors correctly", () => {
    const { container } = render(
      <Main
        title="Boilerplate"
        description="Typescript, Reactjs, Nextjs, Styled Components"
      />
    )
    expect(container.firstChild).toHaveStyle({ "background-color": "#06092b" })
  })
})
