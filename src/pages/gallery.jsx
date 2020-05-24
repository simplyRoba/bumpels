import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import replaceEmojiShortcuts from "../util/emoji_util"

class Gallery extends React.Component {
  render() {
    return (
      <Layout
        title="Gallery"
        descriptions="A Gallery of all Bumpels. Find your new best friend."
      >
        <h1>Gallery</h1>
        <Container>
          <p>{replaceEmojiShortcuts(":construction_worker: Under construction")}</p>
        </Container>
      </Layout>
    )
  }
}

export default Gallery
