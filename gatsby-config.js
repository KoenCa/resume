module.exports = {
  siteMetadata: {
    title: "Koen Castermans"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Website of Koen Castermans",
        short_name: "Koen Castermans Website",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.svg"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass"
  ]
};
