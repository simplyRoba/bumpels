import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class Imprint extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <Layout title="Imprint">
        <h1>Imprint</h1>
        <h2>Contact Information</h2>
        <p>
          {data.site.siteMetadata.author}
          <br />
          E-Mail: {data.site.siteMetadata.email}
          <br />
          Internet address: {data.site.siteMetadata.address}
        </p>

        <h2>Disclaimer</h2>

        <h3>Accountability for content</h3>
        <p>
          The contents of our pages have been created with the utmost care.
          However, we cannot guarantee the contents’ accuracy, completeness or
          topicality. According to statutory provisions, we are furthermore
          responsible for our own content on these web pages. In this matter,
          please note that we are not obliged to monitor the transmitted or
          saved information of third parties, or investigate circumstances
          pointing to illegal activity. Our obligations to remove or block the
          use of information under generally applicable laws remain unaffected
          by this as per §§ 8 to 10 of the Telemedia Act (TMG).
        </p>

        <h3>Accountability for links</h3>
        <p>
          Responsibility for the content of external links (to web pages of
          third parties) lies solely with the operators of the linked pages. No
          violations were evident to us at the time of linking. Should any legal
          infringement become known to us, we will remove the respective link
          immediately.
        </p>
      </Layout>
    )
  }
}

export default Imprint

export const query = graphql`
  {
    site {
      siteMetadata {
        address
        email
        author
      }
    }
  }
`
