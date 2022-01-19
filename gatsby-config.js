module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dantemogni.github.io",
    title: "Dante's website",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem` ,
      options: {
        path: `${__dirname}/blog` ,
        name: `blog`
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-dark-mode`,
  ],
};
