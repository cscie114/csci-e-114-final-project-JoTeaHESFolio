import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, lang = "en", meta = [], children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              instagram
              facebook
              youtube
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <html lang={lang} />
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:image" content="/grow-logo.png" />
      <meta property="og:url" content={site.siteMetadata.url} />
      <meta name="facebook:card" content="summary_large_image" />
      <meta
        name="facebook:creator"
        content={site.siteMetadata.social.facebook}
      />
      <meta name="facebook:title" content={title || defaultTitle} />
      <meta name="facebook:description" content={metaDescription} />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </>
  )
}

export default Seo
