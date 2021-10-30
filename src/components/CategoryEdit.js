import React from 'react';
import {connect} from 'react-redux';
import {editCategory} from '../actions/editCategory'; 

class CategoryEdit extends React.Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editCategory(this.state)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                {/* controlled form */}
                <form onSubmit={this.handleSubmit}> 
                    <label>New Category: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/><br/>  
                    <input type="submit"/>
                </form> 
            </div>
        )
    }
}

export default connect(null, {editCategory})(CategoryEdit);