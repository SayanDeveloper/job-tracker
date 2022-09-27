import React from 'react'
import "../styles/tag.css"

const Tag = ({ text, textColor, bgColor }) => {
    return (
        <div className='tag' style={{
            backgroundColor: bgColor || "#EEEDFF",
            color: textColor || "#5445bd"
        }}>
            {text}
        </div>
    )
}

export default Tag
