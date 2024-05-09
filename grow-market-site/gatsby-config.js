// @type {import('gatsby').GatsbyConfig}
module.exports = {
  siteMetadata: {
    title: `G.R.o.W. Farmers' Market`,
    description: `Everything you need to know to get started at our community farmers' market...let's get growing!`,
    author: `@jetrumbull`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    logo: `src/images/grow-logo.png`,
    instagram: `https://www.instagram.com/growfarmersmarket/`,
    facebook: `https://www.facebook.com/growfarmersmarket/`,
    tiktok: `https://www.tiktok.com/@growfarmersmarket`,
    email: `growfarmersmarket@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `G.R.o.W. Farmers' Market`,
        short_name: `G.R.o.W.`,
        start_url: `/`,
        background_color: `#319197`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#319197`,
        display: `minimal-ui`,
        icon: `src/images/grow-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
