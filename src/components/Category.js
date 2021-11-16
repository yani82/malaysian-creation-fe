import React from 'react'
import CategoryEdit from './CategoryEdit';
import ItemsContainer from '../containers/ItemsContainer';
// import ItemsListContainer from '../containers/ItemsListContainer';
import Click from './Click';

const Category = (props) => {

    let category = props.categories[props.match.params.id - 1]
    // let category = props.categories.filter(category => category.id == props.match.params.id)[0] 

    // console.log("category.js", category)

    return (
        <div>
            <h2>
                {category ? category.name : null}  
            </h2>
            <ItemsContainer category={category}/>
            {/* <ItemsListContainer /> */}
            <CategoryEdit category={category}/>
            <Click />
        </div>
    )
}

export default Category;
