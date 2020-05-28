import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"

class Gallery extends React.Component {
  render() {
    const { data } = this.props
    const { edges: gallery } = data.allGalleryDataYaml
    return (
      <Layout
        title="Gallery"
        descriptions="A Gallery of all Bumpels. Find your new best friend."
      >
        <h1>Gallery</h1>
        <Container>
          <Row xs={1} sm={2} lg={4}>
            {gallery.map(({ node: item }) => (
              <Col key={item.id}>
                <h1>{item.name}</h1>
                <img src={item.image.publicURL} alt={item.name} />
                <p>{item.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Gallery

export const pageQuery = graphql`
  query gallery {
    allGalleryDataYaml {
      edges {
        node {
          id
          name
          date
          description
          image {
            name
            publicURL
          }
        }
      }
    }
  }
`
