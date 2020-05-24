import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout title="404: Not found">
        <h1>404 NOT FOUND</h1>
        <Container>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Layout>
    )
  }
}

export default NotFoundPage
