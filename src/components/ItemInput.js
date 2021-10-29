import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/addItem'; 

class ItemInput extends React.Component {

    state = {
        name: '',
        description: '',
        price: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
            // [] to evaluate the value of event.target.name 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // mapping as props, sending state and id in addItem, posting it and dispatching to reducer
        this.props.addItem(this.state, this.props.category.id)
        this.setState({
            name: '',
            description: '',
            price: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Item Name: </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/><br />
                    <label>Description: </label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange}/><br />
                    <label>Price: </label>
                    <input type='float' name='price' value={this.state.price} onChange={this.handleChange}/><br />
                    <input type="submit"/><br />
                </form> 
            </div>
        )
    }
}

// export default connect(null, {addCategory})(ItemInput);
export default connect(null, {addItem})(ItemInput);