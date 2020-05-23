/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import emergence from "emergence.js"
import { Container } from "react-bootstrap"
import Footer from "./footer"
import Header from "./header"
import Seo from "./seo"
import styles from "./layout.module.scss"

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children, customSeo, title } = this.props
    return (
      <div className={styles.master}>
        <div className={styles.header}>
          <Header />
        </div>
        <main>
          <Container>
            {!customSeo && <Seo title={title} />}
            {children}
          </Container>
        </main>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
