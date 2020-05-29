import React from "react"
import { render, getByAltText } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { StaticQuery } from "gatsby" // mocked
import { Helmet } from "react-helmet"

import Seo from "../Seo"

const testTitle = "TestTitle"
const testSubTitle = "TestSubTitle"
const testDescription = "TestDescription"
const testDescription_custom = "CustomTestDescription"
const testName = "TestName"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: testSubTitle,
          description: testDescription,
          name: testName,
        },
      },
    })
  )
})

describe("Seo", () => {
  it("contains title", () => {
    render(<Seo title={testTitle} />)
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual(testTitle + " | " + testSubTitle)
    expect(helmet.metaTags).toContainEqual({
      name: "twitter:title",
      content: testTitle + " | " + testSubTitle,
    })
    expect(helmet.metaTags).toContainEqual({
      property: "og:title",
      content: testTitle + " | " + testSubTitle,
    })
  })

  it("contains description", () => {
    render(<Seo title={testTitle} />)
    const helmet = Helmet.peek()
    expect(helmet.metaTags).toContainEqual({
      name: "description",
      content: testDescription,
    })
    expect(helmet.metaTags).toContainEqual({
      name: "twitter:description",
      content: testDescription,
    })
    expect(helmet.metaTags).toContainEqual({
      property: "og:description",
      content: testDescription,
    })
  })

  it("renders custom description", () => {
    render(<Seo title={testTitle} description={testDescription_custom} />)
    const helmet = Helmet.peek()
    expect(helmet.metaTags).toContainEqual({
      name: "description",
      content: testDescription_custom,
    })
    expect(helmet.metaTags).toContainEqual({
      name: "twitter:description",
      content: testDescription_custom,
    })
    expect(helmet.metaTags).toContainEqual({
      property: "og:description",
      content: testDescription_custom,
    })
  })

  it("contains name", () => {
    render(<Seo title={testTitle} />)
    const helmet = Helmet.peek()
    expect(helmet.metaTags).toContainEqual({
      name: "twitter:creator",
      content: testName,
    })
  })
})
