import React from 'react';

class CategoryInput extends React.Component {

    state = {name: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render() {
        return (
            <div>
                {/* controlled form */}
                <form>
                    <label>Submit Category: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/><br/>  
                </form> 
            </div>
        )
    }
}

export default CategoryInput;
