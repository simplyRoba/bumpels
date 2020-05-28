const emoji = require(`remark-emoji`)

module.exports = {
  siteMetadata: {
    title: `Bumpels`,
    description: `Home of the Bumpels. Bumpels are sweet little creatures. There are many different ones and all of them want new friends.`,
    author: `Axel Rojas Bachem`,
    name: `simplyroba`,
    email: `contact@bumpels.de`,
    banner: `/static/img/logo.svg`,
    address: `bumpels.de`,
    siteUrl: `https://bumpels.de`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bumpels`,
        path: `${__dirname}/src/content/bumpels`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bumpels`,
        short_name: `Bumpels`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#343a40`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icons: [
          {
            src: "/img/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/img/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/img/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/img/favicon-180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/img/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/favicon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/img/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [emoji],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              tracedSVG: true,
              loading: `lazy`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
  ],
}
