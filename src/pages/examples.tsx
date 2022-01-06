import React, { useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { Button } from 'antd'
import Layout from '../components/layout'
import CodeEditor from '../components/codeEditor'
import RightMenu from '../components/rightMenu'
interface ExamplesProps {
    pageContext: any;
}

export default (props: ExamplesProps) => {
    const {
        pageContext
    } = props
    const codeEditorRef = useRef<any>(null);

    const onRunCode = () => {
        setTimeout(() => {
            codeEditorRef.current.runCode()
        }, 0)
    }
    const editorDidMount = () => {
        onRunCode()
    }
    useEffect(() => {
    }, [])
    return <Layout>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{
                width: '100%',
                height: '530px',
                display: 'flex',
                border: '1px solid #ccc'
            }}>
                <div
                    id="gridContainer"
                    style={{
                        flex: 1,
                        position: 'relative',
                        padding: '10px'
                    }}
                ></div>
                <div 
                    style={{
                        width: '300px',
                        height: '100%',
                        border: '1px solid #ccc'
                    }}
                >
                    <RightMenu {...props} />
                </div>
            </div>
            <div style={{
                width: '100%',
                height: '40px',
                padding: '0 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                borderBottom: '1px solid #ccc'
            }}>
                <Button onClick={onRunCode} type="primary" size="small">执行代码</Button>
            </div>
            <div 
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '16px 8px'
                }}
            >
                <CodeEditor ref={codeEditorRef} sourceCode={pageContext.source} editorDidMount={editorDidMount} />
            </div>
        </div>
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
