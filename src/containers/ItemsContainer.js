import React from 'react'
import ItemInput from '../components/ItemInput';
import Items from '../components/Items';

class ItemsContainer extends React.Component {
    render() {
        return (
            <div>
                <ItemInput /> 
                <Items items={this.props.category && this.props.category.items}/>
            </div>
        )
    }
}

export default ItemsContainer; 
