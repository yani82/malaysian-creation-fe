import {connect} from 'react-redux';
import {deleteItem} from '../actions/deleteItem';

const Items = (props) => {

    console.log(props.items)

    const handleDelete = (item) => {
        // debugger;
        props.deleteItem(item.id, item.category_id)
    }
    
    return (
        <div>
            {/* props.items is a check so it doesn't return undefined */}
            {props.items && props.items.map(item =>
            <li key={item.id}>{item.name} - {item.description}: $ {item.price} <br /><button onClick={() => handleDelete(item)}>Delete</button></li>
            )} 
        </div>
    )
}

export default Items; 