import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from "./components/registerations/Login";
// import {connect} from 'react-redux'; 
import CategoriesContainer from './containers/CategoriesContainer';
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer";
import Signup from './components/registerations/Signup';
class App extends React.Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <button>Sign-up</button>
        <Signup trigger={true}>
          <h3>Let's Sign You Up!</h3>
        </Signup>
        <switch>
          <Route exact path='/' component={Login}/>
        </switch>
        <CategoriesContainer />
        <Footer />
      </div>
    );
  } 
  
}

export default App;

// connect = store.dispatch({type: 'FETCH_CATEGORIES', payload: {name: 'Wau'}})
// Thunk/middleware: allows to call dispatch in actionCreator to wait for request to finish before we dispatch to reducer
