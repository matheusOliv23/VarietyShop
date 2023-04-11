import { render, screen } from "@testing-library/react"

import Modal from "./index"

const { getByText } = screen

describe("<Modal />", () => {
  it("should render with correct props", () => {
    render(
      <Modal
        open={true}
        onClose={() => {
          return true
        }}
      >
        <div>Content</div>
      </Modal>
    )

    const heading = getByText("Content")

    expect(heading).toBeInTheDocument()
  })
})
