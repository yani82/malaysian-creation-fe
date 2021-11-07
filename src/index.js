import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import categoryReducer from './reducers/categoryReducer'; 
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let createdStore = createStore(categoryReducer, composeEnhancers(applyMiddleware(thunk))); 
// middleware: allow redux to work with async requests
// to pass redux functions instead of objects 

ReactDOM.render(
  <Provider store={createdStore}>
    {/* creating global store and what it consists of, connect */}
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root'));