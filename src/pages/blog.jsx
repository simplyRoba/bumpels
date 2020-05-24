import React from "react"
import { Link, graphql } from "gatsby"
import emoji from "node-emoji"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styles from "./blog.module.scss"

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
        <Container itemtype="http://schema.org/Blog" className={styles.blog}>
          <Row xs={1} sm={1} md={1} lg={2}>
            {posts.map(({ node: post }) => (
              <Col className={styles.article} key={post.id}>
                <article itemscope itemtype="http://schema.org/BlogPosting">
                  <Link to={post.fields.slug}>
                    <Row>
                      <Col>
                        <h2 itemprop="headline">{post.frontmatter.title}</h2>
                        <div className={styles.date}>
                          <small>
                            <time
                              datetime={post.frontmatter.xmlDate}
                              itemprop="datePublished"
                            >
                              {post.frontmatter.dateFormated}
                            </time>
                          </small>
                          <span
                            className={styles.author}
                            itemprop="author"
                            itemscope
                            itemtype="http://schema.org/Person"
                          >
                            <span itemprop="name">
                              {post.frontmatter.author}
                            </span>
                          </span>
                        </div>
                        <p>{replaceEmojiShortcuts(post.excerpt)}</p>
                      </Col>
                      <Col className={styles.imageCol}>
                        <Img
                          className="rounded"
                          fluid={
                            post.frontmatter.titleImg.childImageSharp.fluid
                          }
                          fadeIn
                          durationFadeIn="800"
                        />
                      </Col>
                    </Row>
                  </Link>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

function replaceEmojiShortcuts(text) {
  const RE_EMOJI = /:\+1:|:-1:|:[\w-]+:/g
  return text.replace(RE_EMOJI, function (match) {
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
          excerpt
          frontmatter {
            title
            dateFormated: date(formatString: "MMMM DD, YYYY")
            xmlDate: date(formatString: "YYYY-MM-DD+01:00")
            author
            important
            titleImg {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
