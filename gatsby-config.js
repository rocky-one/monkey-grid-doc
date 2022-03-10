module.exports = {
  siteMetadata: {
    title: "Monkey Grid",
    titleTemplate: "Monkey Grid",
    author: 'rocky-one',
    siteUrl: "https://www.monkey-gird.com",
    description: '一款web端高性能表格组件,excel,table,sheetTable,grid-table,grid,monkey-grid',
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
        slug: 'mergeCell',
        icon: 'star-single-line',
        title: {
          zh: '合并单元格',
          en: 'mergeCell',
        },
      },
      {
        slug: 'styleCell',
        icon: 'star-single-line',
        title: {
          zh: '单元格样式',
          en: 'styleCell',
        },
      },
      {
        slug: 'numberCell',
        icon: 'star-single-line',
        title: {
          zh: '数值单元格',
          en: 'numberCell',
        },
      },
      {
        slug: 'dateCell',
        icon: 'star-single-line',
        title: {
          zh: '日期单元格',
          en: 'dateCell',
        },
      },
      {
        slug: 'frozenRowCol',
        icon: 'star-single-line',
        title: {
          zh: '冻结行列',
          en: 'frozenRowCol',
        },
      }
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
    'gatsby-plugin-react-helmet',
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
