import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CodeEditor from '../components/codeEditor'

interface ExamplesProps {
    pageContext: any;
}

export default (props: ExamplesProps) => {
    const {
        pageContext
    } = props
    const codeEditorRef = useRef<any>(null);

    const onRunCode = () => {
        codeEditorRef.current.runCode()
    }

    return <Layout>
        <CodeEditor ref={codeEditorRef} sourceCode={pageContext.source} />
    </Layout>
}

export const query = graphql`
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
`
