import React from 'react';
import {connect} from 'react-redux';
// import {addCategory} from '../actions/addCategory'; 

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
        this.props.addItem(this.state)
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
                    <input type='text' name='amount' value={this.state.price} onChange={this.handleChange}/><br />
                    <input type="submit"/><br />
                </form> 
            </div>
        )
    }
}

// export default connect(null, {addCategory})(ItemInput);
export default connect(null)(ItemInput);