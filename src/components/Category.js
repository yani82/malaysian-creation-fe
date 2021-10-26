import React from 'react'
import {Redirect} from 'react-router-dom'; 

const Category = (props) => {

    let category = props.categories[props.match.params.id - 1]
    console.log(category)

    return (
        <li>
            {category ? category.name : null}  
        </li>
    )
}

export default Category;
