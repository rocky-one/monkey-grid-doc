import React, { useEffect, useRef, useState } from 'react'
import { throttle } from 'lodash-es'
import * as styles from './index.module.less'

console.log(styles['drag'], 'styles')
interface DragLineProps {
    onMouseDown?: Function;
    onMoveEnd?: Function;
    onMove?: Function;
    style?: any
}

export default (props: DragLineProps) => {
    const lineRef = useRef<HTMLDivElement>(null)
    const dragInfo: any = useRef({})
    const [status, setStatus] = useState(false)

    useEffect(() => {
        function mouseDown(e: MouseEvent) {
            dragInfo.current.downY = e.pageY
            dragInfo.current.down = true
            document.body.style.userSelect = 'none'
            document.body.style.cursor = 'row-resize'
            setStatus(true)
            props.onMouseDown && props.onMouseDown()
        }
        lineRef.current && lineRef.current.addEventListener('mousedown', mouseDown)

        function mouseMove(e: MouseEvent) {
            if (dragInfo.current.down) {
                dragInfo.current.preMoveY = dragInfo.current.preMoveY || 0
                dragInfo.current.moveY = e.pageY
                let y = dragInfo.current.downY - e.pageY - dragInfo.current.preMoveY
                dragInfo.current.preMoveY += y
                props.onMove && props.onMove({
                    y: dragInfo.current.downY - e.pageY
                })
            }
        }
        const throttleMove = throttle(mouseMove, 60)
        document.body.addEventListener('mousemove', throttleMove)

        function mouseUp(e: MouseEvent) {
            if (dragInfo.current.down) {
                const y = dragInfo.current.downY - e.pageY
                props.onMoveEnd && props.onMoveEnd({
                    y
                })
                dragInfo.current.preMoveY = 0
                dragInfo.current.down = false
                setStatus(false)
                document.body.style.userSelect = 'auto'
                document.body.style.cursor = 'auto'
            }
        }
        document.body.addEventListener('mouseup', mouseUp)


        return () => {
            lineRef.current && lineRef.current.removeEventListener('mousedown', mouseDown)
            document.body.removeEventListener('mousemove', throttleMove)
            document.body.removeEventListener('mouseup', mouseUp)
        }
    }, [])
    return (
        <div ref={lineRef} className={`${styles['drag']} ${status?styles['cursor']:''}`} style={props.style||{}}>
            <div className={styles.line}></div>
        </div>
    )
}
