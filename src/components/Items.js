// import {connect} from 'react-redux';
// import {deleteItem} from '../actions/deleteItem';
import React, { useState } from 'react';

const Items = (props) => {


    // 1. - Create a button 
    // - that sorts the items by their names when clicked 
    // 2. then when clicked again it unsorts 

    const [itemList, setItemList] = useState(props)

    const sortByName = () => {
        const sorted = itemList.sort((a, b) => {
            return b.name - a.name;
        });
        setItemList(sorted);
        alert(sorted[0].name);
    };
    
    // = this.props.item 
    //     .sort(function(a, b) {
    //     if(a.name.toLowerCase() < b.name.toLowerCase()) return-1;
    //     if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    //      return 0; 
    //  })

    const handleDelete = (item) => {
        props.deleteItem(item.id, item.category_id)
    }
    
    return (
        <div>
            <button onClick={sortByName}>Sort by name</button>
            
            {/* props.items is a check so it doesn't return undefined */}
            {props.items && props.items.map(item =>
            <li key={item.id}>{item.name} - {item.description}: $ {item.price} <br /><button onClick={() => handleDelete(item)}>Delete</button></li>
            )} 
        </div>
    )
}

export default Items; 