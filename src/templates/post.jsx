import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

class Post extends React.Component {
  render() {
    const shortcodes = { Link } // Provide common components here
    const { data } = this.props
    const mdx = data.mdx
    return (
      <Layout title={mdx.frontmatter.title} description={mdx.excerpt}>
        <div>
          <h1>{mdx.frontmatter.title}</h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
      }
    }
  }
`
