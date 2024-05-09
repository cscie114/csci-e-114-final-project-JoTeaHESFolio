import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <img
      alt="G.R.o.W. Farmers' Market logo"
      height={20}
      style={{ margin: 0 }}
      src={growLogo || `src/images/grow-logo.png`} // This is a fallback in case the image doesn't load
    />
  </header>
)

export default Header
