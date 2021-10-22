import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/categories/1', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => console.log(data.items))

  };

  render() {
    return (
      <div className="App">
        App 
      </div>
    );
  } 
  
}

export default App;
