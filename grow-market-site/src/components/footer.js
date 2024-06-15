// src/components/footer.js
import * as React from "react"
import * as styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <hr className={styles.divider} />
    <p>
      © {new Date().getFullYear()}, G.R.o.W. Farmers' Market · All rights
      reserved.
    </p>
    <p>This site created as a project for CSCI E114 Spring 2024.</p>
    <p>
      Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
    </p>
  </footer>
)

export default Footer
