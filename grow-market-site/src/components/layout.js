import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || "G.R.o.W. Farmers' Market"}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `960px`, // Adjusted for standard screen size
          padding: `1.0875rem 1.45rem`, // Standard padding; tweak as needed
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`, // Provides consistent spacing
            fontSize: `0.875rem`, // Smaller font size for footer
          }}
        >
          © {new Date().getFullYear()}, G.R.o.W. Farmers' Market &middot; All
          rights reserved.
          <br />
          Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
