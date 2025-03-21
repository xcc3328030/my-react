 import { combineReducers } from 'redux';
 import storeReducer from './base'
 import baseReducer from './base'


 const reducer = combineReducers({
    base: baseReducer,
    store: storeReducer,
 })
 
 export default reducer