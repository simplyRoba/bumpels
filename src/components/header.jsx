import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import styles from "./header.module.scss"
import $ from "jQuery"

class Header extends React.Component {
  componentDidMount() {
    // add shadow when scrolling
    $(window).scroll(() => {
      if ($(".navbar").offset().top > 25) {
        $(".navbar").addClass(styles.navShadow)
      } else {
        $(".navbar").removeClass(styles.navShadow)
      }
    })
  }
  render() {
    const { title } = this.props
    return (
      <header className={styles.header}>
        <Navbar
          fixed="top"
          expand="lg"
          variant="light"
          bg="white"
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand as="div">
              <Link to="/">
                <img src="/img/logo.svg" className={styles.logo} alt={title} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarNav"
              label="Toggle navigation"
            />
            <Navbar.Collapse className="justify-content-lg-end" id="navbarNav">
              <Nav className={styles.navSiblingFade}>
                <Link
                  className={`${styles.navSibling} ${styles.navLink}`}
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className={`${styles.navSibling} ${styles.navLink}`}
                  to="/gallery"
                >
                  Gallery
                </Link>
                <Link
                  className={`${styles.navSibling} ${styles.navLink}`}
                  to="/merchandise"
                >
                  Merchandise
                </Link>
                <Link
                  className={`${styles.navSibling} ${styles.navLink}`}
                  to="/about"
                >
                  About
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Header title={data.title} {...props} />}
  />
)
