
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from "axios";

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';


// const initialState = {
// 	funny: "",
// 	cohort: "",
// 	cartoon: "",
// 	nsfw: "",
// 	meme: "",
// };

const gifReducer = (state = [], action) => {
  //PLACEHOLDER STATEMENTS
  if (action.type === 'SET_GIFS') {
    return action.payload;
  }
  // if (action.type === "CLEAR_VALUES") {
  // 	console.log(initialState, state);
  // 	return initialState;
  // }
  return state;
}; // end gifReducer

function* getFavoriteSaga(action) {
	let response = yield axios({
        method: 'GET',
        url: '/api/favorite'
    });
	console.log("in saga getFavoriteSaga: response.data", response.data);
	yield put({
	type: 'SET_GIFS',
	payload: response.data
	})
} // end getFavoriteSaga

// main saga function
function* rootSaga() {
	yield takeEvery("FETCH_FAVORITE", getFavoriteSaga);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	combineReducers({ gifReducer }),
	//Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(

	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("react-root")

);
//registerServiceWorker();
