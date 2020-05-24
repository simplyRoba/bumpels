import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"

class Merchandise extends React.Component {
  render() {
    return (
      <Layout
        title="Merchandise"
        description="Bumpels merchandise - coming soon."
      >
        <h1>Merchandise</h1>
        <Container>
          <p>
            Coming soon, <em>maybe</em> ;)
          </p>
        </Container>
      </Layout>
    )
  }
}

export default Merchandise
