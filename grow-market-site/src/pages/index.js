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
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/grow_market_banner.png"
        alt="G.R.o.W. Farmers' Market Banner"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>Welcome to G.R.o.W. Farmers' Market!</h1>
      <p className={styles.intro}>
        Discover local produce and handmade goods at our community-driven
        market. Explore our resources to learn more!
      </p>
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
      <Link to="/signup">Sign Up to Participate</Link>{" "}
      {/* add Google form link */}
    </div>
  </Layout>
)

export default IndexPage
