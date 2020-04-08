module.exports = {
  siteMetadata: {
    title: 'Luccas Avila',
    position: 'Desenvolvedor Full-Stack',
    description: `Portfólio e Blog de um grande amante de tecnologias`,
    authorDescription:
      'Desenvolvedor Full-Stack, das mais diversas tecnologias',
    author: `@luccasdev`,
    siteUrl: 'https://luccasavila.dev',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
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
        // icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `400i`, `700`, `700i`, `900`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
