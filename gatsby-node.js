const path = require(`path`)
const fs = require('fs');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (node.internal.type === `File`) {
    createNodeField({
      node,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allFile(limit: 1000) {
        nodes {
          relativePath
          absolutePath
        }
      }
      site {
        id
        siteMetadata {
          title
          examples {
            slug
            icon
          }
        }
      }
    }
  `)
  const {
    allFile
  } = result.data
  let allExamples = allFile.nodes
    .filter((node) => /code\/(.*)\.[t|j]sx?$/.test(node.relativePath))
    .map((item) => {
      return {
        ...item,
        filename: path.basename(item.relativePath)
      }
    })
  allExamples = allExamples.map(item => {
    const source = fs.readFileSync(item.absolutePath, 'utf8');
    return {
      ...item,
      source
    }
  })
  allExamples.forEach((item) => {
    let slug = item.relativePath.split('/').splice(0, 2).join('/')
    createPage({
      path: slug,
      component: path.resolve(`./src/pages/examples.tsx`),
      context: {
        slug: slug,
        source: item.source,
      },
    })
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}