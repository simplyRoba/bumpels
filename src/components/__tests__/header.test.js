import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { StaticQuery } from "gatsby" // mocked

import Header from "../header"

const testTitle = "TestTitle"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: testTitle,
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
})
