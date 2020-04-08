module.exports = {
  siteMetadata: {
    title: "Luccas Avila",
    position: "Desenvolvedor Full-Stack",
    description: `Portfólio e Blog de um grande amante de tecnologias`,
    authorDescription:
      "Desenvolvedor Full-Stack, das mais diversas tecnologias",
    author: `@luccasdev`,
    siteUrl: "https://luccasavila.dev",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Luccas Avila`,
        short_name: `LAvila`,
        start_url: `/`,
        background_color: `#221d23`,
        theme_color: `#221d23`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
