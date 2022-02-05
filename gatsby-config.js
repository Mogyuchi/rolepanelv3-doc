module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "rolepanelv3-doc",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-mdx`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: `src/__generated__/gatsby-types.ts`,
        emitSchema: {
          'src/__generated__/schema.graphql': true,
        },
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.tsx`),
      },
    }
  ],
};
