import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <div>
            <h3>{ category }</h3>
            { loading && <p>Loading</p> }
            <ol>
                {images.map(({id, title, url}) => (
                    <GifGridItem 
                        key={id}
                        title={title}
                        url={url} 
                    />
                ))}
            </ol>
        </div>
    )
}
