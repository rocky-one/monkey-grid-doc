import MergeCell from "./mergeCell";

import React, { useEffect, useState } from 'react'

interface RightMenu {

}

function getMenuComponents(props: any) {
    if (!props || !props.path) {
        return null
    }
    const last = props.path.split('/').pop()
    if (last === 'mergeCell') {
        return <MergeCell {...props} />
    }
}

export default (props: RightMenu) => {
    return <div>
        {getMenuComponents(props)}
    </div>
}