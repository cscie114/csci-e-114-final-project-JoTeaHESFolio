// src/pages/index.js
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Getting Started Guides",
    url: "https://drive.google.com/file/d/1qZY1ttZboTdD2O1wM67MUMTvSDXo1tw9/view?usp=sharing",
    description:
      "Begin your journey with our comprehensive guides to participating in the G.R.o.W. Farmers' Market.",
  },
  {
    text: "Market Mastery Course",
    url: "https://jody-s-site-9e52.thinkific.com/courses/GROW-Module-1",
    description:
      "Learn how to optimize your participation in farmers' markets with our training modules.",
  },
  {
    text: "Welcome Video",
    url: "https://youtu.be/87EjaeP8qp8",
    description:
      "Watch our welcome video to get a feel for what the G.R.o.W. Farmers' Market offers.",
  },
  {
    text: "Find a Farmers' Market",
    url: "/find-farmers-market",
    description:
      "Not in the Savannah area? Find a farmers' market near you! Shop local and support the farmers in your community.",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.headerContainer}>
      <h1 className={styles.centeredText}>
        Welcome to G.R.o.W. Farmers' Market!
      </h1>
      <p className={styles.centeredText}>
        Discover local produce and handmade goods at our community-driven
        market. Explore our resources to learn more!
      </p>
    </div>
    <StaticImage
      src="../images/grow_market_banner.png"
      alt="G.R.o.W. Farmers' Market Banner"
      style={{ marginBottom: `var(--space-3)` }}
    />
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <Link to="/signup" className={styles.signupLink}>
      Sign Up to Participate
    </Link>
  </Layout>
)

export default IndexPage
