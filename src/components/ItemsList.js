import React from 'react'
import {Link} from 'react-router-dom';

export default function ItemsList(props) {
    return (
        <div>
            {props.items.map(item => 
                <li key={item.id}>
                    <Link to={`/items`}>{item.name} - {item.description}: $ {item.price} </Link>
                </li> )}
        </div>
    )
}


