import React from 'react'

const Category = (props) => {

    console.log(props)

    let category = props.categories[props.match.params.id - 1]
    console.log(category)

    return (
        <li>
            {category ? category.name : null}  
        </li>
    )
}

export default Category;
