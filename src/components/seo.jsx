import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

class Seo extends React.Component {
  render() {
    const { lang, meta, title, description, data } = this.props
    const metaDescription = description || data.site.siteMetadata.description
    const metaTitle = title + " | " + data.site.siteMetadata.title
    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: data.site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: metaTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
    )
  }
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: null,
}

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            title
            description
            author
            url
            banner
          }
        }
      }
    `}
    render={data => <Seo data={data} {...props} />}
  />
)
