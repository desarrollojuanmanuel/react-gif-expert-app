import React from 'react'

export const GifGridItem = ({ title, url }) => {
    console.log(url,'1')
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
