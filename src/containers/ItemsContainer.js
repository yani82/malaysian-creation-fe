import React from 'react'
import {connect} from 'react-redux';
// import {Route} from 'react-router-dom';
import {fetchItems} from '../actions/fetchItems'; 
import ItemInput from '../components/ItemInput';
import Items from '../components/Items';
import ItemsList from '../components/ItemsList';

class ItemsContainer extends React.Component {
   
    render() {
        return (
            <div>
                <ItemInput category={this.props.category}/> 
                <Items items={this.props.category && this.props.category.items}/>
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
