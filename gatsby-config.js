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
        icon: `static/assets/images/icon.png`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static/assets/img/',
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-external-links`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
