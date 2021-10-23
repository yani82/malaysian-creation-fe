import React from 'react';

const Categories = (props) => {
    
    return (
        <div>
            {props.categories.map(category => <li key={category.id}>{category.name}</li> )}
        </div>
    )
}

export default Categories; 
