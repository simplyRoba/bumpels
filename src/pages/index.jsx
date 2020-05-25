import React from "react"
import { graphql } from "gatsby"
import styles from "./index.module.scss"
import Layout from "../components/layout"

class Home extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout title="Home">
        <div className={styles.home}>
          {data.allFile.edges.map(({ node }, index) => (
            <img
              key={index}
              className={styles.img}
              src={node.publicURL}
              alt={node.name}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export default Home

// get 3 newest bumpels
export const query = graphql`
  {
    allFile(
      limit: 3
      sort: { order: ASC, fields: ctime }
      filter: { sourceInstanceName: { eq: "bumpels" } }
    ) {
      edges {
        node {
          publicURL
          name
          ctime
        }
      }
    }
  }
`
