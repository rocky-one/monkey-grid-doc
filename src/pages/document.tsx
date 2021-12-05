import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import CodeEditor from '../components/CodeEditor'

export default (props) => {
    const {
        pageContext
    } = props

    const codeEditorRef = useRef<any>(null);

    const onRunCode = () => {
        codeEditorRef.current.runCode()
    }

    return <div>
        <div onClick={onRunCode}>运行代码</div>
        <CodeEditor ref={codeEditorRef} sourceCode={pageContext.source} />
    </div>
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
