import React, {useState} from 'react';
import AddCategory from './user/components/AddCategory';
import { GiftGrid } from './user/components/GiftGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     const newData = 'david';
    //     setCategories([...categories, newData]);
    // }

    return  (
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
                <hr />
                
                <ol>
                    {
                        categories.map( (category) =>  (
                            <GiftGrid 
                                key={ category }
                                category={ category } 
                            />
                        ))
                    }
                </ol>
            </>
    );
}

export default GifExpertApp;