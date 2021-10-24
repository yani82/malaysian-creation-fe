import React from 'react';
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
