import React from 'react'
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchItems} from '../actions/fetchItems'; 
import ItemInput from '../components/ItemInput';
import Items from '../components/Items';

class ItemsContainer extends React.Component {
    render() {
        return (
            <div>
                <ItemInput category={this.props.category}/> 
                <Items items={this.props.category && this.props.category.items}/>
                <Route exact path='/categories/:id/items' render={(routerProps) => <Items {...routerProps} items={this.props.items} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items 
    }
}


export default connect(mapStateToProps, {fetchItems})(ItemsContainer); 
