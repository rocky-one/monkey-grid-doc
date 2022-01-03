import React from "react"
import { Link, graphql } from "gatsby"
import { Button } from "antd"

export default ({ data }) => {
	return (
		<div style={{
			width: '100%',
			height: '100%',
			textAlign: 'center'
		}}>
			<h1 style={{marginTop: '100px'}}>
				Monkey Grid
			</h1>

			<div style={{marginTop: '30px'}}>
				<Link
					to='/examples/mergeCell'
				>
					<Button type="primary">
						开始使用
					</Button>
				</Link>
			</div>
		</div>
	)
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`