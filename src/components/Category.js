import React from 'react'
import {Redirect} from 'react-router-dom'; 
import ItemsContainer from '../containers/ItemsContainer';

const Category = (props) => {

    let category = props.categories[props.match.params.id - 1]
    console.log(category)

    return (
        <div>
            <h2>
                {category ? category.name : null}  
            </h2>
            <ItemsContainer />
        </div>
    )
}

export default Category;
