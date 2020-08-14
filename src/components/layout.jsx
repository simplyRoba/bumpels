import React from "react"
import PropTypes from "prop-types"
//import emergence from "emergence.js"
import { Container } from "react-bootstrap"
import Footer from "./footer"
import Header from "./header"
import Seo from "./seo"
import styles from "./layout.module.scss"

class Layout extends React.Component {
  componentDidMount() {
    //emergence.init()
  }

  componentDidUpdate() {
    //emergence.engage()
  }

  render() {
    const { children, customSeo, title, description } = this.props
    return (
      <div className={styles.master}>
        {!customSeo && <Seo title={title} description={description} />}
        <div className={styles.header}>
          <Header />
        </div>
        <main>
          <Container>{children}</Container>
        </main>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  customSeo: PropTypes.bool,
}

export default Layout
