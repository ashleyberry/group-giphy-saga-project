<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

const gifReducer = (state = [], action) => {
  //PLACEHOLDER STATEMENTS
  if (action.type === 'SET_GIFS') {
    return action.payload;
  }
  return state;
};

function* placeHolder(action) {
  console.log('in saga placeHolder:', action);
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import logger from "redux-logger";
//import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import axios from "axios";

// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

// const initialState = {
// 	funny: "",
// 	cohort: "",
// 	cartoon: "",
// 	nsfw: "",
// 	meme: "",
// };

const gifReducer = (state = [], action) => {
	//PLACEHOLDER STATEMENTS
	if (action.type === "SET_GIFS") {
		return action.type;
	}
	// if (action.type === "CLEAR_VALUES") {
	// 	console.log(initialState, state);
	// 	return initialState;
	// }
	return state;
};

function* placeHolder(action) {
	console.log("in saga placeHolder:", action);
>>>>>>> master
}

// main saga function
function* rootSaga() {
<<<<<<< HEAD
  yield takeEvery('SET_GIFS', placeHolder);
  //   yield takeEvery('GET_GIFS', getGiphyApi);
  //takeEvery go here
=======
	yield takeEvery("SET_GIFS", placeHolder);
	//takeEvery go here
>>>>>>> master
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
<<<<<<< HEAD
  combineReducers({ gifReducer }),
  //Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
=======
	combineReducers({ gifReducer }),
	//Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger)
>>>>>>> master
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
<<<<<<< HEAD
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
=======
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("react-root")
>>>>>>> master
);
//registerServiceWorker();
