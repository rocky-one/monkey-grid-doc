import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import { Button } from 'antd'
import Layout from '../components/layout'
import CodeEditor from '../components/codeEditor'
import RightMenu from '../components/rightMenu'
import DragLine from '../components/dragLine'
interface ExamplesProps {
    pageContext: any;
}

export default (props: ExamplesProps) => {
    const {
        pageContext
    } = props
    const [gridHeight, setGridHeight] = useState('50%')
    const [codeHeight, setCodeHeight] = useState('50%')
    const containerRef = useRef<HTMLDivElement>(null)
    const containerGridRef = useRef<HTMLDivElement>(null)
    const containerCodeRef = useRef<HTMLDivElement>(null)
    const codeEditorRef = useRef<any>(null)
    const heightInfoRef = useRef<any>({})

    const onRunCode = () => {
        setTimeout(() => {
            codeEditorRef.current.runCode()
        }, 0)
    }
    const editorDidMount = () => {
        onRunCode()
    }
    // 记录containerHeight的初始高度
    const onMouseDown = () => {
        const containerHeight = containerRef.current?.offsetHeight || 0
        const gridHeight = containerGridRef.current?.offsetHeight || 0
        heightInfoRef.current.containerHeight = containerHeight
        heightInfoRef.current.gridHeight = gridHeight
    }
    function setLinePosition(y: number) {
        const containerHeight = heightInfoRef.current.containerHeight
        const gridHeight = heightInfoRef.current.gridHeight
        const newGridHeight = gridHeight - y
        const gridHeightPercent = Math.floor((newGridHeight / containerHeight) * 100)
        const codeHeightPercent = 100 - gridHeightPercent
        setGridHeight(`${gridHeightPercent}%`)
        setCodeHeight(`${codeHeightPercent}%`)
    }
    const onMoveEnd = (data: any) => {
        setLinePosition(data.y)
    }
    const onMove = (data: any) => {
        setLinePosition(data.y)
    }
    return <Layout>
        <div
            ref={containerRef}
            style={{
                height: '100%'
            }}
        >
            <div
                ref={containerGridRef}
                style={{
                    width: '100%',
                    height: gridHeight,
                    display: 'flex'
                }}
            >
                <div
                    style={{
                        height: '100%',
                        padding: '10px',
                        flex: 1,
                        overflow: 'auto'
                    }}
                >
                    <div
                        id="gridContainer"
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%'
                        }}
                    ></div>
                </div>
                <div 
                    style={{
                        width: '300px',
                        height: '100%',
                        borderLeft: '1px solid #ccc',
                        overflow: 'auto'
                    }}
                >
                    <RightMenu {...props} codeEditorRef={codeEditorRef} />
                </div>
            </div>
            
            <div
                ref={containerCodeRef}
                style={{
                    width: '100%',
                    height: codeHeight,
                    paddingBottom: '1px',
                    position:'relative',
                    zIndex: 100,
                    background: '#fff',
                    borderTop: '1px solid #ccc'
                }}
            >
                <div style={{
                    width: '100%',
                    height: '40px',
                    padding: '0 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    borderBottom: '1px solid #ccc'
                }}>

                    <DragLine onMouseDown={onMouseDown} onMove={onMove} onMoveEnd={onMoveEnd} style={{position:'absolute',bottom: 0}}></DragLine>
                    <Button onClick={onRunCode} type="primary" size="small">执行代码</Button>
                </div>
                <div style={{
                    height: 'calc(100% - 40px)',
                    borderBottom: '1px solid #ccc'

                }}>
                    <CodeEditor ref={codeEditorRef} sourceCode={pageContext.source} editorDidMount={editorDidMount} />
                </div>
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
