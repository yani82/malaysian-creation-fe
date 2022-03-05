import axios from 'axios';
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
            username: username,
            email: email,
            password: password
        }

        axios.post('http://localhost:3001/v1/login', {user}, {withCredentials: true}).then(response => {
            if (response.data.logged_in) {
                this.props.handleLogin(response)

                this.redirect()
            } else {
                this.setState({
                    errors: response.data.error
                })
            }
        })
        .catch(error => ('login api erros:', error)) 
    };

    redirect = () => {
        this.props.history.push('/items')
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.localeCompare(error => {alert(error)})}
                </ul>
            </div>
        )
    }

  render() {
    //   do you have to const declare the state this often? 
      const {username, email, password} = this.state
    return (
    <div>
        <SignIn username={username} email={email} password={password} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    <div>
        {
            this.state.errors ? this.handleErrors() : null 
        }
        </div>
    </div>
    );
  }
}

export default Login;
