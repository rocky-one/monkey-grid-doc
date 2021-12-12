module.exports = {
  siteMetadata: {
    title: "Monkey Grid",
    siteUrl: "https://www.yourdomain.tld",
    examples: [
      {
        slug: 'base',
        icon: 'star-single-line',
        title: {
          zh: '基本使用',
          en: 'Base Use',
        },
      },
      {
        slug: 'cell',
        icon: 'star-single-line',
        title: {
          zh: '单元格设置',
          en: 'Base Cell',
        },
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    }
  ],
};
