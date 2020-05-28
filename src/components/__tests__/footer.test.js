import React from "react"
import { render, getByAltText } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Footer from "../footer"

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })

  it("contains footer element", () => {
    const { container } = render(<Footer />)
    expect(container.querySelector("footer")).toBeInTheDocument()
  })
})
