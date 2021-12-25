import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import { Button } from 'antd'
import DocLayout from '../components/docLayout'
import MarkDown from '../components/markdown'

interface DocsProps {
    pageContext: any;
    data: any;
}

export default (props: DocsProps) => {
    const {
        pageContext,
        data = {}
    } = props
    const [markDownData, setMarkDownData] = useState({})
    useEffect(() => {   
        const edges = data.allMarkdownRemark.edges
        const slug = pageContext.slug
        const markData = edges.find((item: any) => item.node.fields.slug === slug) || {}
        setMarkDownData(markData.node || {})
    }, [])

    return <DocLayout>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{
                width: '100%',
                height: '500px',
                display: 'flex',
                border: '1px solid #ccc'
            }}>
                <div
                    style={{
                        flex: 1,
                        position: 'relative'
                    }}
                >
                    <MarkDown markdownRemark={markDownData} />
                </div>
                <div
                    style={{
                        width: '300px',
                        height: '100%',
                        border: '1px solid #ccc'
                    }}
                ></div>
            </div>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '16px 8px'
                }}
            >
            </div>
        </div>
    </DocLayout>
}

// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             html
//             frontmatter {
//                 title
//             }
//         }
//     }
// `

export const query = graphql`
    {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`