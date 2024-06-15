import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/about.module.css"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <div className={styles.container}>
      <h1>About This Project</h1>
      <p>
        This project is part of the coursework for CSCI E-114. It demonstrates
        the use of Gatsby, a React-based framework for building static websites
        and apps.
      </p>
      <hr className={styles.divider} />
      <h2>CSCI E-114 Course Work Sample Pages</h2>
      <ul className={styles.linksList}>
        <li>
          <a
            href="https://rough-event-505.notion.site/Technical-Note-Dealing-with-Node-js-6624411a297149738fe62c4551a44179?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion Page 1
          </a>
        </li>
        <li>
          <a
            href="https://rough-event-505.notion.site/CSCI-E-114-Web-Application-With-Jamstack-5963c72acced4c3f8ea67b9a94adc4a9?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion Page 2
          </a>
        </li>
        <li>
          <a
            href="https://rough-event-505.notion.site/79094a2a842643a78a7ae944c8bfb436?v=da40a1b98a3f47c584a7e93eac76a142&pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion Page 3
          </a>
        </li>
      </ul>
      <hr className={styles.divider} />
      <h2>Works Cited</h2>
      <div className={styles.worksCited}>
        <iframe
          src="https://docs.google.com/document/d/1PBuCV4GfBAQjqcS2xFvcbgg3ih2EZcY9Gp12vYlpaf0/edit?usp=sharing"
          title="Works Cited"
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default AboutPage
