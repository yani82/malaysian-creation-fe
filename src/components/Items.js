import {connect} from 'react-redux';
import {sortItemsBy} from '../actions/sortItemsBy';
// import {deleteItem} from '../actions/deleteItem';
import React, { useEffect, useState } from 'react';

const Items = ({ items, deleteItem, sortItemsBy }) => {
    const defaultSortType = 'date'
    const [sortType, setSortType] = useState(defaultSortType)

    // useEffect(() => {
    //     sortItemsBy(sortType)
    // })

    // 1. - Create a button 
    // - that sorts the items by their names when clicked 
    // 2. then when clicked again it unsorts/it goes back to its original order 

 // = this.props.item 
    //     .sort(function(a, b) {
    //     if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    //     if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    //      return 0; 
    //  })

    // const [itemList, setItemList] = useState(props)

    // const sortByName = () => {
    //     const sorted = itemList.sort((a, b) => {
    //         return b.name - a.name;
    //     });
    //     setItemList(sorted);
    //     alert(sorted[0].name);
    // };

    const handleDelete = (item) => {
        deleteItem(item.id, item.category_id)
    }
    
    return (
        <div>
            <button onClick={() => {
            
                sortItemsBy(sortType)
            }}>Sort by name</button>
            
            {/* props.items is a check so it doesn't return undefined */}
            {items && items.map(item =>
            <li key={item.id}>{item.name} - {item.description}: $ {item.price} <br /><button onClick={() => handleDelete(item)}>Delete</button></li>
            )} 
        </div>
    )
}


export default connect(null, { sortItemsBy })(Items); 