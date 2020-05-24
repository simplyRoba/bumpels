import React from "react"
import { Link, graphql } from "gatsby"
import emoji from "node-emoji"
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
              <p>{replaceEmojiShortcuts(post.excerpt)}</p>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

function replaceEmojiShortcuts(text) {
  const RE_EMOJI = /:\+1:|:-1:|:[\w-]+:/g
  return text.replace(RE_EMOJI, function(match) {
    return emoji.get(match)
  })
}

export default Blog

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt(truncate: true)
          frontmatter {
            title
            dateFormated: date(formatString: "MMMM DD, YYYY")
            xmlDate: date(formatString: "YYYY-MM-DD+01:00")
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
