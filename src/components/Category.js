import React from 'react'
import {Redirect} from 'react-router-dom'; 
import CategoryEdit from './CategoryEdit';
import ItemsContainer from '../containers/ItemsContainer';

const Category = (props) => {

    // let category = props.categories[props.match.params.id - 1]
    let category = props.categories.filter(category => category.id == props.match.params.id)[0] 

    console.log(category)

    return (
        <div>
            <h2>
                {category ? category.name : null}  
            </h2>
            <ItemsContainer category={category}/>
            <CategoryEdit category={category}/>
        </div>
    )
}

export default Category;
