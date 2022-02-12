import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: ""
    };
}
    
    handleChange = (e) => {
        const {name, value} = e.target 
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {username, email, password} = this.state

        let user = {
            
        }
    }

  render() {
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <input type="email" 
            name="email"
            placeholder="email..."
            required onChange={this.handleChange}/>
            <input type="password"
            name="password"
            placeholder="password..."
            required onChange={this.handleChange}/>
            <button onSubmit={this.handleSubmit}>Log In</button>
        </form>
    </div>
    )
  }
}

export default Login;
