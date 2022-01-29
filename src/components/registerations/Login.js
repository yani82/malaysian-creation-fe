import React, { Component } from 'react';

export default class Login extends Component {

    handleChange = (e) => {

    }

    handleSubmit = (e) => {
        
    }

  render() {
    return (
    <div>
        <form>
            <input type="email" 
            name="email"
            placeholder="email..."
            required onChange/>
            <input type="password"
            name="password"
            placeholder="password..."
            required onChange/>
            <button onSubmit>Log In</button>
        </form>
    </div>
    )
  }
}

