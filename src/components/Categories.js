import React from 'react';
import {Route} from 'react-router-dom'; 
import Category from './Category';

const Categories = (props) => {
    
    return (
        <div>
            {props.categories.map(category => 
                <div key={category.id}><Category category={category}/></div> )}
        </div>
    )
}

export default Categories; 
