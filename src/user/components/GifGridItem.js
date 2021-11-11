import React from 'react'

export const GifGridItem = ({title, url}) => {
    return (
        <div className='img-class'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
