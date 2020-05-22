import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.content}>
          {/* left */}
          <div className={styles.social}>
            <a
              href="https://twitter.com/simplyRoBa"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
              <span>simplyroba</span>
            </a>
            <a
              href="https://github.com/simplyRoba"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>simplyroba</span>
            </a>
          </div>
          {/* right */}
          <div className={styles.licenses}>
            <small className={styles.license}>
              Software licensed under&nbsp;
              <a
                href="https://choosealicense.com/licenses/mit/"
                target="_blank"
              >
                MIT
              </a>
            </small>
            <small className={styles.license}>
              Media licensed under&nbsp;
              <a
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                target="_blank"
              >
                CC BY-NC-ND 4.0
              </a>
            </small>
            <small>
              <div className={styles.spacer}> - </div>
              <Link to="imprint">
                  Imprint
              </Link>
            </small>
          </div>
        </div>
      </Container>
    </footer>
  )
}
