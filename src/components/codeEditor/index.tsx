import React, { useState, useRef, lazy, useEffect, useImperativeHandle } from 'react'
import { transform } from '@babel/standalone'
// const MonacoEditor = lazy(() => import('react-monaco-editor'))
import loadable from '@loadable/component'
const MonacoEditor = loadable(() => import('react-monaco-editor'))
interface CodeEditorProps {
    sourceCode: any
    readOnly?: boolean
    editorDidMount?: Function
}

const runCode = (code: string) => {
    const script = document.createElement('script');
    script.innerHTML = `
        try {
            ${code}
        } catch(e) {
            console.error(e)
        }
    `
    let runCodeContainer = document.getElementById('runCodeContainer')
    if (!runCodeContainer) {
        runCodeContainer = document.createElement('div')
        runCodeContainer.id = 'runCodeContainer'
        document.body.appendChild(runCodeContainer)
    }
    runCodeContainer.innerHTML = ''
    runCodeContainer.appendChild(script)
}

const CodeEditor = React.forwardRef((props: CodeEditorProps, ref: any) => {
    const [sourceCode, setSocureCode] = useState('')
    const [compiledCode, setCompiledCode] = useState('')
    const [codeError, setCodeError] = useState<any>('')
    const [codeQuery, updateCodeQuery] = useState<string>('')
    const [editRef, updateEditRef] = useState<any>()
    const editroRef = useRef<any>(null)

    const onCompiledCode = () => {
        try {
            const { code } = transform(sourceCode, {
                filename: 'MonkeyGridRunTime',
                presets: ['react', 'typescript', 'es2015', 'stage-3'],
                plugins: ['transform-modules-umd'],
            });
            setCompiledCode(code)
            runCode(code)
        } catch (e) {
            console.error(e)
            setCodeError(e)
            return;
        }
        setCodeError(null)
    }
    
    const onCodeChange = (value: any) => {
        setSocureCode(value)
    }

    useEffect(() => {
        setSocureCode(props.sourceCode)
    }, [props.sourceCode])

    useImperativeHandle(ref, () => (
        {
            runCode() {
                onCompiledCode()
            }
        }
    ))

    return <div style={{ width: '100%', height: '100%' }}>
        {/* <Suspense fallback={<div>...</div>}> */}
            <MonacoEditor
                language='javascript'
                value={sourceCode}
                options={{
                    readOnly: props.readOnly,
                    automaticLayout: true,
                    minimap: {
                        enabled: false,
                    },
                    scrollBeyondLastLine: false,
                    fixedOverflowWidgets: true,
                }}
                onChange={(value) => onCodeChange(value)}
                editorWillMount={(monaco: any) => {
                    monaco.editor.defineTheme('customTheme', {
                        base: 'vs',
                        inherit: true,
                        rules: [],
                        colors: {
                            'editor.inactiveSelectionBackground': '#ffffff',
                        },
                    });
                    monaco.editor.setTheme('customTheme');
                }}
                editorDidMount={(editor, monaco) => {
                    updateEditRef(editor);
                    editor.addAction({
                        id: 'search-in-doc',
                        label: 'search in document',
                        contextMenuGroupId: 'navigation',
                        keybindings: [
                            monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
                        ],
                        contextMenuOrder: 0,
                        run: (ed: any) => {
                            const val = ed.getModel().getValueInRange(ed.getSelection());
                            updateCodeQuery(val);
                        },
                    });
                    editroRef.current = editor.getModel();
                    props.editorDidMount && props.editorDidMount()
                }}
            />
        {/* </Suspense> */}
    </div>
})

export default CodeEditor;