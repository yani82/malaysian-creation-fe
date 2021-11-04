import React from 'react';
import {Link} from 'react-router-dom'; 

const Categories = (props) => {
    
    return (
        <div>
            {props.categories && props.categories.map(category => 
                <li key={category.id}>
                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </li> )}
        </div>
    )
}

export default Categories; 
