import React from "react"
import { render, getByAltText } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { StaticQuery } from "gatsby" // mocked

import Header from "../header"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `TestTitle`,
        },
      },
    })
  )
})

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })

  it("contains logo with alt text", () => {
    const { container, getByAltText } = render(<Header />)
    expect(getByAltText("TestTitle")).toBeInTheDocument()
  })
})
