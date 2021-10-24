import React from 'react';
// import {connect} from 'react-redux'; 
import CategoriesContainer from './containers/CategoriesContainer'; 
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <CategoriesContainer />
      </div>
    );
  } 
  
}

export default (App);

// connect = store.dispatch({type: 'FETCH_CATEGORIES', payload: {name: 'Wau'}})
// Thunk/middleware: allows to call dispatch in actionCreator to wait for request to finish before we dispatch to reducer
