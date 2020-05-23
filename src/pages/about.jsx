import React from "react"
import Layout from "../components/layout"

class About extends React.Component {
  render() {
    return (
      <Layout
        title="About"
        description="Read all about the Bumpels and their creator."
      >
        <h1>About</h1>
        <h3>.. the Bumpels</h3>

        <p>
          Hi, we are the Bumpels. We just started to grow. Just follow our
          creator if you do not want to miss anything.
        </p>

        <h3>.. the Creator</h3>

        <p>
          My name is Axel Rojas Bachem or <em>simply roba</em>. I created the
          Bumpels in a “free” minute and took it as pretext, to learn about some
          technologies like{" "}
          <del>
            <a href="https://jekyllrb.com" target="_blank" rel="noreferrer">
              Jekyll
            </a>
          </del>
          ,{" "}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
            Gatsby
          </a>
          ,{" "}
          <a
            href="https://getbootstrap.com/docs/4.5/getting-started/introduction/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap v4.5
          </a>{" "}
          and to improve my rudimental web frontend skills in css, javascript
          and vector graphics with{" "}
          <a
            href="https://affinity.serif.com/de/designer/"
            target="_blank"
            rel="noreferrer"
          >
            Affinity Designer
          </a>
          . You find the repository{" "}
          <a
            href="https://github.com/simplyRoba/bumpels"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>

        <p>This page will grow whenever I find the time for it.</p>

        <p>
          Feel free to <em>share</em> and use the Bumpels! Just respect the{" "}
          <strong>licenses</strong> you can find in the footer.
        </p>

        {/*TODO create FAQ if necessary*/}
      </Layout>
    )
  }
}

export default About
