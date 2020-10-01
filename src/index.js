import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from "redux-logger";
//import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import axios from "axios";

// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects"; 

const gifReducer = (state = [], action) => {
    //PLACEHOLDER STATEMENTS
    if ( action.type === "SET_GIFS" ) {
        return action.type
    }
    return state
}

function* placeHolder( action ) {
    console.log( 'in saga placeHolder:', action )
}

// main saga function
function* rootSaga() {
    yield takeEvery( 'SET_GIFS', placeHolder );
    //takeEvery go here
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ gifReducer }),
    //Add sagaMiddleware to our store
    applyMiddleware( sagaMiddleware, logger )
  );
  
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('react-root'));
//registerServiceWorker();