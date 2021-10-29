import React from 'react'

const Items = (props) => {

    console.log(props.items)
    
    return (
        <div>
            {/* props.items is a check so it doesn't return undefined */}
            {props.items && props.items.map(item =>
            <li key={item.id}>{item.name} - {item.description}: $ {item.price} <br /><button>Delete</button></li>
            )} 
        </div>
    )
}

export default Items; 
