import React from 'react';
import {connect} from 'react-redux'; 
import {fetchCategories} from './actions/fetchCategories'; 

class App extends React.Component {

  componentDidMount() {
    this.props.fetchCategories({type: 'FETCH_CATEGORIES', payload: {name: 'Wau'}})
  }

  render() {
    return (
      <div className="App">
        App 
      </div>
    );
  } 
  
}

export default connect(null, {fetchCategories})(App);

// connect = store.dispatch({type: 'FETCH_CATEGORIES', payload: {name: 'Wau'}})
// Thunk/middleware: allows to call dispatch in actionCreator to wait for request to finish before we dispatch to reducer
