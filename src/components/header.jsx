import { Link } from "gatsby"
import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import styles from "./header.module.scss"

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Navbar
          fixed="top"
          expand="lg"
          variant="light"
          bg="white"
          collapseOnSelect
          className={styles.navShadow}
        >
          <Container>
            <Navbar.Brand as="div">
              <Link to="/">
                <img src="/static/img/logo.svg" className={styles.logo} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </Navbar.Toggle>
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

export default Header
