import React from 'react'

interface MarkDownProps {
    markdownRemark?: any
}

export default ({markdownRemark}: MarkDownProps) => {
    return (
        <div>
            <h1>{markdownRemark?.frontmatter?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
    )
}
