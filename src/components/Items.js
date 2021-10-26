import React from 'react'

const Items = (props) => {
    
    return (
        <div>
            {/* props.items is a check so it doesn't return undefined */}
            {props.items && props.items.map(item =>
            <li key={item.id}>{item.name} - {item.description} - {item.price}</li>
            )} 
        </div>
    )
}

export default Items; 
