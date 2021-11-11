import { getGif } from "../helpers/getGifs";
import {useEffect, useState} from 'react';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGif( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
                
            })
    }, [category] )

    return state;
}
