import MergeCell from './mergeCell'
import Base from './base'
import StyleCell from './styleCell'
import NumberCell from './numberCell'
import DateCell from './dateCell'
import FrozenRowCol from './frozenRowCol'
import React from 'react'

interface RightMenu {
    codeEditorRef?: any
}

function getMenuComponents(props: any) {
    if (!props || !props.path) {
        return null
    }
    const last = props.path.split('/').pop()
    if (last === 'base') {
        return <Base {...props} />
    } else if (last === 'mergeCell') {
        return <MergeCell {...props} />
    } else if (last === 'styleCell') {
        return <StyleCell {...props} />
    } else if (last === 'numberCell') {
        return <NumberCell {...props} />
    } else if (last ==='dateCell') {
        return <DateCell {...props} />
    } else if (last === 'frozenRowCol') {
        return <FrozenRowCol {...props} />
    }
}

export default (props: RightMenu) => {
    return <div style={{padding:'10px'}}>
        {getMenuComponents(props)}
    </div>
}