import React, { Component } from 'react'

// 1. Build a input text box, with a Click Me! button 
// 2. Have the number 0 outside of the button 
// 3. When the user types in 'hello' in the text box the 0 would increase to the amount of letters in the word  
// 4. With each submit, text disappears 
// 5. When user keys in 'goodbye' the number 5 increaments to 12 and so 
// Make YouTube video of the challenge, reset inputs, explain the code that made it work, unlisted and then Slack 
// End of day tomorrow 
export class Click extends Component {
  
        state = {
        textInput: '',
        number: 0,
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            textInput: event.target.value  
        })
    }

    handleNumberChange = () => {
        this.setState({
            number: this.state.number + this.state.textInput.length,
            textInput: ''
        })

    }

    render() {
        return (
            <div>    
                <input 
                type="text"
                value={this.state.textInput} 
                onChange={this.handleChange}
                /><br/><br/> 
                <button onClick={this.handleNumberChange}>Click Me!</button><br /> 
                <p>{this.state.number}</p>
            </div>
        )
    }
}

export default Click
