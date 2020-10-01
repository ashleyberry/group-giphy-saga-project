import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
// import axios from "axios";

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// main saga function
function* rootSaga() {
    //takeEvery go here
}

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const store = createStore(
    combineReducers({ 
    }),
    // Add sagaMiddleware to our store
    applyMiddleware( sagaMiddleware, logger )
  );
  

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('react-root'));
