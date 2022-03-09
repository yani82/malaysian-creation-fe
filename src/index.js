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

ReactDOM.render(
  <Provider store={createdStore}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root'));