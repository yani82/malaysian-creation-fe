import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from "./components/registrations/Login";
// import {connect} from 'react-redux'; 
import CategoriesContainer from './containers/CategoriesContainer';
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer";
import Signup from './components/registrations/Signup';
class App extends React.Component {

  render() {

    return (
      <div className="App">
        {/* <div className='flex flex-wrap justify-center mt-20'>
          <div className='w-full max-w-sm'></div>
            <form action="" className='shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4'></form>
            <div className='mb-5'>
              <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>
                Username
              </label>
              <input className='shadow'></input>
            </div>
        </div> */}
        <NavBar />
        {/* <button>Sign-up</button>
        <Signup trigger={true}>
          <h3>Let's Sign You Up!</h3>
        </Signup> */}
        <Login />
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
