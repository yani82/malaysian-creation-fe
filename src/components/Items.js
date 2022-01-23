import {connect} from 'react-redux';
import {sortItemsBy} from '../actions/sortItemsBy';
// import {deleteItem} from '../actions/deleteItem';
import React, { useState } from 'react';

const Items = ({ items, deleteItem, sortItemsBy }) => {
    const defaultSortType = 'name'
    const [sortType, setSortType] = useState(defaultSortType) 

    const handleDelete = (item) => {
        deleteItem(item.id, item.category_id)
    }
    
    return (
        <div>
            <button onClick={() => {
                
                sortItemsBy(sortType) 
    
                if (sortType === 'name') {
                    setSortType('id') 
                } else if (sortType === 'id') {
                    setSortType('name') 
                }
            }}>Sort by name</button>
            
            {/* props.items is a check so it doesn't return undefined */}
            {items && items.map(item =>
            <li key={item.id}>{item.name} - {item.description}: $ {item.price} <br /><button onClick={() => handleDelete(item)}>Delete</button></li>
            )} 
        </div>
    )
}


export default connect(null, { sortItemsBy })(Items); 