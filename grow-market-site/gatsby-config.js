require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    social: {
      twitter: `@growfarmersmarket`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `G.R.o.W. Farmers' Market`,
        short_name: `G.R.o.W.`,
        start_url: `/`,
        background_color: `#319197`,
        display: `minimal-ui`,
        icon: `src/images/grow-logo.png`,
      },
    },
  ],
}
