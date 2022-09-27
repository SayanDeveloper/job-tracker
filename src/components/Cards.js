import React from 'react'
import "../styles/Common.css"

const Cards = ({ header, body, imageSrc }) => {
    return (
        <div className='each-card center-text'>
            <img src={imageSrc} />
            <div className='card-header'>{header}</div>
            <div className='card-body'>{body}</div>
        </div>
    )
}

export default Cards
