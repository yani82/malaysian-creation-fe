import React, { Component } from 'react'

// 1. Build a input text box, with a Click Me! button 
// 2. Have the number 0 outside of the button 
// 3. When the user types in 'hello' in the text box the 0 would increase to the amount of letters in the word  
// 4. With each submit, text disappears 
// 5. When user keys in 'goodbye' the number 5 increaments to 12 and so 
// Make YouTube video of the challenge, reset inputs, explain the code that made it work, unlisted and then Slack 
// End of day tomorrow 

export class Click extends Component {
    constructor(props) {
        super()
  
        this.state = {
        text: '',
        number: 0
    }
}

    handleChange = (event) => {
        // debugger; 
        event.preventDefault()
        this.setState({
            text: event.target.value  
        })
    }

    // handleNumberChange = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         number: parseInt(event.target.value)
    //     })
    // }

    render() {
        return (
            <div>    
                <input type='text' placeholder='Click Me' onChange={this.handleChange}/><br/><br/> 
                <button>Click Me!</button><br /> 
                <number>{this.state.number}</number>
            </div>
        )
    }
}

export default Click
