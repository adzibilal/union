import React from 'react'
// @ts-ignore
import HTMLRenderer from 'react-html-renderer'

interface ContentRenderProps {
    html: string
}

const ContentRender: React.FC<ContentRenderProps> = ({ html }) => {
    return (
        <div className='content-box'>
            <HTMLRenderer html={html} />
        </div>
    )
}

export default ContentRender
