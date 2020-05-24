import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styles from "./post.module.scss"

class Post extends React.Component {
  render() {
    const shortcodes = { Link } // Provide common components here
    const { data, location } = this.props
    const mdx = data.mdx
    return (
      <Layout title={mdx.frontmatter.title} description={mdx.excerpt}>
        <article
          className={styles.post}
          itemscope
          itemtype="http://schema.org/BlogPosting"
        >
          <header className={styles.header}>
            <h1 itemprop="name headline">{mdx.frontmatter.title}</h1>
            <small>
              <time datetime={mdx.frontmatter.xmlDate} itemprop="datePublished">
                {mdx.frontmatter.dateFormated}
              </time>
              {" • "}
              <span
                itemprop="author"
                itemscope
                itemtype="http://schema.org/Person"
              >
                <span itemprop="name">{mdx.frontmatter.author}</span>
              </span>
            </small>
          </header>

          <div itemprop="articleBody">
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>

          <a
            class="u-url"
            href={`${data.site.siteMetadata.url}${location.pathname}`}
            hidden
          >
            Site Url
          </a>
        </article>
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
        dateFormated: date(formatString: "MMMM DD, YYYY")
        xmlDate: date(formatString: "YYYY-MM-DD+01:00")
        author
      }
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`
