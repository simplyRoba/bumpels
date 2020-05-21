module.exports = {
  siteMetadata: {
    title: `Bumpels`,
    description: `Hi, we are the Bumpels. Read all about the Bumpels and their creator.`,
    author: `simplyroba`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bumpels`,
        short_name: `Bumpels`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icons: [
          {
            src: "/static/img/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/static/img/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/static/img/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/static/img/favicon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-catch-links",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
