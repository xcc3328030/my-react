// import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import reduxLogger from 'redux-logger';
// import reduxThunk from 'redux-thunk';
// import reduxPromise from 'redux-promise';
import reducer from './reducer'

// let middleware = [reduxLogger, reduxThunk, reduxPromise]

const store = configureStore({
    reducer,
})
 
    // applyMiddleware(...middleware)

export default store;