import React from 'react';
import {Route, Link} from 'react-router-dom'; 
import Category from './Category';

const Categories = (props) => {
    
    return (
        <div>
            {props.categories.map(category => 
                <li key={category.id}>
                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </li> )}
        </div>
    )
}

export default Categories; 
