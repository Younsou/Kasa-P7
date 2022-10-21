import React from 'react'
import '../styles/Tag.css'

// ==============================================================

function Tag(props) {
    return (
        <div className="tag">
            <p className="tag-content">{props.content}</p>
        </div>
    )
}

export default Tag
