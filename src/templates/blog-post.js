import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MarkDown from '../components/markdown'
export default ({ data }) => {
  return (
    <Layout>
      <MarkDown markdownRemark={data.markdownRemark} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`