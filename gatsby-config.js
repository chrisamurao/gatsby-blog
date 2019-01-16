module.exports = {
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Christopher Amurao Personal Website',
        short_name: 'Christopher Amurao',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#333333',
        display: 'fullscreen',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    'gatsby-plugin-offline',
  ],
  siteMetadata: {
    siteUrl: 'https://christopheramurao.com',
    title: "Christopher Amurao's website",
    author: 'Christopher Amurao',
  },
}
