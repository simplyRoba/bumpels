import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Container className={styles.container}>
          <div className={styles.content}>
            {/* left */}
            <div className={styles.social}>
              <a
                href="https://twitter.com/simplyRoba"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span>simplyRoba</span>
              </a>
              <a
                href="https://github.com/simplyRoba"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>simplyRoba</span>
              </a>
            </div>
            {/* right */}
            <div className={styles.licenses}>
              <small className={styles.license}>
                Software licensed under&nbsp;
                <a
                  href="https://choosealicense.com/licenses/mit/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MIT
                </a>
              </small>
              <small className={styles.license}>
                Media licensed under&nbsp;
                <a
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CC BY-NC-ND 4.0
                </a>
              </small>
              <small>
                <div className={styles.spacer}> - </div>
                <Link to="/imprint">Imprint</Link>
              </small>
            </div>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
