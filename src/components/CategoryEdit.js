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
        let category = {...this.state, id: this.props.category.id}
        this.props.editCategory(category)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <br />
                    <label>Edit Category: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/><br/>  
                    <input type="submit"/>
                </form> 
            </div>
        )
    }
}

// const MSP = (globalState) => {
//     return globalState
// }

const mapDispatchToProps = (dispatch) => {
    return {
        editItem: (item) => dispatch(editCategory())
    }
}

export default connect(null, mapDispatchToProps)(CategoryEdit);