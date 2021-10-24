import React from 'react'

const Category = (props) => {

    console.log(props)
    return (
        <li>
            {props.category.name}
        </li>
    )
}

export default Category;
