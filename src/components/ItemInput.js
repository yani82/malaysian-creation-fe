import React from 'react';
import {connect} from 'react-redux';
import {addCategory} from '../actions/addCategory'; 

class ItemInput extends React.Component {

    // state = {
    //     name: '',
    //     description: '',
    //     price: ''
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value 
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     this.props.addCategory(this.state)
    //     this.setState({
    //         name: ''
    //     })
    // }

    render() {
        return (
            <div>
                ItemInput
                {/*<form onSubmit={this.handleSubmit}> 
                    <label>Submit Category: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/><br/>  
                    <input type="submit"/>
                </form> */} 
            </div>
        )
    }
}

// export default connect(null, {addCategory})(ItemInput);
export default ItemInput;