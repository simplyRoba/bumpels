import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMdx
    return (
      <Layout
        title="Blog"
        description="News regarding the Bumpels and their home."
      >
        <h1>Blog</h1>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
